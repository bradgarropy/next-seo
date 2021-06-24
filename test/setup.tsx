import "@testing-library/jest-dom"

import {FC} from "react"

jest.mock("next/head", () => {
    const Head: FC = ({children}) => {
        return <>{children}</>
    }

    return Head
})
