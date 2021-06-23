import Facebook from "components/Facebook"
import Meta from "components/Meta"
import Twitter from "components/Twitter"
import {useRouter} from "next/router"
import {FC} from "react"

type SEOProps = {
    title?: string
    description?: string
    image?: string
}

const SEO: FC<SEOProps> = ({title = "", description = "", image = ""}) => {
    const {asPath} = useRouter()

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
    const seoUrl = `${seo.url}${asPath}`

    return (
        <>
            <Meta
                title={title || defaultTitle}
                description={description}
                keywords={seo.keywords}
                icon={`${seo.url}/favicon.png`}
            />

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
        </>
    )
}

export default SEO
