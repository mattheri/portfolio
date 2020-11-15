import React from 'react';

type Props = {
    link: string,
    src: string,
    alt: string
}

export const Logo = ({ link, src, alt }: Props) => {
    return (
        <a className="logo-link" href={link} target="_blank">
            <img src={src} alt={alt} />
        </a>
    );
}