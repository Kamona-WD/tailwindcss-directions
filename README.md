# tailwindcss-directions

Simple plugin to add directions variants to tailwindcss

# Installation

`npm install tailwindcss-dirrctions -D`

# Usage

In your Tailwind config, simply require() the plugin and specify the directions you want to target in the theme object

```
{
  theme: {
    directions: ['rtl', 'ltr']
  },
  variants: {
    margin: ['responsive', 'directions'],
    padding: ['responsive', 'directions']
  },
  plugins: [
    require('tailwindcss-dirrctions')
  ]
}
```

...and you'll get similar classes:

```
[dir="rtl"] .rtl\:mr-2 {
  margin-right: .5rem;
}

[dir="ltr"] .ltr\:ml-2 {
  margin-left: .5rem;
}

@media (min-width: 640px) {
  [dir="rtl"] .rtl\:mr-2 {
    margin-right: .5rem;
  }

  [dir="ltr"] .ltr\:ml-2 {
    margin-left: .5rem;
  }
}
```
