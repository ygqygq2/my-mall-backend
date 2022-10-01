module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true
    },
    extends: ["eslint:recommended", "plugin:promise/recommended", "plugin:import/recommended"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest"
    },
    rules: {
        "no-unused-vars": 1
    }
};
