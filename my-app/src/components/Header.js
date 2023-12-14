import React from 'react';
import styles from "./Header.module.css";
import logo from '../images/starbucks_logo.png';


const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.inner}>

                <a className={styles.logo} href='/'>
                    <img className={styles.img} src={logo} alt=""></img>
                </a>

                <div className={styles.subMenu}>
                    <ul className={styles.menu}>
                        <li>
                            <a href='/signin'>Sign In</a>
                        </li>
                        <li>
                            <a href='/my'>My Starbucks</a>
                        </li>
                        <li>
                            <a href='/customer'>Customer Service& Ideas</a>
                        </li>
                        <li>
                            <a href='/store'>Find a Store</a>
                        </li>
                    </ul>
                    <div className={styles.search}>
                        <input type='text'/>
                        <div class="material-symbols-outlined">search</div>
                    </div>
                </div>

            </div>
            
        </header>
    );
};

export default Header;