import React from 'react';
import { State } from '../App/App';
import logo from "../../assets/images/logo.png";

type Props = {
    currentPage: State
}

type ItemSize = {
    x: number,
    y: number,
    width: number,
    height: number
}

type PosState = {
    [key: string]: any,
    home: ItemSize,
    about: ItemSize,
    portfolio: ItemSize,
    contact: ItemSize
}

export const Nav = ({ currentPage }: Props) => {

    const [pos, setPos] = React.useState<PosState>({
        home: {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        about: {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        portfolio: {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        contact: {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
    });

    const [translateY, setTranslateY] = React.useState(0);
    const [scale, setScale] = React.useState({
        x: 1,
        y: 1
    });

    const navRef = React.useRef<HTMLElement>(null);
    const dotRef = React.useRef<HTMLSpanElement>(null);

    React.useEffect(() => {

        const findItems = (nav: HTMLElement) => {
            const keys = Object.keys(pos).filter(key => key === "about" || key === "portfolio" || key === "contact") //returns the "home", "about" and "portfolio" keys
            const children = Array.from(Array.from(nav.children)
                .filter(child => child.classList.contains("list"))[0].children); //returns the li items
            const dot = dotRef.current?.getBoundingClientRect(); //returns the rect of the dot span
            children //for each children, set the pos state with their respective rect and use the keys to fill the correct object
                .forEach((child, index) => {
                    const rect = child.getBoundingClientRect();
                    if (pos[keys[index]].x <= 0) {
                        setPos(prev => Object.assign({}, prev, {
                            [keys[index]]: {
                                x: rect.x,
                                y: rect.y,
                                width: rect.width,
                                height: rect.height
                        } }))
                    }
                });
            if (pos.home.x <= 0) {
                setPos(prev => Object.assign({}, prev, { home: { x: dot?.x, y: dot?.y, width: dot?.width, height: dot?.height } }));
            }
        }

        if (navRef.current) {
            findItems(navRef.current);
        }
    }, [pos]);

    React.useEffect(() => {
        for (let i in currentPage) {
            if (currentPage[i]) {
                setTranslateY(pos[i].y - pos.home.y);
            }
        }
    }, [currentPage, pos]);

    const goToItemPos = (key: string) => {
        setTranslateY(pos[key].y - pos.home.y);
    };

    const handleHover = (key: string) => {
        goToItemPos(key);
    }

    return (
        <nav ref={navRef} className="nav-desktop">
            <div className="top"></div>
            <div className="logo">
                <div className="container">
                    <a href="#home">
                        <h1 onMouseEnter={() => goToItemPos("home")}>
                            MDW
                            <span ref={dotRef} style={{
                                transform: `translateY(${translateY}px) scaleX(${scale.x}) scaleY(${scale.y})`
                            }} className="dot"></span>
                        </h1>
                    </a>
                </div>
            </div>
            <ul className="list">
                <li onMouseEnter={() => handleHover("about")} className="item"><a href="#about" className="link">À propos</a></li>
                <li onMouseEnter={() => handleHover("portfolio")} className="item"><a href="#portfolio" className="link">Portfolio</a></li>
                <li onMouseEnter={() => handleHover("contact")} className="item"><a href="#contact" className="link">Contact</a></li>
            </ul>
        </nav>
    );
}