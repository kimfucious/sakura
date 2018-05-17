const autoprefixer = require("autoprefixer");
const browserSync = require("browser-sync").create();
const cleanCSS = require("gulp-clean-css");
const concat = require("gulp-concat");
const gulp = require("gulp");
const gutil = require("gulp-util");
const imagemin = require("gulp-imagemin");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const sass = require("gulp-ruby-sass");
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");

const paths = {
  scss_src: "_assets/scss/bootstrap",
  css_dist: "css/main.scss",
  img_src: "_assets/images/**/*",
  img_dist: "assets/images",
  js_src: "_assets/js",
  js_dist: "assets/js",
  src_node_prefix: "node_modules"
};

gulp.task("bs", () => {
  browserSync.init({
    server: {
      baseDir: "_site"
    }
  });
});

gulp.task("copy-js-src", () => {
  const src_files = [
    `${paths.src_node_prefix}/jquery/dist/jquery.slim.min.js`,
    `${paths.src_node_prefix}/popper.js/dist/umd/popper.min.js`,
    `${paths.src_node_prefix}/bootstrap/dist/js/bootstrap.min.js`,
    `${paths.src_node_prefix}/picturefill/dist/picturefill.min.js`
  ];
  return gulp.src(src_files).pipe(gulp.dest(paths.js_src));
});

gulp.task("copy-bs-src", () => {
  return gulp
    .src(`${paths.src_node_prefix}/bootstrap/scss/**/*`)
    .pipe(gulp.dest(paths.scss_src));
});

gulp.task("concat-js", () => {
  const src_files = [
    `${paths.js_src}/jquery.slim.min.js`,
    `${paths.js_src}/popper.min.js`,
    `${paths.js_src}/bootstrap.min.js`,
    `${paths.js_src}/fontawesome-all.min.js`,
    `${paths.js_src}/prism.min.js`,
    `${paths.js_src}/picturefill.min.js`
  ];
  return gulp
    .src(src_files)
    .pipe(sourcemaps.init())
    .pipe(concat("main.js"))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.js_dist));
});

gulp.task("css", () => {
  return gulp
    .src("./_site/css/main.css")
    .pipe(postcss([autoprefixer({ browsers: ["last 2 versions"] })]))
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./_site/css/"))
    .on("error", gutil.log);
});

gulp.task("imagemin", () => {
  return gulp
    .src(paths.img_src)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.img_dist));
});
