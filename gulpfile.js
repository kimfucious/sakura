const autoprefixer = require("autoprefixer");
const browserSync = require("browser-sync").create();
const cleanCSS = require("gulp-clean-css");
const critical = require("critical").stream;
const del = require("del");
const concat = require("gulp-concat");
const gulp = require("gulp");
const gutil = require("gulp-util");
const newer = require("gulp-newer");
const order = require("gulp-order");
const postcss = require("gulp-postcss");
const pump = require("pump");
const rename = require("gulp-rename");
const responsive = require("gulp-responsive");
const run = require("gulp-run");
const runSequence = require("run-sequence");
const sass = require("gulp-ruby-sass");
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");

const paths = require("./_assets/gulp_config/paths");

// !!! If you run this, you'll remove the commented out modules in _assets/scss/bootstrap/bootstrap.scss
gulp.task("build:copy-bs-scss-from-node-modules", () => {
  return gulp
    .src(`${paths.nodeSrcDir}/bootstrap/scss/**/*`)
    .pipe(gulp.dest(paths.scss_src));
});

gulp.task("build:copy-js-src-from-node-modules", () => {
  const src_files = [
    paths.nodeSrcDir + "/jquery/dist/jquery.slim.min.js",
    paths.nodeSrcDir + "/popper.js/dist/umd/popper.min.js",
    paths.nodeSrcDir + "/bootstrap/dist/js/bootstrap.min.js",
    paths.nodeSrcDir + "/clipboard/dist/clipboard.min.js"
  ];
  return gulp
    .src(src_files)
    .pipe(newer(paths.jsFiles + "/vendor/node"))
    .pipe(gulp.dest(paths.jsFiles + "/vendor/node"));
});

gulp.task("build:scripts", cb => {
  runSequence("build:uglify", "build:concat", cb);
});

gulp.task("build:uglify", cb => {
  const options = {
    output: {
      comments: true
    }
  };
  pump(
    [
      gulp.src(paths.jsFiles + "/pretty/*.js"),
      uglify(options),
      rename({ extname: ".min.js" }),
      gulp.dest(paths.jsFiles + "/ugly")
    ],
    cb
  );
});

gulp.task("build:concat", () => {
  const src_files = [
    paths.jsFiles + "/vendor/node/jquery.slim.min.js",
    paths.jsFiles + "/vendor/node/bootstrap.min.js",
    paths.jsFiles + "/vendor/fontawesome.min.js",
    paths.jsFiles + "/vendor/fa-brands.min.js",
    paths.jsFiles + "/vendor/fa-solid.min.js",
    paths.jsFiles + "/ugly/sitesearch.min.js",
    paths.jsFiles + "/ugly/search_ux.min.js"
  ];
  return gulp
    .src(src_files)
    .pipe(sourcemaps.init())
    .pipe(concat("main.min.js"))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(paths.jekyllJsFiles))
    .pipe(gulp.dest(paths.siteJsFiles))
    .on("error", gutil.log);
});

gulp.task("clean:scripts", cb => {
  del([paths.jekyllJsFiles + "/*", paths.siteJsFiles + "/*"]);
  cb();
});

// gulp.task('critical', ['build'], function (cb) {
//   critical.generate({
//       inline: true,
//       base: '_site/',
//       src: 'index.html',
//       dest: '_site/index-critical.html',
//       width: 320,
//       height: 480,
//       minify: true
//   });
// });

gulp.task("critical", () => {
  return gulp
    .src("_site/index.html")
    .pipe(
      critical({
        base: "_site/",
        css: ["css/main.css"],
        dest: "main.critical.css",
        minify: true,
        dimensions: [
          {
            width: 1200,
            width: 1024,
            width: 768,
            width: 576,
            width: 320
          }
        ]
      })
    )
    .on("error", gutil.log)
    .pipe(rename("main.critical.css"))
    .pipe(gulp.dest("css/"))
    .pipe(gulp.dest("_site/css/"));
});

gulp.task("build:styles:main", () => {
  return sass(paths.scssFiles + "/main.scss", {
    style: "compressed",
    trace: true
  })
    .pipe(postcss([autoprefixer({ browsers: ["last 2 versions"] })]))
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(paths.jekyllCssFiles))
    .pipe(gulp.dest(paths.siteCssFiles))
    .pipe(browserSync.stream())
    .on("error", gutil.log);
});

gulp.task("clean:styles", cb => {
  del([paths.jekyllCssFiles + "/*", paths.siteCssFiles + "/*"]);
  cb();
});

gulp.task("build:images", () => {
  return gulp
    .src(paths.imageFilesGlob)
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
    .pipe(gulp.dest(paths.jekyllImageFiles))
    .pipe(gulp.dest(paths.siteImageFiles));
});

gulp.task("clean:images", cb => {
  del([paths.jekyllImageFiles + "/*", paths.siteImageFiles + "/*"]);
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
    server: paths.siteDir,
    ghostMode: true,
    logFileChanges: true
  });

  gulp.watch(["_config.yml"], ["build:jekyll:watch"]);
  gulp.watch("_assets/scss/**/*.scss", ["build:styles:main"]);
  gulp.watch("_assets/js/**/*.js", ["build:scripts"]);
  gulp.watch("_assets/images/**/*", ["build:images"]);
  gulp.watch("search.json", ["build:jekyll:watch"]);
  gulp.watch("_posts/**/*.+(md|markdown|MD)", ["build:jekyll:watch"]);
  gulp.watch(
    ["**/*.+(html|md|markdown|MD)", "!_site/**/*.*"],
    ["build:jekyll:watch"]
  );
  if (module.exports.drafts) {
    gulp.watch("_drafts/**/*.(md|markdown|MD)", ["build:jekyll:watch"]);
  }
});
