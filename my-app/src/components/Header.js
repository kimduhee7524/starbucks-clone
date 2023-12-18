import React, { useRef, useState } from 'react';
import styles from "./Header.module.css";
import logo from '../images/starbucks_logo.png';


const Header = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [placeholder, setPlaceholder] = useState('');
    const inputRef = useRef();
    const searchClickHandler =()=>{
        inputRef.current.focus();
    };

    const handleFocus = () => {
        setPlaceholder('통합검색');
        setIsExpanded(true);
    };

    const handleBlur = () => {
        setPlaceholder('');
    };

    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <a className={styles.logo} href='/'>
                    <img className={styles.logoImg} src={logo} alt=""></img>
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
                    <div className={styles.wrpper}>
                        <div className={styles.search} onClick={searchClickHandler}>
                            <a >
                                <img alt="통합검색" src="//image.istarbucks.co.kr/common/img/common/icon_magnifier_black.png" />
                            </a>
                            <input type="text" 
                               ref={inputRef} className={isExpanded ? styles.expanded : ''}
                               placeholder={placeholder} onFocus={handleFocus} onBlur={handleBlur}>
                            </input>
                        </div>
                    </div>
                </div>
                <ul className={styles.mainMenu}>
                    <li className={styles.item}>
                        <div className={styles.item__name}>MENU</div>
                        <div className={styles.item__contents}>
                            <div className={styles.contents__menu}>
                                <ul className={styles.inner}>
                                    <li>
                                        <h4>커피</h4>
                                        <ul>
                                            <li>스타벅스 원두</li>
                                            <li>스타벅스 비아</li>
                                            <li>스타벅스 오리기아</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h4>에스프레소 음료</h4>
                                        <ul>
                                            <li>도피오</li>
                                            <li>에스프레소 마키아또</li>
                                            <li>아메리카노</li>
                                            <li>마끼아또</li>
                                            <li>카푸치노</li>
                                            <li>모카</li>
                                            <li>리스트레또 비안코</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.contents__texture}>
                                <ul className={styles.inner}>
                                    <h4>나와 어울리는 커피 찾기</h4>
                                    <p>스타벅스가 여러분에게 어울리는 커피를 찾아드립니다.</p>
                                    <h4>최상의 커피를 즐기는 법</h4>
                                    <p>여러가지 방법을 통해 다양한 풍미의 커피를 즐겨보세요.</p>
                                </ul>

                            </div>
                        </div>
                    </li>
                    <li className={styles.item}>
                        <div className={styles.item__name}>STORE</div>
                        <div className={styles.item__contents}>
                            <div className={styles.contents__menu}></div>
                            <div className={styles.contents__texture}></div>
                        </div>
                    </li>
                    <li className={styles.item}>
                        <div className={styles.item__name}>COFFEE</div>
                        <div className={styles.item__contents}>
                            <div className={styles.contents__menu}></div>
                            <div className={styles.contents__texture}></div>
                        </div>
                    </li>
                    <li className={styles.item}>
                        <div className={styles.item__name}>STARBUCKS REWARDS</div>
                        <div className={styles.item__contents}>
                            <div className={styles.contents__menu}></div>
                            <div className={styles.contents__texture}></div>
                        </div>
                    </li>
                    <li className={styles.item}>
                        <div className={styles.item__name}>STARBUCKS REWARDS</div>
                        <div className={styles.item__contents}>
                            <div className={styles.contents__menu}></div>
                            <div className={styles.contents__texture}></div>
                        </div>
                    </li>
                    <li className={styles.item}>
                        <div className={styles.item__name}>WHAT'S NEW</div>
                        <div className={styles.item__contents}>
                            <div className={styles.contents__menu}></div>
                            <div className={styles.contents__texture}></div>
                        </div>
                    </li>
                </ul>

            </div>
            
        </header>
    );
};

export default Header;