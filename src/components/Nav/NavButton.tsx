import React from 'react';
import anime from "animejs";

type Props = { show: boolean };

export const NavButton = ({ show }: Props) => {
    const buttonsClosed = [
        { d: "M6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3Z" },
        { d: "M6 11C6 12.6569 4.65685 14 3 14C1.34315 14 0 12.6569 0 11C0 9.34315 1.34315 8 3 8C4.65685 8 6 9.34315 6 11Z" },
        { d: "M6 11C6 12.6569 4.65685 14 3 14C1.34315 14 0 12.6569 0 11C0 9.34315 1.34315 8 3 8C4.65685 8 6 9.34315 6 11Z" },
        { d: "M6 11C6 12.6569 4.65685 14 3 14C1.34315 14 0 12.6569 0 11C0 9.34315 1.34315 8 3 8C4.65685 8 6 9.34315 6 11Z" },
        { d: "M6 19C6 20.6569 4.65685 22 3 22C1.34315 22 0 20.6569 0 19C0 17.3431 1.34315 16 3 16C4.65685 16 6 17.3431 6 19Z" }
    ];

    const buttonDeployed = [
        { d: "M6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3Z" },
        { d: "M12 9C12 10.6569 10.6569 12 9 12C7.34315 12 6 10.6569 6 9C6 7.34315 7.34315 6 9 6C10.6569 6 12 7.34315 12 9Z" },
        { d: "M18 15C18 16.6569 16.6569 18 15 18C13.3431 18 12 16.6569 12 15C12 13.3431 13.3431 12 15 12C16.6569 12 18 13.3431 18 15Z" },
        { d: "M18 3C18 4.65685 16.6569 6 15 6C13.3431 6 12 4.65685 12 3C12 1.34315 13.3431 0 15 0C16.6569 0 18 1.34315 18 3Z" },
        { d: "M6 15C6 16.6569 4.65685 18 3 18C1.34315 18 0 16.6569 0 15C0 13.3431 1.34315 12 3 12C4.65685 12 6 13.3431 6 15Z" }
    ]

    const svgRef = React.useRef<SVGSVGElement>(null);

    React.useEffect(() => {
        if (svgRef.current) {
            const svg = svgRef.current;
            Array.from(svg.children).forEach((point, i) => {
                if (show) {
                    anime({
                        targets: point,
                        d: buttonDeployed[i].d,
                        easing: 'easeInOutExpo'
                    })
                } else {
                    anime({
                        targets: point,
                        d: buttonsClosed[i].d,
                        easing: 'easeInOutExpo'
                    })
                }
            })
        }
    }, [show, svgRef]);

    return (
        <div className="menu-button-container">
            <svg className="menu-button" ref={svgRef} width="44" height="44" viewBox="0 0 20 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3Z" fill="black"/>
                <path d="M6 11C6 12.6569 4.65685 14 3 14C1.34315 14 0 12.6569 0 11C0 9.34315 1.34315 8 3 8C4.65685 8 6 9.34315 6 11Z" fill="black"/>
                <path d="M6 11C6 12.6569 4.65685 14 3 14C1.34315 14 0 12.6569 0 11C0 9.34315 1.34315 8 3 8C4.65685 8 6 9.34315 6 11Z" fill="black"/>
                <path d="M6 11C6 12.6569 4.65685 14 3 14C1.34315 14 0 12.6569 0 11C0 9.34315 1.34315 8 3 8C4.65685 8 6 9.34315 6 11Z" fill="black"/>
                <path d="M6 19C6 20.6569 4.65685 22 3 22C1.34315 22 0 20.6569 0 19C0 17.3431 1.34315 16 3 16C4.65685 16 6 17.3431 6 19Z" fill="black"/>
            </svg>
        </div>
    );
}