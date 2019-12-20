/**
 * For SCSS AutoPrefixer
 * step: npm i postcss-cli autoprefixer
 * @link https://github.com/zeit/next-plugins/issues/140#issuecomment-435510592
 */
module.exports = ctx => {
  const plugins = {
    autoprefixer: {
      ...ctx.options.autoprefixer
      // browsers: [">1%"] // suggest you ditch this and use `.browserlistrc` instead
      // Flexbox is true by default
    }
  };

  return { plugins };
};
