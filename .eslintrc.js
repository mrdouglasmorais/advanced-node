module.exports = {
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: "love",
      rules: {
        semi: "off",
        "prefer-const": "error",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/explicit-function-return-type": "off"
      }
    }
  ]
}
