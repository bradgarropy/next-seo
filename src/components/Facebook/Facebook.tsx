import Head from "next/head"
import {FC} from "react"

type FacebookProps = {
    url?: string
    title?: string
    description?: string
    image?: string
    type?: string
}

const Facebook: FC<FacebookProps> = ({
    url,
    type,
    title,
    description,
    image,
}) => {
    return (
        <Head>
            {url && <meta key="og:url" property="og:url" content={url} />}
            {type && <meta key="og:type" property="og:type" content={type} />}

            {title && (
                <meta key="og:title" property="og:title" content={title} />
            )}

            {description && (
                <meta
                    key="og:description"
                    property="og:description"
                    content={description}
                />
            )}

            {image && (
                <meta key="og:image" property="og:image" content={image} />
            )}
        </Head>
    )
}

export default Facebook
export {FacebookProps}
