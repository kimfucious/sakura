---
title: Code Snippets 
description: Examples of Code Snippets with Syntax Highlighting
category: Sample
image: markus-spiske-109588-unsplash.jpg
photo_credit: Photo by Markus Spiske on Unsplash
---

# Code Syntax Highlighting with Rouge

Syntax highlighting is performed by Jekyll's built-in [Rouge](https://github.com/jneen/rouge).

Rouge supports a **ton** of languages, and you can find the `short-codes` [here](https://github.com/jneen/rouge/wiki/List-of-supported-languages-and-lexers).

The theme used is [Dracula](https://github.com/dracula/pygments), and it's located in the `/_assets/scss/custom/includes/_syntax_highlighting.scss` file.

I've added some small border, margin, and padding refinements to the `highlight` class:

```scss
.highlight {
  background: $dt-gray-dark;
  border-radius: 5px;
  color: $dt-gray-light;
  margin-bottom: 1rem;
  padding: 0.6rem 0.6rem 0.1rem 0.5rem;
```

You can tweak this all you want and/or swap out the entire contents of the `_syntax_highlighting.scss` file to make it your own.

## Code highlighting examples

### Terminal (shell)

```shell
A terminal command
```

#### HTML

```html
<div class="container py5">
  <p>Lorem ipsum</p>
</div>
```

#### JavaScript

```js
function fibonacci(n) {
  if (n < 2) {
    return 1;
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
}
```

#### Liquid

```liquid
{% raw %}{% for item in site.docs %}
  <h2>{{ item.title }}</h2>
  <p>{{ item.description }}</p>
  <p><a href="{{ item.url }}">{{ item.title }}</a></p>
{% endfor %}{% endraw %}
```

> :point_up: When writing Liquid code snippets, be sure to surround your Liquid code with raw/endraw tags, or Jekyll will actually process the code as written. See [here](https://shopify.github.io/liquid/tags/raw/) for more info.

#### React JSX

```jsx
React.render(<div>Bonjour!</div>, document.getElementById("container"));
```

#### Ruby

```ruby
def fibonacci( n )
    return  n  if n <= 1
    fibonacci( n - 1 ) + fibonacci( n - 2 )
end
```

#### Sass (SCSS)

```scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
  -moz-border-radius: $radius;
  -ms-border-radius: $radius;
  border-radius: $radius;
}

.box {
  @include border-radius(10px);
}
```
