import styles from './social_media_button.module.css'

export default function SocialMediaButton({href, faIcon}){
    return (
        <a href={href} target="_blank" className={styles.socialMediaButton}><i className={`fa-brands ${faIcon}`}></i></a>
    )
}

