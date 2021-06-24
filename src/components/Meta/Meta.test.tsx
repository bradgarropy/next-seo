import {render} from "@testing-library/react"

import config from "../../../package.json"
import {mockMeta} from "../../../test/mocks"
import Meta from "../Meta"

test("includes meta", () => {
    render(<Meta title={mockMeta.title} />)

    expect(document.title).toEqual(mockMeta.title)

    const description = document
        .querySelector("meta[name='description']")
        ?.getAttribute("content")

    expect(description).toEqual(config.description)

    const keywords = document
        .querySelector("meta[name='keywords']")
        ?.getAttribute("content")

    expect(keywords).toEqual(config.keywords.join(", "))
})
