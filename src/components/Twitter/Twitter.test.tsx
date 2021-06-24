import {render} from "@testing-library/react"

import {mockTwitter} from "../../../test/mocks"
import Twitter from "./Twitter"

test("includes twitter meta", () => {
    render(
        <Twitter
            card={mockTwitter.card}
            site={mockTwitter.site}
            title={mockTwitter.title}
            description={mockTwitter.description}
            image={mockTwitter.image}
        />,
    )

    Object.keys(mockTwitter).forEach(key => {
        const meta = document.querySelector(`meta[name='twitter:${key}']`)
        const content = meta?.getAttribute("content")

        expect(content).toEqual(mockTwitter[key as keyof typeof mockTwitter])
    })
})

test("includes default twitter meta", () => {
    render(<Twitter />)

    Object.keys(mockTwitter).forEach(key => {
        const meta = document.querySelector(`meta[name='twitter:${key}']`)
        const content = meta?.getAttribute("content")

        expect(content).toEqual(mockTwitter[key as keyof typeof mockTwitter])
    })
})
