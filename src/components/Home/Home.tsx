import React from 'react';

export const Home = () => {
    return (
        <section className="home-section">
            <div className="top"></div>
            <div className="hero">
                <div className="hero-title">
                    <div className="title">
                        <h1>Mathieu</h1>
                    </div>
                    <div className="title">
                        <h1>Développement</h1>
                    </div>
                    <div className="title">
                        <h1>Web<span className="dot"></span></h1>
                    </div>
                </div>
            </div>
            <div className="cta">
                <p>
                    Étudiant à l'AEC au cégep de Trois-Rivières, je suis passionné par la programmation web. Au cours de mon apprentissage
                     j'ai pu étudier différents frameworks comme React, Vue et Angular ainsi que les languages Javascript, Typescript, PHP et MySQL.
                    D'ici la fin de ma formation, j'aurai également vu l'approche de développement piloté par tests avec des librairies comme Jest et Mocha.
                </p>
            </div>
        </section>
    );
}