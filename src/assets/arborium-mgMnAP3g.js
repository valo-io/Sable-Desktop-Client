import { R as x, __tla as __tla_0 } from "./index-u41TiRiE.js";
let E, J, z, V, m, O, M, D, S, F, U, N, W;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const $ = [
    [
      /^#!.*\bpython[23]?\b/,
      "python"
    ],
    [
      /^#!.*\bnode\b/,
      "javascript"
    ],
    [
      /^#!.*\bdeno\b/,
      "typescript"
    ],
    [
      /^#!.*\bbun\b/,
      "typescript"
    ],
    [
      /^#!.*\bruby\b/,
      "ruby"
    ],
    [
      /^#!.*\bperl\b/,
      "perl"
    ],
    [
      /^#!.*\bphp\b/,
      "php"
    ],
    [
      /^#!.*\bbash\b/,
      "bash"
    ],
    [
      /^#!.*\bzsh\b/,
      "zsh"
    ],
    [
      /^#!.*\bsh\b/,
      "bash"
    ],
    [
      /^#!.*\blua\b/,
      "lua"
    ],
    [
      /^#!.*\bawk\b/,
      "awk"
    ]
  ], L = [
    [
      /\b(fn|impl|trait|pub\s+fn|let\s+mut|&mut|->)\b/,
      "rust"
    ],
    [
      /\b(func|package\s+\w+|import\s+\(|go\s+func|chan\s+\w+)\b/,
      "go"
    ],
    [
      /\b(def\s+\w+\s*\(|import\s+\w+|from\s+\w+\s+import|class\s+\w+:)\b/,
      "python"
    ],
    [
      /:\s*(string|number|boolean|void)\b|\binterface\s+\w+\s*\{/,
      "typescript"
    ],
    [
      /\b(const|let|var)\s+\w+\s*=|function\s+\w+\s*\(|=>\s*\{/,
      "javascript"
    ],
    [
      /\b(def\s+\w+|end\b|do\s*\|.*\||puts\s+|require\s+['"])\b/,
      "ruby"
    ],
    [
      /\b(public\s+class|private\s+\w+|System\.out\.println)\b/,
      "java"
    ],
    [
      /\b(#include\s*<|std::|template\s*<|nullptr|cout\s*<<)\b/,
      "cpp"
    ],
    [
      /\b(#include\s*[<"]|printf\s*\(|int\s+main\s*\(|void\s+\w+\s*\()\b/,
      "c"
    ],
    [
      /\b(namespace\s+\w+|using\s+System|public\s+static\s+void)\b/,
      "c-sharp"
    ],
    [
      /<\?php|\$\w+\s*=/,
      "php"
    ],
    [
      /\b(func\s+\w+|var\s+\w+:\s*\w+|let\s+\w+:\s*\w+|@objc)\b/,
      "swift"
    ],
    [
      /\b(fun\s+\w+|val\s+\w+|var\s+\w+:|data\s+class)\b/,
      "kotlin"
    ],
    [
      /\b(def\s+\w+|val\s+\w+|var\s+\w+|object\s+\w+|case\s+class)\b/,
      "scala"
    ],
    [
      /\b(module\s+\w+|import\s+qualified|data\s+\w+\s*=|::\s*\w+\s*->)\b/,
      "haskell"
    ],
    [
      /\b(defmodule\s+\w+|def\s+\w+|defp\s+\w+|\|>)\b/,
      "elixir"
    ],
    [
      /\b(local\s+\w+\s*=|function\s+\w+\.\w+|require\s*\()\b/,
      "lua"
    ],
    [
      /\b(SELECT\s+.*\s+FROM|INSERT\s+INTO|CREATE\s+TABLE|ALTER\s+TABLE)\b/i,
      "sql"
    ],
    [
      /\b(if\s+\[\s*|then\b|fi\b|echo\s+["']|export\s+\w+=)\b/,
      "bash"
    ],
    [
      /^\s*[\w-]+:\s*[\w\-"'[{]|^---\s*$/,
      "yaml"
    ],
    [
      /^\s*\{[\s\S]*"[\w-]+":\s*/,
      "json"
    ],
    [
      /^\s*\[[\w.-]+\]\s*$|^\s*\w+\s*=\s*["'\d\[]/,
      "toml"
    ],
    [
      /<(!DOCTYPE|html|head|body|div|span|p|a\s)/i,
      "html"
    ],
    [
      /^\s*[\w.#@][\w\s,#.:>+~-]*\{[^}]*\}|@media\s|@import\s/,
      "css"
    ],
    [
      /^#{1,6}\s+\w|^\s*[-*+]\s+\w|^\s*\d+\.\s+\w|```\w*\n/,
      "markdown"
    ],
    [
      /<\?xml|<[\w:-]+\s+xmlns/,
      "xml"
    ],
    [
      /^FROM\s+\w+|^RUN\s+|^COPY\s+|^ENTRYPOINT\s+/m,
      "dockerfile"
    ],
    [
      /\b(server\s*\{|location\s+[\/~]|proxy_pass\s+)\b/,
      "nginx"
    ],
    [
      /\b(pub\s+fn|const\s+\w+\s*=|@import\(|comptime)\b/,
      "zig"
    ]
  ];
  J = function(a) {
    const e = a.split(`
`)[0];
    for (const [r, s] of $) if (r.test(e)) return s;
    for (const [r, s] of L) if (r.test(a)) return s;
    return null;
  };
  z = function(a) {
    const e = a.match(/\blanguage-(\w+)\b/);
    if (e) return e[1];
    const r = a.match(/\blang-(\w+)\b/);
    if (r) return r[1];
    const s = /* @__PURE__ */ new Set([
      "rust",
      "javascript",
      "typescript",
      "python",
      "ruby",
      "go",
      "java",
      "c",
      "cpp",
      "csharp",
      "php",
      "swift",
      "kotlin",
      "scala",
      "haskell",
      "elixir",
      "lua",
      "sql",
      "bash",
      "shell",
      "yaml",
      "json",
      "toml",
      "html",
      "css",
      "xml",
      "markdown",
      "dockerfile",
      "nginx",
      "zig",
      "text",
      "plaintext",
      "console",
      "sh"
    ]);
    for (const t of a.split(/\s+/)) if (s.has(t.toLowerCase())) return t.toLowerCase();
    return null;
  };
  F = function(a) {
    const e = {
      js: "javascript",
      ts: "typescript",
      py: "python",
      rb: "ruby",
      rs: "rust",
      sh: "bash",
      shell: "bash",
      yml: "yaml",
      cs: "c-sharp",
      csharp: "c-sharp",
      "c++": "cpp",
      "c#": "c-sharp",
      "f#": "fsharp",
      dockerfile: "dockerfile",
      docker: "dockerfile",
      makefile: "make",
      plaintext: "text",
      plain: "text",
      txt: "text"
    }, r = a.toLowerCase();
    return e[r] || r;
  };
  U = "2.16.0";
  E = [
    "ada",
    "agda",
    "asciidoc",
    "asm",
    "awk",
    "bash",
    "batch",
    "c",
    "c-sharp",
    "caddy",
    "capnp",
    "cedar",
    "cedarschema",
    "clojure",
    "cmake",
    "cobol",
    "commonlisp",
    "cpp",
    "css",
    "d",
    "dart",
    "devicetree",
    "diff",
    "dockerfile",
    "dot",
    "elisp",
    "elixir",
    "elm",
    "erlang",
    "fish",
    "fsharp",
    "gleam",
    "glsl",
    "go",
    "graphql",
    "groovy",
    "haskell",
    "hcl",
    "hlsl",
    "html",
    "idris",
    "ini",
    "java",
    "javascript",
    "jinja2",
    "jq",
    "json",
    "julia",
    "kotlin",
    "lean",
    "lua",
    "markdown",
    "matlab",
    "meson",
    "nginx",
    "ninja",
    "nix",
    "objc",
    "ocaml",
    "perl",
    "php",
    "postscript",
    "powershell",
    "prolog",
    "python",
    "query",
    "r",
    "rego",
    "rescript",
    "ron",
    "ruby",
    "rust",
    "scala",
    "scheme",
    "scss",
    "solidity",
    "sparql",
    "sql",
    "ssh-config",
    "starlark",
    "styx",
    "svelte",
    "swift",
    "textproto",
    "thrift",
    "tlaplus",
    "toml",
    "tsx",
    "typescript",
    "typst",
    "uiua",
    "vb",
    "verilog",
    "vhdl",
    "vim",
    "vue",
    "wit",
    "x86asm",
    "xml",
    "yaml",
    "yuri",
    "zig",
    "zsh"
  ];
  M = [
    {
      name: "attribute",
      tag: "at"
    },
    {
      name: "constant",
      tag: "co"
    },
    {
      name: "constant.builtin",
      tag: "cb",
      parentTag: "constant"
    },
    {
      name: "constructor",
      tag: "cr"
    },
    {
      name: "function.builtin",
      tag: "fb",
      parentTag: "function"
    },
    {
      name: "function",
      tag: "f"
    },
    {
      name: "function.method",
      tag: "fm",
      parentTag: "function"
    },
    {
      name: "keyword",
      tag: "k"
    },
    {
      name: "keyword.conditional",
      tag: "kc",
      parentTag: "keyword"
    },
    {
      name: "keyword.coroutine",
      tag: "ko",
      parentTag: "keyword"
    },
    {
      name: "keyword.debug",
      tag: "kd",
      parentTag: "keyword"
    },
    {
      name: "keyword.exception",
      tag: "ke",
      parentTag: "keyword"
    },
    {
      name: "keyword.function",
      tag: "kf",
      parentTag: "keyword"
    },
    {
      name: "keyword.import",
      tag: "ki",
      parentTag: "keyword"
    },
    {
      name: "keyword.operator",
      tag: "kp",
      parentTag: "keyword"
    },
    {
      name: "keyword.repeat",
      tag: "kr",
      parentTag: "keyword"
    },
    {
      name: "keyword.return",
      tag: "kt",
      parentTag: "keyword"
    },
    {
      name: "keyword.type",
      tag: "ky",
      parentTag: "keyword"
    },
    {
      name: "operator",
      tag: "o"
    },
    {
      name: "property",
      tag: "pr"
    },
    {
      name: "punctuation",
      tag: "p"
    },
    {
      name: "punctuation.bracket",
      tag: "pb",
      parentTag: "punctuation"
    },
    {
      name: "punctuation.delimiter",
      tag: "pd",
      parentTag: "punctuation"
    },
    {
      name: "punctuation.special",
      tag: "ps",
      parentTag: "punctuation"
    },
    {
      name: "string",
      tag: "s"
    },
    {
      name: "string.special",
      tag: "ss",
      parentTag: "string"
    },
    {
      name: "tag",
      tag: "tg"
    },
    {
      name: "tag.delimiter",
      tag: "td",
      parentTag: "tag"
    },
    {
      name: "tag.error",
      tag: "te",
      parentTag: "tag"
    },
    {
      name: "type",
      tag: "t"
    },
    {
      name: "type.builtin",
      tag: "tb",
      parentTag: "type"
    },
    {
      name: "type.qualifier",
      tag: "tq",
      parentTag: "type"
    },
    {
      name: "variable",
      tag: "v"
    },
    {
      name: "variable.builtin",
      tag: "vb",
      parentTag: "variable"
    },
    {
      name: "variable.parameter",
      tag: "vp",
      parentTag: "variable"
    },
    {
      name: "comment",
      tag: "c"
    },
    {
      name: "comment.documentation",
      tag: "cd",
      parentTag: "comment"
    },
    {
      name: "macro",
      tag: "m"
    },
    {
      name: "label",
      tag: "l"
    },
    {
      name: "diff.addition",
      tag: "da"
    },
    {
      name: "diff.deletion",
      tag: "dd"
    },
    {
      name: "number",
      tag: "n"
    },
    {
      name: "text.literal",
      tag: "tl"
    },
    {
      name: "text.emphasis",
      tag: "em"
    },
    {
      name: "text.strong",
      tag: "st"
    },
    {
      name: "text.uri",
      tag: "tu"
    },
    {
      name: "text.reference",
      tag: "tr"
    },
    {
      name: "string.escape",
      tag: "se",
      parentTag: "string"
    },
    {
      name: "text.title",
      tag: "tt"
    },
    {
      name: "text.strikethrough",
      tag: "tx"
    },
    {
      name: "spell",
      tag: "sp"
    },
    {
      name: "embedded",
      tag: "eb"
    },
    {
      name: "error",
      tag: "er"
    },
    {
      name: "namespace",
      tag: "ns"
    },
    {
      name: "include",
      tag: "in",
      parentTag: "keyword"
    },
    {
      name: "storageclass",
      tag: "sc",
      parentTag: "keyword"
    },
    {
      name: "repeat",
      tag: "rp",
      parentTag: "keyword"
    },
    {
      name: "conditional",
      tag: "cn",
      parentTag: "keyword"
    },
    {
      name: "exception",
      tag: "ex",
      parentTag: "keyword"
    },
    {
      name: "preproc",
      tag: "pp",
      parentTag: "keyword"
    },
    {
      name: "none",
      tag: ""
    },
    {
      name: "character",
      tag: "ch",
      parentTag: "string"
    },
    {
      name: "character.special",
      tag: "cs",
      parentTag: "string"
    },
    {
      name: "variable.member",
      tag: "vm",
      parentTag: "variable"
    },
    {
      name: "function.definition",
      tag: "fd",
      parentTag: "function"
    },
    {
      name: "type.definition",
      tag: "tf",
      parentTag: "type"
    },
    {
      name: "function.call",
      tag: "fc",
      parentTag: "function"
    },
    {
      name: "keyword.modifier",
      tag: "km",
      parentTag: "keyword"
    },
    {
      name: "keyword.directive",
      tag: "dr",
      parentTag: "keyword"
    },
    {
      name: "string.regexp",
      tag: "rx",
      parentTag: "string"
    },
    {
      name: "nospell",
      tag: ""
    },
    {
      name: "float",
      tag: "n"
    },
    {
      name: "boolean",
      tag: "cb"
    }
  ];
  function q(a) {
    return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  const j = {
    manual: false,
    theme: "one-dark",
    selector: "pre code",
    cdn: "jsdelivr",
    version: U,
    pluginsUrl: "",
    hostUrl: "",
    logger: console,
    resolveHostJs: ({ baseUrl: a, path: e }) => x(() => import(`${a}/${e}`).then(async (m2) => {
      await m2.__tla;
      return m2;
    }), []),
    resolveHostWasm: ({ baseUrl: a, path: e }) => fetch(`${a}/${e}`),
    resolveJs: ({ baseUrl: a, path: e }) => x(() => import(`${a}/${e}`).then(async (m2) => {
      await m2.__tla;
      return m2;
    }), []),
    resolveWasm: ({ baseUrl: a, path: e }) => fetch(`${a}/${e}`)
  };
  let h = null, w = null, d = {
    ...j
  };
  const b = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), u = new Set(E);
  let c = null, k = null;
  async function T(a) {
    if (a.pluginsUrl) return k || (k = (async () => {
      a.logger.debug(`[arborium] Loading local plugins manifest from: ${a.pluginsUrl}`);
      const e = await fetch(a.pluginsUrl);
      if (!e.ok) throw new Error(`Failed to load plugins.json: ${e.status}`);
      c = await e.json(), a.logger.debug(`[arborium] Loaded local manifest with ${c == null ? void 0 : c.entries.length} entries`);
    })(), k);
  }
  function A(a, e) {
    if (c) {
      const n = c.entries.find((i) => i.language === a);
      if (n) return n.local_js.substring(0, n.local_js.lastIndexOf("/"));
    }
    const r = e.cdn, s = e.version;
    let t;
    return r === "jsdelivr" ? t = "https://cdn.jsdelivr.net/npm" : r === "unpkg" ? t = "https://unpkg.com" : t = r, `${t}/@arborium/${a}@${s}`;
  }
  async function _(a, e) {
    const r = b.get(a);
    if (r) return e.logger.debug(`[arborium] Grammar '${a}' found in cache`), r;
    const s = y.get(a);
    if (s) return e.logger.debug(`[arborium] Grammar '${a}' already loading, waiting...`), s;
    const t = I(a, e);
    y.set(a, t);
    try {
      return await t;
    } finally {
      y.delete(a);
    }
  }
  async function I(a, e) {
    if (await T(e), !u.has(a) && !(c == null ? void 0 : c.entries.some((r) => r.language === a))) return e.logger.debug(`[arborium] Grammar '${a}' not available`), null;
    try {
      const r = A(a, e), s = e.resolveJs === j.resolveJs ? ` from ${r}/grammar.js` : "";
      e.logger.debug(`[arborium] Loading grammar '${a}'${s}`);
      const t = await e.resolveJs({
        language: a,
        baseUrl: r,
        path: "grammar.js"
      }), n = await e.resolveWasm({
        language: a,
        baseUrl: r,
        path: "grammar_bg.wasm"
      });
      await t.default({
        module_or_path: n
      });
      const i = t.language_id();
      i !== a && e.logger.warn(`[arborium] Language ID mismatch: expected '${a}', got '${i}'`);
      const f = t.injection_languages(), p = {
        languageId: a,
        injectionLanguages: f,
        module: t,
        parseUtf8: (l) => {
          const o = t.create_session();
          try {
            t.set_text(o, l);
            const g = t.parse(o);
            return {
              spans: g.spans || [],
              injections: g.injections || []
            };
          } catch (g) {
            return e.logger.error("[arborium] Parse error:", g), {
              spans: [],
              injections: []
            };
          } finally {
            t.free_session(o);
          }
        },
        parseUtf16: (l) => {
          const o = t.create_session();
          try {
            t.set_text(o, l);
            const g = t.parse_utf16(o);
            return {
              spans: g.spans || [],
              injections: g.injections || []
            };
          } catch (g) {
            return e.logger.error("[arborium] Parse error:", g), {
              spans: [],
              injections: []
            };
          } finally {
            t.free_session(o);
          }
        }
      };
      return b.set(a, p), e.logger.debug(`[arborium] Grammar '${a}' loaded successfully`), p;
    } catch (r) {
      return e.logger.error(`[arborium] Failed to load grammar '${a}':`, r), null;
    }
  }
  const v = /* @__PURE__ */ new Map();
  let C = 1;
  function P(a) {
    globalThis.arboriumHost = {
      isLanguageAvailable(e) {
        return u.has(e) || b.has(e);
      },
      async loadGrammar(e) {
        const r = await _(e, a);
        if (!r) return 0;
        for (const [t, n] of v) if (n === r) return t;
        const s = C++;
        return v.set(s, r), s;
      },
      parse(e, r) {
        const s = v.get(e);
        return s ? s.parseUtf8(r) : {
          spans: [],
          injections: []
        };
      }
    };
  }
  function R(a) {
    if (a.hostUrl) return a.hostUrl;
    const e = a.cdn, r = a.version;
    let s;
    e === "jsdelivr" ? s = "https://cdn.jsdelivr.net/npm" : e === "unpkg" ? s = "https://unpkg.com" : s = e;
    const t = r === "latest" ? "" : `@${r}`;
    return `${s}/@arborium/arborium${t}/dist`;
  }
  async function H(a) {
    return h || w || (w = (async () => {
      P(a);
      const e = R(a), r = a.resolveHostJs === j.resolveHostJs ? ` from ${e}/arborium_host.js` : "";
      a.logger.debug(`[arborium] Loading host${r}`);
      try {
        const s = await a.resolveHostJs({
          baseUrl: e,
          path: "arborium_host.js"
        }), t = await a.resolveHostWasm({
          baseUrl: e,
          path: "arborium_host_bg.wasm"
        });
        return await s.default({
          module_or_path: t
        }), h = {
          highlight: s.highlight,
          isLanguageAvailable: s.isLanguageAvailable
        }, a.logger.debug("[arborium] Host loaded successfully"), h;
      } catch (s) {
        return a.logger.error("[arborium] Failed to load host:", s), null;
      }
    })(), w);
  }
  O = async function(a, e, r) {
    const s = m(r), t = await H(s);
    if (t) try {
      return t.highlight(a, e);
    } catch (n) {
      s.logger.error("[arborium] Host highlight failed:", n);
    }
    return q(e);
  };
  S = async function(a, e) {
    const r = m(e), s = await _(a, r);
    if (!s) return null;
    const { module: t } = s;
    return {
      languageId: () => s.languageId,
      injectionLanguages: () => s.injectionLanguages,
      highlight: async (n) => O(a, n, e),
      parse: (n) => s.parseUtf16(n),
      createSession: () => {
        const n = t.create_session();
        return {
          setText: (i) => t.set_text(n, i),
          parse: () => {
            try {
              const i = t.parse_utf16(n);
              return {
                spans: i.spans || [],
                injections: i.injections || []
              };
            } catch (i) {
              return r.logger.error("[arborium] Session parse error:", i), {
                spans: [],
                injections: []
              };
            }
          },
          cancel: () => t.cancel(n),
          free: () => t.free_session(n)
        };
      },
      dispose: () => {
      }
    };
  };
  N = async function(a, e, r) {
    const s = m(r), t = a;
    await t.default({
      module_or_path: e
    });
    const n = t.language_id(), i = t.injection_languages(), f = {
      languageId: n,
      injectionLanguages: i,
      module: t,
      parseUtf8: (p) => {
        const l = t.create_session();
        try {
          t.set_text(l, p);
          const o = t.parse(l);
          return {
            spans: o.spans || [],
            injections: o.injections || []
          };
        } catch (o) {
          return s.logger.error("[arborium] Parse error:", o), {
            spans: [],
            injections: []
          };
        } finally {
          t.free_session(l);
        }
      },
      parseUtf16: (p) => {
        const l = t.create_session();
        try {
          t.set_text(l, p);
          const o = t.parse_utf16(l);
          return {
            spans: o.spans || [],
            injections: o.injections || []
          };
        } catch (o) {
          return s.logger.error("[arborium] Parse error:", o), {
            spans: [],
            injections: []
          };
        } finally {
          t.free_session(l);
        }
      }
    };
    return b.set(n, f), u.add(n), s.logger.debug(`[arborium] Grammar '${n}' registered`), await S(n, r);
  };
  m = function(a) {
    return a ? {
      ...d,
      ...a
    } : {
      ...d
    };
  };
  W = function(a) {
    d = {
      ...d,
      ...a
    };
  };
  D = async function(a, e) {
    const r = m(e);
    return await T(r), u.has(a) || ((c == null ? void 0 : c.entries.some((s) => s.language === a)) ?? false);
  };
  V = async function(a) {
    const e = m(a);
    return await T(e), c ? c.entries.map((r) => r.language) : Array.from(u);
  };
});
export {
  __tla,
  E as availableLanguages,
  J as detectLanguage,
  z as extractLanguageFromClass,
  V as getAvailableLanguages,
  m as getConfig,
  O as highlight,
  M as highlights,
  D as isLanguageAvailable,
  S as loadGrammar,
  F as normalizeLanguage,
  U as pluginVersion,
  N as registerGrammar,
  W as setConfig
};
