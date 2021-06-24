import {FC} from "react"

type FacebookProps = {
    url?: string
    type?: string
    title?: string
    description?: string
    image?: string
}

const Facebook: FC<FacebookProps> = ({
    url = "https://next-starter.bradgarropy.vercel.app",
    type = "website",
    title = "next starter",
    description = "⏭ next.js starter",
    image = "https://next-starter.bradgarropy.vercel.app/facebook.png",
}) => {
    return (
        <>
            <meta property="og:url" content={url} />
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
        </>
    )
}

export default Facebook
