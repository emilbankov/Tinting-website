import { Link, useLocation } from "react-router-dom"

export default function Header() {
    const location = useLocation()

    // Dynamic page info based on route
    const getPageInfo = () => {
        const path = location.pathname

        if (path === '/about-us') {
            return { title: 'За нас', breadcrumb: 'За нас' }
        } else if (path === '/tinting') {
            return { title: '3D Модели', breadcrumb: '3D Модели' }
        } else if (path === '/gallery') {
            return { title: 'Галерия', breadcrumb: 'Галерия' }
        } else if (path === '/booking') {
            return { title: 'Запазване на час', breadcrumb: 'Запазване на час' }
        } else {
            return { title: 'Начало', breadcrumb: null }
        }
    }

    const pageInfo = getPageInfo()

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
                                <Link className="ml-23" to="/">
                                    Начало
                                </Link>
                            </li>
                            <li className="lvl-1">
                                <Link className="ml-23" to="/tinting">
                                    3D Модели
                                </Link>
                            </li>
                            <li className="lvl-1">
                                <Link className="ml-23" to="/gallery">
                                    Галерия
                                </Link>
                            </li>
                            <li className="lvl-1">
                                <Link className="ml-23" to="/booking">
                                    Запазване на час
                                </Link>
                            </li>
                            <li className="lvl-1">
                                <Link className="ml-223" to="/about-us">
                                    За нас
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
                        <div className="search-link s-search">Търсене</div>
                        <div className="login">
                            <div className="login-choice">
                                <i className="fa-regular fa-user" />
                                <em>Вход</em>
                            </div>
                            <div className="login-list">
                                <div className="close-list">
                                    <i className="fa-light fa-times" />
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
                                        <a href="/page/login?lost_password" className="link">
                                            Забравена парола?
                                        </a>
                                    </div>
                                </div>
                                <div className="list-btm">
                                    <a href="/page/login?sign_up" className="btn">
                                        Регистрирайте се
                                    </a>
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
                            <a
                                href="/page/step1"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector('.cart').classList.toggle('active');
                                }}
                                title="Потребителска кошница"
                            >
                                <i className="fa-solid fa-cart-shopping" />
                                <span className="broi-number">0</span>
                                <em>0.00 £</em>
                            </a>
                            <div className="cart-list" />
                        </div>
                        <div className="responsive-menu-btn showRightPush">
                            <span className="icon-navicon" />
                        </div>
                    </div>
                </div>
            </header>
            <div className="ban-inner">
                <div className="ban-inner-text">
                    <div className="wrapper clearfloat">
                        <h1>{pageInfo.title}</h1>
                        <div className="breadcrumb">
                            <Link to="/">Начало</Link>
                            <Link to={location.pathname}>{pageInfo.breadcrumb}</Link>
                        </div>
                    </div>
                </div>
                <div className="ban-inner-img">
                    <img src="/images/bnr.jpg" alt="default" />
                </div>
            </div>
        </>
    );
};