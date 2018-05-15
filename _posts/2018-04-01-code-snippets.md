---
title: Code Snippets 
summary: Examples of Code Snippets with Syntax Highlighting
category: Sample
image: https://picsum.photos/640/480/?random
---

##### Terminal (Bash)

```bash
A terminal command
```

##### HTML

```html
<div class="container py5">
  <p>Lorem ipsum</p>
</div>
```

##### JavaScript

```javascript
$(document).ready(function() {
  console.log("hello");
});
```

##### Liquid

```liquid
{% raw %}{% for item in site.my_collection %}
  <h2>{{ item.title }}</h2>
  <p>{{ item.description }}</p>
  <p><a href="{{ item.url }}">{{ item.title }}</a></p>
{% endfor %}{% endraw %}
```

> _Pro-tip_: when writing Liquid code snippets, be sure to surround your Liquid code with raw/endraw tags, or Jekyll will actually process the code as written. See [here](https://shopify.github.io/liquid/tags/raw/) for more info.

##### React JSX

```jsx
React.render(<div>Bonjour!</div>, document.getElementById("container"));
```

##### Sass (SCSS)

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
