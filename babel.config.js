const config = {
    presets: [
        "@babel/preset-env",
        ["@babel/preset-react", {runtime: "automatic"}],
    ],
    plugins: [["module-resolver", {root: ["src"]}]],
}

module.exports = config
