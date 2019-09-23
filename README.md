# @nju33/storybook\_\_addon-docsify

## Prepare

Install like below,

```sh
yarn add -D @nju33/storybook__addon-docsify
```

And you should add the following to your `addon.js` (if you're using TypeScript then `addon.ts`).

```sh
import '@nju33/storybook__addon-docsify/dist/register';
```

Finally, place Docsify root as `index.html` following like. (The details is in [Docsify document](https://docsify.js.org/#/configuration).)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document Title</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="description" content="Description" />
    <meta
      name="viewport"
      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
    />
    <link rel="stylesheet" href="//unpkg.com/docsify/lib/themes/vue.css" />
  </head>
  <body>
    <div id="app"></div>
    <script>
      window.$docsify = {
        basePath: '/',
        name: 'Document',
      };
    </script>
    <script src="//unpkg.com/docsify/lib/docsify.min.js"></script>
  </body>
</html>
```

After Docsify will do it for you. 👻

## Examples

In the below is first example.

```jsx
storiesOf('html-button', module)
  // html-button/foo-bar.md
  .add('foo-bar', () => <button>foo-bar</button>)
  // html-button/bar-baz.md
  .add('bar-baz', () => <button>bar-baz</button>);
```

In the above, The document path is `html-button/foo-bar`. In this case, Storybook has interapted key is `html-button--foo-bar` that using `--` as separator.

That `--` is handled `/` by this addon. Thus `index.html#/html-button/foo-bar` will be loaded then.

If you want to change its behavior, You maybe change it by pass to parameter into your story.

```jsx
storiesOf('html-button', module)
  .addParameter({
    docsify: {
      path: 'html-button/README'
    }
  })
  // html-button/README.md
  .add('foo-bar', () => <button>foo-bar</button>)
  // html-button/README.md
  .add('bar-baz', () => <button>bar-baz</button>);
```

This addon read the parameter using by `docsify`. By setting `path`, you can make Docsify is loaded `*.md` you wish.