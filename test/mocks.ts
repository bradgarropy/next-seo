const mockMeta = {
    title: "test title",
    description: "test description",
    keywords: ["test", "keywords"],
    icon: "/favicon.ico",
}

const mockFacebook = {
    title: mockMeta.title,
    description: mockMeta.description,
    url: "https://test.com",
    image: "/facebook.png",
    type: "website",
}

const mockTwitter = {
    title: mockMeta.title,
    description: mockMeta.description,
    image: "/twitter.png",
    site: "@test",
    card: "summary",
}

const mockSEO = {
    title: mockMeta.title,
    description: mockMeta.description,
    keywords: mockMeta.keywords,
    icon: mockMeta.icon,
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
