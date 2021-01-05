# 🚂 next-seo

<a href="https://npmjs.com/package/@bradgarropy/next-seo">
    <img alt="npm" src="https://img.shields.io/npm/v/@bradgarropy/next-seo.svg?style=flat-square">
</a>

<a href="https://npmjs.com/package/@bradgarropy/next-seo">
    <img alt="npm" src="https://img.shields.io/npm/dt/@bradgarropy/next-seo?style=flat-square">
</a>

_SEO component for [Next.js][next]. Supports [Facebook][facebook], [Twitter][twitter], [Open Graph][og], and `meta` tags._

### 📦 Installation

This package is installable from [npm][npm].

```shell
npm install @bradgarropy/next-seo
```

### ⚙ Configuration

Head over to the `gatsby-config.js` file and add `@bradgarropy/next-seo` to the list of `plugins`.

```javascript
// gatsby-config.js

module.exports = {
    siteMetadata: {
        url: "https://bradgarropy.com",
        title: "Brad Garropy",
        description: "🏡 My home on the web.",
        keywords: ["gatsby", "portfolio"],
        twitter: "bradgarropy",
    },
    plugins: ["@bradgarropy/next-seo"],
}
```

Some fields in `siteMetadata` are also required.

| Name          | Description                          |
| ------------- | ------------------------------------ |
| `url`         | Base url of the website.             |
| `title`       | Document title shown in the browser. |
| `description` | Meta description of the page.        |
| `keywords`    | Keywords describing the page.        |
| `twitter`     | Twitter handle, without the `@`.     |

This plugin also expects the default social media cards and favicon to be availabe at `/facebook.png`, `/twitter.png`, and `/favicon.png`. This can be accomplished by placing these images in the `static` directory.

```
static/
  |  facebook.png
  |  favicon.png
  |  twitter.png
```

### 🥑 Usage

This plugin exports an `<SEO>` component that can be used without any `props`.

```javascript
import SEO from "@bradgarropy/next-seo"

const App = () => <SEO />
```

If you want to customize the SEO properties on each page, the `<SEO>` component accepts three `props`: `title`, `description`, and `image`.

```javascript
import SEO from "@bradgarropy/next-seo"

const App = () => (
    <SEO
        title="Custom page title."
        description="My custom description."
        image="https://github.com/bradgarropy.png"
    />
)
```

### ❔ Questions

If you have any trouble, definitely [open an issue][issue] and I'll take a look.

If all else fails, you can ask me directly on [Twitter][twitter] or my [AMA][ama].

[next]: https://nextjs.org
[facebook]: https://www.facebook.com/profile.php?id=7933107
[twitter]: https://twitter.com/bradgarropy
[og]: https://ogp.me
[npm]: https://npmjs.com
[issue]: https://github.com/bradgarropy/next-seo/issues
[twitter]: https://twitter.com/bradgarropy
[ama]: https://bradgarropy.com/ama
