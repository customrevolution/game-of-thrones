import axios from 'axios'
import Head from 'next/head'
import { getRandomIndex } from '../components/HomePage/utils'
import { seasonsMock, imagesMock, titleMock } from '../components/HomePage/mocks'
import HomePage from '../components/HomePage'

export default function Home({ seasons, backgroundImage, title }) {
    return (
        <>
            <Head>
                <title>{`${title} Episode Guide`}</title>
            </Head>
            <HomePage
                seasons={seasons}
                backgroundImage={backgroundImage}
                title={title}
            />
        </>
    )
}
export async function getServerSideProps(context) {
    const {
        title,
        tvSeriesInfo: { seasons }
    } = await axios(
        `${process.env.IMDB_API_TITLE}{process.env.IMDB_API_KEY}/${process.env.IMDB_API_TITLE_ID}`
    )
        .then((response) => (response.data.errorMessage ? titleMock : response.data))
        .catch(() => titleMock)

    const seasonsData = await axios
        .all(
            seasons.map((season) =>
                axios.get(
                    `${process.env.IMDB_API_SEASONS}${process.env.IMDB_API_KEY}/${process.env.IMDB_API_TITLE_ID}/${season}`
                )
            )
        )
        .then((responses) =>
            responses.map((response, index) =>
                response.data.errorMessage ? seasonsMock[index] : response.data.episodes
            )
        )
        .catch(() => seasonsMock)

    const backgroundImage = await axios(
        `${process.env.IMDB_API_IMAGES}${process.env.IMDB_API_KEY}/${process.env.IMDB_API_TITLE_ID}/Full`
    )
        .then((response) => {
            const images = response.data.items ?? imagesMock
            return images[getRandomIndex(images.length)].image
        })
        .catch(() => imagesMock[getRandomIndex(images.length)].image)

    return {
        props: {
            seasons: seasonsData,
            backgroundImage,
            title
        }
    }
}
