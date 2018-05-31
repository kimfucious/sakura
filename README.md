---
layout: post
title: Read Me
---

# Sakura Jekyll Theme

![Build Status](https://travis-ci.org/kimfucious/sakura.svg?branch=master)

> For a live demo of this template, go [here](https://sakura.abts.io).
>
> The git repository for this theme can be found [here](https://github.com/kimfucious/sakura).

I cobbled together this Jekyll template because I could never find a template that did/had exactly what I wanted and didn't have a bunch of stuff that I didn't want. I also have strived to keep things as simple as possible, while documenting as best I can, with the right amount of detail, so that anyone can use this template without too much tinkering yet allowing tinkering so that others can make it their own template if so desired.

## Features

* As responsive as can be (always room for improvement)
* Auto-generates responsive _feature images_ in the build process
* Bootstrap 4 and Font Awesome 5 are "baked in."
* Brand icons for social links in the footer via Font Awesome
* Clean, collapsible navbar that is ready to roll, yet customizeable
* Code syntax highlighting with Dracula theme
* Customizeable Jumbotron headers with responsive background images
* Documentation that tries not to make your head explode
* Generic Jekyll "docs" collection ready for your stuff
* Home page that lists all posts as Bootstrap cards with pictures & pagination
* Instant search by Algolia renders in a tidy modal
* HTML5 `<picture>` & `<figure>` elements, using Liquid tags in posts
* A smattering of Bootstrap's ".list-group" class to make things fancy
* Nicely automated, fairly extensive build process, using Gulp
* Override Bootstrap variables, easy peasy (make it yours!)
* Pre-built `about`, `archive`, and `collection` static pages to to what you will with
* Photo captions, using HTML 5 `<figcaption>` & Bootstrap `.figure-caption` class

## Installation

### Prerequisites

In case you don't already know this, you're going to need Ruby installed on your system before using Jekyll (and this theme). I am a big fan of not re-writing documentation, so I'll offer you instructions [here](https://www.ruby-lang.org/en/documentation/installation/).

You're also going to want to install [npm](https://www.npmjs.com/get-npm) (comes with Node.js) or [yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable). More on this later.

### Using this theme

Once you've got the above done, you can follow the instructions below to use this theme for your own Jekyll site.

Here's description of what you're about to do:

1.  Clone this theme from Github (via HTTPS or SSH)
2.  Install the Bundler gem `gem install bundler` (if you don't already have it)
3.  Run `bundle install`
4.  Run npm/yarn install (you need to have installed Node.js at least, plus maybe yarn to go further from above)
5.  Run `yarn install-theme` (my preference), or `gulp install-theme`, or `npm run install-theme`

That's it; five steps to **glory**!

This reminds me of a song from long ago: [Ten Easy Lessons](https://www.youtube.com/watch?v=WP1TMVlDIcU).

> "Be a star, play the guitar, entertain your friends. Be the life of the party!" <cite>~ J.J. Cale</cite>

The below will walk you through each one of the above steps with a bit more detail.

#### Clone this repo

##### Using SSH

```shell
git clone git@github.com:kimfucious/sakura.git
```

or

##### Using HTTPS

```shell
git clone https://github.com/kimfucious/sakura.git <= HTTP
```

Either of these should bring everything down to your machine into a folder named, `sakura`.

Change into the `sakura` directory and give it a look see...

Your file tree will look something like this:

```shell
.
├── 404.html
├── Gemfile
├── LICENSE.txt
├── README.md
├── _assets
├── _config.yml
├── _docs
├── _includes
├── _layouts
├── _plugins
├── _posts
├── favicon.ico
├── gulpfile.js
├── index.html
├── package.json
├── pages
├── publish.sh
├── search.json
├── yarn-error.log
└── yarn.lock
```

#### Get your ruby gems

Jekyll runs on Ruby. And it's assumed that you installed it per the prerequisites mentioned above.

Run the following commands in the `sakura` folder.

```shell
gem install bundler
bundle install
```

These commands will install the Bundler gem and then install all the gems in the `Gemfile`, using Bundler.

#### Run npm/yarn install

To get more, essential stuff, you'll need to run either `npm install` or `yarn install` to bring down the source files, including Bootstrap, jQuery, etc.

> :confused: While this may seem like a lot of stuff to bring down for a stupid template, most of it is development dependencies to help you make this theme your own.

Once that's done (and it may take a while), you need to run two manual Gulp tasks. I've intentionally made these manual, leaving them out of the build process for a bit more control over the source. You only have to do this once, or at least until you decide you want to use more packages or update them.

> :exclamation: The following task is destructive to any SCSS changes you may make after running this task the first time. I suggest that you run it only once for the initial install.

#### Run npm/yarn install-theme

Run the following from the root of the `sakura` folder:

```js
yarn install-theme
```

This will copy all of Bootstrap's SCSS files into the `_assets/scss` folder and all needed JS source to the `_assets/js/vendor/node` folder.

The SCSS will get compiled along with other SCSS into CSS during the build process, and the JS will get compiled along with other JS files into the `main.min.js` file during the build process.

> :point_up: If the Gulp command isn't working, it's because Gulp is not installed globally via npm/yarn. You can execute non global commands by prefixing them with `node_modules/.bin`, like this:

#### Server Up

If you see this, after running `yarn install-theme`, you're all good!

```js
[Browsersync] Access URLs:
 -------------------------------------
       Local: http://localhost:3000
    External: http://192.168.1.10:3000
 -------------------------------------
          UI: http://localhost:3001
 UI External: http://192.168.1.10:3001
 -------------------------------------
[Browsersync] Serving files from: _site/
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site, if it hasn't already opened in your default browser.

> :point_up: To stop running the server, press `ctrl-c` where the server is running. To start the server again (which includes the Jekyll build process), run `yarn serve` from the sakura directory.

> :exclamation: While you might be tempted to run `bundle exec jekyll serve`, don't do it! This site has been painstakingly crafted to leverage the best experience by using BrowserSync and Gulp tasks. `gulp serve` (or `yarn serve`) is your friend. Enjoy it...

#### The \_site Directory

The `gulp serve` command performs the Jekyll build process, which creates the `_site` directory, like the below:

```shell
_site
├── 404.html
├── LICENSE.txt
├── README.md <= the file you are reading now
├── about <= sample page
├── archive <= sample page
├── assets <= sample page
├── cardigan-butcher <= sample post
├── code-snippets <= sample post
├── dexteriore <= sample post
├── docs <= sample collection directory
├── favicon.ico
├── figure-element <= sample post
├── index.html <= compiled "home" page with pagination
├── jean-shorts <= sample post
├── page2 <= page two off the index.html page created by pagination
├── picture-element <= sample post
├── ready-sample-one <= sample post
├── search.json <= instant search results file
└── sitemap.xml <= sitemap generated from jekyll-sitemap plugin
```

> The `_site` directory is where Jekyll puts your compiled site on build. You can read more about the Jekyll directory structure [here](https://jekyllrb.com/docs/structure/).

### Publish your site

When you're ready, and not that you are at the moment, publish the `_site` directory.

For publishing options, checkout [surge](https://surge.sh/help/getting-started-with-surge) and/or [netlify](https://www.netlify.com/blog/2017/05/11/migrating-your-jekyll-site-to-netlify/). There are other options, but these two are pretty slick.

I haven't worked out if/how to make this work on Github Pages. My initial thoughts are that if Jekyll does it with their docs, maybe I should too. That said, Netlify (and Surge) makes things so easy, I haven't gotten around to it yet.

## Usage

You don't really need to know how this theme works in order to use it. You can simply create your posts, using Markdown, and save them in the `_posts` folder, if you simply want to blog.

> :point_up: Take a moment to check out the sample posts for some further tips on using this template.

### Now, it's up to you

Time to generate some cool content!

If you're ready to create your first post, go for it! Just create a new markdown file in the `_posts` folder. If you have the server running, your post should appear in your browser a short while after you save it.

If you want some more info on creating posts, read [here](https://jekyllrb.com/docs/posts/).

> :point_up: Be sure to name your post file correctly (e.g. year-month-day-title.md)!

Further, to delete, modify, or add new content, do this in the `_posts`, `pages`, and/or the `_docs` folders. Jekyll will tear down and rebuild the `_site` folder contents accordingly with each new build.

Most likely, you'll want to customize a few things, and the stuff below should guide you on how to do just that.

### Components

#### Posts

Usually, people use Jekyll as a blog. Blogs are composed of posts. The main `index.html` file, the home page, of this site lists a paginated set of all posts (written in Markdown) that have been created within the `_posts` folder.

The main `index.html` file looks like this:

```markdown
---
layout: default
pagination:
  enabled: true
---

{% raw %}{% include postcards.html %}
{% include pagination.html %}{% endraw %}
```

> :point_up: The raw/endraw tags above and found elsewhere on this page (visible only on Github) are only there to display code snippets in this README.md file correctly on a Jekyll site without actually processing the code. Be sure to not use them for real code.

You'll soon realize, if you haven't already, that this theme relies heavily on the use of includes.

I've opted to list posts on the `index.html` page as Bootstrap "cards". The cards work pretty well and are responsive width-wise; however, they can vary by height, which might bother those with OCD tendencies. I've decided to use Bootstrap's ".card-deck" class to make the heights uniform.

If you don't like cards, you can display paginated posts in a list format by swapping out "postcards" above to "posts" like below:

```markdown
---
layout: default
pagination:
  enabled: true
---

{% raw %}{% include posts.html %}
{% include pagination.html %}{% endraw %}
```

##### Pagination on the Home Page

Once you have more than a few posts, your home page, archives, and docs will begin to fill up. Pagination allows your posts to be split across several pages that are navigatable using Bootstrap pagination controls.

Pagination is enabled on the `index.html`, `archive.html`, and `docs.html` pages with the `enabled: true` front-matter entries as defined in `_layouts`. Here's and example from `archives.html`:

```markdown
---
title: Archive
permalink: /archive/
pagination:
  enabled: true
  per_page: 10
---
```

The maximum number of posts per page can be controlled by the `per_page` entry under the `# Pagination` section in the `_config.yml` file globally or on each page by adjusting the front matter variables. Change this to whatever you want.

Collections are handled slightly different, based on how the jekyll-pagination-v2 plugin works.

```markdown
---
title: Documentation
permalink: /docs/
pagination:
  enabled: true
  collection: docs
  per_page: 5
  sort_field: title
  sort_reverse: false
---
```

> :point_up: Until further notice, you need to manually add a `date` variable to each and every collection post; otherwise, you won't be able to index the site using for Algolia search via the `yarn index` command.

> :zap: Normally, you'd need to reset the server to see any changes made in `config.yml`; however, because we're using some handy Gulp watch tasks, the site will rebuild and BrowserSync will reload _automagically_.

#### Pages

This site has a few static pages (other than index.html): `about.html`, `archive.html`, and `docs.html`. Each of these is "hard-coded" as a link in the `_includes/navbar.html` file, which serves as the site's navbar. Edit as needed/wanted there.

> :bulb: You can modify the text between the HTML anchor tags in the `_includes/navbar.html` file to change what things took like on the navbar without having to change the underlying folder names:

```html
<li class="nav-item">
  <a href="{{ site.baseurl }}/docs/" class="nav-link">Change me!</a>
</li>
```

##### about.html

The about page is a simple, static page that uses a "card" with a little CSS shadowing for depth. Edit it to your heart's desire at `pages/about.html`.

##### archive.html

The archive page is a simple, static page with a sprinkling of Liquid logic to list out all of the posts found in the `_posts` folder. It uses Bootstrap's ".list-group" classes to format the list a little nicer than a plain-jane `<ul>`.

Follow the white rabbit to `_includes/archive.html` if you want to fiddle with this.

##### docs.html

Collections in Jekyll are curious things. I invite you to read about them [here](https://jekyllrb.com/docs/collections/).

I like collections because they fit a niche use case where pages and posts don't quite cut the mustard.

This template gives you a very generic "docs" setup that you can customize however you see fit. Don't ask me about sorting collections, as I have not figured that out yet. It seems lacking.

This also uses Bootstrap's "list-group" classes, as I've grown fond of how they look with their top-bottom borders.

### Core HTML Structure

#### tl;dr

You need to surround all content within the layouts with the `head.html` and `footer.html`, or Jekyll will not be able to produce valid html.

#### Details

This theme leverages a lot of include files. Two key files found in the `_includes` folder are: `head.html` (not header) and `footer.html`. It's important to understand that the `<body>` and `<html>` tags are split across these two files.

All pages generated by Jekyll via this theme will use the `head.html` file to "open" the beginning of each html file, and the `footer.html` file to "close" the html file.

The layouts (found in `_layouts`) surround the content with `head.html` and `footer.html`, using the [Liquid templating syntax](https://jekyllrb.com/docs/templates/) like below:

```ruby
{% raw %}{% include head.html %}
{{ content }}
{% include footer.html %}{%endraw%}
```

### navbar.html = bootstrap navbar

The `_includes/navbar.html` file is a bootstrap style navbar with a left-side brand and right-aligned menu entries for static pages.

You'll need to edit it manually for your own links at `_includes/navbar.html`.

The navbar is included in the layout files by adding it like this:

```ruby
{% raw %}{% include head.html %}
{% include navbar.html %} <= here
{{ content }}
{% include footer.html %{% endraw %}}
```

> :point_up: Don't forget to sandwich your files between `head.html` and `footer.html` includes.

### Bootstrap baked-in

Bootstrap (4.1.1 at present) has been implemented to work with this template.

In brief, _all_ Bootstrap SCSS source files have been downloaded to `_assets/scss/bootstrap`. Bootstrap is imported (among other scss files) via `_assests/scss/main.scss`, which ultimately gets compiled by the build process to `_/site/css/main.css`.

> :point_up: The compiled file is a css file, not scss.

I've whittled down a sizeable chunk of Bootstrap CSS (not used by this theme) by commenting out imports in the `_assets/scss/bootstrap/bootstrap.scss` file. When you first start out and run the manual gulp task to copy Bootstrap's SCSS files to the `_assets/scss` folder, all of these comments wiped out. Use the below as a guide to recomment them out, and further adjust as needed.

```scss
@import "functions";
@import "variables";
@import "mixins";
@import "root";
@import "reboot";
@import "type";
@import "images";
@import "code";
@import "grid";
@import "tables";
@import "forms";
@import "buttons";
@import "transitions";
@import "dropdown";
@import "button-group";
// @import "input-group";
// @import "custom-forms";
@import "nav";
@import "navbar";
@import "card";
// @import "breadcrumb";
@import "pagination";
// @import "badge";
@import "jumbotron";
// @import "alert";
// @import "progress";
@import "media";
@import "list-group";
@import "close";
@import "modal";
@import "tooltip";
// @import "popover";
// @import "carousel";
@import "utilities";
// @import "print";
```

> :warning: If you run the `gulp copy:bootstrap-scss` task, the commenting will again be wiped out and _all_ imports will be included in the next build.

The ability to override Bootstrap variables is enabled the first line in the `_assets/scss/main.scss` file:

```scss
@import "../_assets/scss/custom/_variables";
```

With the above line in place, you can modify the `_assets/scss/custom/_variables.scss` file to override Bootstrap's default variables. For example, you can change the primary color like the below:

```scss
$primary: #be132d; // china red
```

The JavaScript bits of Bootstrap, including jQuery and Popper.js, have been copied to the `_assets/js/vendor/node` folder.

The build proces concantanates all js files (putting jQuery first, and Popper.js before Bootstrap) into a single file, `main.min.js` that ultimately finds it's way to the `_site/assets/js/` and `assets/js` folders.

> :bulb: Note that there are `_assets` and `assets`. While this may be confusing, there is a method, to this madness. Think of `_assets` (with the underscore) as where you put source, and `assets` (without the underscore) where processed source is put after a Gulp task has run. `_site/assets` is where Jekyll compiles/copies stuff to from `assets` on build.

### Font Awesome 5

This theme imports a small number of Font Awesome Fonts (SVG with JS) as described [here](https://fontawesome.com/get-started/svg-with-js). As with all the other js files, the `_assets/js/vendor/fontawesome-all.min.js`, `_assets/js/pretty/vendor/fa-brands.js`, `_assets/js/pretty/vendor/fa-solid.js` files get concantenated into the `main.min.js` file during build.

The files are limited so as to keep the size of the JS files down.

> :point_up: The reason that `fa-brands` and `fa-solid` are in the "pretty" folder is so that you can add or remove whatever icons your want. The build process will uglify them and get them into `main.min.js`.

You can read about how to use Font Awesome [here](https://fontawesome.com/how-to-use/svg-with-js).

At present, they are only usable via HTML, as I didn't see a big need to use them in markup, .esp with emojis enabled. There is a [Jekyll Plugin](https://gist.github.com/23maverick23/8532525) that will let you do this, but it's not on the Github Pages safe list, so I've elected not to use it.

## Contributing

Bug reports and pull requests are welcome on GitHub at [https://github.com/kimfucious/sakura](https://github.com/kimfucious/sakura). This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Credits and Resources

* [A Guide to Responsive Images with Ready-to-Use Templates](https://medium.freecodecamp.org/a-guide-to-responsive-images-with-ready-to-use-templates-c400bd65c433)
* [Can I Use Embed](https://caniuse.bitsofco.de/)
* [Building a simple responsive images pipeline with Gulp](https://www.webstoemp.com/blog/responsive-images-pipeline-with-gulp/)
* [Creating a Jekyll Blog with Bootstrap 4 and Sass - Part 1](https://experimentingwithcode.com/creating-a-jekyll-blog-with-bootstrap-4-and-sass-part-1/) - all [five parts](https://experimentingwithcode.com/archive/)
* [Filament Group - loadCSS](https://github.com/filamentgroup/loadCSS)
* [Font Awesome in Markdown Jekyll plugin](https://gist.github.com/23maverick23/8532525)
* [Going Static: Episode II — Attack of the Comments](https://mademistakes.com/articles/jekyll-static-comments/)
* [Jekyll Picture Tag](https://github.com/robwierzbowski/jekyll-picture-tag)
* [Jemoji plugin](https://github.com/jekyll/jemoji)
* [Publishing in Netlify via TravisCI](https://www.laroberto.com/publishing-in-netlify-via-travisci/)
* [Hipster Ipsum](https://hipsum.co)
* [How I'm Using Jekyll in 2017](https://mademistakes.com/articles/using-jekyll-2017/)
* [Instant Jekyll Search](https://blog.webjeda.com/instant-jekyll-search/)
* [Lorem Markdownnum](https://jaspervdj.be/lorem-markdownum/)
* [Lorem Pictum](https://picsum.photos)
* [Optimizing Jekyll Performance with Gulp](https://savaslabs.com/2016/10/19/optimizing-jekyll-with-gulp.html)
* [Staticman](https://staticman.net/docs/)
* [Website Continuous Integration with Travis CI, Jekyll, gulp, and GitHub](https://cesium.com/blog/2016/02/03/cesium-website-continuous-integration/)

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
