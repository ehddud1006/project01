import React, { useEffect, useState } from "react";

import classes from "./Header.module.scss";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
    const history = useHistory();
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

    const ctaClickHandler = () => {
        menuToggleHandler();
        history.push("/SignUp");
    };

    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <Link to="/" className={classes.header__content__logo}>
                    오늘의 배달
                </Link>
                <nav
                    className={`${classes.header__content__nav} ${
                        menuOpen && size.width < 768 ? classes.isMenu : ""
                    }`}
                >
                    <ul>
                        <li>
                            <Link to="/RecomD" onClick={menuToggleHandler}>
                                추천
                            </Link>
                        </li>
                        <li>
                            <Link to="/ClassicF" onClick={menuToggleHandler}>
                                분류
                            </Link>
                        </li>
                        <li>
                            <Link to="/RestauR" onClick={menuToggleHandler}>
                                맛집
                            </Link>
                        </li>
                        <li>
                            <Link to="/Inform" onClick={menuToggleHandler}>
                                회원정보
                            </Link>
                        </li>
                    </ul>
                    <button onClick={ctaClickHandler}>Sign up</button>
                </nav>
                <div className={classes.header__content__toggle}>
                    {!menuOpen ? (
                        <i className='fas fa-bars' onClick={menuToggleHandler} />
                    ) : (
                        <i className='fas fa-times' onClick={menuToggleHandler} />
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
