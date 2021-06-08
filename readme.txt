1. npm init (enter name, description, author, etc.)

2. Add to package.json: 

  "browserslist": {
      "production": [
        ">0.2%",
        "not dead",
        "not op_mini all"
      ],
      "development": [
        "last 5 chrome version",
        "last 5 firefox version",
        "last 5 safari version",
        "last 5 ie version"
      ]
    }

3. npm i --save-dev gulp browser-sync gulp-file-include del gulp-sass gulp-autoprefixer gulp-group-css-media-queries gulp-clean-css gulp-rename gulp-uglify-es gulp-imagemin gulp-webp gulp-webp-html gulp-webpcss gulp-svg-sprite gulp-ttf2woff gulp-ttf2woff2 gulp-fonter webp-converter@2.2.3

4. In fonts.scss change font-family values to the same and change value of font-weight when new fonts were added, 
  example:  @include font("LatoRegular", "LatoRegular", "400", "normal");
            @include font("LatoBold", "LatoBold", "400", "normal");

            to:

            @include font("Lato", "LatoRegular", "400", "normal");
            @include font("Lato", "LatoBold", "700", "normal");
