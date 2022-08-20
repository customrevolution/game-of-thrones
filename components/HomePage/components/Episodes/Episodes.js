import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Episode from './components/Episode'

import styles from './Episodes.module.scss'
import 'swiper/css'

export const Episodes = ({ season }) => {
    const [isShown, setIsShown] = useState(true)

    useEffect(() => {
        setIsShown(false)
        setTimeout(() => setIsShown(true), 1)
    }, [season, setIsShown])

    if (isShown) {
        return (
            <div className={styles['episodes']}>
                <Swiper
                    spaceBetween={24}
                    slidesPerView="auto"
                >
                    {season.map((episode) => (
                        <SwiperSlide key={episode.id}>
                            <Episode episode={episode} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        )
    }

    return ''
}
