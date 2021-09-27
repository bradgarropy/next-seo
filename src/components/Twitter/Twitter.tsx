import Head from "next/head"
import {FC} from "react"

type CardType = "summary" | "summary_large_image" | "app" | "player"

type TwitterProps = {
    title?: string
    description?: string
    image?: string
    card?: CardType
    site?: string
}

const Twitter: FC<TwitterProps> = ({card, site, title, description, image}) => {
    return (
        <Head>
            {card && (
                <meta key="twitter:card" name="twitter:card" content={card} />
            )}

            {site && (
                <meta key="twitter:site" name="twitter:site" content={site} />
            )}

            {title && (
                <meta
                    key="twitter:title"
                    name="twitter:title"
                    content={title}
                />
            )}

            {description && (
                <meta
                    key="twitter:description"
                    name="twitter:description"
                    content={description}
                />
            )}

            {image && (
                <meta
                    key="twitter:image"
                    name="twitter:image"
                    content={image}
                />
            )}
        </Head>
    )
}

export default Twitter
export type {CardType, TwitterProps}
