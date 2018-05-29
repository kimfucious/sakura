---
title: Picture Elements
description:  Use the picture element for responsive images
category: Sample
image: galen-crout-87390-unsplash.jpg
quote: Why generate 12 versions of the same image when just 2 media-queries do the job? The users won’t notice... But Google will.
quote-author: Maciej Nowakowski
quote-source: Medium
---

# HTML 5 Picture Element

## A Responsive Image

This is a responsive image, using the `<picture>` element.

{% include picture.html %}

The [`<picture>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture) element let's you take advantage of responsive images. One of the key benefits is that users only download images at a size that matches their device. There's no need to download a 1200px wide image to a smartphone with a screen that's 320px wide, right?

## How to

In order to add a responsive image to your post, you first need to add an `image` variable in your _front matter_ like this:

```markdown
---
title: Picture Elements
description:  Use picture element for responsive images
category: Sample
image: galen-crout-87390-unsplash.jpg
---
```

Then you call the `picture.html` include file, using the following Liquid tag:

```liquid
{% raw %} {% include picture.html %} {% endraw %}
```

This handy include let's you not have to write the following code everytime. There is also another include file, `picture_logic.html`, that is called on the home page, which will use this same image on the post's card entry.

```liquid
{% raw %}{%- if page.image -%}
{%- assign f = page.image | split: '.' -%}
{%- assign img_path = site.baseurl | append: "/assets/images/responsive/" -%}
  <picture>
    <source media="(max-width: 576px)"
    srcset="
      {{ img_path | append: f[0] | append: relative_url }}-sm-1x.webp 1x,
      {{ img_path | append: f[0] | append: relative_url }}-sm-2x.webp 2x
    "
    type="image/webp"
    >
    <source media="(max-width: 576px)"
    srcset="
      {{ img_path | append: f[0] | append: relative_url }}-sm-1x.jpg 1x,
      {{ img_path | append: f[0] | append: relative_url }}-sm-2x.jpg 2x
    "
    type="image/jpeg"
    >
    <source media="(max-width: 768px)"
    srcset="
    {{ img_path | append: f[0] | append: relative_url }}-md-1x.webp 1x,
    {{ img_path | append: f[0] | append: relative_url }}-md-2x.webp 2x
    "
    type="image/webp"
    >
    <source media="(max-width: 768px)"
    srcset="
    {{ img_path | append: f[0] | append: relative_url }}-md-1x.jpg 1x,
    {{ img_path | append: f[0] | append: relative_url }}-md-2x.jpg 2x
    "
    type="image/jpeg"
    >
    <source media="(min-width: 769px)"
    srcset="
    {{ img_path | append: f[0] | append: relative_url }}-xl-1x.webp 1x,
    {{ img_path | append: f[0] | append: relative_url }}-xl-2x.webp 2x
    "
    type="image/webp"
    >
    <source media="(min-width: 769px)"
    srcset="
    {{ img_path | append: f[0] | append: relative_url }}-xl-1x.jpg 1x,
    {{ img_path | append: f[0] | append: relative_url }}-xl-2x.jpg 2x
    "
    type="image/jpeg"
    >
    <img
      srcset="
        {{ img_path | append: f[0] | append: relative_url }}-sm-1x.jpg 576w,
        {{ img_path | append: f[0] | append: relative_url }}-md-1x.jpg 768w,
        {{ img_path | append: f[0] | append: relative_url }}-xl-1x.jpg 1440w"
      src="{{ img_path | append: f[0] | append: relative_url }}-md-1x.jpg"
      alt="{{ page.title }}"
      class="figure-img rounded"
      type="image/jpeg"
      >
  </picture>
{%- endif -%}{% endraw %}
```

## Inspiration

Maciej Nowakowski has done an **awesome** writeup on Medium about this: [A Guide to Responsive Images with Ready-to-Use Templates](https://medium.freecodecamp.org/a-guide-to-responsive-images-with-ready-to-use-templates-c400bd65c433).

His guide was indespensible in creating this as well as the responsive Jumbotron background images.

While it might seem a bit excessive to create a bunch of images like this, I think this comment sums it up nicely.

{% include blockquote.html %}

## Can I Use?

The `<picture>` element is supported fairly well by modern browsers. Internet Explorer (IE) is sadly not very modern. There is a polyfill that I might add to support IE if anyone sends me enough crying emojis from their machine running Windows Vista.

<p class="ciu_embed" data-feature="picture" data-periods="future_3,future_2,future_1,current,past_1,past_2,past_3" data-accessible-colours="false">
  <a href="http://caniuse.com/#feat=picture">Can I Use picture?</a> Data on support for the picture feature across the major browsers from caniuse.com.
</p>

<script src="https://cdn.jsdelivr.net/gh/ireade/caniuse-embed/caniuse-embed.min.js"></script>
