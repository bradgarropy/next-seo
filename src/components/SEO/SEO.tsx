import {FC} from "react"

import Facebook, {FacebookProps} from "../Facebook"
import Meta from "../Meta"
import Twitter, {TwitterProps} from "../Twitter"

export interface MetaTag {
    name?: string
    httpEquiv?: string
    charSet?: string
    content?: string
}

export interface LinkTag {
    rel: string
    href: string
    sizes?: string
    type?: string
    color?: string
}

type SEOProps = {
    title?: string
    description?: string
    keywords?: string[]
    icon?: string
    facebook?: Pick<FacebookProps, "image" | "type" | "url">
    twitter?: Pick<TwitterProps, "image" | "card" | "site">
    additionalMetaTags?: Array<MetaTag>
    additionalLinkTags?: Array<LinkTag>
}

const SEO: FC<SEOProps> = ({
    title,
    description,
    keywords,
    icon,
    facebook,
    twitter,
    additionalMetaTags,
    additionalLinkTags,
}) => {
    return (
        <>
            <Meta
                title={title}
                description={description}
                keywords={keywords}
                icon={icon}
                additionalMetaTags={additionalMetaTags}
                additionalLinkTags={additionalLinkTags}
            />

            <Facebook
                title={title}
                description={description}
                image={facebook?.image}
                url={facebook?.url}
                type={facebook?.type}
            />

            <Twitter
                title={title}
                description={description}
                image={twitter?.image}
                site={twitter?.site}
                card={twitter?.card}
            />
        </>
    )
}

export default SEO
export type {SEOProps}
