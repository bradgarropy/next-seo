import Head from "next/head"
import {FC} from "react"

import {LinkTag, MetaTag} from "../SEO/SEO"

type MetaProps = {
    title?: string
    description?: string
    keywords?: string[]
    icon?: string
    additionalMetaTags?: Array<MetaTag>
    additionalLinkTags?: Array<LinkTag>
}

const Meta: FC<MetaProps> = ({
    title,
    description,
    keywords,
    icon,
    additionalMetaTags,
    additionalLinkTags,
}) => {
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

            {additionalMetaTags &&
                additionalMetaTags.map(meta => (
                    <meta
                        key={meta.name}
                        name={meta.name}
                        content={meta.content}
                        httpEquiv={meta.httpEquiv}
                        charSet={meta.charSet}
                    />
                ))}
            {additionalLinkTags &&
                additionalLinkTags.map(link => (
                    <link
                        key={link.type}
                        rel={link.rel}
                        href={link.href}
                        type={link.type}
                        sizes={link.sizes}
                        color={link.color}
                    />
                ))}
            {icon && <link key="icon" rel="icon" href={icon} />}
        </Head>
    )
}

export default Meta
