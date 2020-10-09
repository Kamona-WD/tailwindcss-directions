# tailwindcss-directions

Simple plugin to add directions variants to tailwindcss

# Installation

`npm install tailwindcss-directions -D`

# Usage

In your Tailwind config, simply require() the plugin and specify the directions you want to target in the theme object

```
{
  theme: {
    directions: ['rtl', 'ltr']
  },
  variants: {
    alignContent: ['responsive', 'directions'],
    alignItems: ['responsive', 'directions],
    margin: ['responsive', 'directions'],
    padding: ['responsive', 'directions'],
    // add what you need like float, translate, transform ....
  },
  plugins: [
    require('tailwindcss-directions')
  ]
}
```

[see default variants reference](https://tailwindcss.com/docs/configuring-variants#default-variants-reference)

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

... Don't forget to add dir in your html tag

```
<!doctype html>
<html lang="ar" dir="rtl">
  <head>
  <!-- head content -->
  </head>
  <body>
      <!-- body content -->
  </body>
</html>

```

## [This plugin inspiried by tailwindcss-localized](https://github.com/hdodov/tailwindcss-localized#tailwindcss-localized)
