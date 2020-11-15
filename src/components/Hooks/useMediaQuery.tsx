import React from 'react';

export const useMediqQuery = (breakpoint: number) => {

    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const [isMobile, setIsMobile] = React.useState(mediaQuery.matches);

    React.useEffect(() => {
        const handleMediaQuery = () => mediaQuery.matches ? setIsMobile(true) : setIsMobile(false);
        window.addEventListener("resize", handleMediaQuery);
        return () => window.removeEventListener("resize", handleMediaQuery);
    }, [isMobile, mediaQuery.matches])

    return isMobile;
}