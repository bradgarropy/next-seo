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
            {title && <title>{title}</title>}
            {description && <meta name="description" content={description} />}
            {keywords && <meta name="keywords" content={keywords.join(", ")} />}
            {icon && <link rel="icon" href={icon} />}
        </Head>
    )
}

export default Meta
