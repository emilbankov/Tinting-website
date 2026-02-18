export default function HomeHeader() {
    return (
        <>
            <header>
                <div className="header-top">
                    <div className="currency">
                        <span>Валута:</span>
                        <div className="currency-choice clearfloat">
                            GBP <i className="fa-regular fa-angle-down" />
                        </div>
                        <ul className="currency-list">
                            <li>
                                <a href="" onclick="choiceCurrency(2); return false;">
                                    EUR
                                </a>
                            </li>
                            <li>
                                <a href="" onclick="choiceCurrency(5); return false;">
                                    USD
                                </a>
                            </li>
                            <li>
                                <a href="" onclick="choiceCurrency(6); return false;">
                                    GBP
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="languages">
                        <span>Избери език:</span>
                        <div className="lang-choice clearfloat">
                            <img src="templates/default/images/flag_bg.png" alt="bg" />
                            <i className="fa-regular fa-angle-down" />
                        </div>
                        <ul className="lang-list">
                            <li>
                                <a
                                    href="bg/Za_nas-c230p"
                                    onclick="choiceCurrency(1); return true;"
                                    hrefLang="Български"
                                >
                                    <img src="templates/default/images/flag_bg.png" alt="bg" />
                                    Български
                                </a>
                            </li>
                            <li>
                                <a
                                    href="en/About_Us-c230"
                                    onclick="choiceCurrency(6); return true;"
                                    hrefLang="English"
                                >
                                    <img src="templates/default/images/flag_en.png" alt="en" />
                                    English
                                </a>
                            </li>
                            <li>
                                <a
                                    href="de/_ber_uns-c230"
                                    onclick="choiceCurrency(2); return true;"
                                    hrefLang="Deutsch"
                                >
                                    <img src="templates/default/images/flag_de.png" alt="de" />
                                    Deutsch
                                </a>
                            </li>
                            <li>
                                <a
                                    href="fr/A_propos_de-c230"
                                    onclick="choiceCurrency(2); return true;"
                                    hrefLang="Francais"
                                >
                                    <img src="templates/default/images/flag_fr.png" alt="fr" />
                                    Francais
                                </a>
                            </li>
                            <li>
                                <a
                                    href="se/Om_oss-c230"
                                    onclick="choiceCurrency(2); return true;"
                                    hrefLang="Svenska"
                                >
                                    <img src="templates/default/images/flag_se.png" alt="se" />
                                    Svenska
                                </a>
                            </li>
                            <li>
                                <a
                                    href="it/Chi_siamo-c230"
                                    onclick="choiceCurrency(2); return true;"
                                    hrefLang="Italiano"
                                >
                                    <img src="templates/default/images/flag_it.png" alt="it" />
                                    Italiano
                                </a>
                            </li>
                            <li>
                                <a
                                    href="gr/_-c230"
                                    onclick="choiceCurrency(2); return true;"
                                    hrefLang="Ελληνικά"
                                >
                                    <img src="templates/default/images/flag_gr.png" alt="gr" />
                                    Ελληνικά
                                </a>
                            </li>
                            <li>
                                <a
                                    href="pl/O_nas-c230"
                                    onclick="choiceCurrency(2); return true;"
                                    hrefLang="Polski"
                                >
                                    <img src="templates/default/images/flag_pl.png" alt="pl" />
                                    Polski
                                </a>
                            </li>
                            <li>
                                <a
                                    href="Qui-nes-somos-11-223"
                                    onclick="choiceCurrency(2); return true;"
                                    hrefLang="Español"
                                >
                                    <img src="templates/default/images/flag_es.png" alt="es" />
                                    Español
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="header-top-right">
                        <div className="search-form">
                            <div className="search-wrap clearfloat">
                                <form className="inline" autoComplete="off">
                                    <input
                                        type="text"
                                        id="searchForm"
                                        className="search-input"
                                        placeholder="Търсене"
                                        autoComplete="off"
                                    />
                                </form>
                                <a
                                    href=""
                                    className="search-submit"
                                    onclick="searchForKeyword();
                                 return false;"
                                    title="Търсене"
                                >
                                    <i className="fa-regular fa-search" />
                                </a>
                                <div className="fluid-menu" style={{ display: "none" }}>
                                    <h4>Моля, напишете минимум 3 символа</h4>
                                </div>
                            </div>
                        </div>
                        <div className="header-contacts">
                            <a href="tel:+359898841010" title="+359 898 84 10 10">
                                <i className="fa-brands fa-viber" />
                                <span>+359 898 84 10 10</span>
                            </a>
                            <a href="mailto:office@tintcom.com" title="office@tintcom.com">
                                <i className="fa-regular fa-envelopes" />
                                <span>office@tintcom.com</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="header-main">
                    <div className="logo">
                        <a href="/">
                            <img src="templates/default/images/logo.png" alt="Tintcom" />
                        </a>
                    </div>
                    <nav id="menu">
                        <ul>
                            <li className="lvl-1">
                                <a className="ml-223" href="bg/Za_nas-c230p">
                                    За нас
                                </a>
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
                            <a href="/bg/favorites-products" />
                        </div>
                        <div className="cart">
                            <a
                                href="/page/step1"
                                onclick="$(this).closest('.cart').toggleClass('active');
                         return false;"
                                title="Потребителска кошница"
                            >
                                <i className="fa-regular fa-shopping-cart" />
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
                        <h1>За нас</h1>
                        <div className="breadcrumb">
                            <a href="/">Начало</a>
                            <a href="bg/Za_nas-c230p">За нас</a>
                        </div>
                    </div>
                </div>
                <div className="ban-inner-img">
                    <img src="../files/default/bnr.jpg" alt="default" />
                </div>
            </div>
        </>
    );
};