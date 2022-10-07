import Link from 'next/link';
import styles from './nav_menu.module.css'

export default function NavMenu() {
    return (
        <header className={styles["nav-container"]}>
            <nav className={styles.navbar}>
                <ul>
                    <li className={styles['link-container']} ><Link href="/">Accueil</Link></li>
                    <li className={styles['link-container']} ><Link href="/in-work">Mes Projets</Link></li>
                    <li className={styles['link-container']} ><Link href="/in-work">Blog</Link></li>
                </ul>
            </nav>
            <span className={styles['call-for-action']}>
                <Link href="/cv_pele_ousman.pdf">
                    <div>
                        <i className='fa fa-download' aria-hidden="true"></i>
                        Mon CV
                    </div>
                </Link>
            </span>
        </header>
    );
}