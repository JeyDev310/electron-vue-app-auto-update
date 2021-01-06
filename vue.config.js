module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        publish: [
          {
            provider: "github",
            owner: "abotel935",
            private: true,
          }
        ]
      },
      preload: "src/preload.js", // this one
    }
  }
};