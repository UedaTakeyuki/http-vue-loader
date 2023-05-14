module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  chainWebpack: (config) => {
    config.externals({
      vue: 'Vue',
      vuetify: 'Vuetify',
      'vuetify/lib/framework': 'Vuetify',
    })
  }
}
