import {FC} from "react"

import Facebook, {FacebookProps} from "../Facebook"
import Meta, {ColorScheme} from "../Meta"
import Twitter, {TwitterProps} from "../Twitter"

type SEOProps = {
    title?: string
    description?: string
    keywords?: string[]
    icon?: string
    themeColor?: string
    colorScheme?: ColorScheme
    facebook?: Pick<FacebookProps, "image" | "type" | "url">
    twitter?: Pick<TwitterProps, "image" | "card" | "site">
}

const SEO: FC<SEOProps> = ({
    title,
    description,
    keywords,
    icon,
    themeColor,
    colorScheme,
    facebook,
    twitter,
}) => {
    return (
        <>
            <Meta
                title={title}
                description={description}
                keywords={keywords}
                icon={icon}
                themeColor={themeColor}
                colorScheme={colorScheme}
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
