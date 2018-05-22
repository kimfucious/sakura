---
layout: post
title: Read Me
---

Ignore the above layout/post/title bits when reading this on Github. They are only there so as to allow this README.md page to be compiled into a static HTML page by Jekyll and used in the theme demo. They are only visible on Github. You kids have seen too many X-files. Move along, nothing to see here.

# Kimfucious Bootstrap Jekyll

> For a live demo of this template, go [here](https://kbj.abts.io).
>
> The git repository for this theme can be found [here](https://github.com/kimfucious/kbj).

I cobbled together this Jekyll template because I could never find a template that did/had exactly what I wanted and didn't have a bunch of stuff that I didn't want. I also have strived to keep things as simple as possible, while documenting as best I can, with the right amount of detail, so that anyone can use this template without too much tinkering yet allowing tinkering so that others can make it their own template if so desired.

## Features

* As responsive as can be (always room for improvement)
* Bootstrap 4 and Font Awesome 5 are "baked in."
* Brand icons for social links in the footer via Font Awesome
* Clean, collapsible navbar that is ready to roll, yet customizeable
* Code syntax highlighting with Dracula theme
* Customizeable Jumbotron headers with responsive images
* Documentation that tries not to make your head explode
* Generic Jekyll collection ready for your stuff
* Home page that lists all posts as Bootstrap cards with pictures & pagination
* HTML5 `<picture>` & `<figure>` elements (with `srcset`) in posts
* Liberal sprinklings of Bootstrap's ".list-group" class to make things fancy
* Nicely automated, fairly extensive build process, using Gulp
* Override Bootstrap variables, easy peasy (make it yours!)
* Pre-built `about`, `archive`, and `collection` static pages to to what you will with
* Photo captions, using HTML 5 `<figcaption>` & Bootstrap `.figure-caption` class
* Responsive background images, using CSS `imgset`
* Search data is indexed with every Jekyll build
* Search renders results instantly on the home page

## Installation

### Prerequisites

In case you don't already know this, you're going to need Ruby installed on your system before using Jekyll (and this theme). I am a big fan of not re-writing documentation, so I'll offer you instructions [here](https://www.ruby-lang.org/en/documentation/installation/).

Same goes for Jekyll, see [here](https://jekyllrb.com/docs/installation/) for installation instructions.

Optionally, you can install npm/yarn so as to perform some tasks (e.g. js concatanation, css autoprefixing, etc.) using Gulp, which I'll describe later on.

### Using this theme

Once you've got the above done, you can follow the instructions below to use this theme for your own Jekyll site.

#### Clone this repo to your local machine

```shell
git clone git@github.com:kimfucious/kbj.git <= SSH
or
git clone https://github.com/kimfucious/kbj.git <= HTTP
```

This will bring everything down to your machine into a folder named, kbj.

Your file tree will look something like this:

```shell
├── 404.html
├── Gemfile
├── Gemfile.lock
├── LICENSE.txt
├── README.md
├── _assets
├── _config.yml
├── _includes
├── _layouts
├── _my_collection
├── _plugins
├── _posts
├── _site
├── assets
├── css
├── favicon.ico
├── gulpfile.js
├── index.html
├── package.json
└── pages
```

This is everything you need (and more), with sample data, to use and begin to understand how the template is put together.

To test out this theme on your local machine, run the following command from within the kbj folder:

```shell
bundle exec jekyll serve --livereload
```

The above command performs the Jekyll build process, which creates the `_site` directory, like the below:

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
├── css <= compressed main.css file
├── favicon.ico
├── index.html <= compiled "home" page with pagination
├── jean-shorts <= sample post
├── more-samples <= sample post
├── my_collection <= sample collection directory
├── page2 <= page two off the index.html page created by pagination
└── sample-1 <= sample post
```

> The `_site` directory is where Jekyll puts your compiled site. You can read more about the Jekyll directory structure [here](https://jekyllrb.com/docs/structure/).

Open http://localhost:4000 in your browser to view the site.

When you're ready, publish the `_site` directory.

For publishing options, checkout [surge](https://surge.sh/help/getting-started-with-surge) and/or [netlify](https://www.netlify.com/blog/2017/05/11/migrating-your-jekyll-site-to-netlify/). There are other options, but these two are pretty slick.

I haven't yet tested this with Github pages, but I intend to...

## Usage

You don't really need to know how this theme works in order to use it. You can simply create your posts, using Markdown, and save them in the `_posts` folder, if you simply want to blog.

Further, to delete, modify, or add new content, do this in the `_posts`, `pages`, and/or the `_my_collection` folders. Jekyll will tear down and rebuild the `_site` folder contents accordingly with each new build.

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

Once you have more than a few posts, your home page will begin to fill up. Pagination allows your posts to be split across several pages that are navigatable using Bootstrap pagination controls.

Pagination is enabled on the `index.html` page with the `enabled: true` front-matter entry as shown above.

The maximum number of posts per page can be controlled by the `per_page` entry under the `# Pagination` section in the `_config.yml` file. Change this to whatever you want and reset the server to see the result.

> :point_up: You'll need to reset the server to see any changes made in `config.yml`.

The pagination controls are using Font Awesome icons, which might be overkill. If you're daring, you can change this in the `_includes/pagination.html` file to suit your wants/needs.

#### Pages

This site has a few static pages (other than index.html): `about.html`, `archive.html`, and `collection.html`. Each of these is "hard-coded" as a link in the `_includes/header.html` file, which serves as the site's navbar. Edit as needed/wanted there.

> :bulb: You can modify the text between the HTML anchor tags in the `_includes/header.html` file to change what things took like on the navbar without having to change the underlying folder names:

```html
<li class="nav-item">
  <a href="{{ site.baseurl }}/my_collection/" class="nav-link">Change me!</a>
</li>
```

##### about.html

The about page is a simple, static page that uses a "card" with a little CSS shadowing for depth. Edit it to your heart's desire at `pages/about.html`.

##### archive.html

The archive page is a simple, static page with a sprinkling of Liquid logic to list out all of the posts found in the `_posts` folder. It uses Bootstrap's ".list-group" classes to format the list a little nicer than a plain-jane `<ul>`.

Follow the white rabbit to `_includes/archive.html` if you want to fiddle with this.

##### collection.html

Collections in Jekyll are curious things. I invite you to read about them [here](https://jekyllrb.com/docs/collections/).

I like collections because they fit a niche use case where pages and posts don't quite cut the mustard.

This template gives you a very generic "my_collection" setup that you can customize however you see fit. Don't ask me about sorting collections, as I have not figured that out yet. It seems lacking.

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

### header.html = bootstrap navbar

The `_includes/header.html` file is a bootstrap style navbar with a left-side brand and right-aligned menu entries for static pages.

You'll need to edit it manually for your own links at `_includes/header.html`.

The navbar/header is included in the layout files by adding it like this:

```ruby
{% raw %}{% include head.html %}
{% include header.html %} <= here
{{ content }}
{% include footer.html %{% endraw %}}
```

> :point_up: Don't forget to sandwich your files between `head.html` and `footer.html` includes.

### Bootstrap baked-in

Bootstrap (4.1.1 at present) has been implemented to work with this template.

In brief, _all_ Bootstrap SCSS source files have been downloaded to `_assets/scss/bootstrap`. Bootstrap is imported (among other scss files) via `css/main.scss`, which gets compiled by Jekyll to `_/site/css/main.css`.

> :point_up: The compiled file is a css file, not scss. Jekyll does this during build, however, it doesn't add autoprefixing. This can be done with a Gulp task, which I'll talk about later.

I've wittled down a sizeable chunk of Bootstrap CSS (not used by this theme) by commenting out imports in the `_assets/scss/bootstrap` directory. Should you decide you need them, you can uncomment them and they'll be available in the next build.

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
// @import "close";
// @import "modal";
// @import "tooltip";
// @import "popover";
// @import "carousel";
@import "utilities";
// @import "print";
```

> :point_up: If you run the `glup copy:bs-scss-from-node-modules` task, the commenting will be wiped out and \_all\* imports will be included in the next build.

The ability to override Bootstrap variables is enabled the first line in the `css/main.scss` file:

```scss
@import "../_assets/scss/custom/_variables";
```

There may be a better, more proper way to do this, but I haven't decided if/how to change this it yet. Regardless, with the above line in place, you can modify the `_assets/scss/custom/_variables.scss` file to override Bootstrap's default variables. For example, you can change the primary color like the below:

```scss
$primary: #be132d; // china red
```

The JavaScript bits of Bootstrap, including jQuery and Popper.js, have been copied to the `_assets/js/` folder. Just so you know, they were originally downloaded using npm/yarn to `node_modules` and there is a Gulp task (`gulp copy-js-src`) that copies the minified files to the `_assets/js/` folder.

Another Gulp task (`gulp concat.js`) concantanates all js files (putting jQuery first) into a single file, `main.js` located in the `assets/js/` folder.

> :bulb: Note the lack of the underscore on `assets/js/` folder above. Think of `_assets` (with the underscore) as where you put source, and `assets` (wihtout the underscore) where processed source is put after a Gulp task has run. `_site/assets` is where Jekyll compiles/copies stuff to from `assets` on build.

### Font Awesome 5

This theme imports _all_ Font Awesome Fonts (SVG with JS) as described [here](https://fontawesome.com/get-started/svg-with-js). As with all the other js files, the `_assets/js/fontawesome-all.min.js` file gets concantenated into the `assets/js/main.js` file via the `Gulp concat-js` task.

You can read about how to use Font Awesome [here](https://fontawesome.com/how-to-use/svg-with-js).

What you'll glean from reading the docs is that you'll need to add a unique class to your `<i>` tags to get them to work. This is all well and fine when working with HTML files, but if using inline HTML in Markdown is not your cup of tea, I've implemented a solution based on [this](https://gist.github.com/23maverick23/8532525) by Ryan Morrissey.

The `font-awesome.rb` file is a plugin found in the `_plugins` folder. It is _not_ called in the `_config.yml` file, and I'm not sure if it will prevent this theme from working on Github pages yet.

#### Font Awesome in Markdown examples

Here are examples of how to get Font Awesome icons into your markup files:

```ruby
{% raw %}{% icon fa-camera-retro %}
{% icon fa-camera-retro fa-lg %}
{% icon fa-camera-retro fa-rotate-90 %}
{% icon fa-camera-retro fa-spin %}{% endraw %}
```

They look like this:

{% icon fa-camera-retro %}
{% icon fa-camera-retro fa-lg %}
{% icon fa-camera-retro fa-rotate-90 %}
{% icon fa-camera-retro fa-spin %}

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/kimfucious/kimfucious-bj. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Credits and Resources

* [Building a simple responsive images pipeline with Gulp](https://www.webstoemp.com/blog/responsive-images-pipeline-with-gulp/)
* [Creating a Jekyll Blog with Bootstrap 4 and Sass - Part 1](https://experimentingwithcode.com/creating-a-jekyll-blog-with-bootstrap-4-and-sass-part-1/) - all [five parts](https://experimentingwithcode.com/archive/)
* [Filament Group - loadCSS](https://github.com/filamentgroup/loadCSS)
* [Font Awesome in Markdown Jekyll plugin](https://gist.github.com/23maverick23/8532525)
* [Going Static: Episode II — Attack of the Comments](https://mademistakes.com/articles/jekyll-static-comments/)
* [Jekyll Picture Tag](https://github.com/robwierzbowski/jekyll-picture-tag)
* [Jemoji plugin](https://github.com/jekyll/jemoji)
* [Hipster Ipsum](https://hipsum.co)
* [How I'm Using Jekyll in 2017](https://mademistakes.com/articles/using-jekyll-2017/)
* [Instant Jekyll Search](https://blog.webjeda.com/instant-jekyll-search/)
* [Lorem Markdownnum](https://jaspervdj.be/lorem-markdownum/)
* [Lorem Pictum](https://picsum.photos)
* [Optimizing Jekyll Performance with Gulp](https://savaslabs.com/2016/10/19/optimizing-jekyll-with-gulp.html)
* [Staticman](https://staticman.net/docs/)

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
