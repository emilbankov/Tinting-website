import { useState, useEffect } from "react";

declare global {
    interface Window {
        Calendly?: any;
    }
}

export default function Booking() {
    const [showCalendly, setShowCalendly] = useState(false);
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const [selectedHost, setSelectedHost] = useState("emil"); // default

    // Load Calendly script once
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        script.onload = () => setScriptLoaded(true);
        document.body.appendChild(script);

        return () => {
            if (document.body.contains(script)) document.body.removeChild(script);
        };
    }, []);

    // Initialize widget when modal opens and script is loaded
    useEffect(() => {
        if (showCalendly && scriptLoaded && window.Calendly) {
            const url =
                selectedHost === "emil"
                    ? "https://calendly.com/emilbankov17d/car-tinting-stoqn"
                    : "https://calendly.com/emo7008/car-tinting-martin";

            window.Calendly.initInlineWidget({
                url,
                parentElement: document.getElementById("calendly-container"),
                prefill: {},
                utm: {},
            });
        }
    }, [showCalendly, scriptLoaded, selectedHost]);

    return (
        <div className="booking-page">
            {/* HEADER */}
            {/* <div className="booking-header">
                <div className="wrapper clearfloat">
                    <h1>Запазете час за фолиране</h1>
                    <p>
                        Изберете удобен за вас час и дата за професионално фолиране на
                        вашето превозно средство
                    </p>
                </div>
            </div> */}

            {/* CONTENT */}
            <div className="booking-content">
                <div className="wrapper">

                    <div className="booking-cards">
                        <div className="booking-single">
                            <div className="calendly-card">
                                <div className="card-header">
                                    <h3>Запази час - Стоян</h3>
                                    <img
                                        src="/images/stoyan.png"
                                        alt="Стоян"
                                        className="owner-photo"
                                    />
                                </div>
                                <div className="card-content">
                                    <button
                                        className="btn-calendly"
                                        onClick={() => { setSelectedHost("emil"); setShowCalendly(true); }}
                                    >
                                        <i className="fa-solid fa-calendar"></i> Отвори календар
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="booking-single">
                            <div className="calendly-card">
                                <div className="card-header">
                                    <h3>Запази час - Мартин</h3>
                                    <img
                                        src="/images/martin.png"
                                        alt="Мартин"
                                        className="owner-photo"
                                    />
                                </div>
                                <div className="card-content">
                                    <button
                                        className="btn-calendly"
                                        onClick={() => { setSelectedHost("martin"); setShowCalendly(true); }}
                                    >
                                        <i className="fa-solid fa-calendar"></i> Отвори календар
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Booking Info Steps */}
                    <div className="booking-info">
                        <h3>Какво се случва след заявката?</h3>
                        <div className="info-steps">
                            <div className="step">
                                <div className="step-number">1</div>
                                <div className="step-content">
                                    <h4>Автоматично потвърждение</h4>
                                    <p>Ще получите имейл с потвърждение веднага след резервация</p>
                                </div>
                            </div>
                            <div className="step">
                                <div className="step-number">2</div>
                                <div className="step-content">
                                    <h4>Напомняне</h4>
                                    <p>Ще получите напомняне по имейл преди часа</p>
                                </div>
                            </div>
                            <div className="step">
                                <div className="step-number">3</div>
                                <div className="step-content">
                                    <h4>Изпълнение на услугата</h4>
                                    <p>Фолиране на вашия автомобил на уговорения ден и час</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CALENDLY MODAL */}
            {showCalendly && (
                <div className="calendly-modal">
                    <div
                        className="modal-overlay"
                        onClick={() => setShowCalendly(false)}
                    ></div>

                    <div className="modal-content">
                        <div className="modal-header">
                            <h3>Изберете час за фолиране</h3>
                            <button
                                className="modal-close"
                                onClick={() => setShowCalendly(false)}
                            >
                                <i className="fa-solid fa-times"></i>
                            </button>
                        </div>

                        <div className="modal-body">
                            <div
                                id="calendly-container"
                                style={{ minWidth: "320px", height: "700px" }}
                            ></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}