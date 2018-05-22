---
title: Figure Elements
summary:  Responsive images with captions
category: Sample
image: jonny-clow-430201-unsplash.jpg
caption: Photo by Jonny Clow on Unsplash
---

# A Picture in a Figure

{% include figure.html %}

To insert a picture like the above, use the following Liquid tag in your post or page:

```liquid
{% raw %}
{% include figure.html %}
{% endraw %}
```

The above will insert the `_figure.html` file as in include, which looks like this:

```markup
{% raw %}
{% if page.image %}
  {% assign f = page.image | split: '.' %}
  {% assign img_path = site.baseurl | append: "/assets/images" %}
<figure class="figure-img img-fluid">
<picture>
  <source media="(max-width: 576px)" srcset="{{ img_path | append: f[0] | append: relative_url }}-sm.{{ f[1] }}" >
  <source media="(max-width: 768px)" srcset="{{ img_path | append: f[0] | append: relative_url }}-md.{{ f[1] }}" >
  <source media="(max-width: 992px)" srcset="{{ img_path | append: f[0] | append: relative_url }}-lg.{{ f[1] }}" >
  <source media="(max-width: 1200px)" srcset="{{ img_path | append: f[0] | append: relative_url }}-xl.{{ f[1] }}" >
  <img src="{{ img_path | append: f[0] | append: relative_url }}-md.{{ f[1] }}" alt="{{ page.title}}" >
</picture>
{% if page.caption %}
<figcaption class="figure-caption text-right pr-2">{{page.caption}}</figcaption>
{% endif %}
</figure>
{% endif %}
{% endraw %}
```