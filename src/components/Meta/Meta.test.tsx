import {render} from "@testing-library/react"

import {mockMeta} from "../../../test/mocks"
import Meta from "../Meta"

test("includes meta", () => {
    render(
        <Meta
            title={mockMeta.title}
            description={mockMeta.description}
            keywords={mockMeta.keywords}
            icon={mockMeta.icon}
        />,
    )

    expect(document.title).toEqual(mockMeta.title)

    const description = document
        .querySelector("meta[name='description']")
        ?.getAttribute("content")

    expect(description).toEqual(mockMeta.description)

    const keywords = document
        .querySelector("meta[name='keywords']")
        ?.getAttribute("content")

    expect(keywords).toEqual(mockMeta.keywords.join(", "))

    const icon = document
        .querySelector("link[rel='icon']")
        ?.getAttribute("href")

    expect(icon).toEqual(mockMeta.icon)
})

test("includes default meta", () => {
    render(<Meta />)

    expect(document.title).toEqual("")

    const description = document.querySelector("meta[name='description']")
    expect(description).toBeNull()

    const keywords = document.querySelector("meta[name='keywords']")
    expect(keywords).toBeNull()

    const icon = document.querySelector("link[rel='icon']")
    expect(icon).toBeNull()
})
