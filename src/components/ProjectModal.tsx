import "../App.css";
import React from "react";

interface IProjectModalProps {
    closeEvent: React.MouseEventHandler<HTMLButtonElement>,
    isOpen: boolean,
    children: React.ReactNode
}

const ProjectModal: React.FC<IProjectModalProps> = ({closeEvent, isOpen, children}) => {
        let currentClass: string;
        if (isOpen)
            currentClass = "modal block";
        else
            currentClass = "modal none";
    return (
        <div className={currentClass}>
            <section className={"project-modal-main"}>
                {children}
            </section>
            <button onClick={closeEvent}>Close</button>
        </div>
    );
}

export default ProjectModal;