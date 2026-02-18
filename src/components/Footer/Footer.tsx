export default function Footer() {
    return (
        <>
            <footer>
                <div className="wrapper clearfloat">
                    <div className="footer-flex">
                        <div className="flex-item">
                            <div className="footer-logo">
                                <a href="/">
                                    <img
                                        src="/images/logo.png"
                                        alt="Tintcom"
                                    />
                                </a>
                            </div>
                            <div className="rights">
                                © 2018-2024 Тинтком ООД. Всички права запазени
                            </div>
                            <div className="socials">
                                <a href="https://www.facebook.com/Tintcomcom">
                                    <i className="fa-brands fa-facebook-f" />
                                </a>
                            </div>
                        </div>
                        <div className="flex-item">
                            <div className="footer-menu">
                                <h6 className="footer-title">Информация</h6>
                                <div className="foot-content">
                                    <div className="foot-content-inner">
                                        <ul>
                                            <li>
                                                <a className="ml-221" href="bg/Instruktsii_za_montazh-c113">
                                                    Инструкции за монтаж
                                                </a>
                                            </li>
                                            <li>
                                                <a className="ml-231" href="bg/Info-c443">
                                                    Инфо
                                                </a>
                                            </li>
                                            <li>
                                                <a className="ml-232" href="blog-1-232">
                                                    Блог
                                                </a>
                                            </li>
                                            <li>
                                                <a className="ml-223" href="bg/Za_nas-c230p">
                                                    За нас
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="ml-224"
                                                    href="bg/Zakoni_za_zatymnyavane_na_avtostykla-c153"
                                                >
                                                    Закони за затъмняване на автостъкла
                                                </a>
                                            </li>
                                            <li>
                                                <a className="ml-225" href="bg/Obshti_usloviya-c154">
                                                    Общи условия
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="ml-226"
                                                    href="bg/Politika_za_poveritelnost-c444"
                                                >
                                                    Политика за поверителност
                                                </a>
                                            </li>
                                            <li>
                                                <a className="ml-13" href="bg/Dostavka-c436">
                                                    Доставка
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-item">
                            <div className="footer-menu">
                                <h6 className="footer-title">За потребители</h6>
                                <div className="foot-content">
                                    <div className="foot-content-inner">
                                        <ul>
                                            <li>
                                                <a href="/page/login?sign_in">Вход</a>
                                            </li>
                                            <li>
                                                <a href="/page/login?lost_password">Забравена парола</a>
                                            </li>
                                            <li>
                                                <a href="/page/login?sign_up">Регистрация</a>
                                            </li>
                                            <li>
                                                <a href="/page/step1">Потребителска кошница</a>
                                            </li>
                                            <li>
                                                <a href="/bg/favorites-products">Любими продукти</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-item">
                            <div className="footer-contacts">
                                <h6 className="footer-title">За контакти</h6>
                                <div className="foot-content">
                                    <div className="foot-content-inner">
                                        <ul>
                                            <li><i className="fa-solid fa-location-dot"></i> ТИНТКОМ ООД</li>
                                            <li><i className="fa-solid fa-phone"></i>+359 899 123 456</li>
                                            <li><i className="fa-solid fa-envelope"></i>stoqnegay@tintify.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-line">
                    <div className="wrapper clearfloat">
                        <a href="https://webrix-studio.com" target="_blank">
                            Изработка на онлайн магазин: Уебрикс
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};