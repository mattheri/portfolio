import React from 'react';
import { Logo } from '../Logo/Logo';
import { Project } from './Project';
import animeLogo from "../../assets/images/Icons/anime-logo.svg";
import css3 from "../../assets/images/Icons/css3.svg";
import html5 from "../../assets/images/Icons/html5.svg";
import javascript from "../../assets/images/Icons/javascript.svg";
import mongodb from "../../assets/images/Icons/mongodb.svg";
import mysql from "../../assets/images/Icons/mysql.svg";
import php from "../../assets/images/Icons/php.svg";
import nodejs from "../../assets/images/Icons/node-js.svg";
import react from "../../assets/images/Icons/react.svg";
import recoil from "../../assets/images/Icons/recoil.png";
import sass from "../../assets/images/Icons/sass.svg";
import typescript from "../../assets/images/Icons/typescript.svg";
import bootstrap from "../../assets/images/Icons/bootstrap.svg";
import fna from "../../assets/images/fna.png";
import examenIW from "../../assets/images/examen-IW.png";
import solarsystem from "../../assets/images/solarsystem.png";

interface IStack {
    [name: string]: JSX.Element;
}

export interface IProject {
    title: string,
    img: string,
    description: string,
    links: {
        github: string,
        website: string
    },
    stack: IStack
}

export const Portfolio = () => {

    const projects: IProject[] = [
        {
            title: "Financial Needs Analysis",
            img: fna,
            description: "Mon projet final de programmation web 2. Il contient plusieurs volets, dont: un moteur de calcul, une gestion de base de données en MongoDB avec gestion d'utilisateurs et le front-end avec gestion d'un état global et est une progressive web app. L'application est hébergée sur Vercel et utilise les Serverless Functions de Vercel",
            links: {
                github: "https://github.com/mattheri/fna",
                website: "https://fna.vercel.app/login"
            },
            stack: {
                typescript: <Logo alt="Typescript" link="https://www.typescriptlang.org/" src={typescript} />,
                react: <Logo alt="React" link="https://reactjs.org/" src={react} />,
                recoil: <Logo alt="Recoil" link="https://recoiljs.org/" src={recoil} />,
                node: <Logo alt="NodeJs" link="https://nodejs.org/en/" src={nodejs} />,
                mongodb: <Logo alt="MongoDB" link="https://www.mongodb.com/" src={mongodb} />,
                sass: <Logo alt="Sass" link="https://sass-lang.com/" src={sass} />,
                anime: <Logo alt="Anime.js" link="https://animejs.com/" src={animeLogo} />
            },
        },
        {
            title: "Examen MySQL, PHP",
            img: examenIW,
            description: "Mon projet final d'infrastructure web. Le site est fait avec PHP et fait des requêtes en MySQL. Il y a une gestion d'utilisateurs en utilisant le module d'encryption de PHP et utilise Bootstrap 4 ainsi qu'un thème Bootstrap 4. Le site est hébergé sur namecheap.com.",
            links: {
                github: "https://github.com/mattheri/AEC_Front_End/tree/master/Infrastructure%20Web/projet_final",
                website: "https://mattheri.me/"
            },
            stack: {
                php: <Logo alt="PHP" link="https://www.php.net/" src={php} />,
                html5: <Logo alt="HTML5" link="https://dev.w3.org/html5/html-author/" src={html5} />,
                css3: <Logo alt="CSS3" link="https://www.w3.org/Style/CSS/specs.en.html" src={css3} />,
                mysql: <Logo alt="MySQL" link="https://www.mysql.com/" src={mysql} />,
                bootstrap: <Logo alt="Bootstrap" link="https://getbootstrap.com/" src={bootstrap} />
            }
        },
        {
            title: "Examen Bootstrap, CSS",
            img: solarsystem,
            description: "Mon projet final en intégration web. Le site est hébergé sur Vercel. Il utilise HTML5, CSS, Bootstrap 4 ainsi que Javascript. J'ai utilisé la librairie Three.js afin de créer un système solaire 3D.",
            links: {
                github: "https://github.com/mattheri/solarsystem",
                website: "https://solarsystem-gamma.vercel.app/"
            },
            stack: {
                html5: <Logo alt="HTML5" link="https://dev.w3.org/html5/html-author/" src={html5} />,
                css3: <Logo alt="CSS3" link="https://www.w3.org/Style/CSS/specs.en.html" src={css3} />,
                bootstrap: <Logo alt="Bootstrap" link="https://getbootstrap.com/" src={bootstrap} />,
                javascript: <Logo alt="Javascript" link="https://www.javascript.com/" src={javascript} />
            }
        }
    ];

    const [transform, setTransform] = React.useState({
        curr: 0,
        width: 0,
        dir: true
    });

    const handleGetWidth = (val: number) => setTransform(prev => Object.assign({}, prev, { width: val }));
    const handleNext = () => {
        if (transform.curr === 0) setTransform(prev => Object.assign({}, prev, { curr: 1, dir: true }));
        if (transform.curr === 1) setTransform(prev => Object.assign({}, prev, { curr: 2, dir: true }));
    };
    const handlePrev = () => {
        if (transform.curr === 2) setTransform(prev => Object.assign({}, prev, { curr: 1, dir: false }));
        if (transform.curr === 1) setTransform(prev => Object.assign({}, prev, { curr: 0, dir: false }));
    };

    return (
        <section className="portfolio-section">
            <button disabled={transform.curr === projects.length - 1} className="next carousel-control" onClick={handleNext}>&gt;</button>
            <button disabled={transform.curr === 0} className="prev carousel-control" onClick={handlePrev}>&lt;</button>
            <div className="carousel-container">
                <div style={{
                    transform: `translateX(-${transform.dir ? (transform.curr * transform.width) : (transform.width * (transform.curr + 1)) - transform.width}px)`
                }} className="carousel-track">
                    {projects.map((p, i) => <Project key={i} projectDetails={p} index={i} getWidth={handleGetWidth} />)}
                </div>
            </div>
        </section>
    );
}