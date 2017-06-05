# Ryan's ESLint Configuration

My personal ESLint style rules.

## Usage

```bash
npm install --save-dev @codelenny/eslint-rules
```

```js
// .eslintrc.js

module.exports = Object.assign({}, require("@codelenny/eslint-rules").node, {
  // Add any changes to the default rules here.
});
```
