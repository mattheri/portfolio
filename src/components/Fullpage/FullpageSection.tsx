import React from 'react';

type Props = {
    children: React.ReactNode,
    className?: string,
    id?: string
}

export const FullpageSection = ({ children, className, id }: Props) => {

    const classNames = React.useMemo(() => ["section", ...[className]], []);

    return (
        <section className={classNames.join(" ")}>
            {children}
        </section>
    );
}