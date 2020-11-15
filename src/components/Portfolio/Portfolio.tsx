import React from 'react';
import { Project } from './Project';

export const Portfolio = () => {

    const projects = [
        "PROJET 1",
        "PROJET 2",
        "PROJET 3",
    ];

    const [transform, setTransform] = React.useState({
        curr: 0,
        width: 0,
        dir: true
    });

    const handleGetWidth = (val: number) => setTransform(prev => Object.assign({}, prev, { width: val }));
    const handleNext = () => setTransform(prev => Object.assign({}, prev, { curr: transform.curr === 0 ? 1 : transform.curr++, dir: true }));
    const handlePrev = () => setTransform(prev => Object.assign({}, prev, { curr: transform.curr--, dir: false }));

    return (
        <section className="portfolio-section">
            <button disabled={transform.curr === projects.length - 1} className="next carousel-control" onClick={handleNext}>&gt;</button>
            <button disabled={transform.curr === 0} className="prev carousel-control" onClick={handlePrev}>&lt;</button>
            <div className="carousel-container">
                <div style={{
                    transform: `translateX(-${transform.dir ? (transform.curr * transform.width) : (transform.width * (transform.curr + 1)) - transform.width}px)`
                }} className="carousel-track">
                    {projects.map((p, i) => <Project key={i} projectDetails={{
                        text: p,
                        left: i
                    }} getWidth={handleGetWidth} />)}
                </div>
            </div>
        </section>
    );
}