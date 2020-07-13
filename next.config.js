const withPlugins = require('next-compose-plugins');
const withFonts = require('next-fonts');
const withOffline = require('next-offline');


module.exports = withPlugins([withFonts, withOffline]);