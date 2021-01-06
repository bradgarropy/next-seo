import Facebook from "components/Facebook"
import Meta from "components/Meta"
import Twitter from "components/Twitter"
import {useRouter} from "next/router"
import PropTypes from "prop-types"

const SEO = ({title = "", description = "", image = ""}) => {
    const {asPath} = useRouter()
    const seo = {}

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

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
}

export default SEO
