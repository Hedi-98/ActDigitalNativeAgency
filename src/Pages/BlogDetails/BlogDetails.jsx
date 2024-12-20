import React from "react";


import PageHeader from "../../Components/Shared/PageHeader/PageHeader";

import coverBlog from "../../assets/img/blog/img.png";
import {ShareSocial} from "react-share-social";
import {LinkedinIcon, LinkedinShareButton} from "react-share";

const BlogDetails = () => {

    return (
        <>
            <PageHeader
                heading={"Révolution numérique: l’IA comme moteur de la nouvelle révolution industrielle"}
            />
            <section className="blog__bsection pb-120">
                <div className="container">
                    <div className="row g-4">
                        <div className="blog__bleft__wrapper">
                            <div
                                className="blog__bitem"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div className="thumb">
                                    <img src={coverBlog} alt="img"/>
                                </div>
                                <div className="content__two">
                                    <div
                                        className="text__box mb-30"
                                        data-aos="fade-up"
                                        data-aos-duration="1400"
                                    >
                      <span className="text__de text-black">
                        Publié le 20 décembre 2024
                      </span>
                                        <p className="fz-16 pra ttext__one">
                                            Le secteur de la publicité digitale traverse une mutation profonde, portée
                                            par l’intégration de l’intelligence artificielle (IA), des innovations
                                            technologiques et de métriques plus fines. À cela s’ajoute la disparition
                                            progressive des cookies tiers, qui redéfinit les règles du jeu.
                                            <br/>
                                            <br/>
                                            Ce changement vise non seulement à redéfinir la manière dont les marques
                                            créent leurs campagnes, mesurent l’efficacité et optimisent leurs
                                            investissements, mais aussi à répondre à des préoccupations plus larges,
                                            telles que la durabilité et l’impact environnemental.
                                            <br/>
                                            <br/>
                                            Voici un aperçu des tendances actuelles;
                                        </p>
                                        <h5 className="base mb-30">
                                            L’impact du Cookieless sur les stratégies publicitaires
                                        </h5>
                                        <p className="fz-16 pra ttext__one">
                                            Avec la fin progressive des cookies tiers, les entreprises doivent repenser
                                            leurs méthodes de collecte de données. Désormais, l’accent est mis sur les
                                            données propriétaires et des outils analytiques sophistiqués pour continuer
                                            à diffuser des publicités pertinentes.
                                            <br/>
                                            <br/>
                                            L’IA joue un rôle central dans cette transition, en aidant à analyser des
                                            données contextuelles et comportementales directement issues des
                                            interactions utilisateurs, tout en respectant les réglementations.
                                        </p>
                                        <h5 className="base mb-30">
                                            L’IA et le Marketing Mix Modeling : une combinaison gagnante
                                        </h5>
                                        <p className="fz-16 pra ttext__one">
                                            Face à un écosystème en pleine évolution, le Marketing Mix Modeling (MMM)
                                            s’impose comme une méthode clé pour évaluer les performances des campagnes.
                                            <br/>
                                            <br/>
                                            Ce modèle statistique analyse l’impact de chaque canal publicitaire
                                            (TV, digital, radio, etc.) sur les ventes ou d’autres indicateurs
                                            stratégiques. Il permet ainsi aux marques d’optimiser leurs investissements
                                            en adoptant une approche globale et précise.
                                        </p>
                                        <h5 className="base mb-30">
                                            L’Attention : Un Nouvel Indicateur Clé de Performance
                                        </h5>
                                        <p className="fz-16 pra ttext__one">
                                            Avec la fin progressive des cookies tiers, les entreprises doivent repenser
                                            leurs méthodes de collecte de données. Désormais, l’accent est mis sur les
                                            données propriétaires et des outils analytiques sophistiqués pour continuer
                                            à diffuser des publicités pertinentes.
                                            <br/>
                                            <br/>
                                            L’IA joue un rôle central dans cette transition, en aidant à analyser des
                                            données contextuelles et comportementales directement issues des
                                            interactions utilisateurs, tout en respectant les réglementations.
                                            <br/>
                                            <br/>
                                            Le Coût Par Seconde d’Attention Active (CPSA) émerge comme un nouveau KPI
                                            de référence. Cet indicateur mesure le coût nécessaire pour capter
                                            l’attention active d’un utilisateur pendant un temps donné, offrant une
                                            perspective plus qualitative.
                                        </p>
                                    </div>
                                    <div className="quite__box text__box mb-30"
                                         data-aos="fade-up"
                                         data-aos-duration="1600">
                                        <h3 className="white mb-30">
                                            Priorités pour 2025
                                        </h3>
                                        <div
                                            className="text__box mb-30">
                                            <ul className="challenge__list">
                                                <li>
                                                    <span className="fw-bold text-white">
                                                        Gestion des données post-cookie
                                                    </span>
                                                    Innover dans la collecte et la
                                                    gestion des données tout en respectant les réglementations.
                                                </li>
                                                <li>
                                                    <span className="fw-bold text-white">
                                                        Optimisation via l’IA
                                                    </span>
                                                    Exploiter l’intelligence artificielle pour
                                                    améliorer le retour sur investissement publicitaire.
                                                </li>
                                                <li>
                                                    <span className="fw-bold text-white">
                                                    Partenariats stratégiques
                                                    </span>
                                                    Travailler avec des agences spécialisées
                                                    et des plateformes technologiques pour rester à la pointe.
                                                </li>
                                                <li>
                                                    <span className="fw-bold text-white">
                                                    Responsabilité et communication ESG
                                                    </span>
                                                    Promouvoir des pratiques
                                                    éthiques et durables sans tomber dans le piège du greenwashing.
                                                </li>
                                                <li>
                                                    <span className="fw-bold text-white">
                                                    Focus sur l’Attention
                                                    </span>
                                                    Intégrer le CPSA dans les outils de mesure
                                                    pour mieux comprendre l’engagement des audiences.,
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="fz-16 pra ttext__one mb__cus60">
                                        Les marques qui sauront s’approprier ces nouveaux leviers tout en adoptant une
                                        approche responsable seront celles qui pilotent cette révolution numérique.
                                    </p>

                                    <div className="float-end">
                                        <LinkedinShareButton url="https://www.actdna.com/#/blog">
                                            <LinkedinIcon/>
                                        </LinkedinShareButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogDetails;
