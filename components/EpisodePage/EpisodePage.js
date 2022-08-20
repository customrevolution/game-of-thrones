import Background from '../HomePage/components/Background'

import styles from './EpisodePage.module.scss'

export const EpisodePage = ({ episode, season, image, plot, title }) => (
    <div>
        <Background image={image} />
        <div className={styles['episode-page-content']}>
            <span>
                Season #{season} Episode #{episode}
            </span>
            <h2>{title}</h2>
            <h3>{plot}</h3>
        </div>
    </div>
)
