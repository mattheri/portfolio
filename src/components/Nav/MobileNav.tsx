import React from 'react';
import { NavButton } from './NavButton';

export const MobileNav = () => {

    const [show, setShow] = React.useState(false);
    const [classnames, setClassnames] = React.useState(["nav-mobile"]);

    const handleShow = () => setShow(!show);

    React.useEffect(() => {
        if (show && !classnames.includes("open")) setClassnames(prev => prev.concat(["open"]));
        if (!show && classnames.length > 1) setClassnames(prev => prev.filter(className => className === "nav-mobile"));
    }, [show, classnames])

    return (
        <nav onClick={handleShow} className={classnames.join(" ")}>
            <NavButton show={show} />
            <ul className="list">
                <li className="item"><a href="#home" className="link">Accueil</a></li>
                <li className="item"><a href="#about" className="link">À propos</a></li>
                <li className="item"><a href="#portfolio" className="link">Portfolio</a></li>
                <li className="item"><a href="#contact" className="link">Contact</a></li>
            </ul>
        </nav>
    );
}