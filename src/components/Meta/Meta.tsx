import Head from "next/head"
import {FC} from "react"

type MetaProps = {
    title?: string
    description?: string
    keywords?: string[]
    icon?: string
    themeColor?: string
    colorScheme?: ColorScheme
}

type ColorScheme = "normal" | "light" | "dark" | "only light"

const Meta: FC<MetaProps> = ({
    title,
    description,
    keywords,
    icon,
    themeColor,
    colorScheme,
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

            {icon && <link key="icon" rel="icon" href={icon} />}

            {themeColor && (
                <meta
                    key="themeColor"
                    name="theme-color"
                    content={themeColor}
                />
            )}

            {colorScheme && (
                <meta
                    key="color-scheme"
                    name="color-scheme"
                    content={colorScheme}
                />
            )}
        </Head>
    )
}

export default Meta
export type {ColorScheme, MetaProps}
