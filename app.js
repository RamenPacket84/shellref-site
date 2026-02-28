/* ============================================================
   ShellRef — app.js
   Sidebar navigation, block rendering, search, theme toggle.
   Reads SHELLREF_CONTENT from data.js (no fetch needed).
   ============================================================ */

// ── Constants ──────────────────────────────────────────────

const THEMES = ["agedPaper", "phosphorGreen", "phosphorAmber"];
const THEME_LABELS = {
    agedPaper:      "[ PAPER ]",
    phosphorGreen:  "[ GREEN ]",
    phosphorAmber:  "[ AMBER ]",
};

const SHELL_GROUPS = [
    { key: "bash",     label: "BASH" },
    { key: "zsh",      label: "ZSH" },
    { key: "both",     label: "COMMANDS" },
];

// Icon mapping from SF Symbol names (iOS) to Unicode/emoji equivalents
const ICON_MAP = {
    "clock.arrow.circlepath":       "◷",
    "terminal":                     "❯",
    "arrow.triangle.branch":        "⌥",
    "flowchart":                    "⤶",
    "function":                     "ƒ",
    "textformat":                   "Aa",
    "doc.text":                     "◻",
    "gearshape":                    "⚙",
    "star":                         "★",
    "checkmark.seal":               "✦",
    "scalemass":                    "⇌",
    "asterisk":                     "✱",
    "slider.horizontal.3":          "≡",
    "folder":                       "⌸",
    "cpu":                          "▦",
    "globe":                        "◎",
    "textformat.abc":               "▤",
    "doc.richtext":                 "▩",
    "hammer":                       "⚒",
    "wrench.and.screwdriver":       "⚙",
    "puzzlepiece":                  "◈",
    "waveform":                     "∿",
    "chart.bar":                    "▐",
    "command":                      "⌘",
    "bolt":                         "⚡",
};

// ── State ──────────────────────────────────────────────────

let currentSectionId = null;
let currentThemeIndex = 0;

// Build a lookup map: id → section
const sectionMap = {};
if (typeof SHELLREF_CONTENT !== "undefined") {
    SHELLREF_CONTENT.forEach(s => { sectionMap[s.id] = s; });
}

// ── DOM References ─────────────────────────────────────────

const navList        = document.getElementById("nav-list");
const contentEl      = document.getElementById("content");
const searchInput    = document.getElementById("search-input");
const hamburgerBtn   = document.getElementById("hamburger");
const sidebar        = document.getElementById("sidebar");
const themeToggleBtn = document.getElementById("theme-toggle");

// ── Theme ──────────────────────────────────────────────────

function applyTheme(name) {
    document.documentElement.dataset.theme = name;
    localStorage.setItem("shellref-theme", name);
    if (themeToggleBtn) {
        themeToggleBtn.textContent = THEME_LABELS[name] || name;
    }
    currentThemeIndex = THEMES.indexOf(name);
    if (currentThemeIndex === -1) currentThemeIndex = 0;
}

function cycleTheme() {
    currentThemeIndex = (currentThemeIndex + 1) % THEMES.length;
    applyTheme(THEMES[currentThemeIndex]);
}

function loadTheme() {
    const saved = localStorage.getItem("shellref-theme");
    if (saved && THEMES.includes(saved)) {
        applyTheme(saved);
    } else {
        applyTheme("agedPaper");
    }
}

// ── Sidebar Navigation ─────────────────────────────────────

function buildSidebar() {
    if (!navList) return;
    navList.innerHTML = "";

    SHELL_GROUPS.forEach(group => {
        const sections = (SHELLREF_CONTENT || []).filter(s => s.shell === group.key);
        if (sections.length === 0) return;

        // Group header
        const header = document.createElement("div");
        header.className = "nav-group-header";
        header.textContent = group.label;
        navList.appendChild(header);

        // Section rows
        sections.forEach(section => {
            const item = document.createElement("div");
            item.className = "nav-item";
            item.dataset.sectionId = section.id;

            const iconChar = ICON_MAP[section.icon] || "·";
            item.innerHTML =
                `<span class="nav-item-icon">${iconChar}</span>` +
                `<span>${escapeHtml(section.title)}</span>`;

            item.addEventListener("click", () => {
                selectSection(section.id);
                closeSidebar();
            });

            navList.appendChild(item);
        });
    });
}

function updateActiveNavItem() {
    document.querySelectorAll(".nav-item").forEach(el => {
        el.classList.toggle("active", el.dataset.sectionId === currentSectionId);
    });
}

// ── Section Rendering ──────────────────────────────────────

function selectSection(id) {
    const section = sectionMap[id];
    if (!section) return;

    currentSectionId = id;
    updateActiveNavItem();

    contentEl.innerHTML = "";

    // Section header
    const header = document.createElement("div");
    header.id = "section-header";
    header.innerHTML = `<div id="section-title">${escapeHtml(section.title)}</div>`;
    contentEl.appendChild(header);

    // Topic cards
    if (section.topics && section.topics.length > 0) {
        section.topics.forEach(topic => {
            contentEl.appendChild(renderTopicCard(topic));
        });
    }

    // Scroll content to top
    contentEl.scrollTop = 0;

    // Update URL hash for shareability (doesn't cause page reload)
    history.replaceState(null, "", `#${id}`);
}

function renderTopicCard(topic) {
    const card = document.createElement("div");
    card.className = "topic-card";
    card.id = topic.id || "";

    // Title
    const title = document.createElement("div");
    title.className = "topic-title";
    title.textContent = topic.title || "";
    card.appendChild(title);

    // Summary
    if (topic.summary) {
        const summary = document.createElement("div");
        summary.className = "topic-summary";
        summary.textContent = topic.summary;
        card.appendChild(summary);
    }

    // Divider before blocks
    if (topic.blocks && topic.blocks.length > 0) {
        card.appendChild(makeDivider());
        topic.blocks.forEach(block => {
            const rendered = renderBlock(block);
            if (rendered) card.appendChild(rendered);
        });
    }

    return card;
}

// ── Block Rendering ────────────────────────────────────────

function renderBlock(block) {
    switch (block.type) {
        case "text":    return renderTextBlock(block);
        case "code":    return renderCodeBlock(block);
        case "note":    return renderCallout(block, "note");
        case "warning": return renderCallout(block, "warning");
        case "table":   return renderTableBlock(block);
        default:        return null;
    }
}

function renderTextBlock(block) {
    const p = document.createElement("p");
    p.className = "block-text";
    p.textContent = block.content || "";
    return p;
}

function renderCodeBlock(block) {
    const wrapper = document.createElement("div");
    wrapper.className = "block-code";

    if (block.label) {
        const label = document.createElement("div");
        label.className = "code-label";
        label.textContent = block.label;
        wrapper.appendChild(label);
    }

    const pre = document.createElement("div");
    pre.className = "code-block";

    const code = document.createElement("code");
    code.textContent = block.content || "";
    pre.appendChild(code);
    wrapper.appendChild(pre);

    return wrapper;
}

function renderCallout(block, type) {
    const div = document.createElement("div");
    div.className = `block-callout ${type}`;

    const icon = document.createElement("span");
    icon.className = "callout-icon";
    icon.textContent = type === "warning" ? "⚠" : "◆";
    div.appendChild(icon);

    const text = document.createElement("span");
    text.className = "callout-text";
    text.textContent = block.content || "";
    div.appendChild(text);

    return div;
}

function renderTableBlock(block) {
    const wrapper = document.createElement("div");
    wrapper.className = "block-table";

    if (block.label) {
        const label = document.createElement("div");
        label.className = "table-label";
        label.textContent = block.label;
        wrapper.appendChild(label);
    }

    const table = document.createElement("table");

    // Header row
    if (block.headers && block.headers.length > 0) {
        const thead = document.createElement("thead");
        const tr = document.createElement("tr");
        block.headers.forEach(h => {
            const th = document.createElement("th");
            th.textContent = h;
            tr.appendChild(th);
        });
        thead.appendChild(tr);
        table.appendChild(thead);
    }

    // Body rows
    if (block.rows && block.rows.length > 0) {
        const tbody = document.createElement("tbody");
        block.rows.forEach(row => {
            const tr = document.createElement("tr");
            row.forEach(cell => {
                const td = document.createElement("td");
                td.textContent = cell;
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });
        table.appendChild(tbody);
    }

    wrapper.appendChild(table);
    return wrapper;
}

// ── Cover State ────────────────────────────────────────────

function showCover() {
    currentSectionId = null;
    updateActiveNavItem();
    contentEl.innerHTML = "";

    const cover = document.createElement("div");
    cover.id = "cover-state";
    cover.innerHTML = `
        <img class="light-cover" src="assets/ShellReff1.png" alt="ShellRef">
        <img class="dark-cover"  src="assets/ShelReff2.png"  alt="ShellRef">
        <a id="ios-cta-hero" href="#" target="_blank" rel="noopener">
            Get the iOS App
        </a>
        <div class="character-strip">
            <img src="assets/Geek1.png"  class="character-img" alt="">
            <img src="assets/geek2.png"  class="character-img" alt="">
            <img src="assets/geek5.png"  class="character-img" alt="">
            <img src="assets/geek6.png"  class="character-img" alt="">
            <img src="assets/geek7.png"  class="character-img" alt="">
        </div>
    `;
    contentEl.appendChild(cover);
    history.replaceState(null, "", window.location.pathname);
}

// ── Search ─────────────────────────────────────────────────

let searchResultsEl = null;

function setupSearch() {
    if (!searchInput || !navList) return;

    // Create results container (inserted above nav-list content)
    searchResultsEl = document.createElement("div");
    searchResultsEl.id = "search-results";
    searchResultsEl.style.display = "none";

    // Insert results container right after search box
    const searchBox = document.getElementById("search-box");
    if (searchBox && searchBox.nextSibling) {
        navList.parentNode.insertBefore(searchResultsEl, navList);
    }

    searchInput.addEventListener("input", () => {
        const q = searchInput.value.trim().toLowerCase();
        if (q.length < 2) {
            clearSearch();
            return;
        }
        runSearch(q);
    });

    searchInput.addEventListener("keydown", e => {
        if (e.key === "Escape") {
            searchInput.value = "";
            clearSearch();
        }
    });
}

function runSearch(query) {
    if (!searchResultsEl) return;

    const results = [];

    (SHELLREF_CONTENT || []).forEach(section => {
        (section.topics || []).forEach(topic => {
            const haystack = [
                topic.title || "",
                topic.summary || "",
                ...(topic.tags || []),
            ].join(" ").toLowerCase();

            if (haystack.includes(query)) {
                results.push({ section, topic });
            }
        });
    });

    renderSearchResults(results, query);
}

function renderSearchResults(results, query) {
    if (!searchResultsEl) return;
    searchResultsEl.innerHTML = "";
    navList.style.display = "none";
    searchResultsEl.style.display = "block";

    if (results.length === 0) {
        const empty = document.createElement("div");
        empty.className = "search-empty";
        empty.textContent = `No results for "${query}"`;
        searchResultsEl.appendChild(empty);
        return;
    }

    results.forEach(({ section, topic }) => {
        const item = document.createElement("div");
        item.className = "search-result-item";
        item.innerHTML =
            `<div class="search-result-title">${escapeHtml(topic.title)}</div>` +
            `<div class="search-result-section">${escapeHtml(section.title)}</div>`;

        item.addEventListener("click", () => {
            clearSearch();
            searchInput.value = "";
            selectSection(section.id);
            closeSidebar();
            // Scroll to topic after render
            setTimeout(() => {
                const el = document.getElementById(topic.id);
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 80);
        });

        searchResultsEl.appendChild(item);
    });
}

function clearSearch() {
    if (!searchResultsEl) return;
    searchResultsEl.style.display = "none";
    searchResultsEl.innerHTML = "";
    navList.style.display = "";
}

// ── Mobile sidebar ─────────────────────────────────────────

function toggleSidebar() {
    if (!sidebar) return;
    sidebar.classList.toggle("open");
}

function closeSidebar() {
    if (!sidebar) return;
    sidebar.classList.remove("open");
}

// ── Helpers ─────────────────────────────────────────────────

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function makeDivider() {
    const hr = document.createElement("hr");
    hr.className = "topic-divider";
    return hr;
}

// ── Init ───────────────────────────────────────────────────

function init() {
    loadTheme();
    buildSidebar();
    setupSearch();

    // Theme toggle button
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", cycleTheme);
    }

    // Hamburger
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener("click", toggleSidebar);
    }

    // Close sidebar when tapping outside on mobile
    if (contentEl) {
        contentEl.addEventListener("click", () => {
            if (sidebar && sidebar.classList.contains("open")) {
                closeSidebar();
            }
        });
    }

    // Restore section from URL hash
    const hash = window.location.hash.replace("#", "");
    if (hash && sectionMap[hash]) {
        selectSection(hash);
    } else {
        showCover();
    }
}

document.addEventListener("DOMContentLoaded", init);
