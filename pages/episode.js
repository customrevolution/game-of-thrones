import Head from 'next/head'
import { useRouter } from 'next/router'
import EpisodePage from '../components/EpisodePage'

const Episode = () => {
    const router = useRouter()
    const { episode, season, image, plot, title } = router.query

    return (
        <>
            <Head>
                <title>
                    {title} | Season #{season} Episode #{episode}
                </title>
            </Head>
            <EpisodePage
                season={season}
                episode={episode}
                image={image}
                plot={plot}
                title={title}
            />
        </>
    )
}

export default Episode
