import Image from 'next/image'
import Overlay from '../Overlay'

import styles from './Background.module.scss'

export const Background = ({ image }) => (
    <div className={styles['background']}>
        <Image
            src={image}
            layout="fill"
            priority
        />
        <Overlay />
    </div>
)
