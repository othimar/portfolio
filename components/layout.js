import Head from "next/head";
import styles from "./layout.module.css"

import NavMenu from "./nav_menu";

export default function Layout({children}){
    return (
        <div className={styles.container}>
            <Head
                title = {"Othimar"}
            />
            <NavMenu/>
            <main>
                {children}
            </main>
        </div>
    );
} 
