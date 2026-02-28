// Auto-generated — run: python3 generate_data.py
// Do not edit by hand.

const SHELLREF_CONTENT = [
  {
    "id": "bash-history",
    "title": "History of Bash",
    "shell": "bash",
    "icon": "clock.arrow.circlepath",
    "topics": [
      {
        "id": "bash-history-origins",
        "title": "Origins",
        "summary": "How Brian Fox and the GNU Project created Bash in 1987–1988.",
        "tags": [
          "history",
          "gnu",
          "brian-fox"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "Bash was written by Brian Fox for the GNU Project beginning in 1987 and first released on January 10, 1988. The GNU Project, founded by Richard Stallman in 1983, aimed to build a complete free Unix-like operating system. A compatible, freely licensed shell was an essential piece — the Bourne shell that shipped with Unix was proprietary AT&T software that could not be included.\n\nFox designed Bash to be backward-compatible with the Bourne shell while incorporating the most useful features from the Korn shell (ksh) and the C shell (csh). The name is a recursive acronym: Bourne Again SHell — a deliberate pun on its predecessor."
          },
          {
            "type": "note",
            "content": "Brian Fox maintained Bash until 1993, when Chet Ramey of Case Western Reserve University took over as primary maintainer — a role he continues to hold today."
          }
        ]
      },
      {
        "id": "bash-history-bourne-shell",
        "title": "The Bourne Shell",
        "summary": "The direct predecessor: Steve Bourne's 1979 shell for Unix Version 7.",
        "tags": [
          "history",
          "bourne",
          "unix",
          "bell-labs"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "The Bourne shell (sh) was written by Stephen Bourne at Bell Labs and distributed with Unix Version 7 in 1979. It replaced the earlier Thompson shell and introduced the programming constructs — variables, control flow, functions — that defined what a Unix shell could be.\n\nBash is a strict superset of the Bourne shell. Every valid sh script runs unmodified under bash. The core syntax of if, for, while, case, and function definitions in use today is essentially unchanged from Bourne's 1979 design."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Bourne-compatible syntax (valid in both sh and bash)",
            "content": "#!/bin/sh\n# This script is valid Bourne shell — and valid Bash\nname=\"World\"\nif [ \"$name\" = \"World\" ]; then\n    echo \"Hello, $name\"\nfi\nfor f in *.txt; do\n    echo \"Found: $f\"\ndone"
          },
          {
            "type": "note",
            "content": "The Bourne shell itself was influenced by ALGOL 68, which explains several syntological choices — notably the reversed keywords used to close blocks: fi closes if, esac closes case, done closes for and while."
          }
        ]
      },
      {
        "id": "bash-history-versions",
        "title": "Version Milestones",
        "summary": "Major Bash releases and the features each one introduced.",
        "tags": [
          "history",
          "versions",
          "reference"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "Bash has been in continuous development for over three decades. Each major version added capabilities that are now considered standard practice. Knowing which version introduced a feature matters most on macOS, where the system Bash is frozen at 3.2."
          },
          {
            "type": "table",
            "label": "Major Bash releases",
            "headers": [
              "Version",
              "Year",
              "Key additions"
            ],
            "rows": [
              [
                "1.0",
                "1989",
                "Initial GNU release; Bourne compatibility; readline editing"
              ],
              [
                "2.0",
                "1996",
                "Integer arithmetic; indexed arrays; improved parameter expansion"
              ],
              [
                "3.0",
                "2004",
                "=~ regex operator; [[ ]] compound command improvements; $'...' ANSI-C quoting"
              ],
              [
                "3.2",
                "2006",
                "Last GPL v2 release — the version frozen on macOS"
              ],
              [
                "4.0",
                "2009",
                "Associative arrays (declare -A); mapfile/readarray; ** glob operator (globstar)"
              ],
              [
                "4.3",
                "2014",
                "Nameref variables (declare -n); negative array indices"
              ],
              [
                "5.0",
                "2019",
                "$EPOCHSECONDS; $EPOCHREALTIME; improved associative array handling"
              ],
              [
                "5.1",
                "2020",
                "${|...} transformation operator; improved local variable scoping"
              ],
              [
                "5.2",
                "2022",
                "Improvements to readline, word splitting, and pipefail semantics"
              ]
            ]
          }
        ]
      },
      {
        "id": "bash-history-posix",
        "title": "The POSIX Standard",
        "summary": "How POSIX sh, the Bourne shell, and Bash relate to each other.",
        "tags": [
          "history",
          "posix",
          "portability",
          "sh"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "POSIX (Portable Operating System Interface) is a family of IEEE standards that defines a baseline Unix API, including a shell command language. The POSIX shell specification was largely derived from the Bourne shell, codifying its syntax and built-in commands as the portable baseline.\n\nBash is not a POSIX shell — it is a superset. Scripts written with bash-specific features (arrays, [[ ]], process substitution, etc.) will not run on a strict POSIX sh. Scripts written to the POSIX subset will run correctly on bash, dash, ash, and most other sh implementations.\n\nBash can be invoked in POSIX mode, which disables or modifies behaviour that conflicts with the standard."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Invoking Bash in POSIX mode",
            "content": "# Start an interactive POSIX-mode shell\nbash --posix\n\n# Or enable POSIX mode inside a running script\nset -o posix\n\n# Use #!/bin/sh to signal POSIX intent in a script\n# (on most Linux systems, /bin/sh is dash — not bash)"
          },
          {
            "type": "note",
            "content": "On Debian and Ubuntu, /bin/sh is dash, a minimal POSIX shell. Scripts with #!/bin/sh must not use any bash-specific syntax. Use #!/usr/bin/env bash explicitly when you need bash features."
          }
        ]
      },
      {
        "id": "bash-history-macos",
        "title": "Bash on macOS",
        "summary": "Why macOS ships Bash 3.2 and switched its default shell to Zsh in 2019.",
        "tags": [
          "history",
          "macos",
          "zsh",
          "gpl"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "macOS shipped Bash as its default interactive shell from Mac OS X 10.3 Panther (2003) through macOS 10.14 Mojave (2018). With macOS 10.15 Catalina (2019), Apple switched the default shell to Zsh.\n\nThe reason is licensing. Bash 4.0 and later are distributed under the GNU General Public License version 3 (GPL v3). Apple has a long-standing policy against shipping GPL v3 software in macOS. As a result, macOS has been frozen at Bash 3.2 — the last GPL v2 release from 2006 — and cannot receive any of the improvements introduced in versions 4 through 5.\n\nBash 3.2 is still present at /bin/bash on every Mac. It is supported and will continue to work. But it lacks associative arrays, mapfile, the ** glob, and many other features this reference covers."
          },
          {
            "type": "warning",
            "content": "If /bin/bash --version shows 3.2, you are missing 15+ years of Bash improvements. Install Bash 5 via Homebrew (brew install bash) and use /opt/homebrew/bin/bash in your shebangs. Do not replace /bin/bash — leave the system copy intact."
          }
        ]
      },
      {
        "id": "bash-history-today",
        "title": "Bash Today",
        "summary": "Current development status, maintainer, and where to find the source.",
        "tags": [
          "history",
          "gnu",
          "open-source"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "Bash is maintained by Chet Ramey, a software engineer at Case Western Reserve University, who took over from Brian Fox in 1993. Ramey has guided Bash development for over thirty years, releasing a steady stream of improvements while preserving the backward compatibility that makes decades-old scripts still run correctly.\n\nThe current stable release is Bash 5.2 (2022). Bash remains the default interactive shell on most Linux distributions and is one of the most widely deployed programs in the world — present on every Linux server, embedded device running BusyBox, and macOS system.\n\nBash's source code is hosted by the GNU Project and is freely available. Bug reports and patches are submitted to the bug-bash mailing list."
          },
          {
            "type": "note",
            "content": "Bash's changelog and release notes are thorough technical documents worth reading. Each major release's NEWS file documents not just new features but also intentional behaviour changes and fixes — invaluable when a script stops working after a system upgrade."
          }
        ]
      }
    ]
  },
  {
    "id": "bash-basics",
    "title": "Shell Basics",
    "shell": "bash",
    "icon": "terminal",
    "topics": [
      {
        "id": "bash-basics-shebang",
        "title": "The Shebang Line",
        "summary": "Tells the OS which interpreter to use for the script.",
        "tags": [
          "beginner",
          "syntax"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "The shebang (also written hashbang) is the first line of a script. It tells the operating system which interpreter to invoke. Without it, the script runs under whatever shell the user happens to be using — an unreliable assumption."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Common shebang lines",
            "content": "#!/bin/bash\n#!/usr/bin/env bash    # preferred — finds bash in PATH"
          },
          {
            "type": "note",
            "content": "Prefer #!/usr/bin/env bash over #!/bin/bash. The env form searches PATH, making the script portable across systems where Bash lives in a non-standard location (e.g. macOS with Homebrew Bash at /opt/homebrew/bin/bash)."
          },
          {
            "type": "warning",
            "content": "The shebang must be the very first line — character one, line one. Any blank line or byte-order mark before it causes the OS to ignore it entirely."
          }
        ]
      },
      {
        "id": "bash-basics-variables",
        "title": "Variables",
        "summary": "Declaring, assigning, and expanding shell variables.",
        "tags": [
          "beginner",
          "syntax"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "Bash variables are untyped strings by default. Assignment requires no spaces around the = sign. Expansion (reading the value) wraps the name in ${...} — the braces are optional for simple names but required when the variable name is immediately followed by alphanumeric characters or underscores."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Assignment and expansion",
            "content": "name=\"Alice\"             # assign — NO spaces around =\necho \"$name\"             # expand — always double-quote\necho \"${name}s\"          # braces required before 's'\nreadonly PI=3.14159      # constant — cannot be reassigned\nunset name               # remove the variable"
          },
          {
            "type": "warning",
            "content": "Never put spaces around = in an assignment. VAR = value is parsed as a command named VAR with arguments = and value — not an assignment."
          },
          {
            "type": "table",
            "label": "Scoping and declaration keywords",
            "headers": [
              "Keyword",
              "Effect"
            ],
            "rows": [
              [
                "(none)",
                "Global to the current shell session"
              ],
              [
                "local",
                "Restricts scope to the enclosing function"
              ],
              [
                "export",
                "Marks variable for inheritance by child processes"
              ],
              [
                "readonly",
                "Prevents reassignment or unsetting"
              ]
            ]
          }
        ]
      },
      {
        "id": "bash-basics-quoting",
        "title": "Quoting Rules",
        "summary": "How single quotes, double quotes, and backslashes affect expansion.",
        "tags": [
          "beginner",
          "syntax"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "Quoting controls which characters the shell interprets and which it passes literally. Getting quoting wrong — especially with filenames containing spaces — is the most common source of subtle Bash bugs."
          },
          {
            "type": "table",
            "label": "Quote type comparison",
            "headers": [
              "Style",
              "Syntax",
              "Var expansion",
              "Glob expansion",
              "Escape sequences"
            ],
            "rows": [
              [
                "Double quote",
                "\"...\"",
                "Yes",
                "No",
                "Partial (\\\" \\\\ only)"
              ],
              [
                "Single quote",
                "'...'",
                "No",
                "No",
                "None (fully literal)"
              ],
              [
                "ANSI-C quote",
                "$'...'",
                "No",
                "No",
                "Yes (\\n \\t \\uXXXX …)"
              ],
              [
                "Backslash",
                "\\c",
                "N/A",
                "N/A",
                "Escapes next character"
              ]
            ]
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Quoting examples",
            "content": "var=\"world\"\necho \"Hello $var\"        # → Hello world\necho 'Hello $var'        # → Hello $var  (literal)\necho \"Don't forget\"      # apostrophe is fine inside double quotes\necho 'She said \"hi\"'    # double quotes are fine inside single quotes\necho $'Line1\\nLine2'     # ANSI-C: \\n becomes a real newline"
          },
          {
            "type": "note",
            "content": "Always double-quote variable expansions: \"$var\", \"$@\", \"$(cmd)\". Leaving them unquoted causes word splitting and glob expansion on the result, producing bugs when values contain spaces or wildcard characters."
          }
        ]
      },
      {
        "id": "bash-basics-special-vars",
        "title": "Special Variables",
        "summary": "Shell-set variables for process info, arguments, and command status.",
        "tags": [
          "beginner",
          "reference"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "Bash automatically populates a set of read-only variables carrying information about the running process, the script's arguments, and the result of the last command."
          },
          {
            "type": "table",
            "label": "Special variables reference",
            "headers": [
              "Variable",
              "Contains"
            ],
            "rows": [
              [
                "$0",
                "Name of the script or shell"
              ],
              [
                "$1 … $9",
                "Positional parameters (script arguments)"
              ],
              [
                "${10} …",
                "Parameters beyond 9 — braces required"
              ],
              [
                "$#",
                "Number of positional parameters"
              ],
              [
                "$@",
                "All positional parameters as separate quoted words"
              ],
              [
                "$*",
                "All positional parameters as a single IFS-joined string"
              ],
              [
                "$?",
                "Exit status of the last command (0 = success)"
              ],
              [
                "$$",
                "PID of the current shell"
              ],
              [
                "$!",
                "PID of the last background process"
              ],
              [
                "$_",
                "Last argument of the previous command"
              ]
            ]
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Using special variables",
            "content": "#!/usr/bin/env bash\necho \"Script name : $0\"\necho \"First arg   : $1\"\necho \"All args    : $@\"\necho \"Arg count   : $#\"\n\nls /nonexistent 2>/dev/null\necho \"Exit status : $?\"   # → non-zero (ls failed)"
          },
          {
            "type": "note",
            "content": "Prefer \"$@\" over \"$*\" when iterating arguments. \"$@\" preserves word boundaries, so arguments with internal spaces stay intact. \"$*\" collapses everything into one string joined by the first character of IFS."
          }
        ]
      },
      {
        "id": "bash-basics-command-substitution",
        "title": "Command Substitution",
        "summary": "Capture command output and use it as a value.",
        "tags": [
          "beginner",
          "syntax"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "Command substitution runs a command in a subshell and replaces the substitution expression with its standard output. Trailing newlines are stripped automatically."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Command substitution syntax",
            "content": "# Modern $() syntax — preferred\ntoday=$(date +%Y-%m-%d)\nfile_count=$(ls -1 | wc -l)\n\n# Legacy backtick syntax — avoid\ntoday=`date +%Y-%m-%d`\n\n# $() nests cleanly; backticks require backslash escaping\nyear=$(basename $(pwd))"
          },
          {
            "type": "note",
            "content": "Always prefer $() over backticks. The $() form is readable, nestable without backslash escaping, and behaves identically in all modern shells."
          },
          {
            "type": "warning",
            "content": "Command substitution strips all trailing newlines from the captured output. If a command produces meaningful blank lines at the end, they will be silently discarded. Use mapfile (readarray) to capture multi-line output into an array instead."
          }
        ]
      },
      {
        "id": "bash-basics-arithmetic",
        "title": "Arithmetic Expansion",
        "summary": "Integer arithmetic inside $(( )) and (( )) expressions.",
        "tags": [
          "beginner",
          "syntax"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "Bash performs integer arithmetic natively inside $(( )). Variable names inside arithmetic context need no $ prefix, though it is accepted. For floating-point arithmetic, use bc or awk."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Arithmetic expansion",
            "content": "a=10; b=3\n\necho $(( a + b ))      # → 13\necho $(( a - b ))      # → 7\necho $(( a * b ))      # → 30\necho $(( a / b ))      # → 3  (integer — truncates toward zero)\necho $(( a % b ))      # → 1  (modulus)\necho $(( a ** b ))     # → 1000 (exponentiation)\n\n(( count++ ))          # increment in-place — no $ or echo needed\n(( total = a * b ))    # assignment inside (( ))"
          },
          {
            "type": "table",
            "label": "Arithmetic operators",
            "headers": [
              "Operator",
              "Description"
            ],
            "rows": [
              [
                "+ - * /",
                "Addition, subtraction, multiplication, integer division"
              ],
              [
                "%",
                "Modulus (remainder after division)"
              ],
              [
                "**",
                "Exponentiation"
              ],
              [
                "++ --",
                "Pre/post increment and decrement"
              ],
              [
                "<< >>",
                "Bitwise left and right shift"
              ],
              [
                "& | ^ ~",
                "Bitwise AND, OR, XOR, NOT"
              ],
              [
                "&& || !",
                "Logical AND, OR, NOT (inside (( )))"
              ]
            ]
          },
          {
            "type": "note",
            "content": "Use (( expr )) as a conditional directly in if or while. It returns exit code 0 when the expression is non-zero (truthy) and 1 when zero (falsy) — the inverse of how most programmers think about 0 and 1."
          }
        ]
      },
      {
        "id": "bash-basics-exit-codes",
        "title": "Exit Codes",
        "summary": "How commands signal success or failure, and how to act on the result.",
        "tags": [
          "beginner",
          "best-practice"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "Every command exits with a code between 0 and 255. By convention, 0 means success and any non-zero value means failure. The exit code of the last foreground command is always in $?."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Checking and using exit codes",
            "content": "# Explicit check via $?\ncp src.txt /backup/\nif [ $? -ne 0 ]; then\n    echo \"Backup failed\" >&2\n    exit 1\nfi\n\n# Shorter: run right side only on failure\ncp src.txt /backup/ || { echo \"Backup failed\" >&2; exit 1; }\n\n# Run right side only on success\nmake && make install\n\n# Exit the script with an explicit code\nexit 0   # success\nexit 1   # general error"
          },
          {
            "type": "table",
            "label": "Reserved exit code conventions",
            "headers": [
              "Code",
              "Meaning"
            ],
            "rows": [
              [
                "0",
                "Success"
              ],
              [
                "1",
                "General error"
              ],
              [
                "2",
                "Misuse of shell built-in (e.g. missing argument)"
              ],
              [
                "126",
                "Command found but not executable"
              ],
              [
                "127",
                "Command not found"
              ],
              [
                "128+N",
                "Fatal signal N received (e.g. 130 = SIGINT / Ctrl-C)"
              ],
              [
                "255",
                "Exit status out of valid range"
              ]
            ]
          },
          {
            "type": "warning",
            "content": "With set -e active, any command returning non-zero immediately terminates the script — including inside subshells and pipelines (with set -o pipefail). Commands used as if conditions are exempt, but watch for silent exits in helper functions."
          }
        ]
      }
    ]
  },
  {
    "id": "bash-control-flow",
    "title": "Control Flow",
    "shell": "bash",
    "icon": "arrow.triangle.branch",
    "topics": [
      {
        "id": "bash-cf-if",
        "title": "if / elif / else",
        "summary": "Branch execution based on command exit status or test conditions.",
        "tags": [
          "beginner",
          "syntax",
          "conditional"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "Bash if tests the exit status of a command. Zero is true; non-zero is false. The condition is any command — test, [[ ]], a pipeline, or an external program. The then, elif, else, and fi keywords delimit the branches."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "if / elif / else syntax",
            "content": "if command; then\n    # runs when command exits 0\nelif other_command; then\n    # runs when first fails but this exits 0\nelse\n    # runs when all conditions fail\nfi\n\n# Compact one-liner (semicolons replace newlines)\nif [ \"$1\" = \"--help\" ]; then echo \"Usage: ...\"; fi"
          },
          {
            "type": "note",
            "content": "The semicolons after the condition and after each branch keyword are required when then or do appears on the same line as the condition. Newlines act as implicit semicolons."
          }
        ]
      },
      {
        "id": "bash-cf-test",
        "title": "Test Expressions: [ ] and [[ ]]",
        "summary": "Two ways to evaluate file, string, and numeric conditions.",
        "tags": [
          "beginner",
          "syntax",
          "conditional"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "The POSIX [ command (also named test) and Bash's built-in [[ ]] keyword both evaluate conditions and return an exit status. Prefer [[ ]] in Bash scripts — it handles empty variables safely and supports pattern matching and regex."
          },
          {
            "type": "table",
            "label": "[ ] vs [[ ]] comparison",
            "headers": [
              "Feature",
              "[ ]",
              "[[ ]]"
            ],
            "rows": [
              [
                "Word splitting on expansion",
                "Yes (quote everything)",
                "No (safe unquoted)"
              ],
              [
                "Pattern matching (==)",
                "No",
                "Yes (glob patterns)"
              ],
              [
                "Regex matching (=~)",
                "No",
                "Yes"
              ],
              [
                "&& and || inside",
                "No (use -a / -o)",
                "Yes"
              ],
              [
                "POSIX portable",
                "Yes",
                "Bash/Zsh only"
              ]
            ]
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Common test operators",
            "content": "# String tests\n[[ -z \"$var\" ]]       # true if empty\n[[ -n \"$var\" ]]       # true if non-empty\n[[ \"$a\" == \"$b\" ]]   # string equality\n[[ \"$a\" != \"$b\" ]]   # string inequality\n[[ \"$s\" == *.txt ]]  # glob match (no quotes on pattern)\n[[ \"$s\" =~ ^[0-9]+$ ]] # regex match\n\n# Numeric tests\n[[ $n -eq 0 ]]        # equal\n[[ $n -ne 0 ]]        # not equal\n[[ $n -lt 10 ]]       # less than\n[[ $n -gt 10 ]]       # greater than\n[[ $n -le 10 ]]       # less than or equal\n[[ $n -ge 10 ]]       # greater than or equal\n\n# File tests\n[[ -e \"$path\" ]]      # exists\n[[ -f \"$path\" ]]      # regular file\n[[ -d \"$path\" ]]      # directory\n[[ -r \"$path\" ]]      # readable\n[[ -w \"$path\" ]]      # writable\n[[ -x \"$path\" ]]      # executable\n[[ -s \"$path\" ]]      # non-empty file"
          },
          {
            "type": "warning",
            "content": "Inside [ ], always double-quote variable expansions. An unquoted empty variable causes a syntax error: [ -z $empty ] becomes [ -z ] which is always true. With [[ ]] this is not a problem."
          }
        ]
      },
      {
        "id": "bash-cf-case",
        "title": "case Statement",
        "summary": "Match a value against a list of patterns and run the matching branch.",
        "tags": [
          "intermediate",
          "syntax",
          "conditional"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "The case statement matches a word against a series of glob patterns. It is the idiomatic way to replace long if/elif chains that compare a single variable against several fixed values — and it is faster than repeated [[ ]] calls."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "case syntax",
            "content": "case \"$variable\" in\n    pattern1)\n        # commands\n        ;;\n    pattern2 | pattern3)   # OR patterns\n        # commands\n        ;;\n    *.txt | *.md)           # glob patterns work\n        # commands\n        ;;&               # ;; stops, ;;& falls through to next test\n    *)                      # default (catch-all)\n        # commands\n        ;;\nesac"
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Practical example — argument parsing",
            "content": "case \"$1\" in\n    -v|--verbose)\n        verbose=1\n        ;;\n    -h|--help)\n        usage\n        exit 0\n        ;;\n    -o|--output)\n        output_file=\"$2\"\n        shift\n        ;;\n    -*)\n        echo \"Unknown option: $1\" >&2\n        exit 1\n        ;;\n    *)\n        input_file=\"$1\"\n        ;;\nesac"
          },
          {
            "type": "note",
            "content": "case patterns are shell globs, not regular expressions. Use * for any string, ? for any single character, and [abc] for character classes. For regex matching, use [[ =~ ]] instead."
          }
        ]
      },
      {
        "id": "bash-cf-while",
        "title": "while and until Loops",
        "summary": "Repeat a block while a condition is true — or until it becomes true.",
        "tags": [
          "beginner",
          "syntax",
          "loop"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "while re-evaluates its condition before each iteration; it runs so long as the condition succeeds (exits 0). until is the logical inverse — it loops until the condition succeeds. Both are commonly used with read to process input line by line."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "while and until syntax",
            "content": "# Count down\ncounter=5\nwhile (( counter > 0 )); do\n    echo \"$counter\"\n    (( counter-- ))\ndone\n\n# Read file line by line (correct idiom)\nwhile IFS= read -r line; do\n    echo \"$line\"\ndone < \"input.txt\"\n\n# until — wait for a process to finish\nuntil ping -c1 example.com &>/dev/null; do\n    echo \"Waiting for network…\"\n    sleep 2\ndone"
          },
          {
            "type": "warning",
            "content": "Pipe a file into while read using redirection (< file), not via a pipeline (cat file | while read). A pipeline runs the while loop in a subshell, so any variables set inside the loop are lost when it exits."
          }
        ]
      },
      {
        "id": "bash-cf-for",
        "title": "for Loops",
        "summary": "Iterate over a list of items or a numeric range.",
        "tags": [
          "beginner",
          "syntax",
          "loop"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "Bash provides two for loop forms: the list-based form iterates over words, and the C-style (( )) form iterates over a numeric range. The list form is most useful for iterating over files, arguments, or command output."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "List-based for loop",
            "content": "# Iterate over a literal list\nfor color in red green blue; do\n    echo \"$color\"\ndone\n\n# Iterate over positional parameters\nfor arg in \"$@\"; do\n    echo \"Processing: $arg\"\ndone\n\n# Iterate over files matching a glob\nfor file in *.txt; do\n    [[ -f \"$file\" ]] || continue   # skip if no match\n    wc -l \"$file\"\ndone\n\n# Iterate over command output\nfor user in $(cut -d: -f1 /etc/passwd); do\n    echo \"$user\"\ndone"
          },
          {
            "type": "code",
            "language": "bash",
            "label": "C-style for loop",
            "content": "# Standard C-style\nfor (( i = 0; i < 10; i++ )); do\n    echo \"$i\"\ndone\n\n# Brace expansion — generates a sequence at parse time\nfor i in {1..5}; do echo \"$i\"; done\n\n# Brace expansion with step (Bash 4+)\nfor i in {0..100..10}; do echo \"$i\"; done"
          },
          {
            "type": "note",
            "content": "Prefer the C-style loop or brace expansion for numeric ranges. The seq command works but spawns a subshell. Brace expansion {1..N} is evaluated at parse time, making it the fastest option for fixed ranges."
          }
        ]
      },
      {
        "id": "bash-cf-break-continue",
        "title": "break and continue",
        "summary": "Skip iterations or exit loops early.",
        "tags": [
          "intermediate",
          "syntax",
          "loop"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "break exits the innermost loop immediately. continue skips the rest of the current iteration and starts the next one. Both accept an optional numeric argument specifying how many levels of nested loops to affect."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "break and continue",
            "content": "# continue — skip even numbers\nfor (( i = 1; i <= 10; i++ )); do\n    (( i % 2 == 0 )) && continue\n    echo \"Odd: $i\"\ndone\n\n# break — stop on first match\nfor file in /var/log/*.log; do\n    if grep -q \"ERROR\" \"$file\"; then\n        echo \"Found error in: $file\"\n        break\n    fi\ndone\n\n# Break out of nested loops (level argument)\nfor x in 1 2 3; do\n    for y in a b c; do\n        [[ \"$x$y\" == \"2b\" ]] && break 2   # exits both loops\n        echo \"$x$y\"\n    done\ndone"
          }
        ]
      }
    ]
  },
  {
    "id": "bash-functions",
    "title": "Functions",
    "shell": "bash",
    "icon": "curlybraces",
    "topics": [
      {
        "id": "bash-fn-declaration",
        "title": "Declaring Functions",
        "summary": "Two equivalent syntaxes for defining reusable blocks of commands.",
        "tags": [
          "beginner",
          "syntax",
          "functions"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "Functions must be defined before they are called. They live in the current shell's memory (not a subshell) unless explicitly run in a subshell. Either syntax below is valid; the function keyword is optional but improves readability."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Function declaration syntax",
            "content": "# Style 1 — POSIX-compatible (preferred)\ngreet() {\n    echo \"Hello, $1\"\n}\n\n# Style 2 — function keyword\nfunction greet {\n    echo \"Hello, $1\"\n}\n\n# Call it\ngreet \"World\"   # → Hello, World\n\n# Functions are first-class shell commands\ntype greet      # → greet is a function"
          },
          {
            "type": "note",
            "content": "Define helper functions near the top of the script, or in a shared lib file that you source (. lib.sh). Calling a function before it is defined causes a command not found error at runtime, not at parse time."
          }
        ]
      },
      {
        "id": "bash-fn-parameters",
        "title": "Parameters and Arguments",
        "summary": "How to receive, validate, and iterate over function arguments.",
        "tags": [
          "beginner",
          "syntax",
          "functions"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "Inside a function, $1–$9 (and ${10}+) hold the function's arguments — not the script's positional parameters. $# is the argument count for the function, and $@ is all function arguments as separate words."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Working with function arguments",
            "content": "backup() {\n    local src=\"$1\"\n    local dst=\"$2\"\n\n    if [[ $# -lt 2 ]]; then\n        echo \"Usage: backup <source> <dest>\" >&2\n        return 1\n    fi\n\n    cp -r \"$src\" \"$dst\"\n}\n\n# Iterate all arguments\nprint_all() {\n    for arg in \"$@\"; do\n        echo \"  → $arg\"\n    done\n}\n\n# shift consumes positional parameters one at a time\nparse_args() {\n    while [[ $# -gt 0 ]]; do\n        echo \"arg: $1\"\n        shift\n    done\n}"
          },
          {
            "type": "warning",
            "content": "The script-level $@ and the function's $@ are separate. Inside a function, $@ always refers to the function's own arguments. If you need the script's original arguments inside a function, pass them explicitly: process_args \"$@\"."
          }
        ]
      },
      {
        "id": "bash-fn-return",
        "title": "Return Values",
        "summary": "Functions communicate results through exit status and stdout — not return values.",
        "tags": [
          "intermediate",
          "functions"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "Bash functions do not have return values in the traditional sense. The return statement sets an exit status (0–255). To pass data back to the caller, either print to stdout and capture with $(), or write to a named variable passed by convention."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Patterns for returning data",
            "content": "# Pattern 1: print to stdout, capture with $()\nget_date() {\n    date +%Y-%m-%d\n}\ncurrent=$(get_date)\n\n# Pattern 2: return exit status only\nis_even() {\n    (( $1 % 2 == 0 ))\n}   # returns 0 (true) or 1 (false)\n\nif is_even 4; then echo \"even\"; fi\n\n# Pattern 3: write result to a named variable (avoids subshell)\nto_upper() {\n    local -n _result=$1   # nameref — Bash 4.3+\n    _result=\"${2^^}\"\n}\nto_upper myvar \"hello\"\necho \"$myvar\"   # → HELLO"
          },
          {
            "type": "table",
            "label": "Data-passing strategies",
            "headers": [
              "Strategy",
              "Best for",
              "Drawback"
            ],
            "rows": [
              [
                "Print + capture $()",
                "Strings and multi-line output",
                "Spawns a subshell"
              ],
              [
                "return N",
                "Pass/fail status only",
                "0–255 range, integer only"
              ],
              [
                "Global variable",
                "Simple values, fast",
                "Pollutes global namespace"
              ],
              [
                "Nameref (local -n)",
                "Complex results without subshell",
                "Bash 4.3+ only"
              ]
            ]
          }
        ]
      },
      {
        "id": "bash-fn-local",
        "title": "Local Variables",
        "summary": "Prevent function variables from leaking into the enclosing scope.",
        "tags": [
          "intermediate",
          "functions",
          "scope"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "Without the local keyword, variables set inside a function modify the global shell environment. Always declare function-internal variables with local to avoid side effects. local accepts the same flags as declare."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "local variable declaration",
            "content": "count=10   # global\n\nreset_count() {\n    local count=0   # function-scoped — does NOT affect global\n    echo \"Inside: $count\"\n}\n\nreset_count\necho \"Outside: $count\"   # → 10 (unchanged)\n\n# local with type flags\nprocess() {\n    local -i total=0      # integer\n    local -a items=()     # indexed array\n    local -A mapping=()   # associative array\n    local -r MAX=100      # readonly\n}"
          },
          {
            "type": "warning",
            "content": "local only restricts scope — it does not prevent the variable from being visible to functions called from within that function. Bash uses dynamic scoping: a called function can read (and modify) its caller's local variables."
          }
        ]
      },
      {
        "id": "bash-fn-recursive",
        "title": "Recursion",
        "summary": "Functions that call themselves, with a mandatory base case.",
        "tags": [
          "advanced",
          "functions"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "Bash supports recursive functions, but each level adds a stack frame. Deep recursion can hit shell limits. Always define a clear base case. For most practical shell tasks, iteration is preferable to recursion."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Factorial — recursive example",
            "content": "factorial() {\n    local -i n=$1\n    if (( n <= 1 )); then\n        echo 1\n        return\n    fi\n    local -i sub\n    sub=$(factorial $(( n - 1 )))\n    echo $(( n * sub ))\n}\n\nfactorial 6   # → 720\n\n# Recursive directory walk (often better done with find)\nwalk() {\n    local dir=\"$1\"\n    for item in \"$dir\"/*; do\n        if [[ -d \"$item\" ]]; then\n            walk \"$item\"\n        else\n            echo \"$item\"\n        fi\n    done\n}"
          }
        ]
      },
      {
        "id": "bash-fn-sourcing",
        "title": "Sourcing Function Libraries",
        "summary": "Share functions across scripts by sourcing a common library file.",
        "tags": [
          "intermediate",
          "functions",
          "best-practice"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "The source command (or its alias .) runs a file in the current shell, making all functions and variables it defines available immediately. This is the standard way to share utility functions across multiple scripts."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Sourcing a library file",
            "content": "# lib/utils.sh\nlog_info()  { echo \"[INFO]  $*\"; }\nlog_error() { echo \"[ERROR] $*\" >&2; }\ndie()       { log_error \"$1\"; exit \"${2:-1}\"; }\n\n# main.sh — source using absolute path or relative to script dir\nSCRIPT_DIR=\"$(cd \"$(dirname \"${BASH_SOURCE[0]}\")\" && pwd)\"\nsource \"${SCRIPT_DIR}/lib/utils.sh\"\n\n# Now all library functions are available\nlog_info \"Starting…\"\n[[ -f \"$input\" ]] || die \"Input file not found: $input\""
          },
          {
            "type": "note",
            "content": "Use ${BASH_SOURCE[0]} instead of $0 to locate the current file's directory. $0 changes to the caller's name when the script is sourced, whereas BASH_SOURCE[0] always refers to the file being executed or sourced."
          }
        ]
      }
    ]
  },
  {
    "id": "bash-strings-arrays",
    "title": "Strings and Arrays",
    "shell": "bash",
    "icon": "list.bullet.rectangle",
    "topics": [
      {
        "id": "bash-str-length-slice",
        "title": "String Length and Slicing",
        "summary": "Measure strings and extract substrings using parameter expansion.",
        "tags": [
          "intermediate",
          "strings",
          "parameter-expansion"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "Bash provides built-in parameter expansion operators for measuring and slicing strings — no external commands required. The ${#var} form returns byte length; ${var:offset:length} extracts a substring."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Length and substring extraction",
            "content": "str=\"Hello, World\"\n\necho ${#str}              # → 12 (length)\necho ${str:7}             # → World  (from offset 7)\necho ${str:7:5}           # → World  (offset 7, length 5)\necho ${str: -5}           # → World  (last 5 chars; space before -)\necho ${str:0:5}           # → Hello"
          },
          {
            "type": "table",
            "label": "Substring expansion syntax",
            "headers": [
              "Expression",
              "Result"
            ],
            "rows": [
              [
                "${#var}",
                "Length of the string"
              ],
              [
                "${var:N}",
                "From offset N to end"
              ],
              [
                "${var:N:L}",
                "L characters starting at offset N"
              ],
              [
                "${var: -N}",
                "Last N characters (space required before -)"
              ],
              [
                "${var:N:-M}",
                "From offset N, excluding last M characters"
              ]
            ]
          }
        ]
      },
      {
        "id": "bash-str-defaults",
        "title": "Default and Fallback Expansion",
        "summary": "Substitute defaults, assign on unset, and error on missing values.",
        "tags": [
          "intermediate",
          "parameter-expansion",
          "best-practice"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "Parameter expansion operators provide safe ways to handle unset or empty variables without if/else chains. These patterns are essential in scripts that operate on optional arguments or environment variables."
          },
          {
            "type": "table",
            "label": "Default value operators",
            "headers": [
              "Expression",
              "Meaning"
            ],
            "rows": [
              [
                "${var:-default}",
                "Use default if var is unset or empty"
              ],
              [
                "${var-default}",
                "Use default only if var is unset (not just empty)"
              ],
              [
                "${var:=default}",
                "Assign default to var if unset or empty, then expand"
              ],
              [
                "${var:?message}",
                "Print message and exit if var is unset or empty"
              ],
              [
                "${var:+other}",
                "Expand to other if var is set and non-empty, else empty"
              ]
            ]
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Default expansion examples",
            "content": "# Use default value\necho \"${NAME:-Anonymous}\"\n\n# Assign and use\n: \"${LOG_DIR:=/tmp/logs}\"   # colon discards the value but triggers expansion\nmkdir -p \"$LOG_DIR\"\n\n# Abort with message if required var is missing\n: \"${API_KEY:?API_KEY must be set}\"\n\n# Conditional inclusion\nwget ${VERBOSE:+-v} \"$url\"  # adds -v only when VERBOSE is set"
          }
        ]
      },
      {
        "id": "bash-str-transform",
        "title": "String Search and Replace",
        "summary": "Remove prefixes, suffixes, and substitute patterns inline.",
        "tags": [
          "intermediate",
          "strings",
          "parameter-expansion"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "Bash parameter expansion includes operators for removing matching prefixes and suffixes, and for substituting patterns — all without spawning sed or awk."
          },
          {
            "type": "table",
            "label": "Pattern removal and substitution operators",
            "headers": [
              "Expression",
              "Effect"
            ],
            "rows": [
              [
                "${var#pattern}",
                "Remove shortest matching prefix"
              ],
              [
                "${var##pattern}",
                "Remove longest matching prefix"
              ],
              [
                "${var%pattern}",
                "Remove shortest matching suffix"
              ],
              [
                "${var%%pattern}",
                "Remove longest matching suffix"
              ],
              [
                "${var/pattern/replace}",
                "Replace first match of pattern"
              ],
              [
                "${var//pattern/replace}",
                "Replace all matches of pattern"
              ],
              [
                "${var/#pattern/replace}",
                "Replace if pattern matches prefix"
              ],
              [
                "${var/%pattern/replace}",
                "Replace if pattern matches suffix"
              ]
            ]
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Practical examples",
            "content": "path=\"/home/alice/docs/report.txt\"\n\necho ${path##*/}         # → report.txt   (basename)\necho ${path%/*}          # → /home/alice/docs  (dirname)\necho ${path##*.}         # → txt   (extension)\necho ${path%.txt}.bak    # → /home/alice/docs/report.bak\n\nurl=\"https://example.com/page\"\necho ${url#https://}     # → example.com/page\n\ntext=\"aabbcc\"\necho ${text//b/X}        # → aaXXcc  (replace all b with X)"
          }
        ]
      },
      {
        "id": "bash-str-case",
        "title": "Case Conversion",
        "summary": "Convert strings to upper or lower case with Bash 4+ expansion operators.",
        "tags": [
          "intermediate",
          "strings"
        ],
        "badge": "bash5+",
        "blocks": [
          {
            "type": "text",
            "content": "Bash 4 added ^ and , operators for case conversion directly in parameter expansion. These are faster than piping through tr and work without external commands."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Case conversion operators",
            "content": "str=\"Hello World\"\n\necho ${str^^}    # → HELLO WORLD  (all uppercase)\necho ${str,,}    # → hello world  (all lowercase)\necho ${str^}     # → Hello World  (first char uppercase)\necho ${str,}     # → hello World  (first char lowercase)\n\n# Works with a pattern: only convert matching characters\necho ${str^^[aeiou]}  # → HEllO WOrld  (uppercase vowels)"
          },
          {
            "type": "note",
            "content": "Case conversion operators require Bash 4.0 or later. macOS ships with Bash 3.2 due to licensing. If you need portability to the system Bash on macOS, use tr instead: echo \"$str\" | tr '[:lower:]' '[:upper:]'"
          }
        ]
      },
      {
        "id": "bash-arrays-indexed",
        "title": "Indexed Arrays",
        "summary": "Declare, populate, and iterate ordered collections of strings.",
        "tags": [
          "intermediate",
          "arrays"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "Bash indexed arrays are zero-based ordered lists of strings. Elements are accessed by integer index. Indices need not be contiguous — you can assign to index 0 and index 100 without filling the gap."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Array declaration and access",
            "content": "# Declare and populate\nfruits=(apple banana cherry)\ndeclare -a colours   # explicit declaration (optional)\n\n# Assign individual elements\nfruits[3]=\"date\"\n\n# Access elements\necho \"${fruits[0]}\"    # → apple\necho \"${fruits[@]}\"    # → all elements as separate words\necho \"${#fruits[@]}\"   # → 4 (count)\necho \"${!fruits[@]}\"   # → 0 1 2 3 (indices)\n\n# Append\nfruits+=(elderberry)\n\n# Slice: offset, length\necho \"${fruits[@]:1:2}\"  # → banana cherry"
          },
          {
            "type": "warning",
            "content": "Always use \"${array[@]}\" (double-quoted, @) when iterating or passing arrays. \"${array[*]}\" joins all elements into a single word. The unquoted form performs word splitting, breaking elements that contain spaces."
          }
        ]
      },
      {
        "id": "bash-arrays-assoc",
        "title": "Associative Arrays",
        "summary": "Key-value maps using string keys instead of integer indices.",
        "tags": [
          "intermediate",
          "arrays"
        ],
        "badge": "bash5+",
        "blocks": [
          {
            "type": "text",
            "content": "Associative arrays (hash maps) use string keys and require explicit declaration with declare -A. They are available in Bash 4.0+."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Associative array usage",
            "content": "declare -A capitals\n\ncapitals[France]=\"Paris\"\ncapitals[Japan]=\"Tokyo\"\ncapitals[Brazil]=\"Brasilia\"\n\n# Bulk assignment\ndeclare -A colours=([red]=\"#FF0000\" [green]=\"#00FF00\")\n\n# Access\necho \"${capitals[France]}\"     # → Paris\n\n# All keys / all values\necho \"${!capitals[@]}\"         # keys (order not guaranteed)\necho \"${capitals[@]}\"          # values\n\n# Check key exists\n[[ -v capitals[Germany] ]] && echo \"found\"\n\n# Iterate\nfor country in \"${!capitals[@]}\"; do\n    echo \"$country → ${capitals[$country]}\"\ndone\n\n# Delete a key\nunset 'capitals[Japan]'"
          },
          {
            "type": "note",
            "content": "Associative arrays are unordered. If insertion order matters, maintain a separate indexed array of keys alongside the associative array."
          }
        ]
      },
      {
        "id": "bash-arrays-mapfile",
        "title": "mapfile and readarray",
        "summary": "Read lines of input directly into an array without a loop.",
        "tags": [
          "intermediate",
          "arrays"
        ],
        "badge": "bash5+",
        "blocks": [
          {
            "type": "text",
            "content": "mapfile (also aliased as readarray) reads lines from stdin into an indexed array. Each line becomes one element. This is the correct way to split multi-line output into an array without the word-splitting hazards of arr=($(command))."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "mapfile usage",
            "content": "# Read a file into an array\nmapfile -t lines < /etc/hosts\necho \"Line count: ${#lines[@]}\"\necho \"First line: ${lines[0]}\"\n\n# Read command output into an array\nmapfile -t pids < <(pgrep nginx)\n\n# -t strips the trailing newline from each element (almost always wanted)\n# -n N  read at most N lines\n# -s N  skip first N lines\n\n# Equivalent while-read loop (for older Bash)\nlines=()\nwhile IFS= read -r line; do\n    lines+=(\"$line\")\ndone < /etc/hosts"
          }
        ]
      }
    ]
  },
  {
    "id": "bash-file-io",
    "title": "File I/O and Redirection",
    "shell": "bash",
    "icon": "doc.text",
    "topics": [
      {
        "id": "bash-io-redirection",
        "title": "Redirection Operators",
        "summary": "Route a command's stdin, stdout, and stderr to files or other streams.",
        "tags": [
          "beginner",
          "io",
          "redirection"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "Redirection changes where a command reads input from or writes output to. Standard input is file descriptor 0, stdout is 1, and stderr is 2. The shell sets these up before executing the command, so the command itself is unaware of the redirection."
          },
          {
            "type": "table",
            "label": "Redirection operators",
            "headers": [
              "Operator",
              "Effect"
            ],
            "rows": [
              [
                "> file",
                "Redirect stdout to file (truncate)"
              ],
              [
                ">> file",
                "Redirect stdout to file (append)"
              ],
              [
                "< file",
                "Read stdin from file"
              ],
              [
                "2> file",
                "Redirect stderr to file"
              ],
              [
                "2>&1",
                "Redirect stderr to wherever stdout currently points"
              ],
              [
                "&> file",
                "Redirect both stdout and stderr to file (Bash)"
              ],
              [
                "&>> file",
                "Append both stdout and stderr to file (Bash)"
              ],
              [
                "|",
                "Pipe stdout of left to stdin of right"
              ],
              [
                "2>&1 |",
                "Pipe both stdout and stderr (bash 4+: |&)"
              ]
            ]
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Redirection examples",
            "content": "# Write stdout, discard stderr\nls /tmp > files.txt 2>/dev/null\n\n# Capture both stdout and stderr\nmake &> build.log\n\n# Append to log\necho \"$(date): started\" >> run.log\n\n# Read from file\nwc -l < data.csv\n\n# Order matters: stderr to stdout, then pipe both\ncommand 2>&1 | grep ERROR"
          },
          {
            "type": "warning",
            "content": "The order of 2>&1 and > matters. command > file 2>&1 sends both to file. command 2>&1 > file sends stderr to the original stdout (e.g. terminal) and only stdout to file — a common trap."
          }
        ]
      },
      {
        "id": "bash-io-file-descriptors",
        "title": "File Descriptors",
        "summary": "Open, use, and close custom file descriptors for advanced I/O control.",
        "tags": [
          "advanced",
          "io"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "A file descriptor (FD) is a small integer referring to an open file or stream. FDs 0, 1, and 2 are standard. You can open additional FDs with exec and use them for reading or writing across many commands without reopening the file each time."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Custom file descriptors",
            "content": "# Open FD 3 for writing\nexec 3> output.txt\necho \"First line\" >&3\necho \"Second line\" >&3\nexec 3>&-          # close FD 3\n\n# Open FD 4 for reading\nexec 4< input.txt\nread -r line <&4\necho \"Read: $line\"\nexec 4<&-          # close FD 4\n\n# Swap stdout and stderr (for filtering)\nexec 3>&1          # save stdout to FD 3\nexec 1>&2          # stdout → stderr\nexec 2>&3          # stderr → old stdout\nexec 3>&-"
          }
        ]
      },
      {
        "id": "bash-io-read-lines",
        "title": "Reading Files Line by Line",
        "summary": "The correct while-read idiom for safe, whitespace-preserving file processing.",
        "tags": [
          "intermediate",
          "io",
          "best-practice"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "The idiomatic way to process a file line by line is a while loop combined with read. Three flags are essential: IFS= prevents leading/trailing whitespace trimming, -r prevents backslash interpretation, and < file provides the input without spawning a subshell."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Safe file-reading idiom",
            "content": "# Process every line, preserving whitespace\nwhile IFS= read -r line; do\n    echo \"Line: $line\"\ndone < \"input.txt\"\n\n# Read a file that may not end with a newline\nwhile IFS= read -r line || [[ -n \"$line\" ]]; do\n    process \"$line\"\ndone < \"input.txt\"\n\n# Split on a custom delimiter (e.g. colon in /etc/passwd)\nwhile IFS=: read -r user pass uid gid gecos home shell; do\n    echo \"User: $user  Shell: $shell\"\ndone < /etc/passwd\n\n# Read from a command (process substitution avoids subshell)\nwhile IFS= read -r line; do\n    echo \"$line\"\ndone < <(find . -name \"*.log\")"
          },
          {
            "type": "note",
            "content": "The || [[ -n \"$line\" ]] guard handles files that are missing a trailing newline — the final line would otherwise be silently dropped since read returns non-zero when it reaches EOF without a newline."
          }
        ]
      },
      {
        "id": "bash-io-heredoc",
        "title": "Here Documents",
        "summary": "Embed multi-line strings directly in a script without a separate file.",
        "tags": [
          "intermediate",
          "io",
          "heredoc"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "A here document feeds a multi-line string as stdin to a command. It ends at the first line that contains only the delimiter word. Use a quoted delimiter (<<'EOF') to prevent all variable and command substitution inside the body."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Here document syntax",
            "content": "# Variables and commands ARE expanded (unquoted delimiter)\ncat <<EOF\nHostname: $(hostname)\nDate:     $(date)\nUser:     $USER\nEOF\n\n# Nothing is expanded (quoted delimiter — treat as raw string)\ncat <<'EOF'\nLiteral: $USER $(date) \\n\nEOF\n\n# Indented body — <<- strips leading TABS (not spaces)\nif true; then\n\tcat <<-EOF\n\t\tThis body is indented.\n\t\tLeading tabs are stripped.\n\tEOF\nfi\n\n# Write a file\ncat > config.ini <<EOF\n[server]\nhost = localhost\nport = 8080\nEOF"
          }
        ]
      },
      {
        "id": "bash-io-herestring",
        "title": "Here Strings",
        "summary": "Feed a single string as stdin using the <<< operator.",
        "tags": [
          "intermediate",
          "io"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "A here string (<<<) passes a single word or quoted string as stdin to a command. It is a concise alternative to echo ... | command and avoids the subshell that a pipe creates."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Here string examples",
            "content": "# Feed a string to a command expecting stdin\nread -r first second <<< \"hello world\"\necho \"$first\"   # → hello\necho \"$second\"  # → world\n\n# Useful with read to split on IFS\nIFS=: read -r user uid <<< \"alice:1001\"\n\n# Check if string contains pattern\ngrep -q \"error\" <<< \"$log_line\" && echo \"Error found\"\n\n# Parse bc arithmetic\nresult=$(bc <<< \"scale=4; 22/7\")\necho \"π ≈ $result\""
          }
        ]
      },
      {
        "id": "bash-io-file-tests",
        "title": "File Test Operators",
        "summary": "Test file type, existence, and permissions before operating on paths.",
        "tags": [
          "beginner",
          "io",
          "conditional"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "File test operators are used inside [[ ]] expressions and return exit status 0 (true) or 1 (false). Always check that a path is safe to operate on before reading, writing, or deleting."
          },
          {
            "type": "table",
            "label": "File test operators",
            "headers": [
              "Operator",
              "True when path…"
            ],
            "rows": [
              [
                "-e",
                "Exists (any type)"
              ],
              [
                "-f",
                "Is a regular file"
              ],
              [
                "-d",
                "Is a directory"
              ],
              [
                "-L",
                "Is a symbolic link"
              ],
              [
                "-r",
                "Is readable by the current process"
              ],
              [
                "-w",
                "Is writable by the current process"
              ],
              [
                "-x",
                "Is executable (or searchable for directories)"
              ],
              [
                "-s",
                "Exists and has size > 0"
              ],
              [
                "-O",
                "Is owned by the effective user"
              ],
              [
                "-G",
                "Has the effective group"
              ],
              [
                "f1 -nt f2",
                "f1 is newer than f2 (modified time)"
              ],
              [
                "f1 -ot f2",
                "f1 is older than f2"
              ]
            ]
          },
          {
            "type": "code",
            "language": "bash",
            "label": "File test examples",
            "content": "config=\"/etc/app/config.yaml\"\n\n[[ -f \"$config\" ]] || { echo \"Config missing\" >&2; exit 1; }\n[[ -r \"$config\" ]] || { echo \"Config not readable\" >&2; exit 1; }\n\n# Combine with &&\n[[ -d \"$dir\" && -w \"$dir\" ]] && echo \"Writable directory\"\n\n# Newer-than check\n[[ \"build/output\" -nt \"src/main.sh\" ]] || make"
          }
        ]
      },
      {
        "id": "bash-io-mktemp",
        "title": "Temporary Files",
        "summary": "Create safe, unique temporary files and directories with mktemp.",
        "tags": [
          "intermediate",
          "io",
          "best-practice"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "Never construct temporary file names manually (e.g. /tmp/myscript.tmp) — two invocations of the same script can collide, and an attacker may exploit the predictable path. mktemp creates uniquely named files atomically."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "mktemp and cleanup",
            "content": "# Create a temp file\ntmpfile=$(mktemp)                      # e.g. /tmp/tmp.4X2kLm\ntmpdir=$(mktemp -d)                    # create a temp directory\ntmpfile=$(mktemp /tmp/report.XXXXXX)   # custom prefix and suffix\n\n# Always clean up — use a trap for robustness\ncleanup() {\n    rm -f \"$tmpfile\"\n    rm -rf \"$tmpdir\"\n}\ntrap cleanup EXIT INT TERM\n\n# Now use the temp file safely\ncommand > \"$tmpfile\"\nprocess \"$tmpfile\""
          },
          {
            "type": "note",
            "content": "Registering cleanup with trap EXIT ensures the temp files are removed even if the script is interrupted (INT) or killed (TERM). The EXIT pseudo-signal fires regardless of how the script terminates."
          }
        ]
      }
    ]
  },
  {
    "id": "bash-processes",
    "title": "Processes and Jobs",
    "shell": "bash",
    "icon": "cpu",
    "topics": [
      {
        "id": "bash-proc-background",
        "title": "Background Jobs",
        "summary": "Run commands asynchronously and manage them with the job control system.",
        "tags": [
          "intermediate",
          "processes",
          "jobs"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "Appending & to a command runs it as a background job, returning the shell prompt immediately. The shell assigns each background job a job number and records its PID in $!. Background jobs are managed with jobs, fg, bg, and wait."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Background job control",
            "content": "# Start a background job\nsleep 60 &\npid=$!          # PID of the background process\necho \"Started PID $pid\"\n\n# List active jobs\njobs            # → [1]+ Running  sleep 60\njobs -l         # include PIDs\n\n# Bring job to foreground\nfg %1           # by job number\nfg %sleep       # by command name prefix\n\n# Resume a suspended job in background\nbg %1\n\n# Suspend the current foreground job\n# (press Ctrl-Z — sends SIGTSTP)"
          },
          {
            "type": "table",
            "label": "Job control commands",
            "headers": [
              "Command",
              "Effect"
            ],
            "rows": [
              [
                "command &",
                "Start command in background"
              ],
              [
                "jobs",
                "List current shell's background jobs"
              ],
              [
                "fg %N",
                "Bring job N to foreground"
              ],
              [
                "bg %N",
                "Resume suspended job N in background"
              ],
              [
                "kill %N",
                "Send SIGTERM to job N"
              ],
              [
                "disown %N",
                "Remove job N from job table (survives shell exit)"
              ],
              [
                "wait [PID]",
                "Block until PID (or all jobs) finish"
              ]
            ]
          }
        ]
      },
      {
        "id": "bash-proc-wait",
        "title": "Parallel Execution with wait",
        "summary": "Spawn multiple background tasks and collect their results with wait.",
        "tags": [
          "intermediate",
          "processes",
          "parallel"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "The wait built-in pauses the script until one or all background jobs complete. Combining & and wait is the idiomatic Bash way to run tasks in parallel and then synchronise before continuing."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Parallel jobs pattern",
            "content": "# Launch multiple tasks in parallel\nprocess_shard() {\n    echo \"Processing shard $1…\"\n    sleep \"$1\"\n}\n\npids=()\nfor i in 1 2 3 4; do\n    process_shard \"$i\" &\n    pids+=(\"$!\")       # collect each PID\ndone\n\n# Wait for all and check exit codes\nall_ok=true\nfor pid in \"${pids[@]}\"; do\n    wait \"$pid\" || all_ok=false\ndone\n\n\"$all_ok\" && echo \"All shards succeeded\" || echo \"One or more failed\""
          }
        ]
      },
      {
        "id": "bash-proc-subshell",
        "title": "Subshells and Command Grouping",
        "summary": "Isolate side effects or group commands to share redirection.",
        "tags": [
          "intermediate",
          "processes"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "A subshell is a child process forked from the current shell. Changes to variables, the working directory, and shell options inside a subshell do not affect the parent. Command groups run in the current shell and share its environment."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Subshell vs command group",
            "content": "# Subshell: ( ) — new process, isolated environment\n(\n    cd /tmp          # does not affect parent's directory\n    export TMPVAR=1  # not visible in parent\n    ls\n)\necho \"Still in: $PWD\"   # original directory\n\n# Command group: { } — same process, shares environment\n{\n    read -r line\n    echo \"Got: $line\"\n} < file.txt           # single redirection for both commands\n\n# Redirect a group's output\n{\n    date\n    uptime\n    df -h\n} > system_report.txt"
          },
          {
            "type": "note",
            "content": "Pipelines implicitly run each stage in a subshell. With set -o lastpipe (Bash 4.2+), the last pipeline stage runs in the current shell, allowing variables set inside it to persist."
          }
        ]
      },
      {
        "id": "bash-proc-substitution",
        "title": "Process Substitution",
        "summary": "Feed command output to another command as if it were a file.",
        "tags": [
          "advanced",
          "processes"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "Process substitution — <(command) and >(command) — creates a named pipe (FIFO) or /dev/fd file descriptor and passes it as a file path. This lets you supply command output where a filename argument is required, without creating a temporary file."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Process substitution examples",
            "content": "# diff two command outputs\ndiff <(sort file1.txt) <(sort file2.txt)\n\n# while-read without a subshell (avoids variable scope loss)\nwhile IFS= read -r line; do\n    process \"$line\"\ndone < <(find . -name '*.log')\n\n# Tee to multiple processes simultaneously\ngenerate_data | tee >(gzip > data.gz) >(wc -l > count.txt) > /dev/null\n\n# Join two CSV files on a column\njoin <(sort -k1 a.csv) <(sort -k1 b.csv)"
          },
          {
            "type": "warning",
            "content": "Process substitution creates /dev/fd/N file paths, which are not real files. Commands that require seekable files (e.g. sqlite3, some archive tools) will fail. Use a temp file for those cases."
          }
        ]
      },
      {
        "id": "bash-proc-signals",
        "title": "Signals and trap",
        "summary": "Catch signals and run cleanup code when the script is interrupted or exits.",
        "tags": [
          "intermediate",
          "processes",
          "best-practice"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "Signals are asynchronous notifications sent to a process (e.g. Ctrl-C sends SIGINT). The trap built-in registers a command to run when the script receives a specified signal, enabling graceful cleanup before the script terminates."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "trap syntax and patterns",
            "content": "# Run cleanup on any exit\ncleanup() {\n    echo \"Cleaning up…\"\n    rm -f /tmp/myapp.lock\n}\ntrap cleanup EXIT\n\n# Catch multiple signals\ntrap 'echo \"Interrupted\"; exit 1' INT TERM\n\n# Reset a trap to default\ntrap - INT\n\n# Ignore a signal\ntrap '' HUP\n\n# Show all current traps\ntrap -p"
          },
          {
            "type": "table",
            "label": "Common signals",
            "headers": [
              "Signal",
              "Number",
              "Sent by / meaning"
            ],
            "rows": [
              [
                "SIGHUP",
                "1",
                "Terminal closed"
              ],
              [
                "SIGINT",
                "2",
                "Ctrl-C (keyboard interrupt)"
              ],
              [
                "SIGQUIT",
                "3",
                "Ctrl-\\ (quit with core dump)"
              ],
              [
                "SIGTERM",
                "15",
                "Polite termination request (default for kill)"
              ],
              [
                "SIGKILL",
                "9",
                "Forced kill — cannot be trapped or ignored"
              ],
              [
                "EXIT",
                "—",
                "Bash pseudo-signal: fires on any exit"
              ]
            ]
          }
        ]
      },
      {
        "id": "bash-proc-exec",
        "title": "exec — Replace the Shell Process",
        "summary": "Replace the current shell with a new command without forking.",
        "tags": [
          "advanced",
          "processes"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "exec replaces the current shell process with a new command. The shell is gone — no return. With no command, exec only manipulates file descriptors. This is useful in wrapper scripts, Docker entrypoints, and FD management."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "exec usage",
            "content": "# Replace shell with application (common in Docker entrypoints)\nexec node server.js\n# → shell process is replaced; PID stays the same\n\n# Redirect all script output to a log file\nexec > /var/log/myscript.log 2>&1\necho \"This goes to the log\"\n\n# Open and close file descriptors\nexec 3> output.txt    # open FD 3 for writing\necho \"data\" >&3\nexec 3>&-             # close FD 3\n\n# Useful in init-style wrapper: set up environment, then hand off\nsetup_env\nexec \"$@\"             # pass through all arguments as the command"
          }
        ]
      }
    ]
  },
  {
    "id": "bash-best-practices",
    "title": "Best Practices",
    "shell": "bash",
    "icon": "checkmark.seal",
    "topics": [
      {
        "id": "bash-bp-set-flags",
        "title": "Strict Mode: set -euo pipefail",
        "summary": "Three safety flags that catch common scripting errors early.",
        "tags": [
          "best-practice",
          "error-handling"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "By default, Bash ignores most errors and continues executing. Enabling strict mode makes scripts fail loudly at the earliest sign of trouble, turning silent data-loss bugs into obvious crashes."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Recommended script header",
            "content": "#!/usr/bin/env bash\nset -euo pipefail\nIFS=$'\\n\\t'   # safer word splitting\n\n# set -e  : exit immediately on non-zero exit status\n# set -u  : treat unset variables as errors\n# set -o pipefail : pipeline fails if any stage fails (not just last)"
          },
          {
            "type": "table",
            "label": "Strict mode flags explained",
            "headers": [
              "Flag",
              "Long form",
              "Effect"
            ],
            "rows": [
              [
                "-e",
                "errexit",
                "Exit on unchecked non-zero exit code"
              ],
              [
                "-u",
                "nounset",
                "Error on expansion of unset variables"
              ],
              [
                "-o pipefail",
                "—",
                "Pipeline exit = exit code of first failure"
              ],
              [
                "-x",
                "xtrace",
                "Print each command before executing (debug)"
              ]
            ]
          },
          {
            "type": "warning",
            "content": "set -e has surprising interactions: it does not apply inside conditions (if, while, until, ||, &&), or to commands followed by !. Test your error-handling logic carefully, and prefer explicit checks (|| die) for commands that legitimately may fail."
          }
        ]
      },
      {
        "id": "bash-bp-stderr",
        "title": "Error Messages to stderr",
        "summary": "Write diagnostic output to stderr so it doesn't contaminate stdout.",
        "tags": [
          "best-practice",
          "error-handling"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "Scripts that mix errors and data in stdout cause chaos when their output is piped or captured. Diagnostic messages, errors, and warnings should always go to stderr (FD 2). Define a small set of logging helpers at the top of every script."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Logging helpers",
            "content": "#!/usr/bin/env bash\nset -euo pipefail\n\n# Logging functions\nlog()   { echo \"[$(date +%H:%M:%S)] $*\" >&2; }\ninfo()  { log \"INFO  $*\"; }\nwarn()  { log \"WARN  $*\"; }\nerror() { log \"ERROR $*\"; }\ndie()   { error \"$1\"; exit \"${2:-1}\"; }\n\n# Usage\ninfo  \"Starting backup\"\nwarn  \"Config file not found — using defaults\"\ndie   \"Source directory does not exist\" 2"
          },
          {
            "type": "note",
            "content": "Redirect error output with >&2 — not to a file. The caller controls where stderr goes (e.g. 2>/dev/null or 2>&1). Let them decide; your job is only to route errors to the right stream."
          }
        ]
      },
      {
        "id": "bash-bp-defensive-expansion",
        "title": "Defensive Parameter Expansion",
        "summary": "Guard against unset variables and whitespace in paths and values.",
        "tags": [
          "best-practice",
          "parameter-expansion"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "Unquoted expansions, unset variables, and paths containing spaces are the three most common sources of shell script bugs. A handful of simple habits eliminate most of them."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Defensive expansion patterns",
            "content": "# Always quote variable expansions\nrm -rf \"$dir\"          # safe even if $dir contains spaces\ncp \"$src\" \"$dst\"\n\n# Use :- for optional variables with defaults\noutput=\"${OUTPUT_DIR:-/tmp}\"\n\n# Use :? to abort when required variables are missing\n: \"${REQUIRED_ARG:?must be set}\"\n\n# Use [[ -n ]] before using a value that must be non-empty\n[[ -n \"$name\" ]] || die \"Name is required\"\n\n# Quote glob expansions to prevent accidental expansion\npattern='*.log'\nfind /var/log -name \"$pattern\"   # correct\nfind /var/log -name $pattern     # wrong — shell expands * first"
          }
        ]
      },
      {
        "id": "bash-bp-shellcheck",
        "title": "ShellCheck",
        "summary": "A static analysis tool that catches bugs and style issues in shell scripts.",
        "tags": [
          "best-practice",
          "tooling"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "ShellCheck (shellcheck.net) analyses Bash and Dash scripts and reports common mistakes: unquoted expansions, quoting bugs, deprecated syntax, portability issues, and logic errors. Integrate it into your editor and CI pipeline."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Running ShellCheck",
            "content": "# Install\nbrew install shellcheck      # macOS\napt install shellcheck       # Debian / Ubuntu\n\n# Check a script\nshellcheck myscript.sh\n\n# Check with a specific shell dialect\nshellcheck --shell=bash myscript.sh\n\n# Exclude specific warnings (by SC code)\nshellcheck --exclude=SC2086 myscript.sh\n\n# Inline disable for a single line\nvar=$(command)   # shellcheck disable=SC2034"
          },
          {
            "type": "note",
            "content": "ShellCheck is also available as a VS Code extension (timonwong.shellcheck), a Neovim LSP source, and a GitHub Action. Running it automatically on every commit catches regressions before they reach production."
          }
        ]
      },
      {
        "id": "bash-bp-script-template",
        "title": "Script Template",
        "summary": "A production-ready skeleton covering the most important boilerplate.",
        "tags": [
          "best-practice",
          "reference"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "Starting every script from the same well-considered template builds in safety, documentation, and cleanup by default — avoiding the creeping complexity that comes from adding these things as afterthoughts."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Production script template",
            "content": "#!/usr/bin/env bash\nset -euo pipefail\nIFS=$'\\n\\t'\n\n# ─── Script info ────────────────────────────────────────────────────────────\nreadonly SCRIPT_NAME=\"$(basename \"${BASH_SOURCE[0]}\")\"\nreadonly SCRIPT_DIR=\"$(cd \"$(dirname \"${BASH_SOURCE[0]}\")\" && pwd)\"\n\n# ─── Logging ────────────────────────────────────────────────────────────────\ndie()  { echo \"[ERROR] $1\" >&2; exit \"${2:-1}\"; }\ninfo() { echo \"[INFO]  $1\" >&2; }\n\n# ─── Cleanup ────────────────────────────────────────────────────────────────\ntmpdir=$(mktemp -d)\ntrap 'rm -rf \"$tmpdir\"' EXIT\n\n# ─── Argument parsing ───────────────────────────────────────────────────────\nusage() { echo \"Usage: $SCRIPT_NAME [options] <arg>\"; exit 0; }\n\nverbose=0\nwhile [[ $# -gt 0 ]]; do\n    case \"$1\" in\n        -v|--verbose) verbose=1 ;;\n        -h|--help)    usage ;;\n        --)           shift; break ;;\n        -*)           die \"Unknown option: $1\" ;;\n        *)            break ;;\n    esac\n    shift\ndone\n\n# ─── Main ───────────────────────────────────────────────────────────────────\nmain() {\n    info \"Starting $SCRIPT_NAME\"\n    # ... your logic here\n}\n\nmain \"$@\""
          }
        ]
      },
      {
        "id": "bash-bp-naming",
        "title": "Naming Conventions",
        "summary": "Consistent naming reduces bugs and makes scripts self-documenting.",
        "tags": [
          "best-practice",
          "style"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "table",
            "label": "Shell scripting naming conventions",
            "headers": [
              "Item",
              "Convention",
              "Example"
            ],
            "rows": [
              [
                "Local variables",
                "lowercase_snake_case",
                "input_file, line_count"
              ],
              [
                "Global / exported variables",
                "UPPER_SNAKE_CASE",
                "DATABASE_URL, TIMEOUT"
              ],
              [
                "Constants (readonly)",
                "UPPER_SNAKE_CASE",
                "readonly MAX_RETRIES=3"
              ],
              [
                "Functions",
                "lowercase_snake_case",
                "parse_args(), run_checks()"
              ],
              [
                "Script files",
                "lowercase-with-hyphens.sh",
                "deploy-app.sh"
              ],
              [
                "Temp variables (loop)",
                "single short name",
                "f, line, item"
              ]
            ]
          },
          {
            "type": "note",
            "content": "Avoid single-letter variable names outside of loop counters. A name like input_path is far easier to grep for and understand six months later than a bare $f or $x."
          }
        ]
      }
    ]
  },
  {
    "id": "zsh-differences",
    "title": "Zsh vs Bash",
    "shell": "zsh",
    "icon": "arrow.left.arrow.right",
    "topics": [
      {
        "id": "zsh-diff-overview",
        "title": "Key Differences at a Glance",
        "summary": "The most important behavioural differences between Zsh and Bash.",
        "tags": [
          "beginner",
          "zsh",
          "compatibility"
        ],
        "badge": "zsh-only",
        "blocks": [
          {
            "type": "text",
            "content": "Zsh is largely compatible with Bash but has different defaults that affect scripts. Understanding these differences prevents subtle bugs when writing Zsh-specific scripts or porting Bash scripts to Zsh."
          },
          {
            "type": "table",
            "label": "Core behavioural differences",
            "headers": [
              "Feature",
              "Bash",
              "Zsh"
            ],
            "rows": [
              [
                "Array indexing",
                "0-based",
                "1-based (default)"
              ],
              [
                "Unmatched glob",
                "Passed literally",
                "Error (nomatch)"
              ],
              [
                "Word splitting on $var",
                "Yes (unless quoted)",
                "No (by default)"
              ],
              [
                "$() subshell options",
                "Inherit from parent",
                "setopt localloops etc."
              ],
              [
                "echo backslash escapes",
                "No (use printf)",
                "Yes (by default)"
              ],
              [
                "Empty string in array",
                "Preserved",
                "Ignored unless setopt"
              ],
              [
                "Brace expansion a{b,c}",
                "Yes",
                "Yes (same)"
              ]
            ]
          },
          {
            "type": "note",
            "content": "Use emulate bash or add #!/bin/bash to run Bash-compatible code inside Zsh. The emulate built-in resets Zsh to POSIX/Bash behaviour for the duration of a function or script."
          }
        ]
      },
      {
        "id": "zsh-diff-arrays",
        "title": "Array Indexing: 1-Based",
        "summary": "Zsh arrays start at index 1, unlike Bash's 0-based indexing.",
        "tags": [
          "intermediate",
          "arrays",
          "zsh"
        ],
        "badge": "zsh-only",
        "blocks": [
          {
            "type": "text",
            "content": "By default, Zsh arrays are 1-indexed. The first element is $arr[1], not $arr[0]. This is consistent with traditional Unix tool conventions and avoids the off-by-one errors common in 0-based systems. Setting KSH_ARRAYS makes Zsh behave like Bash."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Zsh vs Bash array indexing",
            "content": "# Zsh\nfruits=(apple banana cherry)\necho $fruits[1]      # → apple  (first element)\necho $fruits[-1]     # → cherry (last element)\necho $fruits[2,3]    # → banana cherry (slice)\necho $#fruits        # → 3 (length)\n\n# Enable 0-based indexing for Bash compatibility\nsetopt KSH_ARRAYS\necho $fruits[0]      # → apple (now 0-based)"
          },
          {
            "type": "warning",
            "content": "Never mix 0-based and 1-based indexing in the same script. If you source Bash scripts into Zsh, the KSH_ARRAYS option can silently break Zsh code that assumes 1-based arrays."
          }
        ]
      },
      {
        "id": "zsh-diff-globbing",
        "title": "Glob Errors and NULL_GLOB",
        "summary": "Zsh errors on unmatched globs; Bash passes them literally.",
        "tags": [
          "intermediate",
          "globbing",
          "zsh"
        ],
        "badge": "zsh-only",
        "blocks": [
          {
            "type": "text",
            "content": "When a glob pattern matches no files, Bash passes the literal pattern string to the command. Zsh raises an error (zsh: no matches found). This catches bugs but can break scripts that expect Bash's lenient behaviour."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Handling unmatched globs",
            "content": "# Error if pattern matches nothing (default Zsh behaviour)\nls *.txt     # → zsh: no matches found: *.txt\n\n# NULL_GLOB: silently expand to nothing instead of erroring\nsetopt NULL_GLOB\nls *.txt     # → no output, no error\n\n# Per-glob flag: append (N) to suppress error for one pattern\nls *.txt(N)  # N = null_glob for this expansion only\n\n# CSH_NULL_GLOB: error only if ALL patterns fail (not any)\nsetopt CSH_NULL_GLOB\nls *.txt *.md   # ok if *.md matches even if *.txt doesn't"
          }
        ]
      },
      {
        "id": "zsh-diff-word-splitting",
        "title": "Word Splitting",
        "summary": "Zsh does not split unquoted variables by default — unlike Bash.",
        "tags": [
          "intermediate",
          "zsh",
          "variables"
        ],
        "badge": "zsh-only",
        "blocks": [
          {
            "type": "text",
            "content": "In Bash, an unquoted $var is subject to word splitting and glob expansion. In Zsh, $var expands as a single word even when unquoted. This makes many scripts safer by default, but can surprise Bash users."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Word splitting comparison",
            "content": "files=\"a.txt b.txt c.txt\"\n\n# Bash: word-splits into 3 args\necho $files      # → a.txt b.txt c.txt (3 words)\n\n# Zsh: single word (no splitting)\necho $files      # → a.txt b.txt c.txt (1 word containing spaces)\n\n# Force Zsh to split on whitespace\necho ${=files}   # =modifier forces word splitting\n\n# Or use an array\nfiles=(a.txt b.txt c.txt)\necho $files      # → a.txt b.txt c.txt (array expands to 3 words)"
          },
          {
            "type": "note",
            "content": "To enable Bash-style word splitting in Zsh, use setopt SH_WORD_SPLIT. For a single expansion, use the = modifier: ${=var}. In Zsh, the idiomatic solution is to use arrays instead of space-separated strings."
          }
        ]
      },
      {
        "id": "zsh-diff-setopt-shopt",
        "title": "setopt vs shopt",
        "summary": "Zsh uses setopt/unsetopt where Bash uses shopt.",
        "tags": [
          "intermediate",
          "zsh",
          "options"
        ],
        "badge": "zsh-only",
        "blocks": [
          {
            "type": "text",
            "content": "Both shells have commands for toggling optional behaviour, but with different syntax. Zsh's setopt is also exposed via set -o and through ALL_CAPS option names that can be used directly."
          },
          {
            "type": "table",
            "label": "Common option equivalents",
            "headers": [
              "Bash (shopt)",
              "Zsh (setopt)",
              "Effect"
            ],
            "rows": [
              [
                "shopt -s nullglob",
                "setopt NULL_GLOB",
                "No error on unmatched glob"
              ],
              [
                "shopt -s globstar",
                "setopt GLOB_STAR",
                "** matches recursively"
              ],
              [
                "shopt -s nocaseglob",
                "setopt NO_CASE_GLOB",
                "Case-insensitive globbing"
              ],
              [
                "shopt -s extglob",
                "setopt EXTENDED_GLOB",
                "Extended pattern operators"
              ],
              [
                "shopt -s histappend",
                "setopt APPEND_HISTORY",
                "Append to, not overwrite, history"
              ],
              [
                "set -e",
                "setopt ERR_EXIT",
                "Exit on error"
              ],
              [
                "set -u",
                "setopt NOUNSET",
                "Error on unset variables"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "zsh-globbing",
    "title": "Zsh Globbing",
    "shell": "zsh",
    "icon": "asterisk",
    "topics": [
      {
        "id": "zsh-glob-extended",
        "title": "Extended Glob Operators",
        "summary": "Zsh's EXTENDED_GLOB option adds powerful pattern operators beyond basic wildcards.",
        "tags": [
          "intermediate",
          "globbing",
          "zsh"
        ],
        "badge": "zsh-only",
        "blocks": [
          {
            "type": "text",
            "content": "With setopt EXTENDED_GLOB enabled, Zsh supports additional pattern operators that go far beyond the standard *, ?, and []. These are similar to extended globs in Bash (shopt -s extglob) but with different syntax."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Enable extended globbing",
            "content": "setopt EXTENDED_GLOB\n# Or add to ~/.zshrc for permanent effect"
          },
          {
            "type": "table",
            "label": "Extended glob operators",
            "headers": [
              "Pattern",
              "Matches"
            ],
            "rows": [
              [
                "^pattern",
                "Anything NOT matching pattern"
              ],
              [
                "pattern1~pattern2",
                "Matches pattern1 but NOT pattern2"
              ],
              [
                "(pat1|pat2)",
                "Either pattern1 or pattern2"
              ],
              [
                "#pattern",
                "Zero or more occurrences of pattern"
              ],
              [
                "##pattern",
                "One or more occurrences of pattern"
              ],
              [
                "pat1&pat2",
                "Matches both pattern1 AND pattern2"
              ]
            ]
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Extended glob examples",
            "content": "setopt EXTENDED_GLOB\n\nls ^*.txt          # all files EXCEPT .txt\nls *.txt~backup.*  # .txt files, but NOT backup.*\nls (*.txt|*.md)    # .txt OR .md files\nls *.(txt|md|sh)   # same, trailing extension style\nrm -f **/*.o       # all .o files recursively"
          }
        ]
      },
      {
        "id": "zsh-glob-recursive",
        "title": "Recursive Globbing with **",
        "summary": "Match files in all subdirectories at any depth.",
        "tags": [
          "intermediate",
          "globbing",
          "zsh"
        ],
        "badge": "zsh-only",
        "blocks": [
          {
            "type": "text",
            "content": "The ** glob matches zero or more path components, enabling recursive directory traversal without find. It requires GLOB_STAR or EXTENDED_GLOB to be set. This is equivalent to Bash's globstar (shopt -s globstar)."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Recursive glob examples",
            "content": "setopt GLOB_STAR   # or setopt EXTENDED_GLOB\n\n# All .log files in any subdirectory\nls **/*.log\n\n# All files named README\nls **/README\n\n# All .sh files, starting from current directory\nwc -l **/*.sh\n\n# Pass to commands — safer than $(find ...)\ngrep -l 'TODO' **/*.swift\n\n# **/ matches directories only\nls -d **/node_modules/   # find all node_modules dirs"
          }
        ]
      },
      {
        "id": "zsh-glob-qualifiers",
        "title": "Glob Qualifiers",
        "summary": "Filter glob results by file type, size, permission, and modification time.",
        "tags": [
          "advanced",
          "globbing",
          "zsh"
        ],
        "badge": "zsh-only",
        "blocks": [
          {
            "type": "text",
            "content": "Glob qualifiers are appended in parentheses after a glob pattern and filter the expansion by file attributes. They are a concise, powerful alternative to find -type, find -size, and similar predicates."
          },
          {
            "type": "table",
            "label": "Common glob qualifiers",
            "headers": [
              "Qualifier",
              "Matches"
            ],
            "rows": [
              [
                "(.) ",
                "Regular files only"
              ],
              [
                "(/)",
                "Directories only"
              ],
              [
                "(@)",
                "Symbolic links only"
              ],
              [
                "(*)",
                "Executable files"
              ],
              [
                "(r)",
                "Readable by owner"
              ],
              [
                "(w)",
                "Writable by owner"
              ],
              [
                "(L+N)",
                "Files larger than N bytes"
              ],
              [
                "(L-N)",
                "Files smaller than N bytes"
              ],
              [
                "(mN)",
                "Modified exactly N days ago"
              ],
              [
                "(m-N)",
                "Modified less than N days ago"
              ],
              [
                "(om)",
                "Sort by modification time"
              ],
              [
                "(Oa)",
                "Reverse alphabetical sort"
              ],
              [
                "[1]",
                "First match only"
              ],
              [
                "[1,3]",
                "First three matches"
              ]
            ]
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Glob qualifier examples",
            "content": "ls *(.)          # regular files only\nls -d *(/)       # directories only\nls *(@)          # symlinks only\nls *(*)          # executable files\nls *(L+1M)       # files larger than 1 MB\nls *(m-7)        # modified in last 7 days\nls *(om[1,5])    # 5 most recently modified files\nrm **/*.pyc(.)   # remove only regular .pyc files (not dirs named .pyc)"
          }
        ]
      },
      {
        "id": "zsh-glob-sort",
        "title": "Sorting Glob Results",
        "summary": "Control the order of glob expansion with sort qualifiers.",
        "tags": [
          "intermediate",
          "globbing",
          "zsh"
        ],
        "badge": "zsh-only",
        "blocks": [
          {
            "type": "text",
            "content": "Zsh can sort glob results by various criteria using qualifiers — no external sort command needed. This is especially useful for processing logs or builds where order matters."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Sort qualifier examples",
            "content": "# Sort by modification time (newest first)\nls *(Om)      # O = reverse sort, m = by modification time\n\n# Sort by modification time (oldest first)\nls *(om)\n\n# Sort by size (largest first)\nls *(OL)\n\n# Alphabetical (default)\nls *\n\n# Reverse alphabetical\nls *(Oa)\n\n# Practical: process logs from oldest to newest\nfor log in logs/*.log(om); do\n    process \"$log\"\ndone\n\n# Get the most recently modified file\nnewest=( *(Om[1]) )\necho \"Newest: $newest\""
          }
        ]
      },
      {
        "id": "zsh-glob-flags",
        "title": "Glob Flags",
        "summary": "Modify matching behaviour with inline flags like case-insensitive or substring matching.",
        "tags": [
          "advanced",
          "globbing",
          "zsh"
        ],
        "badge": "zsh-only",
        "blocks": [
          {
            "type": "text",
            "content": "Glob flags are placed inside (#...) at the start of a pattern and change how the match is performed. The most useful is (#i) for case-insensitive matching."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Glob flag examples",
            "content": "setopt EXTENDED_GLOB\n\n# Case-insensitive matching\nls (#i)*.jpg     # matches .jpg, .JPG, .Jpg\nls (#i)readme*   # matches README, readme, ReadMe\n\n# Case-insensitive for the rest of the pattern\nls (#i)my(*).txt\n\n# Multibyte-aware match\nls (#m)*.txt\n\n# Approximate matching (1 error allowed)\nls (#a1)colour    # also matches color"
          }
        ]
      }
    ]
  },
  {
    "id": "zsh-arrays",
    "title": "Zsh Arrays",
    "shell": "zsh",
    "icon": "square.stack",
    "topics": [
      {
        "id": "zsh-arr-declaration",
        "title": "Array Declaration and Access",
        "summary": "Zsh arrays are 1-indexed, support negative indices, and work without declare.",
        "tags": [
          "intermediate",
          "arrays",
          "zsh"
        ],
        "badge": "zsh-only",
        "blocks": [
          {
            "type": "text",
            "content": "Zsh arrays are first-class values — no declare -a needed. Indices start at 1 by default. Negative indices count from the end: $arr[-1] is the last element. Arrays expand to their elements cleanly without quoting gymnastics."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Array basics",
            "content": "# Declaration — parentheses, no commas\nfruits=(apple banana cherry date)\n\n# Access by index (1-based)\necho $fruits[1]       # → apple\necho $fruits[3]       # → cherry\necho $fruits[-1]      # → date (last)\necho $fruits[-2]      # → cherry (second to last)\n\n# Length\necho $#fruits         # → 4\n\n# All elements\necho $fruits          # → apple banana cherry date\necho ${fruits[@]}     # → same (POSIX-compatible form)\n\n# Append\nfruits+=(elderberry)\n\n# Replace element\nfruits[2]=\"blueberry\"\n\n# Delete element (shifts subsequent elements)\nfruits[2]=()          # remove index 2"
          },
          {
            "type": "note",
            "content": "In Zsh, $arr expands the array naturally without quoting. However, use \"${arr[@]}\" when passing arrays to functions that also accept Bash arrays, for maximum compatibility."
          }
        ]
      },
      {
        "id": "zsh-arr-slices",
        "title": "Array Slices and Ranges",
        "summary": "Extract subsections of an array using Zsh's intuitive slice syntax.",
        "tags": [
          "intermediate",
          "arrays",
          "zsh"
        ],
        "badge": "zsh-only",
        "blocks": [
          {
            "type": "text",
            "content": "Zsh supports array slicing with a start,end range directly in the subscript. Both positive (from start) and negative (from end) indices work in slices."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Slicing arrays",
            "content": "letters=(a b c d e f g)\n\necho $letters[2,4]     # → b c d  (index 2 through 4)\necho $letters[3,-1]    # → c d e f g (index 3 to last)\necho $letters[-3,-1]   # → e f g  (last 3 elements)\necho $letters[1,2]     # → a b\n\n# Slice with step (every other element)\necho $letters[1,-1:2]  # → a c e g  (every 2nd element)\n\n# Assign to a slice\nletters[2,3]=(X Y)\necho $letters          # → a X Y d e f g"
          }
        ]
      },
      {
        "id": "zsh-arr-assoc",
        "title": "Associative Arrays",
        "summary": "Declare hash maps with typeset -A and access values by string key.",
        "tags": [
          "intermediate",
          "arrays",
          "zsh"
        ],
        "badge": "zsh-only",
        "blocks": [
          {
            "type": "text",
            "content": "Zsh associative arrays use typeset -A (or declare -A for Bash compatibility). Key syntax is similar to Bash, but Zsh additionally supports the (k) and (v) parameter flags for extracting keys and values."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Associative array usage",
            "content": "typeset -A config\n\nconfig[host]=\"localhost\"\nconfig[port]=\"5432\"\nconfig[name]=\"mydb\"\n\n# Access\necho $config[host]        # → localhost\n\n# All keys (k flag)\necho ${(k)config}         # → host port name\n\n# All values (v flag)\necho ${(v)config}         # → localhost 5432 mydb\n\n# Key-value pairs\nfor key in ${(k)config}; do\n    echo \"$key = $config[$key]\"\ndone\n\n# Check key existence\n[[ -v config[port] ]] && echo \"port is set\"\n\n# Inline bulk declaration\ntypeset -A colours=([red]=danger [green]=ok [yellow]=warn)"
          }
        ]
      },
      {
        "id": "zsh-arr-expansion-flags",
        "title": "Array Expansion Flags",
        "summary": "Transform arrays inline using Zsh's powerful (flag) parameter expansion syntax.",
        "tags": [
          "advanced",
          "arrays",
          "zsh"
        ],
        "badge": "zsh-only",
        "blocks": [
          {
            "type": "text",
            "content": "Zsh's parameter expansion flags — placed in (uppercase) inside ${(flags)var} — can transform, sort, join, split, and filter arrays without external commands. They are one of Zsh's most distinctive features."
          },
          {
            "type": "table",
            "label": "Common expansion flags",
            "headers": [
              "Flag",
              "Effect"
            ],
            "rows": [
              [
                "(U)",
                "Uppercase all characters"
              ],
              [
                "(L)",
                "Lowercase all characters"
              ],
              [
                "(o)",
                "Sort elements alphabetically"
              ],
              [
                "(O)",
                "Sort elements in reverse"
              ],
              [
                "(u)",
                "Remove duplicate elements (unique)"
              ],
              [
                "(j:sep:)",
                "Join array elements with separator"
              ],
              [
                "(s:sep:)",
                "Split string on separator into array"
              ],
              [
                "(f)",
                "Split on newlines (one line per element)"
              ],
              [
                "(k)",
                "Keys of associative array"
              ],
              [
                "(v)",
                "Values of associative array"
              ]
            ]
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Expansion flag examples",
            "content": "words=(banana apple cherry apple date)\n\necho ${(o)words}          # → apple apple banana cherry date (sorted)\necho ${(ou)words}         # → apple banana cherry date (sorted + unique)\necho ${(U)words}          # → BANANA APPLE CHERRY APPLE DATE (uppercase)\n\n# Join an array into a string\npath_parts=(usr local bin)\necho ${(j:/:)path_parts}  # → usr/local/bin\n\n# Split a string into an array\ncsv=\"a,b,c,d\"\nparts=(${(s:,:)csv})\necho $#parts              # → 4\necho $parts[2]            # → b\n\n# Lines of a file into an array\nlines=(${(f)\"$(cat /etc/hosts)\"})"
          }
        ]
      },
      {
        "id": "zsh-arr-iteration",
        "title": "Iterating Arrays",
        "summary": "Loop over elements, indices, and key-value pairs cleanly in Zsh.",
        "tags": [
          "intermediate",
          "arrays",
          "zsh"
        ],
        "badge": "zsh-only",
        "blocks": [
          {
            "type": "code",
            "language": "bash",
            "label": "Array iteration patterns",
            "content": "fruits=(apple banana cherry)\n\n# Iterate elements\nfor fruit in $fruits; do\n    echo \"Fruit: $fruit\"\ndone\n\n# Iterate with index\nfor i in {1..$#fruits}; do\n    echo \"$i: $fruits[$i]\"\ndone\n\n# Iterate associative array\ntypeset -A ages=([Alice]=30 [Bob]=25)\nfor name in ${(k)ages}; do\n    echo \"$name is $ages[$name]\"\ndone\n\n# Apply a transformation to every element\nuppercase_fruits=(${(U)fruits})\necho $uppercase_fruits   # → APPLE BANANA CHERRY"
          }
        ]
      }
    ]
  },
  {
    "id": "zsh-config",
    "title": "Zsh Configuration",
    "shell": "zsh",
    "icon": "slider.horizontal.3",
    "topics": [
      {
        "id": "zsh-cfg-startup-files",
        "title": "Startup Files",
        "summary": "Which configuration files Zsh reads, and when each one is loaded.",
        "tags": [
          "beginner",
          "zsh",
          "configuration"
        ],
        "badge": "zsh-only",
        "blocks": [
          {
            "type": "text",
            "content": "Zsh loads a series of startup files depending on whether the shell is a login shell, an interactive shell, or a script. Understanding this hierarchy prevents duplicate setup and slow startup times."
          },
          {
            "type": "table",
            "label": "Zsh startup file order",
            "headers": [
              "File",
              "When loaded"
            ],
            "rows": [
              [
                "/etc/zshenv",
                "Always — every Zsh invocation"
              ],
              [
                "~/.zshenv",
                "Always — every Zsh invocation"
              ],
              [
                "/etc/zprofile",
                "Login shells only"
              ],
              [
                "~/.zprofile",
                "Login shells only"
              ],
              [
                "/etc/zshrc",
                "Interactive shells only"
              ],
              [
                "~/.zshrc",
                "Interactive shells only"
              ],
              [
                "/etc/zlogin",
                "Login shells, after zshrc"
              ],
              [
                "~/.zlogin",
                "Login shells, after zshrc"
              ]
            ]
          },
          {
            "type": "note",
            "content": "Put environment variables (PATH, EDITOR, etc.) in ~/.zshenv so they are available everywhere — including non-interactive scripts. Put aliases, functions, and prompt settings in ~/.zshrc, which only loads for interactive use. Heavy setup (compinit, rbenv init, etc.) belongs in ~/.zshrc, not ~/.zshenv."
          }
        ]
      },
      {
        "id": "zsh-cfg-history",
        "title": "History Configuration",
        "summary": "Configure history size, sharing, deduplication, and timestamps.",
        "tags": [
          "intermediate",
          "zsh",
          "configuration"
        ],
        "badge": "zsh-only",
        "blocks": [
          {
            "type": "text",
            "content": "Zsh's history system is highly configurable. The recommended setup increases history size, appends rather than overwrites, and removes duplicate entries — making your command history a useful, searchable record."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Recommended history settings in ~/.zshrc",
            "content": "# File and size\nHISTFILE=~/.zsh_history\nHISTSIZE=50000          # in-memory history size\nSAVEHIST=50000          # on-disk history size\n\n# Options\nsetopt SHARE_HISTORY         # share history across all open sessions\nsetopt HIST_EXPIRE_DUPS_FIRST  # expire duplicate entries first\nsetopt HIST_IGNORE_DUPS      # don't record a duplicate of the last command\nsetopt HIST_IGNORE_ALL_DUPS  # remove earlier duplicates from list\nsetopt HIST_FIND_NO_DUPS     # don't show duplicates when searching\nsetopt HIST_IGNORE_SPACE     # don't save commands prefixed with a space\nsetopt HIST_SAVE_NO_DUPS     # don't write duplicates to the history file\nsetopt HIST_REDUCE_BLANKS    # remove extra blanks from commands\nsetopt EXTENDED_HISTORY      # record timestamp with each command"
          },
          {
            "type": "note",
            "content": "Commands prefixed with a space (e.g.  secret-command) are not saved to history when HIST_IGNORE_SPACE is set. Useful for commands containing passwords or tokens."
          }
        ]
      },
      {
        "id": "zsh-cfg-completion",
        "title": "Completion System",
        "summary": "Initialise and configure Zsh's powerful tab-completion engine.",
        "tags": [
          "intermediate",
          "zsh",
          "configuration"
        ],
        "badge": "zsh-only",
        "blocks": [
          {
            "type": "text",
            "content": "Zsh's completion system (compsys) is among its most powerful features. It must be initialised with compinit. Completion functions (named _command) live in fpath directories and provide context-aware completions."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Completion setup in ~/.zshrc",
            "content": "# Add custom completion directories to fpath\nfpath=(~/.zsh/completions $fpath)\n\n# Initialise the completion system\nautoload -Uz compinit\ncompinit\n\n# Speed up compinit with cached .zcompdump (only rebuild once a day)\nautoload -Uz compinit\nif [[ -n ~/.zcompdump(#qN.mh+24) ]]; then\n    compinit\nelse\n    compinit -C\nfi\n\n# Recommended completion styles\nzstyle ':completion:*' menu select           # navigable menu\nzstyle ':completion:*' matcher-list 'm:{a-z}={A-Z}'  # case-insensitive\nzstyle ':completion:*' list-colors \"${(s.:.)LS_COLORS}\"  # coloured files\nzstyle ':completion:*:*:kill:*' menu yes select  # interactive kill"
          }
        ]
      },
      {
        "id": "zsh-cfg-prompt",
        "title": "Prompt Customisation",
        "summary": "Set PROMPT and RPROMPT using Zsh's prompt expansion system.",
        "tags": [
          "intermediate",
          "zsh",
          "configuration"
        ],
        "badge": "zsh-only",
        "blocks": [
          {
            "type": "text",
            "content": "Zsh prompts use PROMPT (or PS1) for the left prompt and RPROMPT for the optional right prompt. Prompt expansion is enabled with PROMPT_SUBST, allowing dynamic content like git branch, exit status, or execution time."
          },
          {
            "type": "table",
            "label": "Prompt expansion codes",
            "headers": [
              "Code",
              "Expands to"
            ],
            "rows": [
              [
                "%n",
                "Username"
              ],
              [
                "%m",
                "Hostname (up to first dot)"
              ],
              [
                "%M",
                "Full hostname"
              ],
              [
                "%~",
                "Current directory (~ abbreviated)"
              ],
              [
                "%d or %/",
                "Current directory (full path)"
              ],
              [
                "%?",
                "Exit status of last command"
              ],
              [
                "%#",
                "# if root, % otherwise"
              ],
              [
                "%D{fmt}",
                "Date/time with strftime format"
              ],
              [
                "%F{colour}",
                "Set foreground colour"
              ],
              [
                "%f",
                "Reset foreground colour"
              ],
              [
                "%B / %b",
                "Bold on / off"
              ]
            ]
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Prompt examples",
            "content": "# Simple coloured prompt\nPROMPT='%F{cyan}%n@%m%f:%F{yellow}%~%f %# '\n\n# Prompt with exit status indicator\nPROMPT='%(?.%F{green}✓.%F{red}✗)%f %F{blue}%~%f $ '\n\n# Dynamic prompt with git branch (requires vcs_info)\nautoload -Uz vcs_info\nprecmd() { vcs_info }\nzstyle ':vcs_info:git:*' formats '%F{magenta}(%b)%f '\nsetopt PROMPT_SUBST\nPROMPT='%F{cyan}%~%f ${vcs_info_msg_0_}%# '"
          }
        ]
      },
      {
        "id": "zsh-cfg-key-bindings",
        "title": "Key Bindings",
        "summary": "Configure keyboard shortcuts with bindkey using vi or emacs mode.",
        "tags": [
          "intermediate",
          "zsh",
          "configuration"
        ],
        "badge": "zsh-only",
        "blocks": [
          {
            "type": "text",
            "content": "Zsh supports two line editing modes: emacs (default) and vi. The bindkey command assigns key sequences to editor functions. Custom bindings are added in ~/.zshrc."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Key binding configuration",
            "content": "# Set editing mode\nbindkey -e   # emacs mode (default)\nbindkey -v   # vi mode\n\n# Common useful bindings\nbindkey '^[[A' history-search-backward  # Up arrow: search history\nbindkey '^[[B' history-search-forward   # Down arrow\nbindkey '^[[H' beginning-of-line        # Home key\nbindkey '^[[F' end-of-line              # End key\nbindkey '^[[3~' delete-char             # Delete key\nbindkey '^R' history-incremental-search-backward  # Ctrl-R\n\n# Show all current bindings\nbindkey\n\n# Show binding for a specific key\nbindkey '^A'"
          }
        ]
      },
      {
        "id": "zsh-cfg-options",
        "title": "Useful setopt Options",
        "summary": "A curated list of Zsh options worth enabling in most configurations.",
        "tags": [
          "intermediate",
          "zsh",
          "configuration"
        ],
        "badge": "zsh-only",
        "blocks": [
          {
            "type": "table",
            "label": "Recommended setopt options",
            "headers": [
              "Option",
              "Effect"
            ],
            "rows": [
              [
                "AUTO_CD",
                "Type a directory name to cd into it"
              ],
              [
                "CDPATH_DIRS",
                "Tab-complete CDPATH entries"
              ],
              [
                "CORRECT",
                "Suggest corrections for typos"
              ],
              [
                "CORRECT_ALL",
                "Correct all words in a command"
              ],
              [
                "EXTENDED_GLOB",
                "Enable extended glob patterns"
              ],
              [
                "GLOB_DOTS",
                "Globs can match dotfiles"
              ],
              [
                "INTERACTIVE_COMMENTS",
                "Allow # comments in interactive shell"
              ],
              [
                "NO_BEEP",
                "Suppress terminal bell"
              ],
              [
                "NULL_GLOB",
                "Silently ignore unmatched globs"
              ],
              [
                "PUSHD_IGNORE_DUPS",
                "Don't push duplicate dirs onto stack"
              ],
              [
                "PUSHD_SILENT",
                "Don't print directory stack on pushd/popd"
              ]
            ]
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Recommended options block for ~/.zshrc",
            "content": "# Navigation\nsetopt AUTO_CD\nsetopt AUTO_PUSHD\nsetopt PUSHD_IGNORE_DUPS\nsetopt PUSHD_SILENT\n\n# Globbing\nsetopt EXTENDED_GLOB\nsetopt GLOB_DOTS\nsetopt NULL_GLOB\n\n# Interactive quality-of-life\nsetopt CORRECT\nsetopt INTERACTIVE_COMMENTS\nsetopt NO_BEEP\n\n# Disable annoying behaviours\nunsetopt FLOW_CONTROL        # disable Ctrl-S / Ctrl-Q terminal freeze\nunsetopt HIST_BEEP"
          }
        ]
      }
    ]
  },
  {
    "id": "commands-text-processing",
    "title": "Text Processing",
    "shell": "both",
    "icon": "text.magnifyingglass",
    "topics": [
      {
        "id": "cmd-grep",
        "title": "grep — Search for Patterns",
        "summary": "Find lines matching a pattern in files or standard input.",
        "tags": [
          "beginner",
          "text",
          "search"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "grep prints lines from its input that match a pattern. By default patterns are Basic Regular Expressions (BRE). Use -E for Extended Regular Expressions (ERE) or -P for Perl-Compatible Regular Expressions (PCRE). Use -F for fixed-string (literal) matching."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Common grep usage",
            "content": "# Basic search\ngrep \"error\" logfile.txt\n\n# Case-insensitive\ngrep -i \"Error\" logfile.txt\n\n# Extended regex\ngrep -E \"^[0-9]{4}-\" dates.txt\n\n# Fixed string (no regex interpretation)\ngrep -F \"version 1.0.0\" CHANGELOG\n\n# Recursive search through directories\ngrep -r \"TODO\" ./src/\n\n# Count matches\ngrep -c \"failure\" results.log\n\n# Show only filenames with matches\ngrep -l \"import\" *.py\n\n# Invert match (lines NOT containing pattern)\ngrep -v \"^#\" /etc/hosts\n\n# Show N lines of context around match\ngrep -A2 -B1 \"ERROR\" app.log    # 2 after, 1 before\ngrep -C3 \"CRITICAL\" app.log     # 3 both sides"
          },
          {
            "type": "table",
            "label": "Key grep flags",
            "headers": [
              "Flag",
              "Effect"
            ],
            "rows": [
              [
                "-i",
                "Case-insensitive matching"
              ],
              [
                "-v",
                "Invert: print non-matching lines"
              ],
              [
                "-r / -R",
                "Recurse into directories"
              ],
              [
                "-l",
                "Print filenames only"
              ],
              [
                "-n",
                "Prefix each line with line number"
              ],
              [
                "-c",
                "Print count of matching lines per file"
              ],
              [
                "-E",
                "Extended Regular Expressions"
              ],
              [
                "-F",
                "Fixed strings (no regex)"
              ],
              [
                "-q",
                "Quiet — exit status only, no output"
              ],
              [
                "-o",
                "Print only the matched portion"
              ]
            ]
          }
        ]
      },
      {
        "id": "cmd-sed",
        "title": "sed — Stream Editor",
        "summary": "Transform text line by line using substitution, deletion, and insertion commands.",
        "tags": [
          "intermediate",
          "text",
          "transform"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "sed processes text one line at a time from a file or stdin and applies editing commands. Its most-used command is s (substitute). sed can edit files in-place with -i, or print to stdout for use in pipelines."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "sed command examples",
            "content": "# Substitute first occurrence per line\nsed 's/foo/bar/' file.txt\n\n# Substitute all occurrences (g flag)\nsed 's/foo/bar/g' file.txt\n\n# Case-insensitive substitution (I flag)\nsed 's/error/ERROR/gI' file.txt\n\n# In-place edit (macOS requires -i '' for no backup)\nsed -i 's/old/new/g' file.txt          # Linux\nsed -i '' 's/old/new/g' file.txt       # macOS\n\n# Delete lines matching a pattern\nsed '/^#/d' config.txt     # delete comment lines\nsed '/^$/d' file.txt       # delete blank lines\n\n# Print only lines matching a pattern\nsed -n '/ERROR/p' logfile\n\n# Print lines 5–10\nsed -n '5,10p' file.txt\n\n# Insert a line before/after a match\nsed '/pattern/i\\New line before' file\nsed '/pattern/a\\New line after' file"
          },
          {
            "type": "note",
            "content": "macOS ships with BSD sed, which differs from GNU sed in small ways. The -i flag requires an explicit suffix argument (use '' for no backup). For scripts that must work on both, consider using perl -pi -e instead."
          }
        ]
      },
      {
        "id": "cmd-awk",
        "title": "awk — Text Processing Language",
        "summary": "Process columnar text, perform arithmetic, and produce reports.",
        "tags": [
          "intermediate",
          "text",
          "awk"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "awk is a full programming language specialised for text processing. It reads input line by line, splits each line into fields ($1, $2, …), and runs a program consisting of pattern-action pairs. It excels at processing structured text and CSV-like data."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "awk fundamentals",
            "content": "# Print a specific field (default delimiter: whitespace)\nawk '{print $1}' file.txt         # first field\nawk '{print $NF}' file.txt        # last field\nawk '{print $1, $3}' file.txt     # fields 1 and 3\n\n# Custom delimiter\nawk -F: '{print $1, $3}' /etc/passwd    # colon-delimited\nawk -F, '{print $2}' data.csv           # CSV\n\n# Pattern filter — run action only on matching lines\nawk '/ERROR/ {print $0}' app.log\nawk '$3 > 100 {print $1, $3}' data.txt  # numeric comparison\n\n# Built-in variables\nawk 'END {print NR}' file.txt    # NR = total line count\nawk '{sum += $2} END {print sum}' data.txt  # sum column 2\n\n# Reformat output\nawk '{printf \"%-20s %5d\\n\", $1, $2}' data.txt\n\n# Field separator for output (OFS)\nawk -F: 'BEGIN{OFS=\",\"} {print $1,$3,$6}' /etc/passwd"
          },
          {
            "type": "table",
            "label": "awk built-in variables",
            "headers": [
              "Variable",
              "Meaning"
            ],
            "rows": [
              [
                "$0",
                "The entire current line"
              ],
              [
                "$1 … $NF",
                "Individual fields"
              ],
              [
                "NF",
                "Number of fields in current line"
              ],
              [
                "NR",
                "Current line number (across all files)"
              ],
              [
                "FNR",
                "Current line number within current file"
              ],
              [
                "FS",
                "Input field separator (default: whitespace)"
              ],
              [
                "OFS",
                "Output field separator (default: space)"
              ],
              [
                "RS",
                "Input record separator (default: newline)"
              ],
              [
                "ORS",
                "Output record separator (default: newline)"
              ]
            ]
          }
        ]
      },
      {
        "id": "cmd-cut",
        "title": "cut — Extract Fields and Columns",
        "summary": "Extract specific columns from delimited text or fixed-width records.",
        "tags": [
          "beginner",
          "text",
          "columns"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "cut is simpler than awk for straightforward column extraction. It operates on either a delimiter (-d) with field numbers (-f), or on byte/character positions (-b/-c). It does not support whitespace as a variable-width delimiter — use awk for that."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "cut examples",
            "content": "# Extract field(s) by delimiter\ncut -d: -f1 /etc/passwd          # first colon-delimited field\ncut -d, -f2,4 data.csv          # fields 2 and 4\ncut -d: -f1-3 /etc/passwd       # fields 1 through 3\ncut -d: -f3- /etc/passwd        # field 3 to end\n\n# Extract by character position\ncut -c1-10 file.txt              # characters 1–10\ncut -c5 file.txt                 # character 5 only\n\n# Suppress lines with no delimiter\ncut -d: -f1 -s /etc/passwd      # skip lines missing ':'"
          }
        ]
      },
      {
        "id": "cmd-sort-uniq",
        "title": "sort and uniq",
        "summary": "Sort lines and deduplicate consecutive identical lines.",
        "tags": [
          "beginner",
          "text",
          "sort"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "sort reorders lines; uniq collapses consecutive duplicate lines. They are almost always used together: sort | uniq. GNU sort can also deduplicate directly with -u."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "sort and uniq usage",
            "content": "# Basic sort\nsort file.txt\n\n# Reverse sort\nsort -r file.txt\n\n# Numeric sort (not lexicographic)\nsort -n numbers.txt\n\n# Sort by field (e.g. field 2, colon-delimited)\nsort -t: -k2 /etc/passwd\n\n# Sort by field 3 numerically, then field 1 alphabetically\nsort -t, -k3,3n -k1,1 data.csv\n\n# Sort and remove duplicates\nsort -u words.txt\n\n# uniq — count occurrences\nsort words.txt | uniq -c          # count each unique word\nsort words.txt | uniq -c | sort -rn  # most frequent first\n\n# Only duplicate lines\nsort file.txt | uniq -d\n\n# Only unique lines (appearing exactly once)\nsort file.txt | uniq -u"
          }
        ]
      },
      {
        "id": "cmd-tr",
        "title": "tr — Translate or Delete Characters",
        "summary": "Replace, squeeze, or delete individual characters in a stream.",
        "tags": [
          "beginner",
          "text",
          "transform"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "tr translates or deletes characters from stdin to stdout. Unlike sed, it does not understand lines or fields — it operates purely on individual characters. It accepts character classes like [:upper:] and [:digit:]."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "tr examples",
            "content": "# Uppercase to lowercase\necho \"HELLO\" | tr '[:upper:]' '[:lower:]'   # → hello\n\n# Replace spaces with newlines (one word per line)\necho \"one two three\" | tr ' ' '\\n'\n\n# Delete characters\necho \"h3ll0 w0rld\" | tr -d '[:digit:]'    # → hell wrld\n\n# Squeeze repeated characters\necho \"aabbccdd\" | tr -s 'a-z'             # → abcd\necho \"a    b\" | tr -s ' '                  # → a b (single spaces)\n\n# Delete everything except digits\necho \"Price: $42.50\" | tr -dc '[:digit:]'  # → 4250\n\n# Rot13 (simple substitution cipher)\necho \"Hello\" | tr 'A-Za-z' 'N-ZA-Mn-za-m'"
          }
        ]
      },
      {
        "id": "cmd-head-tail",
        "title": "head and tail",
        "summary": "Read the first or last N lines of a file, or follow live output.",
        "tags": [
          "beginner",
          "text",
          "files"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "code",
            "language": "bash",
            "label": "head and tail usage",
            "content": "# First/last 10 lines (default)\nhead file.txt\ntail file.txt\n\n# Specific number of lines\nhead -n 5 file.txt\ntail -n 20 file.txt\n\n# All but first N lines\ntail -n +3 file.txt     # skip header rows: output starts at line 3\n\n# First N bytes\nhead -c 512 binary.bin\n\n# Follow a log file in real time\ntail -f /var/log/app.log\n\n# Follow with retry (reopen if file disappears and reappears)\ntail -F /var/log/app.log\n\n# Follow multiple files\ntail -f app.log error.log"
          }
        ]
      }
    ]
  },
  {
    "id": "commands-file",
    "title": "File Commands",
    "shell": "both",
    "icon": "folder.badge.gearshape",
    "topics": [
      {
        "id": "cmd-find",
        "title": "find — Search the Filesystem",
        "summary": "Locate files by name, type, size, date, and permissions; run actions on results.",
        "tags": [
          "intermediate",
          "files",
          "search"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "find walks a directory tree and evaluates expressions against each file. Predicates can be combined with -and, -or, and -not. The -exec action runs a command against each match."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "find examples",
            "content": "# Find by name (case-sensitive / insensitive)\nfind . -name '*.log'\nfind . -iname '*.JPG'\n\n# Find by type\nfind /var -type f    # regular files\nfind /var -type d    # directories\nfind . -type l       # symbolic links\n\n# Find by size\nfind . -size +10M    # larger than 10 MB\nfind . -size -1k     # smaller than 1 KB\n\n# Find by modification time\nfind . -mtime -7     # modified in last 7 days\nfind . -mmin -60     # modified in last 60 minutes\n\n# Find by permission\nfind . -perm 644\nfind . -perm /u+x    # user-executable\n\n# Execute a command on each result\nfind . -name '*.bak' -exec rm {} \\;\n\n# More efficient: batch with + instead of ;\nfind . -name '*.txt' -exec wc -l {} +\n\n# Exclude a directory\nfind . -path ./node_modules -prune -o -name '*.js' -print\n\n# Limit search depth\nfind . -maxdepth 2 -name '*.sh'"
          },
          {
            "type": "note",
            "content": "Prefer find . -name 'pattern' -exec cmd {} + over xargs when possible — the + form batches arguments into single command invocations. Use xargs -0 paired with find -print0 to handle filenames containing spaces safely."
          }
        ]
      },
      {
        "id": "cmd-cp-mv",
        "title": "cp and mv — Copy and Move",
        "summary": "Copy and move files and directories, with overwrite protection and verbose mode.",
        "tags": [
          "beginner",
          "files"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "code",
            "language": "bash",
            "label": "cp and mv usage",
            "content": "# Copy a file\ncp source.txt dest.txt\n\n# Copy directory recursively\ncp -r src_dir/ dest_dir/\n\n# Preserve timestamps, permissions, owner\ncp -p file.txt backup.txt\ncp -a src_dir/ backup_dir/   # archive mode (recursive + preserve all)\n\n# Prompt before overwriting\ncp -i file.txt existing.txt\n\n# Only copy if source is newer\ncp -u *.txt /backup/\n\n# Move / rename\nmv old_name.txt new_name.txt\nmv file.txt /other/directory/\n\n# Move multiple files into a directory\nmv *.log /var/log/archive/\n\n# Prompt before overwriting\nmv -i source.txt existing.txt\n\n# Verbose output\ncp -v large_file.iso /backup/"
          },
          {
            "type": "warning",
            "content": "cp and mv silently overwrite destination files by default. Use -i (interactive) to prompt, or -n (no-clobber) to skip existing destinations entirely. On macOS, -n takes precedence even if -i is also given."
          }
        ]
      },
      {
        "id": "cmd-rm",
        "title": "rm — Remove Files",
        "summary": "Delete files and directories permanently — there is no Trash.",
        "tags": [
          "beginner",
          "files"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "code",
            "language": "bash",
            "label": "rm usage",
            "content": "# Remove a file\nrm file.txt\n\n# Remove multiple files\nrm a.txt b.txt c.txt\n\n# Remove files matching a glob\nrm *.tmp\n\n# Remove directory and all contents\nrm -r old_dir/\n\n# Force removal without prompts (ignores non-existent files)\nrm -f lockfile.pid\n\n# Combined — recursive and force\nrm -rf build/\n\n# Interactive — prompt before each deletion\nrm -i *.log\n\n# Verbose\nrm -v processed_*.csv"
          },
          {
            "type": "warning",
            "content": "rm is permanent. There is no recycle bin. Never run rm -rf with an unquoted variable: if DIR is empty, rm -rf $DIR/ becomes rm -rf /, which deletes everything. Always quote: rm -rf \"$DIR/\"."
          }
        ]
      },
      {
        "id": "cmd-mkdir-rmdir",
        "title": "mkdir and rmdir",
        "summary": "Create and remove directories, including nested paths.",
        "tags": [
          "beginner",
          "files"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "code",
            "language": "bash",
            "label": "mkdir and rmdir",
            "content": "# Create a directory\nmkdir mydir\n\n# Create nested directories (no error if they exist)\nmkdir -p parent/child/grandchild\n\n# Set permissions on creation\nmkdir -m 755 public_dir\n\n# Create multiple directories at once\nmkdir -p project/{src,tests,docs,build}\n\n# Remove an EMPTY directory\nrmdir emptydir\n\n# Remove directory and all contents (use rm -r instead)\nrm -r fulldir/\n\n# Remove empty parent directories too\nrmdir --parents a/b/c    # removes c, then b, then a if empty"
          }
        ]
      },
      {
        "id": "cmd-chmod-chown",
        "title": "chmod and chown — Permissions",
        "summary": "Change file mode bits and ownership.",
        "tags": [
          "intermediate",
          "files",
          "permissions"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "Every file has read (r/4), write (w/2), and execute (x/1) bits for three classes: user (owner), group, and others. chmod changes mode bits; chown changes ownership. Both accept -R for recursive operation."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "chmod and chown",
            "content": "# Symbolic mode\nchmod u+x script.sh       # add execute for user\nchmod go-w file.txt       # remove write for group and others\nchmod a+r public.html     # add read for all\nchmod u=rwx,go=rx dir/    # set exact bits\n\n# Octal mode\nchmod 755 script.sh    # rwxr-xr-x\nchmod 644 file.txt     # rw-r--r--\nchmod 600 private.key  # rw------- (private key)\nchmod 777 shared/      # rwxrwxrwx (avoid!)\n\n# Recursive\nchmod -R 755 www/\n\n# Change owner\nchown alice file.txt\nchown alice:developers project/\nchown -R www-data:www-data /var/www/\n\n# Change group only\nchgrp developers repo/"
          },
          {
            "type": "table",
            "label": "Common permission patterns",
            "headers": [
              "Octal",
              "Symbolic",
              "Typical use"
            ],
            "rows": [
              [
                "755",
                "rwxr-xr-x",
                "Executables, public directories"
              ],
              [
                "644",
                "rw-r--r--",
                "Regular files, config files"
              ],
              [
                "600",
                "rw-------",
                "Private keys, credentials"
              ],
              [
                "700",
                "rwx------",
                "Private scripts or directories"
              ],
              [
                "664",
                "rw-rw-r--",
                "Group-collaborative files"
              ],
              [
                "775",
                "rwxrwxr-x",
                "Group-collaborative directories"
              ]
            ]
          }
        ]
      },
      {
        "id": "cmd-ln",
        "title": "ln — Create Links",
        "summary": "Create hard links and symbolic links between files and directories.",
        "tags": [
          "intermediate",
          "files"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "A hard link is a second directory entry pointing to the same inode; deleting one doesn't affect the other. A symbolic link (symlink) is a pointer to a path — it can cross filesystems and link to directories."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Hard links and symlinks",
            "content": "# Hard link (same filesystem only, cannot link directories)\nln original.txt hardlink.txt\n\n# Symbolic link (cross-filesystem, directories OK)\nln -s /path/to/target linkname\nln -s ../lib/utils.sh local-utils.sh   # relative symlink\n\n# Overwrite existing link\nln -sf new_target existing_link\n\n# Check what a symlink points to\nreadlink -f symlink\n\n# List symlinks in a directory\nls -la dir/ | grep '^l'"
          },
          {
            "type": "note",
            "content": "Relative symlinks are usually preferable to absolute ones — they remain valid when the directory tree is moved. Use ln -s relative/path/to/target linkname. Verify with readlink -f to confirm the resolved path."
          }
        ]
      },
      {
        "id": "cmd-ls",
        "title": "ls — List Directory Contents",
        "summary": "Display files and directories with sorting, filtering, and formatting options.",
        "tags": [
          "beginner",
          "files"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "code",
            "language": "bash",
            "label": "ls usage",
            "content": "ls              # current directory\nls /path        # specific directory\nls -l           # long format (permissions, size, date)\nls -a           # include dotfiles\nls -la          # long format + dotfiles\nls -lh          # human-readable sizes (KB, MB, GB)\nls -lt          # sort by modification time (newest first)\nls -ltr         # sort by modification time (oldest first)\nls -lS          # sort by size (largest first)\nls -R           # recursive\nls -d */        # directories only\nls --color=auto # coloured output (GNU ls)"
          }
        ]
      }
    ]
  },
  {
    "id": "commands-system",
    "title": "System Commands",
    "shell": "both",
    "icon": "cpu",
    "topics": [
      {
        "id": "cmd-ps",
        "title": "ps — Process Status",
        "summary": "List running processes with their PIDs, resource usage, and status.",
        "tags": [
          "intermediate",
          "processes",
          "monitoring"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "ps shows a snapshot of running processes. The most common invocations are ps aux (BSD syntax) for all processes or ps -ef (POSIX syntax). Output can be piped to grep to find specific processes."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "ps usage",
            "content": "# All processes, all users (BSD style)\nps aux\n\n# All processes (POSIX style)\nps -ef\n\n# Process tree\nps auxf           # forest view\nps -ejH           # POSIX forest\n\n# Find a specific process\nps aux | grep nginx\n\n# Show specific columns\nps -o pid,ppid,user,cmd\n\n# Sort by CPU usage\nps aux --sort=-%cpu | head -10\n\n# Sort by memory\nps aux --sort=-%mem | head -10\n\n# Watch processes live (ps alternative)\ntop\nhtop   # if installed"
          },
          {
            "type": "table",
            "label": "Common ps output columns",
            "headers": [
              "Column",
              "Meaning"
            ],
            "rows": [
              [
                "PID",
                "Process ID"
              ],
              [
                "PPID",
                "Parent process ID"
              ],
              [
                "USER",
                "Owner of the process"
              ],
              [
                "%CPU",
                "CPU usage percentage"
              ],
              [
                "%MEM",
                "Memory (RSS) usage percentage"
              ],
              [
                "VSZ",
                "Virtual memory size (KB)"
              ],
              [
                "RSS",
                "Resident set size — physical memory (KB)"
              ],
              [
                "STAT",
                "Process state (R=running, S=sleeping, Z=zombie)"
              ],
              [
                "CMD",
                "Command name and arguments"
              ]
            ]
          }
        ]
      },
      {
        "id": "cmd-kill",
        "title": "kill and Signal Management",
        "summary": "Send signals to processes to terminate, pause, or reload them.",
        "tags": [
          "intermediate",
          "processes"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "kill sends a signal to a process identified by PID. Despite the name, its default signal (SIGTERM) politely asks the process to terminate. Use killall or pkill to target by name instead of PID."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "kill, killall, pkill",
            "content": "# Send SIGTERM (polite termination) — default\nkill 1234\n\n# Force kill (cannot be caught or ignored)\nkill -9 1234\nkill -SIGKILL 1234   # same, by name\n\n# Kill by name\nkillall nginx\npkill -f 'python.*server.py'   # match against full command line\n\n# Reload config (SIGHUP — most daemons listen for this)\nkill -HUP $(cat /var/run/app.pid)\n\n# List all available signals\nkill -l\n\n# Find PID of a process\npgrep nginx          # print PIDs\npgrep -a nginx       # print PIDs and command"
          },
          {
            "type": "warning",
            "content": "Always try SIGTERM before SIGKILL. SIGTERM lets the process save state, close files, and clean up. SIGKILL immediately ends the process at the kernel level — no cleanup code runs, which can leave corrupted data or stale lock files."
          }
        ]
      },
      {
        "id": "cmd-df-du",
        "title": "df and du — Disk Usage",
        "summary": "Check filesystem capacity and find which files use the most space.",
        "tags": [
          "beginner",
          "system",
          "disk"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "df reports free and used space on mounted filesystems. du reports the disk usage of a directory tree. Together they answer: how much space is available, and where is it being used?"
          },
          {
            "type": "code",
            "language": "bash",
            "label": "df and du usage",
            "content": "# Disk free — human-readable sizes\ndf -h\n\n# Specific filesystem\ndf -h /var\n\n# Inode usage (helpful when out of inodes, not space)\ndf -i\n\n# Disk usage of a directory\ndu -sh /var/log          # summary, human-readable\ndu -sh *                 # size of each item in current dir\n\n# Sorted by size (largest first)\ndu -sh * | sort -rh\n\n# Top 10 largest directories under /var\ndu -h /var/* | sort -rh | head -10\n\n# Exclude a filesystem type\ndu --exclude='*.sock' -sh /run\n\n# Maximum depth\ndu -h --max-depth=2 /home"
          }
        ]
      },
      {
        "id": "cmd-env",
        "title": "env and Environment Variables",
        "summary": "Inspect, set, and manipulate the environment of a process.",
        "tags": [
          "beginner",
          "environment"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "Every process inherits an environment from its parent — a set of key=value pairs. env prints or modifies this environment. printenv prints individual variables. export marks shell variables for export to child processes."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Environment manipulation",
            "content": "# Print all environment variables\nenv\nprintenv\n\n# Print a specific variable\nprintenv HOME\necho $PATH\n\n# Run a command with a modified environment\nenv VAR=value command\nenv -u VAR command         # unset VAR for this command only\nenv -i PATH=/usr/bin command  # completely clean environment\n\n# Export a variable to child processes\nexport DATABASE_URL=\"postgres://localhost/mydb\"\n\n# Set and export in one line\nexport EDITOR=vim\n\n# Show PATH entries one per line\necho $PATH | tr ':' '\\n'\n\n# Append to PATH\nexport PATH=\"$HOME/.local/bin:$PATH\""
          }
        ]
      },
      {
        "id": "cmd-which-type",
        "title": "which, type, and command",
        "summary": "Locate executables and distinguish commands from aliases, functions, and builtins.",
        "tags": [
          "beginner",
          "commands"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "which finds the first matching executable in PATH. type (a shell builtin) also identifies aliases, functions, and shell builtins. command runs a command bypassing aliases and functions."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "Locating and identifying commands",
            "content": "# Find executable in PATH\nwhich python3          # → /usr/bin/python3\nwhich -a python3       # all matches in PATH\n\n# Identify command type (preferred in scripts)\ntype ls                # → ls is aliased to 'ls --color=auto'\ntype cd                # → cd is a shell builtin\ntype ll                # → ll is a function\ntype git               # → git is /usr/bin/git\n\n# Check if a command exists\nif command -v jq &>/dev/null; then\n    echo \"jq is available\"\nfi\n\n# Run command bypassing aliases and functions\ncommand ls             # raw ls, ignoring any alias\ncommand -v ls          # print path without running it"
          },
          {
            "type": "note",
            "content": "Prefer command -v over which in scripts for portability. which is an external program that behaves differently across systems; command -v is a POSIX builtin that works consistently in Bash and Zsh."
          }
        ]
      },
      {
        "id": "cmd-xargs",
        "title": "xargs — Build and Execute Command Lines",
        "summary": "Convert stdin lines into command arguments, enabling parallel execution.",
        "tags": [
          "intermediate",
          "commands",
          "parallel"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "text",
            "content": "xargs reads items from stdin (one per line by default) and passes them as arguments to a command. This bridges commands that produce output with commands that take file arguments. Use -P for parallel execution."
          },
          {
            "type": "code",
            "language": "bash",
            "label": "xargs usage",
            "content": "# Basic: pass lines as arguments\nfind . -name '*.tmp' | xargs rm\n\n# Handle filenames with spaces (find -print0 / xargs -0)\nfind . -name '*.txt' -print0 | xargs -0 wc -l\n\n# Limit arguments per invocation\necho a b c d e | xargs -n2 echo  # → a b / c d / e\n\n# Replace placeholder with {}\nfind . -name '*.sh' | xargs -I{} chmod +x {}\n\n# Parallel execution (-P = number of processes)\nfind . -name '*.jpg' -print0 | xargs -0 -P4 -I{} convert {} {}.png\n\n# Interactive prompt before each execution\nfind . -name '*.bak' | xargs -p rm\n\n# Combine with grep — search each file\nfind . -name '*.go' | xargs grep -l 'interface'"
          },
          {
            "type": "note",
            "content": "Always use -print0 with find and -0 with xargs when filenames may contain spaces or newlines. Without -0, a filename like \"my file.txt\" would be split into two arguments: \"my\" and \"file.txt\"."
          }
        ]
      },
      {
        "id": "cmd-date",
        "title": "date — Display and Format Dates",
        "summary": "Get the current date and time, format timestamps, and perform date arithmetic.",
        "tags": [
          "beginner",
          "system"
        ],
        "badge": null,
        "blocks": [
          {
            "type": "code",
            "language": "bash",
            "label": "date usage",
            "content": "# Current date/time\ndate                         # → Thu Feb 27 10:42:18 UTC 2025\n\n# Formatted output (strftime format codes)\ndate +%Y-%m-%d               # → 2025-02-27\ndate +%H:%M:%S               # → 10:42:18\ndate +%Y%m%d_%H%M%S          # → 20250227_104218 (for filenames)\ndate +'%A, %B %-d %Y'        # → Thursday, February 27 2025\n\n# Unix timestamp\ndate +%s                     # → seconds since epoch\n\n# Date arithmetic — GNU date (Linux)\ndate -d 'yesterday'\ndate -d '7 days ago' +%Y-%m-%d\ndate -d '1 month'\ndate -d @1700000000          # convert Unix timestamp\n\n# Date arithmetic — BSD date (macOS)\ndate -v-7d +%Y-%m-%d         # 7 days ago\ndate -v+1m                   # 1 month ahead\ndate -r 1700000000           # convert Unix timestamp"
          },
          {
            "type": "note",
            "content": "GNU date (Linux) and BSD date (macOS) have different syntax for date arithmetic. For portable date math, use Python: python3 -c \"from datetime import date, timedelta; print(date.today() - timedelta(days=7))\"."
          }
        ]
      }
    ]
  }
];
