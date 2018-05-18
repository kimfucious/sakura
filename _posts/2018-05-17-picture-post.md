---
title: Picture Post 
summary: One of these things does not look like the others
category: Sample
image: jonny-clow-430201-unsplash.jpg
photo_credit: Photo by Jonny Clow on Unsplash
---

# A picture's worth a thousand bytes

The picture displayed below has been generated using the [Jekyll Picture Tag](https://github.com/robwierzbowski/jekyll-picture-tag) plugin.

{% picture post_image {{ page.image }} title="{{ page.photo_credit}}" %}

In brief, the plugin will accept an image declared in a specifically formatted Liquid tag in Markdown, generate copies of that image in muliple resolutions, and place the image in an HTML5 `<picture>` element using `srcset` attributes so that the image is rendered at an _appropriate_ resolution for the device (i.e. viewport) size.

It works. If you don't believe me, open up your browser's dev tools and refresh this page using different viewport sizes while looking at the network tab.

## Usage

The Liquid tag to use an image in a markdown post is:

```liquid
{% raw %}{% picture post_image {{ page.image }} %}{% endraw %}
```

Two things need to happen for this to work:

1.  Your image file needs to be located in `assets/images` (no underscore before assets)
2.  You need to declare the image's file name in the post's _front matter_ (e.g. cool-picture-unsplash.jpg). You _do_ need the file suffix, but you _don't_ need the file's path

Here's an example of the front matter:

```markdown
---
title: Picture Post 
summary: A post with a picture
category: Sample
image: cool-picture-unsplash.jpg
---
```

### Now here's the rub...

Jekyll Picture Tag does one thing, and it does it well; however, it doesn't do other stuff that I (and maybe you) want.

For example, there's no image optimization. So, I've added a Gulp task to handle that.

The `gulp imagemin` task looks like this:

```js
gulp.task("imagemin", () => {
  return gulp
    .src(paths.img_src)
    .pipe(newer(paths.img_dist))
    .pipe(imagemin())
    .pipe(gulp.dest(paths.img_dist));
});
```

`gulp imagemin` takes all image files in the `_assets/images` folder, optimizes them, and puts the optimized output into the `assets/images` folder. If you remember, this is the place that you need images to be in order for the Jekyll Picture Tag Plugin to work, so that's rather convenient.

Also, since this theme uses Bootstrap's cards on the home page, it would be kinda cool if the image inside the post (used with Jekyll Picture Tag) was also used as the card image without a lot of extra effort. This is done with a little Gulp (to create thumbnails) and some Liquid logic located in the `_includes/picture_logic.html`.

> **Note**: we're not using the exactly same image file here, for technical reasons beyond my control at the moment, such that you can't use a `<picture>` tag inside or in place of the `<img>` tag that is used by Bootstrap cards.

The Gulp task (`gulp thumbs`) to create thumbnails looks like this:

```js
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
```

This task runs through all image files in the `assets/images` folder, creates smaller versions of them, and puts the copies into the `assets/images/thumbs` folder.

> Note: I've set the width and height a little big on these, because the cards can display at larger sizes when on their own row on big screens. You can change these values. Your mileage may vary.

The Liquid logic in `_includes/picture_logic.html` looks like this:

```Liquid
{% raw %}
{% assign random_img = "https://picsum.photos/640/480/?random" %}
{% assign img_src_path = "/assets/images/thumbs/" %}
{% if post.image == blank %}
{{ random_img }}
{% elsif post.image contains "http" %}
{{ post.image | strip_newlines }}
{% else %}
{{ img_src_path | append: post.image }}
{% endif %}
{% endraw %}
```

The Liquid logic in `_includes/picture_logic.html` is _used_ inside the `_includes/postcards.html` include file, which is where the Bootstrap cards are rendered via the `src` attribute of the `<img>` tag. _Read that carefully, if you want to get into the nuts and bolts_. It's kind of like that movie, Inception. _The top is still spinning..._

The logic goes something like this:

1.  If the post has no image variable declared in the _front matter_, use a random image (from [lorem picsum](https://picsum.photos)) as the card image
2.  Else, if the post's image variable is a url (e.g. https://unsplash.com/photos/DzHihgxNiko), use that as the card image. No optimization or resizing happens with this option.
3.  Else, if the post's image variable is a file name (e.g. cool-picture.jpg), append the image source path to the variable and use that the thumbnail version of the image create by `gulp thumbs` (e.g. /assets/images/thumbs/cool-picture.jpg)

It took me a while to come up with this solution, and it's surely not perfect. I welcome any suggestions for improvement.

### Complete Image Workflow

I will create one Gulp task to rule them all sometime soon, but for the now, here's how things work:

1.  Place images in the `_assets/images` folder
2.  Run `Gulp imagemin`. This will copy all optimized images to `assets/images`. Note that the destination is `assets`, not `_assets`.
3.  Use the `image` variable to provide the image's filename (e.g. cool-picture-unsplash.jpg) in the posts's _front matter_. Be sure to spell it right and include the suffix. You don't need to enter the path for the image file (for Jekyll Image Tag), as it is pre-configured in the `_config.yml` file. If you don't use an image variable, Jekyll Image Tag won't work, but you'll get a random card image on the home page for your post.
4.  Run `gulp thumbs`. This will create copies of all image (already optimized) files in `assets/images` at 640x480 resolution in the `assets/images/thumbs` folder
