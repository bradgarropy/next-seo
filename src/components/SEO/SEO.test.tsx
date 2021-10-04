import {render} from "@testing-library/react"

import {mockSEO} from "../../../test/mocks"
import SEO from "../../."

test("includes seo", () => {
    render(
        <SEO
            title={mockSEO.title}
            description={mockSEO.description}
            keywords={mockSEO.keywords}
            icon={mockSEO.icon}
            themeColor={mockSEO.themeColor}
            colorScheme={mockSEO.colorScheme}
            facebook={mockSEO.facebook}
            twitter={mockSEO.twitter}
        />,
    )

    expect(document.title).toEqual(mockSEO.title)

    const facebook = document
        .querySelector("meta[property='og:title']")
        ?.getAttribute("content")

    expect(facebook).toEqual(mockSEO.title)

    const twitter = document
        .querySelector("meta[name='twitter:title']")
        ?.getAttribute("content")

    expect(twitter).toEqual(mockSEO.title)
})

test("includes default seo", () => {
    render(<SEO />)

    expect(document.title).toEqual("")

    const facebook = document.querySelector("meta[property='og:title']")
    expect(facebook).toBeNull()

    const twitter = document.querySelector("meta[name='twitter:title']")
    expect(twitter).toBeNull()
})
