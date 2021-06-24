import {FC} from "react"

import config from "../../../package.json"

type MetaProps = {
    title: string
}

const Meta: FC<MetaProps> = ({title}) => {
    const {description, keywords} = config

    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords.join(", ")} />
            <link rel="icon" href="/favicon.ico" />
        </>
    )
}

export default Meta
