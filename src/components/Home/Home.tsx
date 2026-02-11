export default function Home() {
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
            <a href="/">
              <img src="/images/logo-3.png" alt="Tintcom" />
            </a>
          </div>
          <nav id="menu">
            <ul>
              <li className="lvl-1">
                <a className="ml-221" href="bg/Instruktsii_za_montazh-c113">
                  Инструкции за монтаж
                </a>
              </li>
              <li className="lvl-1">
                <a className="ml-223" href="bg/Za_nas-c230p">
                  За нас
                </a>
              </li>
              <li className="lvl-1">
                <a className="ml-23" href="bg/Kak_da_porychame-c435">
                  Как да поръчаме
                </a>
              </li>
              <li className="lvl-1">
                <a className="ml-5" href="bg/Kontakti-c171">
                  Контакти
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
              src="/images/car-857.jfif"
              alt="Затъмняване<br>на стъкла"
            />
            <div className="car-windows-wrap">
              <div className="slider car-front-windows">
                <div>
                  <figure style={{ opacity: "0.1" }}>
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
                  <figure style={{ opacity: "0.1" }}>
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
                  <figure style={{ opacity: "0.9" }}>
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
      <section className="brands">
        <div className="wrapper clearfloat">
          <div className="brands-wrap">
            <div className="brand-one">
              <div className="title">
                <h4>
                  <a href="bg/Produkti-c252">
                    Фолио за тониране на автостъкла Solar Gard на Saint Gobain
                  </a>
                </h4>
              </div>
              <div className="text">
                За повече от 30 години,{" "}
                <a href="https://www.solargard.com/" target="_blank">
                  „Solar Gard "
                </a>
                е една от най-популярните марки фолио за прозорци при
                професионалните инсталатори в целия свят. Произведеното от „Solar
                Gard "в Сан Диего, се продава в повече от 90 страни
              </div>
              <figure>
                <img
                  src="/images/SolarGard-logo-858.jfif"
                  alt="Фолио за тониране на автостъкла Solar Gard на Saint Gobain"
                />
              </figure>
            </div>
            <div className="brand-one">
              <div className="title">
                <h4>
                  <a href="bg/Produkti-c252">
                    Фолио за тониране на автостъкла Johnson Window Films
                  </a>
                </h4>
              </div>
              <div className="text">
                Производствената база на{" "}
                <a href="https://www.johnsonwindowfilms.com/" target="_blank">
                  „Johnson Window Films “
                </a>
                се намира в Карсън, Калифорния. „Johnson Window Films “е семеен
                бизнес, в продължение на над 40 години се занимава с производството
                на фолио за стъкла.&nbsp;
              </div>
              <figure>
                <img
                  src="/images/Johnson-logo-859.jfif"
                  alt="Фолио за тониране на автостъкла Johnson Window Films"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section className="accents">
        <div className="acc-one">
          <figure>
            <a href="bg/Komplekti_za_tonirane_na_avtostykla_seriya_NR_Smoke_Plus-c249">
              <img
                src="/images/acc1-860.jpg"
                alt="серия Smoke Plus"
              />
            </a>
            <figcaption>
              <div className="accent-title">
                <strong>серия Smoke Plus</strong>
                Готови комплекти за тониране на автостъкла Solar Gard &nbsp;
              </div>
              <a
                href="bg/Komplekti_za_tonirane_na_avtostykla_seriya_NR_Smoke_Plus-c249"
                className="view"
              >
                View more
              </a>
            </figcaption>
          </figure>
        </div>
        <div className="acc-one">
          <figure>
            <a href="bg/Komplekti_za_tonirane_na_avtostykla_seriya_Supreme-c243">
              <img
                src="/images/acc2-861.jpg"
                alt="серия Supreme"
              />
            </a>
            <figcaption>
              <div className="accent-title">
                <strong>серия Supreme</strong>
                Готови комплекти за тониране на автостъкла - Solar Gard
              </div>
              <a
                href="bg/Komplekti_za_tonirane_na_avtostykla_seriya_Supreme-c243"
                className="view"
              >
                View more
              </a>
            </figcaption>
          </figure>
        </div>
        <div className="acc-one">
          <figure>
            <a href="bg/Komplekti_za_tonirane_na_avtostykla_seriya_Ray_Guard-c339">
              <img
                src="/images/acc3-862.jpg"
                alt="серия Ray Guard"
              />
            </a>
            <figcaption>
              <div className="accent-title">
                <strong>серия Ray Guard</strong>
                Готови комплекти за тониране - Johnson Window Films
              </div>
              <a
                href="bg/Komplekti_za_tonirane_na_avtostykla_seriya_Ray_Guard-c339"
                className="view"
              >
                View more
              </a>
            </figcaption>
          </figure>
        </div>
        <div className="acc-one">
          <figure>
            <a href="bg/Komplekti_za_tonirane_na_avtostykla_seriya_Marathon-c340">
              <img
                src="/images/acc4-863.jpg"
                alt="серия Marathon"
              />
            </a>
            <figcaption>
              <div className="accent-title">
                <strong>серия Marathon</strong>
                Готови комплекти за тониране - Johnson Window Films
              </div>
              <a
                href="bg/Komplekti_za_tonirane_na_avtostykla_seriya_Marathon-c340"
                className="view"
              >
                View more
              </a>
            </figcaption>
          </figure>
        </div>
        <div className="acc-one">
          <figure>
            <a href="bg/Instrumenti-c434">
              <img
                src="/images/acc5-864.jpg"
                alt="Инструменти"
              />
            </a>
            <figcaption>
              <div className="accent-title">
                <strong>Инструменти</strong>
              </div>
              <a href="bg/Instrumenti-c434" className="view">
                View more
              </a>
            </figcaption>
          </figure>
        </div>
        <div className="acc-one">
          <figure>
            <a href="bg/Folio_za_tonirane_na_avtostykla-c429">
              <img
                src="/images/acc6-865.jpg"
                alt="Фолио за тониране на автостъкла"
              />
            </a>
            <figcaption>
              <div className="accent-title">
                <strong>Фолио за тониране на автостъкла</strong>
              </div>
              <a href="bg/Folio_za_tonirane_na_avtostykla-c429" className="view">
                View more
              </a>
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="about">
        <div className="big-wrapper clearfloat">
          <div className="about-info">
            <div className="title">
              <h1>Предварително изрязано фолио за затъмняване на стъкла</h1>
            </div>
            <div className="text">
              <p>
                Висококачествено фолио за стъкла на едни от водещите фирми в
                индустрията –
                <a
                  href="https://www.johnsonwindowfilms.com/"
                  onclick="window.open(this.href, '', 'resizable=no,status=no,location=no,toolbar=no,menubar=no,fullscreen=no,scrollbars=no,dependent=no'); return false;"
                >
                  Johnson Window Films
                </a>
                и{" "}
                <a href="https://www.solargard.com/" target="_blank">
                  Solar Gard
                </a>
                . Фолио за затъмняване на стъкла за над 90% от всички марки
                автомобили в света.
              </p>
              <ul>
                <li>
                  Нашите готови комплекти за затъмняване на стъкла не само изглеждат
                  добре, но те са също така и:
                </li>
                <li>
                  Лесни за монтаж{" "}
                  <a href="https://tintcom.com/bg/Instruktsii_za_montazh-c113">
                    (инструкции за монтаж на автомобилно фолио)
                  </a>
                  –поради направата на фолиото могат да бъдат термосвити и
                  инсталирани по-лесно от фолиата с по-ниско качество.
                </li>
                <li>
                  Комфорт на водача –фолиото за затъмняване на стъкла намалява
                  слънчевата топлина и прави шофирането по-приятно.
                </li>
                <li>
                  Засилено уединение –по-тъмното фолио за коли намаляват видимостта
                  в автомобила (отвън навътре).
                </li>
                <li>
                  Защита на колата –фолиото за стъкла помага при намаляването на
                  избледняването на интериора.
                </li>
                <li>
                  Защита на кожата –всичките ни фолиа са с UV защита/UV филтър.
                </li>
                <li>
                  Защита при инцидент –всяко наше автомобилно фолио помага като
                  задържа опасните парчета стъкло на място при удар.
                </li>
                <li>
                  Сигурност –нашето фолио за автомобили помага при предпазването на
                  пътниците от разбиване и грабеж.
                </li>
              </ul>
              <p>
                <span new="" roman="" times="">
                  Всички наши предварително изрязани комплекти за затъмняване на
                  стъкла са направени така, че да прилягат перфектно към прозорците
                  на автомобила ви. В нашата разширена база данни имаме повече от
                  1000 шаблона на превозни средства. Всичко е направено с
                  прецизност, от най-новото поколение машини за рязане на
                  автомобилно фолио, под надзора на нашите специалисти. Всички
                  висококачествени предварително нарязани комплекти се предлагат в
                  пет различни нюанса, които да паснат на вашия стил и нужди - 5%,
                  20%, 35%, 50% и 70%.
                  <br />
                  <br />
                  Можете да използвате нашия визуализатор, с опции за затъмняване на
                  стъклата, на началната страница, за да изпробвате различните
                  проценти затъмнение.
                  <br />
                  <br />
                  Ако имате нужда от повече информация или просто да говорите за
                  това, не се колебайте да се свържете с нас. Някой от нашите
                  експерти по фолио за затъмняване на автомобилни стъкла &nbsp;е
                  винаги на линия, за да ви помогне.
                </span>
              </p>
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
      </section>
      <section className="benefits">
        <div className="wrapper clearfloat">
          <h2>Ползите от предварително изрязаното фолио за затъмняване</h2>
          <a
            href="bg/Polzite_ot_Predvaritelno_Izryazanoto_Folio_za_Zatymnyavane_chast_1_-p7594"
            className="btn"
          >
            Виж повече
          </a>
        </div>
      </section>
      <footer>
        <div className="wrapper clearfloat">
          <div className="footer-flex">
            <div className="flex-item">
              <div className="footer-logo">
                <a href="/">
                  <img
                    src="/images/footer_logo.png"
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
      <div className="cookies-wrapper cookie-hidden">
        <div className="cookie-container clearfloat">
          <div className="cookie-text">
            Бисквитките ни помагат да подобрим нашите услуги. Разглеждайки
            съдържанието на сайта, вие се съгласявате и с{" "}
            <a href="/информация-1-23" target="_blank">
              Политиката на поверителност
            </a>
            .
          </div>
          <a
            className="btn"
            onclick="acceptCookies();
                  return false;"
          >
            Добре
          </a>
        </div>
      </div>
      <a href="#top" className="page-top">
        <i className="fa-solid fa-chevron-up" />
      </a>
      <div className="spinner">
        <div className="mesh-loader">
          <div className="set-one">
            <div className="circle" />
            <div className="circle" />
          </div>
          <div className="set-two">
            <div className="circle" />
            <div className="circle" />
          </div>
        </div>
      </div>
      <nav
        className="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"
        id="cbp-spmenu-s1"
      >
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
          <li className="has-children lvl-1">
            <a className="ml-2" href="bg/Produkti-c252">
              Продукти
            </a>
            <input type="checkbox" name="ml-arrow-2" id="ml-arrow-2" />
            <label htmlFor="ml-arrow-2">arrow</label>
            <ul>
              <li className="has-children">
                <a
                  className="ml-11"
                  href="bg/Komplekti_za_tonirane_na_avtostykla_seriya_NR_Smoke_Plus-c249"
                >
                  Комплекти за тониране на автостъкла Solar Guard - серия NR Smoke
                  Plus
                </a>
                <input type="checkbox" name="ml-arrow-11" id="ml-arrow-11" />
                <label htmlFor="ml-arrow-11">arrow</label>
                <ul>
                  <li>
                    <a className="ml-7" href="bg/Acura-c250">
                      Acura
                    </a>
                  </li>
                  <li>
                    <a className="ml-38" href="bg/Alfa_Romeo-c251">
                      Alfa Romeo
                    </a>
                  </li>
                  <li>
                    <a className="ml-37" href="bg/Audi-c253">
                      Audi
                    </a>
                  </li>
                  <li>
                    <a className="ml-36" href="bg/BMW-c254">
                      BMW
                    </a>
                  </li>
                  <li>
                    <a className="ml-39" href="bg/Chevrolet-c255">
                      Chevrolet
                    </a>
                  </li>
                  <li>
                    <a className="ml-40" href="bg/Chrysler-c256">
                      Chrysler
                    </a>
                  </li>
                  <li>
                    <a className="ml-41" href="bg/Citroen-c257">
                      Citroen
                    </a>
                  </li>
                  <li>
                    <a className="ml-42" href="bg/Dacia-c258">
                      Dacia
                    </a>
                  </li>
                  <li>
                    <a className="ml-43" href="bg/Daewoo-c259">
                      Daewoo
                    </a>
                  </li>
                  <li>
                    <a className="ml-44" href="bg/Daihatsu-c260">
                      Daihatsu
                    </a>
                  </li>
                  <li>
                    <a className="ml-52" href="bg/Dodge-c261">
                      Dodge
                    </a>
                  </li>
                  <li>
                    <a className="ml-53" href="bg/Fiat-c262">
                      Fiat
                    </a>
                  </li>
                  <li>
                    <a className="ml-47" href="bg/Ford-c263">
                      Ford
                    </a>
                  </li>
                  <li>
                    <a className="ml-46" href="bg/Honda-c264">
                      Honda
                    </a>
                  </li>
                  <li>
                    <a className="ml-45" href="bg/Hummer-c265">
                      Hummer
                    </a>
                  </li>
                  <li>
                    <a className="ml-48" href="bg/Hyundai-c266">
                      Hyundai
                    </a>
                  </li>
                  <li>
                    <a className="ml-54" href="bg/Infiniti-c437">
                      Infiniti
                    </a>
                  </li>
                  <li>
                    <a className="ml-58" href="bg/Isuzu-c267">
                      Isuzu
                    </a>
                  </li>
                  <li>
                    <a className="ml-59" href="bg/Jaguar-c268">
                      Jaguar
                    </a>
                  </li>
                  <li>
                    <a className="ml-60" href="bg/Jeep-c269">
                      Jeep
                    </a>
                  </li>
                  <li>
                    <a className="ml-61" href="bg/Kia-c270">
                      Kia
                    </a>
                  </li>
                  <li>
                    <a className="ml-63" href="bg/Land_Rover-c272">
                      Land Rover
                    </a>
                  </li>
                  <li>
                    <a className="ml-64" href="bg/Lexus-c273">
                      Lexus
                    </a>
                  </li>
                  <li>
                    <a className="ml-66" href="bg/Mercedes_Benz-c275">
                      Mercedes Benz
                    </a>
                  </li>
                  <li>
                    <a className="ml-67" href="bg/MG-c276">
                      MG
                    </a>
                  </li>
                  <li>
                    <a className="ml-68" href="bg/Mini-c277">
                      Mini
                    </a>
                  </li>
                  <li>
                    <a className="ml-69" href="bg/Mitsubishi-c278">
                      Mitsubishi
                    </a>
                  </li>
                  <li>
                    <a className="ml-70" href="bg/Nissan-c279">
                      Nissan
                    </a>
                  </li>
                  <li>
                    <a className="ml-71" href="bg/Opel-c280">
                      Opel
                    </a>
                  </li>
                  <li>
                    <a className="ml-72" href="bg/Peugeot-c281">
                      Peugeot
                    </a>
                  </li>
                  <li>
                    <a className="ml-73" href="bg/Porsche-c282">
                      Porsche
                    </a>
                  </li>
                  <li>
                    <a className="ml-74" href="bg/Renault-c283">
                      Renault
                    </a>
                  </li>
                  <li>
                    <a className="ml-75" href="bg/Rover-c284">
                      Rover
                    </a>
                  </li>
                  <li>
                    <a className="ml-76" href="bg/Saab-c285">
                      Saab
                    </a>
                  </li>
                  <li>
                    <a className="ml-77" href="bg/Seat-c286">
                      Seat
                    </a>
                  </li>
                  <li>
                    <a className="ml-78" href="bg/Skoda-c287">
                      Skoda
                    </a>
                  </li>
                  <li>
                    <a className="ml-79" href="bg/Smart-c288">
                      Smart
                    </a>
                  </li>
                  <li>
                    <a className="ml-80" href="bg/SsangYong-c289">
                      SsangYong
                    </a>
                  </li>
                  <li>
                    <a className="ml-82" href="bg/Suzuki-c291">
                      Suzuki
                    </a>
                  </li>
                  <li>
                    <a className="ml-234" href="bg/tesla">
                      Tesla
                    </a>
                  </li>
                  <li>
                    <a className="ml-83" href="bg/Toyota-c292">
                      Toyota
                    </a>
                  </li>
                  <li>
                    <a className="ml-84" href="bg/VW-c293">
                      VW
                    </a>
                  </li>
                </ul>
              </li>
              <li className="has-children">
                <a
                  className="ml-14"
                  href="bg/Komplekti_za_tonirane_na_avtostykla_seriya_Supreme-c243"
                >
                  Kомплекти за тониране на автостъкла Solar Guard - серия Supreme
                </a>
                <input type="checkbox" name="ml-arrow-14" id="ml-arrow-14" />
                <label htmlFor="ml-arrow-14">arrow</label>
                <ul>
                  <li>
                    <a className="ml-49" href="bg/Acura-c295">
                      Acura
                    </a>
                  </li>
                  <li>
                    <a className="ml-50" href="bg/Alfa_Romeo-c296">
                      Alfa Romeo
                    </a>
                  </li>
                  <li>
                    <a className="ml-86" href="bg/Audi-c297">
                      Audi
                    </a>
                  </li>
                  <li>
                    <a className="ml-87" href="bg/BMW-c298">
                      BMW
                    </a>
                  </li>
                  <li>
                    <a className="ml-88" href="bg/Chevrolet-c299">
                      Chevrolet
                    </a>
                  </li>
                  <li>
                    <a className="ml-89" href="bg/Chrysler-c300">
                      Chrysler
                    </a>
                  </li>
                  <li>
                    <a className="ml-90" href="bg/Citroen-c301">
                      Citroen
                    </a>
                  </li>
                  <li>
                    <a className="ml-91" href="bg/Dacia-c302">
                      Dacia
                    </a>
                  </li>
                  <li>
                    <a className="ml-92" href="bg/Daewoo-c303">
                      Daewoo
                    </a>
                  </li>
                  <li>
                    <a className="ml-93" href="bg/Daihatsu-c304">
                      Daihatsu
                    </a>
                  </li>
                  <li>
                    <a className="ml-94" href="bg/Dodge-c305">
                      Dodge
                    </a>
                  </li>
                  <li>
                    <a className="ml-95" href="bg/Fiat-c306">
                      Fiat
                    </a>
                  </li>
                  <li>
                    <a className="ml-96" href="bg/Ford-c307">
                      Ford
                    </a>
                  </li>
                  <li>
                    <a className="ml-97" href="bg/Honda-c308">
                      Honda
                    </a>
                  </li>
                  <li>
                    <a className="ml-99" href="bg/Hyundai-c310">
                      Hyundai
                    </a>
                  </li>
                  <li>
                    <a className="ml-100" href="bg/Infiniti-c438">
                      Infiniti
                    </a>
                  </li>
                  <li>
                    <a className="ml-101" href="bg/Isuzu-c311">
                      Isuzu
                    </a>
                  </li>
                  <li>
                    <a className="ml-102" href="bg/Jaguar-c312">
                      Jaguar
                    </a>
                  </li>
                  <li>
                    <a className="ml-103" href="bg/Jeep-c313">
                      Jeep
                    </a>
                  </li>
                  <li>
                    <a className="ml-104" href="bg/Kia-c314">
                      Kia
                    </a>
                  </li>
                  <li>
                    <a className="ml-105" href="bg/Lancia-c315">
                      Lancia
                    </a>
                  </li>
                  <li>
                    <a className="ml-106" href="bg/Land_Rover-c316">
                      Land Rover
                    </a>
                  </li>
                  <li>
                    <a className="ml-107" href="bg/Lexus-c317">
                      Lexus
                    </a>
                  </li>
                  <li>
                    <a className="ml-108" href="bg/Mazda-c318">
                      Mazda
                    </a>
                  </li>
                  <li>
                    <a className="ml-109" href="bg/Mercedes_Benz-c319">
                      Mercedes Benz
                    </a>
                  </li>
                  <li>
                    <a className="ml-110" href="bg/MG-c320">
                      MG
                    </a>
                  </li>
                  <li>
                    <a className="ml-111" href="bg/Mini-c321">
                      Mini
                    </a>
                  </li>
                  <li>
                    <a className="ml-112" href="bg/Mitsubishi-c322">
                      Mitsubishi
                    </a>
                  </li>
                  <li>
                    <a className="ml-113" href="bg/Nissan-c323">
                      Nissan
                    </a>
                  </li>
                  <li>
                    <a className="ml-114" href="bg/Opel-c324">
                      Opel
                    </a>
                  </li>
                  <li>
                    <a className="ml-115" href="bg/Peugeot-c325">
                      Peugeot
                    </a>
                  </li>
                  <li>
                    <a className="ml-116" href="bg/Porsche-c326">
                      Porsche
                    </a>
                  </li>
                  <li>
                    <a className="ml-117" href="bg/Renault-c327">
                      Renault
                    </a>
                  </li>
                  <li>
                    <a className="ml-118" href="bg/Rover-c328">
                      Rover
                    </a>
                  </li>
                  <li>
                    <a className="ml-119" href="bg/Saab-c329">
                      Saab
                    </a>
                  </li>
                  <li>
                    <a className="ml-120" href="bg/Seat-c330">
                      Seat
                    </a>
                  </li>
                  <li>
                    <a className="ml-121" href="bg/Skoda-c331">
                      Skoda
                    </a>
                  </li>
                  <li>
                    <a className="ml-122" href="bg/Smart-c332">
                      Smart
                    </a>
                  </li>
                  <li>
                    <a className="ml-123" href="bg/SsangYong-c333">
                      SsangYong
                    </a>
                  </li>
                  <li>
                    <a className="ml-124" href="bg/Subaru-c334">
                      Subaru
                    </a>
                  </li>
                  <li>
                    <a className="ml-125" href="bg/Suzuki-c335">
                      Suzuki
                    </a>
                  </li>
                  <li>
                    <a className="ml-235" href="tesla-solar-guard-supreme">
                      Tesla
                    </a>
                  </li>
                  <li>
                    <a className="ml-126" href="bg/Toyota-c336">
                      Toyota
                    </a>
                  </li>
                  <li>
                    <a className="ml-128" href="bg/Volvo-c338">
                      Volvo
                    </a>
                  </li>
                  <li>
                    <a className="ml-127" href="bg/VW-c337">
                      VW
                    </a>
                  </li>
                </ul>
              </li>
              <li className="has-children">
                <a
                  className="ml-22"
                  href="bg/Komplekti_za_tonirane_na_avtostykla_seriya_Ray_Guard-c339"
                >
                  Комплекти за тониране на автостъкла Johnson Window Films - серия
                  Ray Guard
                </a>
                <input type="checkbox" name="ml-arrow-22" id="ml-arrow-22" />
                <label htmlFor="ml-arrow-22">arrow</label>
                <ul>
                  <li>
                    <a className="ml-129" href="bg/Acura-c341">
                      Acura
                    </a>
                  </li>
                  <li>
                    <a className="ml-130" href="bg/Alfa_Romeo-c342">
                      Alfa Romeo
                    </a>
                  </li>
                  <li>
                    <a className="ml-131" href="bg/Audi-c343">
                      Audi
                    </a>
                  </li>
                  <li>
                    <a className="ml-132" href="bg/BMW-c344">
                      BMW
                    </a>
                  </li>
                  <li>
                    <a className="ml-133" href="bg/Chevrolet-c345">
                      Chevrolet
                    </a>
                  </li>
                  <li>
                    <a className="ml-134" href="bg/Chrysler-c346">
                      Chrysler
                    </a>
                  </li>
                  <li>
                    <a className="ml-135" href="bg/Citroen-c347">
                      Citroen
                    </a>
                  </li>
                  <li>
                    <a className="ml-136" href="bg/Dacia-c348">
                      Dacia
                    </a>
                  </li>
                  <li>
                    <a className="ml-137" href="bg/Daewoo-c349">
                      Daewoo
                    </a>
                  </li>
                  <li>
                    <a className="ml-138" href="bg/Daihatsu-c350">
                      Daihatsu
                    </a>
                  </li>
                  <li>
                    <a className="ml-139" href="bg/Dodge-c351">
                      Dodge
                    </a>
                  </li>
                  <li>
                    <a className="ml-140" href="bg/Fiat-c352">
                      Fiat
                    </a>
                  </li>
                  <li>
                    <a className="ml-141" href="bg/Ford-c353">
                      Ford
                    </a>
                  </li>
                  <li>
                    <a className="ml-143" href="bg/Hummer-c355">
                      Hummer
                    </a>
                  </li>
                  <li>
                    <a className="ml-144" href="bg/Hyundai-c356">
                      Hyundai
                    </a>
                  </li>
                  <li>
                    <a className="ml-145" href="bg/Infiniti-c439">
                      Infiniti
                    </a>
                  </li>
                  <li>
                    <a className="ml-146" href="bg/Isuzu-c357">
                      Isuzu
                    </a>
                  </li>
                  <li>
                    <a className="ml-147" href="bg/Jaguar-c358">
                      Jaguar
                    </a>
                  </li>
                  <li>
                    <a className="ml-148" href="bg/Jeep-c359">
                      Jeep
                    </a>
                  </li>
                  <li>
                    <a className="ml-149" href="bg/Kia-c360">
                      Kia
                    </a>
                  </li>
                  <li>
                    <a className="ml-150" href="bg/Lancia-c361">
                      Lancia
                    </a>
                  </li>
                  <li>
                    <a className="ml-151" href="bg/Land_Rover-c362">
                      Land Rover
                    </a>
                  </li>
                  <li>
                    <a className="ml-152" href="bg/Lexus-c363">
                      Lexus
                    </a>
                  </li>
                  <li>
                    <a className="ml-153" href="bg/Mazda-c364">
                      Mazda
                    </a>
                  </li>
                  <li>
                    <a className="ml-154" href="bg/Mercedes_Benz-c365">
                      Mercedes Benz
                    </a>
                  </li>
                  <li>
                    <a className="ml-155" href="bg/MG-c366">
                      MG
                    </a>
                  </li>
                  <li>
                    <a className="ml-156" href="bg/Mini-c367">
                      Mini
                    </a>
                  </li>
                  <li>
                    <a className="ml-157" href="bg/Mitsubishi-c368">
                      Mitsubishi
                    </a>
                  </li>
                  <li>
                    <a className="ml-158" href="bg/Nissan-c369">
                      Nissan
                    </a>
                  </li>
                  <li>
                    <a className="ml-159" href="bg/Opel-c370">
                      Opel
                    </a>
                  </li>
                  <li>
                    <a className="ml-160" href="bg/Peugeot-c371">
                      Peugeot
                    </a>
                  </li>
                  <li>
                    <a className="ml-161" href="bg/Porsche-c372">
                      Porsche
                    </a>
                  </li>
                  <li>
                    <a className="ml-162" href="bg/Renault-c373">
                      Renault
                    </a>
                  </li>
                  <li>
                    <a className="ml-163" href="bg/Rover-c374">
                      Rover
                    </a>
                  </li>
                  <li>
                    <a className="ml-164" href="bg/Saab-c375">
                      Saab
                    </a>
                  </li>
                  <li>
                    <a className="ml-165" href="bg/Seat-c376">
                      Seat
                    </a>
                  </li>
                  <li>
                    <a className="ml-166" href="bg/Skoda-c377">
                      Skoda
                    </a>
                  </li>
                  <li>
                    <a className="ml-167" href="bg/Smart-c378">
                      Smart
                    </a>
                  </li>
                  <li>
                    <a className="ml-168" href="bg/SsangYong-c379">
                      SsangYong
                    </a>
                  </li>
                  <li>
                    <a className="ml-169" href="bg/Subaru-c380">
                      Subaru
                    </a>
                  </li>
                  <li>
                    <a className="ml-170" href="bg/Suzuki-c381">
                      Suzuki
                    </a>
                  </li>
                  <li>
                    <a className="ml-171" href="bg/Toyota-c382">
                      Toyota
                    </a>
                  </li>
                  <li>
                    <a className="ml-173" href="bg/Volvo-c384">
                      Volvo
                    </a>
                  </li>
                  <li>
                    <a className="ml-172" href="bg/VW-c383">
                      VW
                    </a>
                  </li>
                </ul>
              </li>
              <li className="has-children">
                <a
                  className="ml-4"
                  href="bg/Komplekti_za_tonirane_na_avtostykla_seriya_Marathon-c340"
                >
                  Комплекти за тониране на автостъкла Johnson Window Films - серия
                  Marathon
                </a>
                <input type="checkbox" name="ml-arrow-4" id="ml-arrow-4" />
                <label htmlFor="ml-arrow-4">arrow</label>
                <ul>
                  <li>
                    <a className="ml-174" href="bg/Acura-c385">
                      Acura
                    </a>
                  </li>
                  <li>
                    <a className="ml-175" href="bg/Alfa_Romeo-c386">
                      Alfa Romeo
                    </a>
                  </li>
                  <li>
                    <a className="ml-176" href="bg/Audi-c387">
                      Audi
                    </a>
                  </li>
                  <li>
                    <a className="ml-177" href="bg/BMW-c388">
                      BMW
                    </a>
                  </li>
                  <li>
                    <a className="ml-178" href="bg/Chevrolet-c389">
                      Chevrolet
                    </a>
                  </li>
                  <li>
                    <a className="ml-179" href="bg/Chrysler-c390">
                      Chrysler
                    </a>
                  </li>
                  <li>
                    <a className="ml-180" href="bg/Citroen-c391">
                      Citroen
                    </a>
                  </li>
                  <li>
                    <a className="ml-181" href="bg/Dacia-c392">
                      Dacia
                    </a>
                  </li>
                  <li>
                    <a className="ml-182" href="bg/Daewoo-c393">
                      Daewoo
                    </a>
                  </li>
                  <li>
                    <a className="ml-183" href="bg/Daihatsu-c394">
                      Daihatsu
                    </a>
                  </li>
                  <li>
                    <a className="ml-184" href="bg/Dodge-c395">
                      Dodge
                    </a>
                  </li>
                  <li>
                    <a className="ml-185" href="bg/Fiat-c396">
                      Fiat
                    </a>
                  </li>
                  <li>
                    <a className="ml-186" href="bg/Ford-c397">
                      Ford
                    </a>
                  </li>
                  <li>
                    <a className="ml-187" href="bg/Honda-c398">
                      Honda
                    </a>
                  </li>
                  <li>
                    <a className="ml-188" href="bg/Hummer-c399">
                      Hummer
                    </a>
                  </li>
                  <li>
                    <a className="ml-189" href="bg/Hyundai-c400">
                      Hyundai
                    </a>
                  </li>
                  <li>
                    <a className="ml-190" href="bg/Infiniti-c442">
                      Infiniti
                    </a>
                  </li>
                  <li>
                    <a className="ml-191" href="bg/Isuzu-c401">
                      Isuzu
                    </a>
                  </li>
                  <li>
                    <a className="ml-192" href="bg/Jaguar-c402">
                      Jaguar
                    </a>
                  </li>
                  <li>
                    <a className="ml-193" href="bg/Jeep-c403">
                      Jeep
                    </a>
                  </li>
                  <li>
                    <a className="ml-194" href="bg/Kia-c404">
                      Kia
                    </a>
                  </li>
                  <li>
                    <a className="ml-195" href="bg/Lancia-c405">
                      Lancia
                    </a>
                  </li>
                  <li>
                    <a className="ml-196" href="bg/Land_Rover-c406">
                      Land Rover
                    </a>
                  </li>
                  <li>
                    <a className="ml-197" href="bg/Lexus-c407">
                      Lexus
                    </a>
                  </li>
                  <li>
                    <a className="ml-198" href="bg/Mazda-c408">
                      Mazda
                    </a>
                  </li>
                  <li>
                    <a className="ml-199" href="bg/Mercedes_Benz-c409">
                      Mercedes Benz
                    </a>
                  </li>
                  <li>
                    <a className="ml-200" href="bg/MG-c410">
                      MG
                    </a>
                  </li>
                  <li>
                    <a className="ml-201" href="bg/Mini-c411">
                      Mini
                    </a>
                  </li>
                  <li>
                    <a className="ml-202" href="bg/Mitsubishi-c412">
                      Mitsubishi
                    </a>
                  </li>
                  <li>
                    <a className="ml-203" href="bg/Nissan-c413">
                      Nissan
                    </a>
                  </li>
                  <li>
                    <a className="ml-204" href="bg/Opel-c414">
                      Opel
                    </a>
                  </li>
                  <li>
                    <a className="ml-205" href="bg/Peugeot-c415">
                      Peugeot
                    </a>
                  </li>
                  <li>
                    <a className="ml-206" href="bg/Porsche-c416">
                      Porsche
                    </a>
                  </li>
                  <li>
                    <a className="ml-207" href="bg/Renault-c417">
                      Renault
                    </a>
                  </li>
                  <li>
                    <a className="ml-208" href="bg/Rover-c418">
                      Rover
                    </a>
                  </li>
                  <li>
                    <a className="ml-209" href="bg/Saab-c419">
                      Saab
                    </a>
                  </li>
                  <li>
                    <a className="ml-210" href="bg/Seat-c420">
                      Seat
                    </a>
                  </li>
                  <li>
                    <a className="ml-211" href="bg/Skoda-c421">
                      Skoda
                    </a>
                  </li>
                  <li>
                    <a className="ml-212" href="bg/Smart-c422">
                      Smart
                    </a>
                  </li>
                  <li>
                    <a className="ml-213" href="bg/SsangYong-c423">
                      SsangYong
                    </a>
                  </li>
                  <li>
                    <a className="ml-214" href="bg/Subaru-c424">
                      Subaru
                    </a>
                  </li>
                  <li>
                    <a className="ml-215" href="bg/Suzuki-c425">
                      Suzuki
                    </a>
                  </li>
                  <li>
                    <a className="ml-216" href="bg/Toyota-c426">
                      Toyota
                    </a>
                  </li>
                  <li>
                    <a className="ml-218" href="bg/Volvo-c428">
                      Volvo
                    </a>
                  </li>
                  <li>
                    <a className="ml-217" href="bg/VW-c427">
                      VW
                    </a>
                  </li>
                </ul>
              </li>
              <li className="has-children">
                <a
                  className="ml-219"
                  href="bg/Folio_za_tonirane_na_avtostykla-c429"
                >
                  Фолио за тониране на автостъкла
                </a>
                <input type="checkbox" name="ml-arrow-219" id="ml-arrow-219" />
                <label htmlFor="ml-arrow-219">arrow</label>
                <ul>
                  <li>
                    <a
                      className="ml-228"
                      href="bg/Johnson_Window_Films_seriya_Ray_Guard-c432"
                    >
                      Johnson Window Films - серия Ray Guard
                    </a>
                  </li>
                  <li>
                    <a
                      className="ml-229"
                      href="bg/Johnson_Window_Films_seriya_Marathon-c433"
                    >
                      Johnson Window Films - серия Marathon
                    </a>
                  </li>
                </ul>
              </li>
              <li className="">
                <a className="ml-230" href="bg/Instrumenti-c434">
                  Инструменти
                </a>
              </li>
            </ul>
          </li>
          <li className=" lvl-1">
            <a className="ml-221" href="bg/Instruktsii_za_montazh-c113">
              Инструкции за монтаж
            </a>
          </li>
          <li className=" lvl-1">
            <a className="ml-232" href="blog-1-232">
              Блог
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
          <li className=" lvl-1">
            <a className="ml-23" href="bg/Kak_da_porychame-c435">
              Как да поръчаме
            </a>
          </li>
          <li className=" lvl-1">
            <a className="ml-5" href="bg/Kontakti-c171">
              Контакти
            </a>
          </li>
        </ul>
      </nav>
      {/*end sb-slidebar*/}
    </>
  );
};