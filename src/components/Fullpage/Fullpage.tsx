import React from 'react';
import fullpage, { options } from "fullpage.js";

type Props = {
    children: React.ReactNode,
    licenseKey: string,
    options?: Exclude<options, "licenseKey">
}
export const Fullpage = ({ children, licenseKey, options }: Props) => {

    const fpRef = React.useRef<HTMLElement>(null);
    const [initialized, setInitialized] = React.useState(false);

    React.useEffect(() => {
        if (fpRef.current && !initialized) {
            const fp = fpRef.current;

            fullpage(fp, {
                licenseKey: licenseKey,
                ...options
            });

            setInitialized(true);
        }
    }, [fpRef, licenseKey, options]);

    return (
        <section ref={fpRef} id="fullpage">
            {children}
        </section>
    );
}