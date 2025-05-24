import "../App.css";
import React from "react";

interface IProjectContainerProps {
    children: React.ReactNode;
}

const ProjectContainer: React.FC<IProjectContainerProps> = ({children}) => {
    return (
        <div className="project-container fade-in">
            {children}
        </div>
    );
}

export default ProjectContainer;