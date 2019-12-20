const withSass = require("@zeit/next-sass");
const withCss = require("@zeit/next-css");
const withFonts = require("next-fonts");

/**
 * To include fonts into project via '@font-face'
 * @link https://stackoverflow.com/questions/52636562/how-lead-my-nextjs-app-to-accept-otf-and-ttf-fonts
 *
 * alternative :
 * @link https://spectrum.chat/next-js/general/whats-your-guys-strategies-for-loading-custom-fonts-in-next~1a333ee0-0282-4925-849f-ca02df429ee3
 */
module.exports = withFonts(
  withCss(
    withSass({
      cssLoaderOptions: {
        url: false,
        sourceMap: true,
        outputStyle: "compressed"
      },
      /**
       * It's node-sass options
       * @link https://github.com/sass/node-sass#options
       */
      sassLoaderOptions: {
        outputStyle: "compressed",
        sourceMap: true
      },
      postcssLoaderOptions: {
        outputStyle: "compressed",
        sourceMap: true,
        autoprefixer: true
      }
    })
  )
);
