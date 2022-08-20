import Image from 'next/image'
import Link from 'next/link'
import Overlay from '../../../Overlay'

import styles from './Episode.module.scss'

export const Episode = ({
    episode: { image, episodeNumber, title, seasonNumber, plot, imDbRating }
}) => (
    <Link
        href={{
            pathname: '/episode',
            query: { season: seasonNumber, episode: episodeNumber, image, plot, title }
        }}
        as={`/episode?season=${seasonNumber}&episode=${episodeNumber}`}
    >
        <a className={styles['episode']}>
            <Overlay />
            <Image
                src={image}
                layout="fill"
            />
            <div className={styles['episode__details']}>
                <h5>
                    Season #{seasonNumber} Episode #{episodeNumber}
                </h5>
                <h4>{title}</h4>
            </div>
            <div className={styles['episode__imdb-logo']}>
                <p>{imDbRating}/10</p>
                <Image
                    src="/imdb.svg"
                    width={44}
                    height={22}
                />
            </div>
        </a>
    </Link>
)
