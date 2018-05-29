---
title: Figure Elements
description:  Responsive images with captions
category: Sample
image: sora-sagano-639761-unsplash.jpg
image-caption: 
image-source: Unsplash
image-url: https://unsplash.com/photos/8sOZJ8JF0S8
photographer: Sora Sagano
photographer-url: https://unsplash.com/@s_sagano
---

# A Picture in a Figure

The picture below is a _responsive_ image made possible by the methods described [here]({{ site.baseurl }}{% post_url 2018-05-19-picture-element %}).

The only difference is that this picture has a nicely formatted caption.

{% include figure.html %}

To insert a picture like the above, use the following Liquid tag in your post or page:

```liquid
{% raw %} {% include figure.html %} {% endraw %}
```

The above will insert the `_figure.html` file as an include, which relies on _front matter_ for its variables to display anything from a simple caption to a caption with links for the photographer's website and/or the image's source.

```markdown
---
title: Figure Elements
description:  Responsive images with captions
category: Sample
image: sora-sagano-639761-unsplash.jpg
image-caption:
image-source: Unsplash
image-url: https://unsplash.com/photos/8sOZJ8JF0S8
photographer: Sora Sagano
photographer-url: https://unsplash.com/@s_sagano
---
```

I've tried to make the logic as simple as possible, but it can make your head explode if you think about it too much.

The logic goes a little somethin' like this (but maybe not exactly, as it's really hard to write it all in plain English):

1.  If there's a plain text caption, `image-caption`, use that
2.  If there's a no `image-caption`, but you have `photographer`, `photographer-url`, `image-source`, and `image-url`, use them with links
3.  If there's a no `image-caption` and no `image-url`; but you have `photographer`, `photographer-url`, and `image-source`, use them with links
4.  If there's a no `image-caption`, no `image-source`, and no `image-url`; but you have `photographer` and `photographer-url` use them with a link
5.  If you only have `image-source` and `image-url`, use those with a link
6.  Anything else gets a blank caption (I think)

:flushed: The code for the `figure.html` include file is here for reference:

```html
{% raw %}{%- if page.image -%}
{%- assign f = page.image | split: '.' %} {% assign img_path = site.baseurl | append: "/assets/images/responsive/" -%}
<figure>
  <picture>
    <source media="(max-width: 576px)" srcset="
      {{ img_path | append: f[0] | append: relative_url }}-sm-1x.webp 1x,
      {{ img_path | append: f[0] | append: relative_url }}-sm-2x.webp 2x
    " type="image/webp">
    <source media="(max-width: 576px)" srcset="
      {{ img_path | append: f[0] | append: relative_url }}-sm-1x.jpg 1x,
      {{ img_path | append: f[0] | append: relative_url }}-sm-2x.jpg 2x
    " type="image/jpeg">
    <source media="(max-width: 768px)" srcset="
    {{ img_path | append: f[0] | append: relative_url }}-md-1x.webp 1x,
    {{ img_path | append: f[0] | append: relative_url }}-md-2x.webp 2x
    " type="image/webp">
    <source media="(max-width: 768px)" srcset="
    {{ img_path | append: f[0] | append: relative_url }}-md-1x.jpg 1x,
    {{ img_path | append: f[0] | append: relative_url }}-md-2x.jpg 2x
    " type="image/jpeg">
    <source media="(min-width: 769px)" srcset="
    {{ img_path | append: f[0] | append: relative_url }}-xl-1x.webp 1x,
    {{ img_path | append: f[0] | append: relative_url }}-xl-2x.webp 2x
    " type="image/webp">
    <source media="(min-width: 769px)" srcset="
    {{ img_path | append: f[0] | append: relative_url }}-xl-1x.jpg 1x,
    {{ img_path | append: f[0] | append: relative_url }}-xl-2x.jpg 2x
    " type="image/jpeg">
    <img srcset="
        {{ img_path | append: f[0] | append: relative_url }}-sm-1x.jpg 576w,
        {{ img_path | append: f[0] | append: relative_url }}-md-1x.jpg 768w,
        {{ img_path | append: f[0] | append: relative_url }}-xl-1x.jpg 1440w" src="{{ img_path | append: f[0] | append: relative_url }}-md-1x.jpg"
      alt="{{ page.title }}" class="figure-img rounded" type="image/jpeg">
  </picture>
  {%- if page.image-caption -%}
  <figcaption class="figure-caption text-right pr-2">{{page.image-caption}}</figcaption>
  {%- elsif page.photographer and page.photographer-url and page.image-source and page.image-url -%}
  <figcaption class="figure-caption text-right pr-2">
    Photo by
    <a href="{{ page.image-url }}">{{ page.photographer }}</a> on
    <a href="{{ page.photographer-url }}">{{ page.image-source }}</a>
  </figcaption>
  {%- elsif page.photographer and page.photographer-url and page.image-source -%}
  <figcaption class="figure-caption text-right pr-2">
    Photo by
    <a href="{{ page.image-url }}">{{ page.photographer }}</a> on {{ page.image-source }}
  </figcaption>
  {%- elsif page.photographer and page.photographer-url -%}
  <figcaption class="figure-caption text-right pr-2">
    Photo by
    <a href="{{ page.photographer-url }}">{{ page.photographer }}</a>
  </figcaption>
  {%- elsif page.image-source and page.image-url -%}
  <figcaption class="figure-caption text-right pr-2">
    Photo from
    <a href="{{ page.image-url }}">{{ page.image-source }}</a>
  </figcaption>
  {%- endif -%}
</figure>
{%- endif -%}{% endraw %}
```
