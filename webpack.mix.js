let mix = require("laravel-mix");
//let atImport = require("postcss-import");

require("laravel-mix-tailwind");

mix
  .js("resources/js/plugin.js", "public/js/")
  .react()
  //.postCss("resources/css/plugin.css", "/css/", [atImport()])
  .sass("resources/scss/plugin.scss", "/css/")
  .tailwind("./tailwind.config.js")
  .setPublicPath("public");
