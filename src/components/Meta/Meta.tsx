import Head from "next/head"
import {FC} from "react"

type MetaProps = {
    title?: string
    description?: string
    keywords?: string[]
    icon?: string
}

const Meta: FC<MetaProps> = ({title, description, keywords, icon}) => {
    return (
        <Head>
            {title && <title key="title">{title}</title>}

            {description && (
                <meta
                    key="description"
                    name="description"
                    content={description}
                />
            )}

            {keywords && (
                <meta
                    key="keywords"
                    name="keywords"
                    content={keywords.join(", ")}
                />
            )}

            {icon && <link key="icon" rel="icon" href={icon} />}
        </Head>
    )
}

export default Meta
