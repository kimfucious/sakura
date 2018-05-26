const paths = {};

// Directories
paths.assetsDir = "_assets/"; // The files Gulp will handle.
paths.jekyllDir = ""; // The files Jekyll will handle.
paths.jekyllAssetsDir = "assets/"; // The asset files Jekyll will handle.
paths.nodeSrcDir = "node_modules/"; // Node source files.
paths.siteDir = "_site/"; // The resulting static site.
paths.siteAssetsDir = "_site/assets/"; // The resulting static site's assets.

// Folder naming conventions.
paths.postFolderName = "_posts";
paths.draftFolderName = "_drafts";
// paths.fontFolderName   = 'fonts'
paths.imageFolderName = "images";
paths.scriptFolderName = "js";
paths.scssFolderName = "scss";
paths.cssFolderName = "css";

// Asset files locations.
paths.scssFiles = paths.assetsDir + paths.scssFolderName;
paths.jsFiles = paths.assetsDir + paths.scriptFolderName;
paths.imageFiles = paths.assetsDir + paths.imageFolderName;
paths.normalImageFiles = paths.imageFiles + "/normal";
paths.responsiveImageFiles = paths.imageFiles + "/responsive";
paths.tempImageFiles = paths.imageFiles + "/temp";
// paths.fontFiles   = paths.assetsDir + paths.fontFolderName;

// Jekyll files locations.
paths.jekyllPostFiles = paths.jekyllDir + paths.postFolderName;
paths.jekyllDraftFiles = paths.jekyllDir + paths.draftFolderName;
paths.jekyllCssFiles = paths.jekyllAssetsDir + paths.cssFolderName;
paths.jekyllJsFiles = paths.jekyllAssetsDir + paths.scriptFolderName;
paths.jekyllImageFiles = paths.jekyllAssetsDir + paths.imageFolderName;
// paths.jekyllFontFiles  = paths.jekyllAssetsDir + paths.fontFolderName;

// Site files locations.
paths.siteCssFiles = paths.siteAssetsDir + paths.cssFolderName;
paths.siteJsFiles = paths.siteAssetsDir + paths.scriptFolderName;
paths.siteImageFiles = paths.siteAssetsDir + paths.imageFolderName;
paths.siteFontFiles = paths.siteAssetsDir + paths.fontFolderName;

// Glob patterns by file type.
paths.sassPattern = "/**/*.scss";
paths.jsPattern = "/**/*.js";
paths.imagePattern = "/**/*.+(jpg|JPG|jpeg|JPEG|png|PNG|svg|SVG|gif|GIF)";
paths.markdownPattern = "/**/*.+(md|MD|markdown|MARKDOWN)";
paths.htmlPattern = "/**/*.html";
// paths.xmlPattern      = '/**/*.xml';

// Asset files globs
paths.sassFilesGlob = paths.sassFiles + paths.sassPattern;
paths.jsFilesGlob = paths.jsFiles + paths.jsPattern;
paths.imageFilesGlob = paths.imageFiles + paths.imagePattern;
paths.normalImageFilesGlob = paths.normalImageFiles + paths.imagePattern;
paths.responsiveImageFilesGlob =
  paths.responsiveImageFiles + paths.imagePattern;
paths.tempImageFilesGlob = paths.tempImageFiles + paths.imagePattern;

// Jekyll files globs
paths.jekyllPostFilesGlob = paths.jekyllPostFiles + paths.markdownPattern;
paths.jekyllDraftFilesGlob = paths.jekyllDraftFiles + paths.markdownPattern;
paths.jekyllHtmlFilesGlob = paths.jekyllDir + paths.htmlPattern;
// paths.jekyllXmlFilesGlob   = paths.jekyllDir        + paths.xmlPattern;
paths.jekyllImageFilesGlob = paths.jekyllImageFiles + paths.imagePattern;

// Site files globs
paths.siteHtmlFilesGlob = paths.siteDir + paths.htmlPattern;

module.exports = paths;
