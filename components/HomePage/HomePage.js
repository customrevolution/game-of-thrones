import { useState } from 'react'
import { Button } from '@material-ui/core'
import Background from './components/Background'
import Episodes from './components/Episodes'

import styles from './HomePage.module.scss'

export const HomePage = ({ seasons, backgroundImage, title }) => {
    const [currentSeason, setCurrentSeason] = useState(0)

    return (
        <main className={styles['homepage']}>
            <Background image={backgroundImage} />

            <div className={styles['homepage__content']}>
                <h1>{title} Episode Guide</h1>
                <h2>A small preview of all episodes.</h2>

                <div className={styles['homepage__season-list']}>
                    <p>Choose a season:</p>
                    <div className={styles['homepage__season-buttons']}>
                        {[...Array(seasons.length)].map((element, index) => (
                            <Button
                                className={
                                    currentSeason == index
                                        ? styles['homepage__season-buttons--active']
                                        : ''
                                }
                                variant="contained"
                                onClick={() => setCurrentSeason(index)}
                                key={index}
                            >
                                Season {index + 1}
                            </Button>
                        ))}
                    </div>
                </div>

                <Episodes season={seasons[currentSeason]} />
            </div>
        </main>
    )
}
