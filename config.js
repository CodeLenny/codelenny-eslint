const isNode = true;

/**
 * Produces the `eslint` configuration.
*/
function config(isNode) {
  return {
    "env": {
        "node": isNode,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [ "error", 2 ],
        "max-len": [ "error", 120 ],
        "linebreak-style": [ "error", "unix" ],
        "quotes": [ "error", "double" ],
        "semi": [ "error", "always" ],
        "no-console": isNode ? "off" : [ "warn" ],
        "valid-jsdoc": [ "error" ],
        "curly": [ "error" ],
        "dot-location": [ "error", "property" ],
        "dot-notation": [ "error" ],
        "eqeqeq": [ "error", "smart" ],
        "no-empty-function": [ "warn" ],
        "array-bracket-spacing": [ "error", "always" ],
        "block-spacing": [ "error" ],
        "brace-style": [ "error", "stroustrup", { allowSingleLine: true } ],
        "comma-dangle": [
          "error",
          {
            arrays: "always-multiline",
            objects: "always-multiline",
            imports: "never",
            exports: "never",
            functions: "never"
          },
        ],
        "eol-last": [ "error", "unix" ],
        "func-call-spacing": [ "error", "never" ],
        "key-spacing": [ "error", { afterColon: true, mode: "strict" } ],
        "new-parens": [ "error" ],
        "no-trailing-spaces": [ "error" ],
        "space-before-function-paren": [ "error", "never" ],
        "space-before-blocks": [ "error", { functions: "always", classes: "always", keywords: "always" } ],
        "arrow-spacing": [ "error", { before: true, after: true } ],
        "no-var": [ "error" ],
        "no-warning-comments": [ "warn", { terms: [ "todo", "@todo" ] } ],
    },
  };
}

exports.config = config;

exports.node = config(true);
