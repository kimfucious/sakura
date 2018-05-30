---
title: Blockquotes
description: Various ways to use blockquotes
category: Sample
quote: These violent delights have violent ends.
quote-author: William Shakespeare
quote-source: Romeo and Juliet
date: 2017-07-10 15:00:00
---

# Using Blockquotes

![violent-delights](https://78.media.tumblr.com/5c0975c6250ea70ccdf49a5a8be52f6f/tumblr_ogd7loM82j1slwmbvo1_500.gif){:.rounded}

## With Markdown

The easiest way to create a blockquote in markdown is with the `>` character at the front of your sentance.

```markdown
> Hey! Check me out; I'm a blockquote.
```

And you'll get something like this:

> Hey! Check me out; I'm a blockquote.

Nothing fancy, except for some styling on top of Bootstrap's `.blockquote` class, but it works.

## With In-line HTML

Another way to create a blockquote is using in-line HTML. Though this is generally frowned upon in Markdown, it gives you the ability to add even more CSS classes and HTML elements to give you something like this:

This is a blockquote with inline HTML using Bootstrap footer and cite classes:

<blockquote class="blockquote">
  <p class="mb-0">"Just because you are a character doesn't mean that you have character."</p>
  <footer class="blockquote-footer">The Wolf in <cite title="Source Title">Pulp Fiction</cite></footer>
</blockquote>

You would write the HTML in your markdown file like this:

```html
<blockquote class="blockquote">
  <p class="mb-0">Just because you are a character doesn't mean that you have character.</p>
  <footer class="blockquote-footer">The Wolf in <cite title="Source Title">Pulp Fiction</cite></footer>
</blockquote>
```

While that looks nice, it's a bit much to write everytime you want to quote someone, right?

## Using a Liquid tag and Front Matter

I've written an include file in `_includes/blockquote.html` that allows you to do this:

```markdown
{% raw %}{% include blockquote.html %}{% endraw %}
```

... and you get this

{% include blockquote.html %}

The trick here is to add the quote information to your _front matter_ like this:

```markdown
---
title: Blockquotes
description: Various ways to use blockquotes
category: Sample
image: http://www.bestsayingsquotes.com/files/famous-quotes-on-lnowledge-2dd2f90c.jpg
quote: These violent delights have violent ends.
quote-author: William Shakespeare
quote-source: Romeo and Juliet
---
```

The Liquid logic in the `_includes/blockquote.html` file takes the variables in your _front matter_ and uses them to build the quote. It also allows you to omit the `quote-source` and/or the `quote-author` and still get a properly formatted quote.

You'll also get a message if you put the `block-quote` include in your markdown, but forgot to add the `quote` variable in the _front matter_.

Here's the code:

```html
{% raw %}{%- if page.quote -%}
<blockquote class="blockquote">
  <p class="mb-0">{{ page.quote }}</p>
  {%- if page.quote-author and page.quote-source -%}
  <footer class="blockquote-footer">{{ page.quote-author }},
    <cite title="Source Title">{{ page.quote-source }}</cite>
  </footer>
  {%- elsif page.quote-author and !page.quote-source -%}
  <footer class="blockquote-footer">{{ page.quote-author }}
  </footer>
  {%- endif -%}
</blockquote>
{%- else -%}
<blockquote class="blockquote">
  <p class="mb-0">Check your front matter for quote variables!</p>
</blockquote>
{%- endif -%}{% endraw %}
```

Enjoy!
