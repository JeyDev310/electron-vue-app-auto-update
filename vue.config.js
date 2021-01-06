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
      }
    }
  }
};