module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        publish: [
          {
            provider: "github",
            owner: "abotel935",
            token: 'ac2c4b582f643b5e4803b92401f2f090229f3ea3',
            private: true,
          }
        ]
      },
      preload: "src/preload.js", // this one
    }
  }
};