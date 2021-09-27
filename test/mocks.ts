import {FacebookProps} from "../src/components/Facebook"
import {MetaProps} from "../src/components/Meta"
import {SEOProps} from "../src/components/SEO"
import {TwitterProps} from "../src/components/Twitter"

const mockMeta: MetaProps = {
    title: "test title",
    description: "test description",
    keywords: ["test", "keywords"],
    icon: "/favicon.ico",
    themeColor: "#000000",
    colorScheme: "dark",
}

const mockFacebook: FacebookProps = {
    title: mockMeta.title,
    description: mockMeta.description,
    url: "https://test.com",
    image: "/facebook.png",
    type: "website",
}

const mockTwitter: TwitterProps = {
    title: mockMeta.title,
    description: mockMeta.description,
    image: "/twitter.png",
    site: "@test",
    card: "summary",
}

const mockSEO: SEOProps = {
    title: mockMeta.title,
    description: mockMeta.description,
    keywords: mockMeta.keywords,
    icon: mockMeta.icon,
    themeColor: mockMeta.themeColor,
    colorScheme: mockMeta.colorScheme,
    facebook: {
        url: mockFacebook.url,
        image: mockFacebook.image,
        type: mockFacebook.type,
    },
    twitter: {
        image: mockTwitter.image,
        site: mockTwitter.site,
        card: mockTwitter.card,
    },
}

export {mockFacebook, mockMeta, mockSEO, mockTwitter}
