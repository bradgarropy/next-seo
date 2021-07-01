# 🔎 next seo

[![version][version-badge]][npm]
[![downloads][downloads-badge]][npm]
[![size][size-badge]][bundlephobia]
[![github actions][github-actions-badge]][github-actions]
[![coverage][codecov-badge]][codecov]
[![typescript][typescript-badge]][typescript]
[![contributing][contributing-badge]][contributing]
[![contributors][contributors-badge]][contributors]
[![discord][discord-badge]][discord]

_SEO component for [Next.js][next]._

[Next.js][next] provides a `<Head>` component to update meta tags. However, there's still much to understand if you want to achieve proper SEO. This component makes it easy to manage your SEO tags, it supports [Facebook][facebook], [Twitter][twitter], [Open Graph][og], and `meta` tags.

## 📦 Installation

This package is hosted on [`npm`][npm].

```bash
npm install @bradgarropy/next-seo
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

## 📖 API Reference

### `<SEO>`

| Name | Required | Default | Example                                    | Description               |
| :--- | :------: | :-----: | :----------------------------------------- | :------------------------ |
| `to` |  `true`  |         | `"/home"` <br> `"https://bradgarropy.com"` | Internal or external url. |

The component also passes through all other `props`, like `className` or `passHref`. See the [`next/link`][link] documentation for other relevant props. The examples below cover some common uses.

```jsx
// internal link
<Link to="/home">home</Link>

// internal link with additional props
<Link to="/home" className="nav-link">home</Link>

// external link
<Link to="https://bradgarropy.com">website</Link>

// external link with additional props
<Link to="https://bradgarropy.com" className="nav-link">website</Link>
```

## ❔ Questions

🐛 report bugs by filing [issues][issues]  
📢 provide feedback with [issues][issues] or on [twitter][twitter]  
🙋🏼‍♂️ use my [ama][ama] or [twitter][twitter] to ask any other questions

## ✨ contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://bradgarropy.com"><img src="https://avatars.githubusercontent.com/u/11336745?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Brad Garropy</b></sub></a><br /><a href="https://github.com/bradgarropy/next-link/commits?author=bradgarropy" title="Code">💻</a> <a href="https://github.com/bradgarropy/next-link/commits?author=bradgarropy" title="Documentation">📖</a> <a href="https://github.com/bradgarropy/next-link/commits?author=bradgarropy" title="Tests">⚠️</a> <a href="#infra-bradgarropy" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[next]: https://nextjs.org
[facebook]: https://developers.facebook.com/docs/sharing/webmasters
[twitter]: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup
[og]: https://ogp.me
[version-badge]: https://img.shields.io/npm/v/@bradgarropy/next-seo.svg?style=flat-square
[downloads-badge]: https://img.shields.io/npm/dt/@bradgarropy/next-seo?style=flat-square
[bundlephobia]: https://bundlephobia.com/result?p=@bradgarropy/next-seo
[size-badge]: https://img.shields.io/bundlephobia/minzip/@bradgarropy/next-seo?style=flat-square
[github-actions]: https://github.com/bradgarropy/next-seo/actions
[github-actions-badge]: https://img.shields.io/github/workflow/status/bradgarropy/next-seo/%F0%9F%9A%80%20release?style=flat-square
[codecov]: https://app.codecov.io/gh/bradgarropy/next-seo
[codecov-badge]: https://img.shields.io/codecov/c/github/bradgarropy/next-seo?style=flat-square
[typescript]: https://www.typescriptlang.org/dt/search?search=%40bradgarropy%2Fnext-seo
[typescript-badge]: https://img.shields.io/npm/types/@bradgarropy/next-seo?style=flat-square
[contributing]: https://github.com/bradgarropy/next-seo/blob/master/contributing.md
[contributing-badge]: https://img.shields.io/badge/PRs-welcome-success?style=flat-square
[contributors]: #-contributors
[contributors-badge]: https://img.shields.io/github/all-contributors/bradgarropy/next-seo?style=flat-square
[discord]: https://bradgarropy.com/discord
[discord-badge]: https://img.shields.io/discord/748196643140010015?style=flat-square
[npm]: https://npmjs.com/package/@bradgarropy/next-seo
[issues]: https://github.com/bradgarropy/next-seo/issues
[twitter]: https://twitter.com/bradgarropy
[ama]: https://bradgarropy.com/ama
