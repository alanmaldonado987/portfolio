import "../../styles/services/Services.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Services = () => {

    const [ toggleState, setToggleState ] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    const { t } = useTranslation("global");

  return (
    <div className="section services section" id="services">
        <h2 className="section__title">
            {t("services.services__title")}
        </h2>

        <span className="section__subtitle"> {t("services.services__subtitle")} </span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-monitor services__icon"></i>
                    <h3 className="services__title">Diseños Web</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1) }>
                    Ver mas <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal" }>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0) }></i>

                        <h3 className="services__modal-title">
                            Diseños Web
                        </h3>
                        <p className="services__modal-description">
                            Creación de interfaces visuales atractivas y efectivas para apliaciones web, destacando la identidad de la marca y mejorando la experiencia del usuario.
                        </p>

                        <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Servicio1
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Servicio2
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Servicio3
                                    </p>
                                </li>
                            </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-react services__icon"></i>
                    <h3 className="services__title">Frontend</h3>
                </div>

                <span className="services__button"  onClick={() => toggleTab(2) }>
                    Ver mas <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal" }>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0) }></i>

                        <h3 className="services__modal-title">
                            Frontend
                        </h3>
                        <p className="services__modal-description">
                            Transformación de diseños creativos en experiencias web interactivas y eficientes, asegurando una navegación óptima en todos los dispositivos.
                        </p>

                        <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Servicio1
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Servicio2
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Servicio3
                                    </p>
                                </li>
                            </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-database services__icon"></i>
                    <h3 className="services__title">Backend</h3>
                </div>

                <span className="services__button"  onClick={() => toggleTab(3) }>
                    Ver mas <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal" }>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0) }></i>

                        <h3 className="services__modal-title">
                            Backend
                        </h3>
                        <p className="services__modal-description">
                            Desarrollo e implementación de APIs eficientes, gestión de bases de datos, ofreciendo soluciones web completas y técnicamente sólidas.
                        </p>

                        <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Servicio1
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Servicio2
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Servicio3
                                    </p>
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services