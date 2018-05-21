const autoprefixer = require("autoprefixer");
const browserSync = require("browser-sync").create();
const clean = require("gulp-clean");
const cleanCSS = require("gulp-clean-css");
const concat = require("gulp-concat");
const gulp = require("gulp");
const gutil = require("gulp-util");
const imagemin = require("gulp-imagemin");
const imageResize = require("gulp-image-resize");
const newer = require("gulp-newer");
const postcss = require("gulp-postcss");
const pump = require("pump");
const rename = require("gulp-rename");
const responsive = require("gulp-responsive");
const sass = require("gulp-ruby-sass");
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");

const paths = {
  scss_main_src: "_assets/scss",
  site_css_dest: "_site/css/",
  jekyll_css_dest: "css/",
  img_optimized_dest: "assets/images/optimized_originals",
  img_responsive_src: "_assets/images/*.{gif,jpeg,jpg,png,webp}",
  img_responsive_dest: "assets/images/responsive",
  img_thumbs_dist: "assets/images/thumbs",
  img_thumbs_src: "assets/images/*.{jpeg,jpg,png,gif}",
  js_src_pretty: "_assets/js/pretty/*.js",
  js_src_ugly: "_assets/js/ugly",
  js_dist: "assets/js/",
  src_node_prefix: "node_modules"
};

gulp.task("serve:bs", () => {
  browserSync.init({
    server: {
      baseDir: "_site"
    }
  });
});

gulp.task("build:copy-bs-scss-from-node-modules", () => {
  return gulp
    .src(`${paths.src_node_prefix}/bootstrap/scss/**/*`)
    .pipe(gulp.dest(paths.scss_src));
});

gulp.task("build:copy-js-src-from-node-modules", () => {
  const src_files = [
    `${paths.src_node_prefix}/jquery/dist/jquery.slim.min.js`,
    `${paths.src_node_prefix}/popper.js/dist/umd/popper.min.js`,
    `${paths.src_node_prefix}/bootstrap/dist/js/bootstrap.min.js`,
    `${paths.src_node_prefix}/clipboard/dist/clipboard.min.js`
  ];
  return gulp
    .src(src_files)
    .pipe(newer(paths.js_src))
    .pipe(gulp.dest(paths.js_src));
});

gulp.task("build:uglify", () => {
  return gulp
    .src(paths.js_src_pretty)
    .pipe(newer(paths.js_src_ugly))
    .pipe(uglify())
    .pipe(rename({ extname: ".min.js" }))
    .pipe(gulp.dest(paths.js_src_ugly));
});

gulp.task("build:concat", () => {
  const src_files = [
    `${paths.js_src_ugly}/jquery.slim.min.js`,
    `${paths.js_src_ugly}/bootstrap.min.js`,
    `${paths.js_src_ugly}/fontawesome.min.js`,
    `${paths.js_src_ugly}/fa-brands.min.js`,
    `${paths.js_src_ugly}/fa-solid.min.js`,
    `${paths.js_src_ugly}/prism.min.js`,
    `${paths.js_src_ugly}/sitesearch.min.js`,
    `${paths.js_src_ugly}/search_ux.min.js`
  ];
  return gulp
    .src(src_files)
    .pipe(sourcemaps.init())
    .pipe(concat("main.min.js"))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.js_dist));
});

gulp.task("build:css", () => {
  return sass(`${paths.scss_main_src}/main.scss`, {
    style: "compressed",
    trace: true
  })
    .pipe(postcss([autoprefixer({ browsers: ["last 2 versions"] })]))
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.jekyll_css_dest))
    .pipe(gulp.dest(paths.site_css_dest))
    .on("error", gutil.log);
});

gulp.task("gen:optimize", () => {
  return gulp
    .src(paths.img_src)
    .pipe(newer(paths.img_optimized_dest))
    .pipe(imagemin())
    .pipe(gulp.dest(paths.img_optimized_dest));
});

gulp.task("thumbs", () => {
  return gulp
    .src(paths.img_thumbs_src)
    .pipe(newer(paths.img_thumbs_dist))
    .pipe(
      imageResize({
        imageMagick: true,
        width: 640,
        height: 480,
        crop: true
      })
    )
    .pipe(gulp.dest(paths.img_thumbs_dist));
});

gulp.task("thumbs-wipe", () => {
  return gulp
    .src(`${paths.img_thumbs_dist}/*.*`, { read: false })
    .pipe(clean());
});

gulp.task("build:responsive", () => {
  return gulp
    .src(paths.img_responsive_src)
    .pipe(
      responsive(
        {
          "*.jpg": [
            {
              width: 1140,
              rename: { suffix: "-xl-1x" }
            },
            {
              width: 1140,
              rename: {
                suffix: "-xl-1x",
                extname: ".webp"
              }
            },
            {
              width: 1140 * 2,
              rename: { suffix: "-xl-2x" }
            },
            {
              width: 1140 * 2,
              rename: {
                suffix: "-xl-2x",
                extname: ".webp"
              }
            },
            {
              width: 768,
              rename: { suffix: "-md-1x" }
            },
            {
              width: 768,
              rename: {
                suffix: "-md-1x",
                extname: ".webp"
              }
            },
            {
              width: 768 * 2,
              rename: { suffix: "-md-2x" }
            },
            {
              width: 768 * 2,
              rename: {
                suffix: "-md-2x",
                extname: ".webp"
              }
            },
            {
              width: 540,
              height: 405,
              rename: { suffix: "-sm-1x" }
            },
            {
              width: 540,
              height: 405,
              rename: {
                suffix: "-sm-1x",
                extname: ".webp"
              }
            },
            {
              width: 540 * 2,
              height: 405 * 2,
              rename: { suffix: "-sm-2x" }
            },
            {
              width: 540 * 2,
              height: 405 * 2,
              rename: {
                suffix: "-sm-2x",
                extname: ".webp"
              }
            }
          ]
        },
        {
          crop: "centre",
          quality: 60,
          progressive: true,
          withMetadata: false,
          withoutEnlargement: true
        }
      )
    )
    .pipe(gulp.dest(paths.img_responsive_dest));
});
