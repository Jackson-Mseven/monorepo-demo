module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-case": [2, "always", ["lower-case", "upper-case"]],
    "type-enum": [
      2,
      "always",
      [
        "wip",
        "feat",
        "fix",
        "style",
        "perf",
        "refactor",
        "revert",
        "test",
        "docs",
        "chore",
        "workflow",
        "ci",
        "types",
      ],
    ],
  },
};
