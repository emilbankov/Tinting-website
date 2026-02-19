import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HomeHeader() {
    useEffect(() => {
        // Remove existing script if it exists
        const existingScript = document.querySelector('script[src="/js/some-main-scripts.js"]');
        if (existingScript) {
            document.body.removeChild(existingScript);
        }

        // Create and load the main scripts file
        const script = document.createElement('script');
        script.src = '/js/some-main-scripts.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup when component unmounts
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <>
            <header>
                <div className="header-top">
                    <div className="header-top-right">
                        <div className="header-contacts">
                            <a href="tel:+359898841010" title="+359 898 84 10 10">
                                <i className="fa-solid fa-phone" />
                                <span>+359 898 142 612</span>
                            </a>
                            <a href="mailto:stoqnegay@tintify.com" title="stoqnegay@tintify.com">
                                <i className="fa-regular fa-envelope" />
                                <span>stoqnegay@tintify.com</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="header-main">
                    <div className="logo">
                        <Link to="/">
                            <img src="/images/logo.png" alt="Tintcom" />
                        </Link>
                    </div>
                    <nav id="menu">
                        <ul>
                            <li className="lvl-1">
                                <Link className="ml-223" to="/about-us">
                                    За нас
                                </Link>
                            </li>
                            <li className="lvl-1">
                                <Link className="ml-23" to="/how-to-order">
                                    Как да поръчаме
                                </Link>
                            </li>
                            <li className="lvl-1">
                                <Link className="ml-23" to="/tinting">
                                    3D Модели
                                </Link>
                            </li>
                            <li className="lvl-1">
                                <Link className="ml-5" to="/contact">
                                    Контакти
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="header-right">
                        <div className="login">
                            <div className="login-choice">
                                <i className="fa-regular fa-user" />
                                <em>Вход</em>
                            </div>
                            <div className="login-list">
                                <div className="close-list">
                                    <i className="fa-solid fa-xmark" />
                                </div>
                                <div className="list-title">Вход</div>
                                <div className="login-wrap jq-form-login-top clearfloat">
                                    <div className="input-form icon-01">
                                        <input
                                            className="pole email"
                                            name="Form[email]"
                                            type="email"
                                            placeholder="Потребителско име"
                                        />
                                    </div>
                                    <div className="input-form icon-02">
                                        <input
                                            className="pole"
                                            name="Form[password]"
                                            type="password"
                                            placeholder="Парола"
                                        />
                                    </div>
                                    <div className="checkbox-custom">
                                        <input
                                            type="checkbox"
                                            id="rememberMe"
                                            name="Form[remember_me]"
                                            defaultValue={1}
                                            defaultChecked=""
                                        />
                                        <label htmlFor="rememberMe">Запомни ме</label>
                                    </div>
                                    <a
                                        href=""
                                        onclick="loginTop();
                                             return false;"
                                        className="btn btn-black"
                                    >
                                        Вход
                                    </a>
                                    <div className="just-text">
                                        <Link to="/page/login?lost_password" className="link">
                                            Забравена парола?
                                        </Link>
                                    </div>
                                </div>
                                <div className="list-btm">
                                    <Link to="/page/login?sign_up" className="btn">
                                        Регистрирайте се
                                    </Link>
                                    <div className="just-text">Вие сте нов потребител?</div>
                                </div>
                            </div>
                        </div>
                        <div className="favourite">
                            <a href="/bg/favorites-products">
                                <i className="fa-regular fa-heart" />
                            </a>
                        </div>
                        <div className="cart">
                            <Link
                                to="/page/step1"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector('.cart').classList.toggle('active');
                                }}
                                title="Потребителска кошница"
                            >
                                <i className="fa-solid fa-cart-shopping" />
                                <span className="broi-number">0</span>
                                <em>0.00 £</em>
                            </Link>
                            <div className="cart-list" />
                        </div>
                        <div className="responsive-menu-btn showRightPush">
                            <span className="icon-navicon" />
                        </div>
                    </div>
                </div>
            </header>
            <div className="ban-wrap">
                <div className="ban-image">
                    <div className="ban-text">
                        <div className="wrapper clearfloat">
                            <h2>
                                Затъмняване
                                <br />
                                на стъкла
                            </h2>
                            <h6>ФОЛИО ЗА ТОНИРАНЕ НА СТЪКЛА</h6>
                        </div>
                    </div>
                    <div className="ban-car">
                        <img
                            src="/images/car.png"
                            alt="Затъмняване<br>на стъкла"
                        />
                        <div className="car-windows-wrap">
                            <div className="slider car-front-windows">
                                <div>
                                    <figure style={{ opacity: "0" }}>
                                        <img src="/images/front_window.png" alt="" />
                                    </figure>
                                </div>
                                <div>
                                    <figure style={{ opacity: "0.3" }}>
                                        <img src="/images/front_window.png" alt="" />
                                    </figure>
                                </div>
                                <div>
                                    <figure style={{ opacity: "0.5" }}>
                                        <img src="/images/front_window.png" alt="" />
                                    </figure>
                                </div>
                                <div>
                                    <figure style={{ opacity: "0.65" }}>
                                        <img src="/images/front_window.png" alt="" />
                                    </figure>
                                </div>
                                <div>
                                    <figure style={{ opacity: "0.8" }}>
                                        <img src="/images/front_window.png" alt="" />
                                    </figure>
                                </div>
                                <div>
                                    <figure style={{ opacity: "0.9" }}>
                                        <img src="/images/front_window.png" alt="" />
                                    </figure>
                                </div>
                            </div>
                            <div className="slider car-back-windows">
                                <div>
                                    <figure style={{ opacity: "0" }}>
                                        <img src="/images/back_window.png" alt="" />
                                    </figure>
                                </div>
                                <div>
                                    <figure style={{ opacity: "0.3" }}>
                                        <img src="/images/back_window.png" alt="" />
                                    </figure>
                                </div>
                                <div>
                                    <figure style={{ opacity: "0.5" }}>
                                        <img src="/images/back_window.png" alt="" />
                                    </figure>
                                </div>
                                <div>
                                    <figure style={{ opacity: "0.65" }}>
                                        <img src="/images/back_window.png" alt="" />
                                    </figure>
                                </div>
                                <div>
                                    <figure style={{ opacity: "0.8" }}>
                                        <img src="/images/back_window.png" alt="" />
                                    </figure>
                                </div>
                                <div>
                                    <figure style={{ opacity: "0.85" }}>
                                        <img src="/images/back_window.png" alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="windows-tint">
                    <div className="wrapper">
                        <div className="front-windows">
                            <div className="windows-info">
                                <em>01</em>
                                Предни стъкла
                            </div>
                            <div className="slider front-windows-nav">
                                <div>
                                    <div className="window-opacity">Без</div>
                                </div>
                                <div>
                                    <div className="window-opacity">70%</div>
                                </div>
                                <div>
                                    <div className="window-opacity">50%</div>
                                </div>
                                <div>
                                    <div className="window-opacity">35%</div>
                                </div>
                                <div>
                                    <div className="window-opacity">20%</div>
                                </div>
                                <div>
                                    <div className="window-opacity">5%</div>
                                </div>
                            </div>
                        </div>
                        <div className="back-windows">
                            <div className="windows-info">
                                <em>02</em>
                                Задни стъкла
                            </div>
                            <div className="slider back-windows-nav">
                                <div>
                                    <div className="window-opacity">Без</div>
                                </div>
                                <div>
                                    <div className="window-opacity">70%</div>
                                </div>
                                <div>
                                    <div className="window-opacity">50%</div>
                                </div>
                                <div>
                                    <div className="window-opacity">35%</div>
                                </div>
                                <div>
                                    <div className="window-opacity">20%</div>
                                </div>
                                <div>
                                    <div className="window-opacity">5%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};