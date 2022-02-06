module.exports = {
  "plugins": [["styled-components", { "ssr": true }]],
    tailwind: {
      plugins: ["macros"],
      config: "./src/tailwind.config.js",
      format: "auto",
    },
  }