const autoprefixer = require("autoprefixer");
const browserSync = require("browser-sync").create();
const cleanCSS = require("gulp-clean-css");
const del = require("del");
const concat = require("gulp-concat");
const gulp = require("gulp");
const gutil = require("gulp-util");
const newer = require("gulp-newer");
const postcss = require("gulp-postcss");
const pump = require("pump");
const rename = require("gulp-rename");
const responsive = require("gulp-responsive");
const run = require("gulp-run");
const runSequence = require("run-sequence");
const sass = require("gulp-ruby-sass");
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");

const paths = {
  jekyll_siteDir: "_site/",
  scss_main_src: "_assets/scss",
  site_css_dest: "_site/css/",
  jekyll_css_dest: "css/",
  img_src: "_assets/images/*.{gif,jpeg,jpg,png,webp}",
  jekyll_img_dest: "assets/images/",
  site_img_dest: "_site/assets/images/",
  js_src_pretty: "_assets/js/pretty/*.js",
  js_src_ugly: "_assets/js/ugly",
  jekyll_js_dest: "assets/js/",
  site_js_dest: "_site/js/",
  src_node_prefix: "node_modules"
};

gulp.task("build:copy-bs-scss-from-node-modules", () => {
  return gulp
    .src(`${paths.src_node_prefix}/bootstrap/scss/**/*`)
    .pipe(gulp.dest(paths.scss_src));
});

gulp.task("build:copy-js-src-from-node-modules", () => {
  const src_files = [
    paths.src_node_prefix + "/jquery/dist/jquery.slim.min.js",
    paths.src_node_prefix + "/popper.js/dist/umd/popper.min.js",
    paths.src_node_prefix + "/bootstrap/dist/js/bootstrap.min.js",
    paths.src_node_prefix + "/clipboard/dist/clipboard.min.js"
  ];
  return gulp
    .src(src_files)
    .pipe(newer(paths.js_src))
    .pipe(gulp.dest(paths.js_src));
});

gulp.task("build:scripts", cb => {
  runSequence("build:uglify", "build:concat", cb);
});

gulp.task("build:uglify", () => {
  return gulp
    .src(paths.js_src_pretty)
    .pipe(newer(paths.js_src_ugly))
    .pipe(uglify())
    .pipe(rename({ extname: ".min.js" }))
    .pipe(gulp.dest(paths.js_src_ugly))
    .on("error", gutil.log);
});

gulp.task("build:concat", () => {
  const src_files = [
    paths.js_src_ugly + "/jquery.slim.min.js",
    paths.js_src_ugly + "/bootstrap.min.js",
    paths.js_src_ugly + "/fontawesome.min.js",
    paths.js_src_ugly + "/fa-brands.min.js",
    paths.js_src_ugly + "/fa-solid.min.js",
    paths.js_src_ugly + "/prism.min.js",
    paths.js_src_ugly + "/sitesearch.min.js",
    paths.js_src_ugly + "/search_ux.min.js"
  ];
  return gulp
    .src(src_files)
    .pipe(sourcemaps.init())
    .pipe(concat("main.min.js"))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.jekyll_js_dest))
    .pipe(gulp.dest(paths.site_js_dest))
    .on("error", gutil.log);
});

gulp.task("clean:scripts", cb => {
  del([
    paths.jekyll_js_dest + "main.min.js",
    paths.site_js_dest + "main.min.js"
  ]);
  cb();
});

gulp.task("build:styles:main", () => {
  return sass(paths.scss_main_src + "/main.scss", {
    style: "compressed",
    trace: true
  })
    .pipe(postcss([autoprefixer({ browsers: ["last 2 versions"] })]))
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.jekyll_css_dest))
    .pipe(gulp.dest(paths.site_css_dest))
    .pipe(browserSync.stream())
    .on("error", gutil.log);
});

gulp.task("clean:styles", cb => {
  del([paths.jekyll_css_dest + "main.css", paths.site_css_dest + "main.css"]);
  cb();
});

gulp.task("build:images", () => {
  return gulp
    .src(paths.img_src)
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
    .pipe(gulp.dest(paths.jekyll_img_dest))
    .pipe(gulp.dest(paths.site_img_dest));
});

gulp.task("clean:images", cb => {
  del([paths.jekyll_img_dest + "/*", paths.site_img_dest + "/*"]);
  cb();
});

gulp.task("build:jekyll", () => {
  var shellCommand = "bundle exec jekyll build --config _config.yml";

  return gulp
    .src("")
    .pipe(run(shellCommand))
    .on("error", gutil.log);
});

gulp.task("clean:jekyll", function(cb) {
  del(["_site"]);
  cb();
});

gulp.task("clean", [
  "clean:jekyll",
  "clean:images",
  "clean:scripts",
  "clean:styles"
]);

gulp.task("build", cb => {
  runSequence(
    "clean",
    ["build:scripts", "build:images", "build:styles:main"],
    "build:jekyll",
    cb
  );
});

gulp.task("build:jekyll:watch", ["build:jekyll"], cb => {
  browserSync.reload();
  cb();
});

gulp.task("build:scripts:watch", ["build:scripts"], cb => {
  browserSync.reload();
  cb();
});

gulp.task("serve", ["build"], () => {
  browserSync.init({
    server: paths.jekyll_siteDir,
    ghostMode: true,
    logFileChanges: true
  });

  gulp.watch(["_config.yml"], ["build:jekyll:watch"]);
  gulp.watch("_assets/scss/**/*.scss", ["build:styles:main"]);
  gulp.watch("_assets/js/**/*.js", ["build:scripts"]);
  gulp.watch("_assets/images/**/*", ["build:images"]);
  gulp.watch("search.json", ["build:jekyll:watch"]);
  gulp.watch("_posts/**/*.+(md|markdown|MD)", ["build:jekyll:watch"]);
  gulp.watch("**/*.+(html|md|markdown|MD)", "!_site/**/*.*", [
    "build:jekyll:watch"
  ]);
  if (module.exports.drafts) {
    gulp.watch("_drafts/**/*.(md|markdown|MD)", ["build:jekyll:watch"]);
  }
});
