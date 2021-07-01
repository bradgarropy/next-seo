import {FC} from "react"

import Facebook, {FacebookProps} from "../Facebook"
import Meta from "../Meta"
import Twitter, {TwitterProps} from "../Twitter"

type SEOProps = {
    title?: string
    description?: string
    keywords?: string[]
    icon?: string
    facebook?: Pick<FacebookProps, "image" | "type" | "url">
    twitter?: Pick<TwitterProps, "image" | "card" | "site">
}

const SEO: FC<SEOProps> = ({
    title,
    description,
    keywords,
    icon,
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
