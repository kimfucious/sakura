---
title: A Sampling
description: A little bit of this, a little bit of that.
category: Sample
image: andre-benz-250740-unsplash.jpg
image-caption: 
image-source: Unsplash
image-url: https://unsplash.com/photos/MsMISAIe8Qw
photographer: Andre Benz
photographer-url: https://unsplash.com/@trapnation
quote: These violent delights have violent ends.
quote-author: William Shakespeare
quote-source: Romeo and Juliet
---

Text can be **bold**, _italic_, ~~strikethrough~~ or `keyword`.

[This is what a link looks like](#)

Paragraphs are separated by whitespace automatically.

Tingling of the spine, Tunguska event are creatures of the cosmos, Drake Equation, white dwarf descended from astronomers, rogue white dwarf light years radio telescope a billion trillion?

# Header 1

This is a normal paragraph following a header. Health goth readymade plaid put a bird on it bicycle rights tote bag biodiesel leggings enim sustainable hexagon succulents locavore listicle. Cliche organic pork belly literally tattooed, paleo fashion axe. Mollit occaecat crucifix venmo bitters vegan fashion axe celiac brunch letterpress plaid scenester. Banjo tumeric celiac veniam pour-over.

## Header 2

> This is a blockquote following a header.

### Header 3

This is a blockquote with inline HTML using Bootstrap footer and cite classes

<blockquote class="blockquote">
  <p class="mb-0">Just because you are a character doesn't mean that you have character.</p>
  <footer class="blockquote-footer">The Wolf in <cite title="Source Title">Pulp Fiction</cite></footer>
</blockquote>

This is a blockquote generated from this post's _front matter_

{% include blockquote.html %}

#### Header 4

* Unordered list after a header
* Unordered list after a header
* Unordered list after a header

##### Header 5

1.  Ordered list after a header
2.  Ordered list after a header
3.  Ordered list after a header

###### Header 6 - Table with zebra stripes (using Bootstrap classes)

| #   | First | Last     | Handle   |
| :-- | :---- | :------- | :------- |
| 1   | Mark  | Otto     | @mdo     |
| 2   | Jacob | Thornton | @fat     |
| 3   | Larry | the Bird | @twitter |

### There's a horizontal rule below this

---

### Here is an unordered list

* Item foo
* Item bar
* Item baz
* Item zip

### And an ordered list

1.  Item one
1.  Item two
1.  Item three
1.  Item four

### And a nested list

* level 1 item
  * level 2 item
  * level 2 item
    * level 3 item
    * level 3 item
* level 1 item
  * level 2 item
  * level 2 item
  * level 2 item
* level 1 item
  * level 2 item
  * level 2 item
* level 1 item

### An unordered list using Bootstrap list-group classes (HTML)

<ul class="list-group list-group-flush px-5 py-3">
  <li class="list-group-item">Item 1</li>
  <li class="list-group-item">Item 2</li>
  <li class="list-group-item">Item 3</li>
</ul>

### Images

#### Using Markdown

Using markdown to insert images is quick and easy, but you may notice some slow load times, esp. when compared to responsive images.

Images can be inserted using normal markdown syntax like this:

```markdown
![Octocat](https://assets-cdn.github.com/images/icons/emoji/octocat.png)
```

##### Small Image Using Markdown

![Spock](http://www.togomeetings.com/wp-content/uploads/2017/08/luxury-spock-poster-and-gut-of-portland-premiere-for-the-love-of-spock-posters-4-128x128.jpg){:.rounded}

##### Large Image Using Markdown

![Westworld](http://artofvfx.com/wp-content/uploads/2016/09/Westworld_Chaos_trailer.png){:.rounded}

##### Here's a GIF Using Markdown

![BladeRunner_2049](http://thefilmexperience.net/storage/2017/2049.gif){:.rounded}

##### Responsive Image Using HTML 5 Figure Tag

The below image was insterted using this Liquid tag:

```liquid
{% raw %}{% include figure.html %}{% endraw %}
```

{% include figure.html %}

More on how this works [here]({{ site.baseurl }}{% post_url 2018-05-19-figure-element %}).
