import Head from "next/head"
import {FC} from "react"

type MetaProps = {
    title?: string
    description?: string
    keywords?: string[]
    icon?: string
}

const Meta: FC<MetaProps> = ({
    title = "",
    description = "",
    keywords = [],
    icon = "",
}) => {
    return (
        <Head>
            <html lang="en" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords.join(",")} />
            <link rel="icon" type="image/png" href={icon} />
        </Head>
    )
}

export default Meta
