import React from 'react';

type Props = {
    projectDetails: {
        text: string,
        left: number
    },
    getWidth: (width: number) => void;
}

export const Project = ({ projectDetails, getWidth }: Props) => {

    const projectRef = React.useRef<HTMLDivElement>(null);
    const [left, setLeft] = React.useState(0);

    React.useEffect(() => {
        if (projectRef.current) {
            const pc = projectRef.current;
            const rect = pc.getBoundingClientRect();

            setLeft(rect.width);
        }
    }, [projectRef]);

    const handleReturnWidth = () => {
        return getWidth(left);
    }

    React.useEffect(() => {

        handleReturnWidth();
    }, [left]);

    return (
        <div ref={projectRef} style={{ left: `${left * projectDetails.left}px` }} className="project">
            <div className="project-image"></div>
            <div className="project-description-container">
                <div className="project-title">
                    <h1>Financial Needs Analysis</h1>
                </div>
                <p className="project-description">
                    {projectDetails.text}
                </p>
                <div className="project-stack"></div>
                <div className="project-links">
                    <a href="#">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="#">
                        <i className="fas fa-external-link-alt"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}