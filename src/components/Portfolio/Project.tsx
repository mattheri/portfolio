import React from 'react';
import { IProject } from '../Portfolio/Portfolio';
import github from "../../assets/images/Icons/github.svg";
import link from "../../assets/images/Icons/link.svg";

type Props = {
    projectDetails: IProject,
    index: number,
    getWidth: (width: number) => void;
}

export const Project = ({ projectDetails, index, getWidth }: Props) => {

    const projectRef = React.useRef<HTMLDivElement>(null);
    const [left, setLeft] = React.useState(0);
    const { title, img, description, links, stack } = projectDetails;

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
        <div ref={projectRef} style={{ left: `${left * index}px` }} className="project">
            <div className="project-image" style={{
                backgroundImage: `url(${img})`
            }}></div>
            <div className="project-description-container">
                <div className="container">
                    <div className="project-title">
                        <h1>{title}</h1>
                    </div>
                    <p className="project-description">
                        {description}
                    </p>
                    <div className="project-stack">
                        {Object.entries(stack).map(([key, value]) => React.cloneElement(value, { key: key }))}
                    </div>
                    <div className="project-links">
                        <a href={links.github} target="_blank">
                            <img src={github} alt="Github" className="github"/>
                        </a>
                        <a href={links.website} target="_blank">
                            <img src={link} alt="Link" className="link"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}