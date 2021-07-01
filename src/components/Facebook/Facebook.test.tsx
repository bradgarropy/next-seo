import {render} from "@testing-library/react"

import {mockFacebook} from "../../../test/mocks"
import Facebook from "../Facebook"

test("includes facebook meta", () => {
    render(
        <Facebook
            url={mockFacebook.url}
            type={mockFacebook.type}
            title={mockFacebook.title}
            description={mockFacebook.description}
            image={mockFacebook.image}
        />,
    )

    Object.keys(mockFacebook).forEach(key => {
        const meta = document.querySelector(`meta[property='og:${key}']`)
        const content = meta?.getAttribute("content")

        expect(content).toEqual(mockFacebook[key as keyof typeof mockFacebook])
    })
})

test("includes default facebook meta", () => {
    render(<Facebook />)

    Object.keys(mockFacebook).forEach(key => {
        const meta = document.querySelector(`meta[property='og:${key}']`)
        expect(meta).toBeNull()
    })
})
