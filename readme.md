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

_🔎 seo component for [next.js][next]_

[Next.js][next] provides a `<Head>` component to update meta tags. However, there's still much to understand if you want to achieve proper SEO. This component makes it easy to manage your SEO tags. It supports [Facebook][facebook], [Twitter][twitter-cards], [Open Graph][og], and `meta` tags.

<p align="center">
    <a href="https://www.npmjs.com/package/@bradgarropy/next-seo">
        <img alt="next link" src="./images/github.png" width="500">
    </a>
</p>

## 📦 Installation

This package is hosted on [`npm`][npm].

```bash
npm install @bradgarropy/next-seo
```

## 🥑 Usage

To add a base set of SEO tags, create a [custom `<App/>` component][app] and add the `<SEO/>` component there. The SEO tags will render for every route in your site.

```jsx
// ./pages/_app.js

import SEO from "@bradgarropy/next-seo"

const MyApp = ({Component, pageProps}) => {
    return (
        <>
            <SEO title="My website" description="A blog and portfolio" />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
```

If you want to override SEO tags on individual pages, use the `<SEO/>` component and only include the props that you want to update. For example, if you added `<SEO/>` in the `_app.js` file as shown above, and then included `<SEO/>` in the `about.js` file as shown below, the `description` would be overwritten to be `Learn more about me`.

```jsx
// ./pages/about.js

import SEO from "@bradgarropy/next-seo"

const AboutPage = () => {
    return (
        <>
            <SEO description="Learn more about me" />
            <Component {...pageProps} />
        </>
    )
}

export default AboutPage
```

With this capability, you can create a default set of SEO tags, and then tailor certain properties on specific pages.

## 📖 API Reference

### `<SEO>`

| Name             | Required | Example                            | Description                                                |
| :--------------- | :------: | :--------------------------------- | :--------------------------------------------------------- |
| `title`          | `false`  | `"My website"`                     | Page title.                                                |
| `description`    | `false`  | `"A blog and portfolio"`           | Description of the page.                                   |
| `keywords`       | `false`  | `["website", "blog", "portfolio"]` | Array of keywords.                                         |
| `icon`           | `false`  | `"/favicon.ico"`                   | Tab icon url.                                              |
| `themeColor`     | `false`  | `"#000000"`                        | Browser theme color.                                       |
| `colorScheme`    | `false`  | `"light"`                          | Preferred color scheme.                                    |
| `facebook.image` | `false`  | `"/facebook.png"`                  | Facebook share image.                                      |
| `facebook.url`   | `false`  | `"https://website.com"`            | Page URL.                                                  |
| `facebook.type`  | `false`  | `"website"`                        | Type of resource. See all types [here][types].             |
| `twitter.image`  | `false`  | `"/twitter.png"`                   | Twitter share image.                                       |
| `twitter.site`   | `false`  | `"@bradgarropy"`                   | Twitter handle of publishing site.                         |
| `twitter.card`   | `false`  | `"summary"`                        | Format of Twitter share card. See all types [here][cards]. |

All of the `SEO` props are optional. If a prop is not provided, the associated meta tag will not be rendered.

```jsx
// renders no seo tags
<SEO/>

// renders all seo tags
<SEO
    title="My website"
    description="A blog and portfolio"
    keywords={["website", "blog", "portfolio"]}
    icon="/favicon.ico"
    themeColor="#000000"
    colorScheme="light"
    facebook={{
        image: "/facebook.png",
        url: "https://website.com",
        type: "website",
    }}
    twitter={{
        image: "/twitter.png",
        site: "@bradgarropy",
        card: "summary",
    }}
/>

// renders some seo tags
<SEO
    title="My blog"
    description="Posts about technology"
    keywords={["website", "blog", "technology"]}
/>
```

## ❔ Questions

🐛 report bugs by filing [issues][issues]  
📢 provide feedback with [issues][issues] or on [twitter][twitter]  
🙋🏼‍♂️ use my [ama][ama] or [twitter][twitter] to ask any other questions

## ✨ Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://bradgarropy.com"><img src="https://avatars.githubusercontent.com/u/11336745?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Brad Garropy</b></sub></a><br /><a href="https://github.com/bradgarropy/next-seo/commits?author=bradgarropy" title="Code">💻</a> <a href="https://github.com/bradgarropy/next-seo/commits?author=bradgarropy" title="Documentation">📖</a> <a href="https://github.com/bradgarropy/next-seo/commits?author=bradgarropy" title="Tests">⚠️</a> <a href="#infra-bradgarropy" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    <td align="center"><a href="https://nickradford.dev"><img src="https://avatars.githubusercontent.com/u/222221?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nick Radford</b></sub></a><br /><a href="https://github.com/bradgarropy/next-seo/issues?q=author%3Anickradford" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://usman-s.me"><img src="https://avatars.githubusercontent.com/u/51731966?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Max Programming</b></sub></a><br /><a href="https://github.com/bradgarropy/next-seo/issues?q=author%3Amax-programming" title="Bug reports">🐛</a> <a href="#ideas-max-programming" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/bradgarropy/next-seo/commits?author=max-programming" title="Code">💻</a> <a href="#userTesting-max-programming" title="User Testing">📓</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[next]: https://nextjs.org
[facebook]: https://developers.facebook.com/docs/sharing/webmasters
[twitter-cards]: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup
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
[types]: https://ogp.me/#types
[cards]: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards
[app]: https://nextjs.org/docs/advanced-features/custom-app
