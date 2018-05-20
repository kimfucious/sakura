---
title: Code Snippets 
summary: Examples of Code Snippets with Syntax Highlighting
category: Sample
image: markus-spiske-109588-unsplash.jpg
photo_credit: Photo by Markus Spiske on Unsplash
---

## Code highlighting by [Prism](http://prismjs.com/index.html)

#### Terminal (Bash)

```bash
A terminal command
```

#### A long, horizontally scrolling line of code

```bash
Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
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
{% raw %}{% for item in site.my_collection %}
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
