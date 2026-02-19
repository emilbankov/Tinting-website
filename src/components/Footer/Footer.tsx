import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <footer>
                <div className="wrapper clearfloat">
                    <div className="footer-flex">
                        <div className="flex-item">
                            <div className="footer-logo">
                                <Link to="/">
                                    <img
                                        src="/images/logo.png"
                                        alt="Tintcom"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="flex-item">
                            <div className="footer-menu">
                                <h6 className="footer-title">Информация</h6>
                                <div className="foot-content">
                                    <div className="foot-content-inner">
                                        <ul>
                                            <li>
                                                <Link className="ml-221" to="bg/Instruktsii_za_montazh-c113">
                                                    Инструкции за монтаж
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="ml-231" to="bg/Info-c443">
                                                    Инфо
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="ml-232" to="blog-1-232">
                                                    Блог
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="ml-223" to="bg/Za_nas-c230p">
                                                    За нас
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="ml-224"
                                                    to="bg/Zakoni_za_zatymnyavane_na_avtostykla-c153"
                                                >
                                                    Закони за затъмняване на автостъкла
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="ml-225" to="bg/Obshti_usloviya-c154">
                                                    Общи условия
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="ml-226"
                                                    to="bg/Politika_za_poveritelnost-c444"
                                                >
                                                    Политика за поверителност
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="ml-13" to="bg/Dostavka-c436">
                                                    Доставка
                                                </Link>
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
                                                <Link to="/page/login?sign_in">Вход</Link>
                                            </li>
                                            <li>
                                                <Link to="/page/login?lost_password">Забравена парола</Link>
                                            </li>
                                            <li>
                                                <Link to="/page/login?sign_up">Регистрация</Link>
                                            </li>
                                            <li>
                                                <Link to="/page/step1">Потребителска кошница</Link>
                                            </li>
                                            <li>
                                                <Link to="/bg/favorites-products">Любими продукти</Link>
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
                                            <li><i className="fa-solid fa-location-dot"></i>Пловдив, България</li>
                                            <li><i className="fa-solid fa-phone"></i>+359 899 123 456</li>
                                            <li><i className="fa-solid fa-envelope"></i>stoqnegay@tintify.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copyright-bar">
                <div className="copyright-content">
                    &copy; 2026 Tintify - All rights reserved
                </div>
            </div>
        </>
    );
};