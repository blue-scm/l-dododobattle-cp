module.exports = {
    plugins: ["stylelint-order"],
    rules: {
        "order/properties-alphabetical-order": true,
        "at-rule-no-unknown": [true, { ignoreAtRules: ["include", "mixin", "use", "forward", "each"] }],
    },
};
