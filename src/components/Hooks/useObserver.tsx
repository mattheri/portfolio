import React from 'react';

export type IntersectionObserverOptions = {
    root?: HTMLElement,
    rootMargin?: string,
    threshold?: number | number[]
};

export type IntersectionObserverCallback = (entry: IntersectionObserverEntry) => void;

export const useObserver = (
    ref: React.RefObject<HTMLElement>,
    callback?: IntersectionObserverCallback,
    observeChildren?: boolean,
    options?: IntersectionObserverOptions) => {
    
    const observer = new IntersectionObserver(function (entries, observer) {
        console.log(entries);
        entries.forEach(entry => {
            if (callback) {
                callback.bind(observer)(entry);
            };
        });
    }, { ...options });

    
    const [childrenRefs, setChildrenRefs] = React.useState<HTMLCollection>();
    const children = React.useMemo(() => childrenRefs, [childrenRefs]);

    React.useEffect(() => {
        if (observeChildren) {
            setChildrenRefs(ref.current?.children);
        }
    }, [ref])

    React.useEffect(() => { 
        if (ref.current) {
            const observed = ref.current;

            if (observeChildren && children) {
                Array.from(children).forEach(child => observer.observe(child));
            } else {
                observer.observe(observed);
            }
        }
    }, [ref, callback, options]);

}