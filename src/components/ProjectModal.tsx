import ReactDOM from "react-dom";
import "../App.css";
import React from "react";

interface IProjectModalProps {
    closeEvent: () => void,
    isOpen: boolean,
    children?: React.ReactNode
}

const ProjectModal: React.FC<IProjectModalProps> = ({closeEvent, isOpen, children}) => {
    if (!isOpen)
        return null;

    return ReactDOM.createPortal(
        <div className={"project-modal fade-in"} onClick={closeEvent}>
            <section className={"project-modal-main"}>
                {children}
            </section>
        </div>,
        document.body
    );
}

export default ProjectModal;