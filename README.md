# kimfucious-bootstrap-jekyll (kimfucious-bj)

_This is a work in progress. I'll remove this line when I think it's ready for others to use, if they want._

I cobbled together this template because I could never find a template that did/had exactly what I wanted and didn't have a bunch of stuff that I didn't want. I also have strived to keep things as simple as possible, while documenting as best I can, with the right amount of detail, so that anyone can use this template without too much tinkering yet allowing tinkering so that others can make it their own template if so desired.

Bootstrap and Font Awesome are "baked in." See notes below for further details on those things.

## Installation

### Prerequisites

In case you don't already know this, you're going to need ruby installed on your system before using Jekyll (and this theme). I am a big fan of not re-writing things, so I'll offer you instructions [here](https://www.ruby-lang.org/en/documentation/installation/).

Same goes for Jekyll, see [here](https://jekyllrb.com/docs/installation/) for installation instructions.

### Using this theme

Once you've got the above done, you can follow the instructions below to use this theme for your own Jekyll site.

#### Clone this repo to your local machine

```bash
git clone git@github.com:kimfucious/kimfucious-bj.git
```

This will bring everything down to your machine into a folder named, kimfucious-bj.

Your file tree will look something like this (though probably not in this order):

├── 404.html
├── Gemfile
├── Gemfile.lock
├── LICENSE.txt
├── README.md
├── \_config.yml
├── \_includes
├── \_layouts
├── \_my_collection
├── \_plugins
├── \_posts
├── \_site
├── assets
├── css
├── favicon.ico
├── index.html
├── kimfucious.gemspec
└── pages

This is everything you need and more, with sample data, to use and begin to understand how the template is put together.

To test out this theme on your local machine, run the following command from within the kimfucious-bj folder:

```bash
bundle exec jekyll serve --livereload
```

Then open http://localhost:4000 in your browser to view the site.

When you're ready, publish the `_site` directory.

For publishing options, checkout [surge](https://surge.sh/help/getting-started-with-surge) and/or [netlify](https://www.netlify.com/blog/2017/05/11/migrating-your-jekyll-site-to-netlify/). There are other options, but these two are pretty slick.

I haven't yet tested this with Github pages, but I intend to...

## Usage

### Components

#### Posts

Usually, people use Jekyll as a blog. Blogs are composed of posts. The main `index.html` file of this site lists a paginated set of all posts (written in Markdown) that have been created within the `_posts` folder.

The main `index.html` file looks like this:

```liquid
---
layout: default
---
{% include postcards.html %}
{% include pagination.html %}
```

You'll soon realize, if you haven't already, that this theme relies heavily on the use of includes.

I've opted to list posts on the `index.html` page as "cards". The cards work pretty well and are responsive width-wise; however, they can vary by height, which might bother those with OCD tendencies.

You can adjust the number of cards/posts on the main page by editing the "paginate:" line in the `_config.yml` file to whatever number you like. _You'll need to reset the server to see this change take place._

If you don't like cards, you can display paginated posts in a list format by swapping out "postcards" above to "posts" like below:

```liquid
---
layout: default
---
{% include posts.html %}
{% include pagination.html %}
```

The pagination is using Font Awesome icons, which might be overkill. If you're daring, you can change this in the `_includes/pagination.html` file to suit your wants/needs.

#### Pages

This site has a few static pages (other than index.html): `about.html`, `archive.html`, and `collection.html`. Each of these are "hard-coded" as links into the `_includes/header.html` file, which serves as the site's navbar. Edit as needed/wanted there.

##### about.html

The about page is a simple, static page that uses a "card" with a little CSS shadowing for depth. Edit it to your heart's desire at `pages/about.html`.

##### archive.html

The archive page is a simple, static page with a sprinkling of Liquid logic to list out all of the posts found in the `_posts` folder. It uses Bootstrap's "list-group" classes to format the list a little nicer than a plain-jane `<ul>`.

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

```liquid
{% include head.html %}
{{ content }}
{% include footer.html %}
```

### header.html = bootstrap navbar

The `_includes/header.html` file is a bootstrap style navbar with a left-side brand and right-aligned menu entries for static pages.

You'll need to edit it manually for your own links at `_includes/header.html`.

The navbar/header is included in the layout files by adding it like this:

```liquid
{% include head.html %}
{% include header.html %} <= here
{{ content }}
{% include footer.html %}
```

_Don't forget to sandwich your files between `head.html` and `footer.html` includes._

### Bootstrap baked-in (kind of)

Bootstrap (4.1.1 at present) has been implemented to work with this template through a somewhat convoluted process as described in this [very nice series](https://experimentingwithcode.com/creating-a-jekyll-blog-with-bootstrap-4-and-sass-part-1/) by Nick Riebeek. For the record, Nick's method for integrating Bootstrap seemed the cleanest (and least convoluted) of those that I found. I have diverged slightly from his implementation, and I'll cover the differences herein.

In brief, _all_ Bootstrap SCSS source files have been downloaded to `css/bootstrap`. Bootstrap is imported (among other scss files) via `css/main.scss`, which gets compiled by Jekyll to `_/site/css/main.css`. _Note that the compiled file is a css file, not scss_.

This _could_ be thinned out so that only the bootstrap components used by the theme are called out; however, I have not done that yet, because I'm not sure where I'm gonna stop yet.

The ability to override Bootstrap variables is enabled by the addition of line 8 in `css/bootstrap/bootstrap.scss`:

```scss
@import "../custom/variables";
```

There may be a better, more proper way to do this, but I haven't decided if/how to change this it yet. Regardless, with the above line in place, you can modify the `css/custom/_variables.scss` file to override Bootstrap's default variables. For example, you can change the primary color like the below:

```scss
$primary: #be132d; // china red
```

The JavaScript bits of Bootstrap, including jQuery and Popper.js, have been imported via CDN as found in \_includes/footer.html.

### Code syntax highlighting with Prism

[Prism](http://prismjs.com/index.html) is used for syntax highlighting of code snippets. This theme is configured to support syntax highlighting for the following languages:

* Bash
* CSS
* HTML
* JavaScript
* React JSX
* Ruby
* Sass (SCSS)

There is also a Prism plugin added to the JS for a dynamic code-copy button. Check that out by visiting one of the sample posts with a code-snippet.

You can extend (or otherwise change) the Prism config by going to the [Prism website](http://prismjs.com/index.html), generating a new JS (and maybe a css) file, and replacing the current JS file (`assets/js/prism.min.js`) and/or (`css/custom/vendor/_prism.scss`) with your desirements.

### Font Awesome 5

This theme imports, via CDN, _all_ Font Awesome Fonts (SVG with JS) as described [here](https://fontawesome.com/get-started/svg-with-js). You can tweak this in the `_includes/footer.html` file, which is where all of the script tags live before getting compiled by Jekyll into the site's main `index.html` file found in the root folder.

You can read about how to use Font Awesome [here](https://fontawesome.com/how-to-use/svg-with-js).

What you'll glean from reading the docs is that you'll need to add a unique class to your `<i>` tags to get them to work. This is all well and fine when working with HTML files, but if using inline HTML in Markdown is not your cup of tea, I've implemented a solution based on [this](https://gist.github.com/23maverick23/8532525) by Ryan Morrissey.

The `font-awesome.rb` file is a plugin found in the `_plugins` folder. It is _not_ called in the `_config.yml` file, and I'm not sure if it will prevent this theme from working on Github pages yet.

#### Font Awesome in Markdown examples

Here are examples of how to get Font Awesome icons into your markup files:

```liquid
{% icon far fa-camera-retro %}
{% icon far fa-camera-retro fa-lg %}
{% icon far fa-camera-retro fa-rotate-90 %}
{% icon far fa-spinner fa-spin %}
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/kimfucious/kimfucious-bj. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `kimfucious-bj.gemspec` accordingly.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
