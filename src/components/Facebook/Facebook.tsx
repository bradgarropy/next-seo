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
            {url && <meta property="og:url" content={url} />}
            {type && <meta property="og:type" content={type} />}
            {title && <meta property="og:title" content={title} />}

            {description && (
                <meta property="og:description" content={description} />
            )}

            {image && <meta property="og:image" content={image} />}
        </Head>
    )
}

export default Facebook
export {FacebookProps}
