import { Link } from 'react-router-dom';

// components/MobileMenu/MobileMenu.tsx
export default function MobileMenu() {
    return (
        <nav className="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left" id="cbp-spmenu-s1">
            <div className="close-btn">
                <i className="fa-solid fa-xmark" />
            </div>
            <h3>Меню</h3>
            <ul className="cd-accordion-menu animated jq-menu-main-responsive">
                <li className=" lvl-1">
                    <Link className="ml-1" to="/">
                        Начало
                    </Link>
                </li>
                <li className=" lvl-1">
                    <Link className="ml-223" to="/about-us">
                        За нас
                    </Link>
                </li>
                <li className=" lvl-1">
                    <Link className="ml-225" to="/terms-and-conditions">
                        Общи условия
                    </Link>
                </li>
                <li className=" lvl-1">
                    <Link className="ml-226" to="/privacy-policy">
                        Политика за поверителност
                    </Link>
                </li>
            </ul>
        </nav>
    );
}