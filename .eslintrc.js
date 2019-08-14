module.exports = {
  root: true, 
  extends: 'airbnb',
  parserOptions: {
      sourceType: 'module'
  },
  env: {
      browser: true,
  },
  rules: {
      "indent": ["error", 2],
      "quotes": ["error", "double"],
      "semi": ["error", "always"],
      "no-console": "error",
      "arrow-parens": 0,
      "react/jsx-filename-extension": "off",
  },
}