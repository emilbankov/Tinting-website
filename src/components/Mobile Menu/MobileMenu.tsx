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
                    <a className="ml-1" href="/">
                        Начало
                    </a>
                </li>
                <li className=" lvl-1">
                    <a className="ml-223" href="bg/Za_nas-c230p">
                        За нас
                    </a>
                </li>
                <li className=" lvl-1">
                    <a className="ml-225" href="bg/Obshti_usloviya-c154">
                        Общи условия
                    </a>
                </li>
                <li className=" lvl-1">
                    <a className="ml-226" href="bg/Politika_za_poveritelnost-c444">
                        Политика за поверителност
                    </a>
                </li>
            </ul>
        </nav>
    );
}