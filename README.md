# Viewport Width Grid System

## Use

There are several ways to use the viewport grid in your project:

### CSS

If you'd like to use the viewport grid as a standalone css file, just copy `dist/viewport-grid.css` into your site, and add a link to it in your head:

```<link rel="stylesheet" href="path/to/viewport-grid.css">```

### SASS

If you'd like to use the viewport grid as a sass library, you'll find it inside of `lib`. Customize your grid by editing the values in `_config.scss`.

### Bower

The easiest way to use viewport grid as a sass library is through Bower. Assuming you have already installed bower, just type `bower install viewport-grid --save`.

Then import it as a library in your main `styles.scss` file like this:

```scss
@import "../bower_components/viewport-grid/lib/viewport-grid.scss";
```

Note, this will import everything, including the static classes. A separate file called `_imports.scss` contains just the classes and mixins. So if you have a main stylesheet that gets loaded on every page, you can load the full library into that, but if you just want access to the mixins without adding any generated css to your page, you can do:

```scss
@import "../bower_components/viewport-grid/lib/_imports.scss";
```

## Contributing

Pull requests are welcome. In lieu of a formal styleguide, we ask that you simply try to maintain the formatting that is already in place.

## License

[ISC](http://en.wikipedia.org/wiki/ISC_license)