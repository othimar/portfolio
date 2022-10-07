import Image from "next/image"
import styles from './profile_pic.module.css'

export default function ProfilePic({src = ""}) {
    return (
        <div className={styles.profil_border}>
            <Image
                className={styles.profil}
                src = {src}
                width={150}
                height={150}
                alt="My most beautiful picture" />
        </div>
    )
}