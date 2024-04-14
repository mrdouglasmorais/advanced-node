module.exports = {
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: "love",
      rules: {
        semi: "off",
        "quotes": ["error", "single"],
        "prefer-const": "error",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/explicit-function-return-type": "off"
      }
    }
  ]
}
