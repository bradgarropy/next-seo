import {FC} from "react"

type TwitterProps = {
    card?: string
    site?: string
    title?: string
    description?: string
    image?: string
}

const Twitter: FC<TwitterProps> = ({
    card = "summary",
    site = "@bradgarropy",
    title = "next starter",
    description = "⏭ next.js starter",
    image = "https://next-starter.bradgarropy.vercel.app/twitter.png",
}) => {
    return (
        <>
            <meta name="twitter:card" content={card} />
            <meta name="twitter:site" content={site} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </>
    )
}

export default Twitter
