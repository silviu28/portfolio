import "../App.css";
import React from "react";

interface IProjectContainerProps {
    children?: React.ReactNode,
    onClick?: () => void
}

const ProjectContainer: React.FC<IProjectContainerProps> = ({children, onClick}) => {
    return (
        <div className="project-container fade-in" onClick={onClick}>
            {children}
        </div>
    );
}

export default ProjectContainer;