import Head from "next/head"
import {FC} from "react"

import Facebook from "../Facebook"
import Meta from "../Meta"
import Twitter from "../Twitter"

type SEOProps = {
    title?: string
    description?: string
    image?: string
}

const SEO: FC<SEOProps> = ({title = "", description = "", image = ""}) => {
    const seo = {
        title: "TEST",
        url: "TEST",
        keywords: ["TEST"],
        twitter: "TEST",
    }

    const defaultTitle = seo.title
    const defaultTwitterImage = `${seo.url}/twitter.png`
    const defaultFacebookImage = `${seo.url}/facebook.png`

    const seoImage = `${seo.url}${image}`
    const seoUrl = `${seo.url}`

    return (
        <Head>
            <Meta title={title || defaultTitle} />

            <Facebook
                url={seoUrl}
                title={title || defaultTitle}
                description={description}
                image={image ? seoImage : defaultFacebookImage}
            />

            <Twitter
                site={seo.twitter}
                title={title || defaultTitle}
                description={description}
                image={image ? seoImage : defaultTwitterImage}
            />
        </Head>
    )
}

export default SEO
