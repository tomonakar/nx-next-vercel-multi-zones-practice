const assetPrefix = process.env.BUILDING_FOR_NOW ? '/goodBy' : ''

module.exports = {
  assetPrefix,
  env: {
    ASSET_PREFIX: assetPrefix,
  },
}