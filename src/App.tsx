import './App.css'
import ProjectContainer from "./components/ProjectContainer.tsx";
import LanguageStats from "./components/LanguageStats.tsx";
import ProjectModal from "./components/ProjectModal.tsx";
import React, {useState} from "react";

function App() {
    const [modalOpen, setIsOpen] = React.useState(false);
    const [modalContent, setModalContent] = useState<React.ReactNode>(null);

    const closeModal = () => setIsOpen(false);
    const openModal1: () => void = () => {
        setModalContent(
            <p>Restaurant</p>
        );
        setIsOpen(true);
    };
    const openModal2: () => void = () => {
        setModalContent(
            <p>Top-down shooter</p>
        );
        setIsOpen(true);
    };
    const openModal3: () => void = () => {
        setModalContent(
            <p>Programmer calculator</p>
        );
        setIsOpen(true);
    };
    const openModal4: () => void = () => {
        setModalContent(
            <p>Card matching game</p>
        );
        setIsOpen(true);
    };
    const openModal5: () => void = () => {
        setModalContent(
            <p>Companion app</p>
        );
        setIsOpen(true);
    };

    return (<>
        <h2 className={"fade-in"}>Silviu</h2>
        <LanguageStats/>

        <ProjectModal isOpen={modalOpen} closeEvent={closeModal}>
            {modalContent}
        </ProjectModal>

        <div className="grid-panel" id="main-view">
            <ProjectContainer onClick={openModal1}>
                <img src={"/restaurant2.png"}/>
                <h1>Restaurant Catalog</h1>
                <p>A Windows app to see menus and items of a restaurant and place orders. Features an employee
                    control panel for users with required privileges.</p>
                <h2>.NET, C#, WPF, JSON, MSSQL</h2>
            </ProjectContainer>

            <ProjectContainer onClick={openModal2}>
                <img src={"/shooter1.png"}/>
                <h1>Top-down Shooter</h1>
                <p>A native game based on NES' Battle City. Features a session browser to join multiplayer and
                    leaderboard for progression.</p>
                <h2>C++, Qt, SQLite, HTTP</h2>
            </ProjectContainer>

            <ProjectContainer onClick={openModal3}>
                <img src={"/calc.png"}/>
                <h1>Programmer Calculator</h1>
                <p>An advanced calculator app that features decimal computations for bases 2-16 with 8-digit
                    precision.</p>
                <h2>.NET, C#, WPF</h2>
            </ProjectContainer>

            <ProjectContainer onClick={openModal4}>
                <img src={"/cards.png"}/>
                <h1>Card Matching Game</h1>
                <p>Extensible card matching game with the ability to save prior game session.</p>
                <h2>.NET, C#, WPF, JSON</h2>
            </ProjectContainer>

            <ProjectContainer onClick={openModal5}>
                <img src={"/controller.png"}/>
                <h1>Companion App</h1>
                <p>An Android app to remotely control an Arduino miniature car via Bluetooth.</p>
                <h2>Android, Java, Bluetooth, Arduino</h2>
            </ProjectContainer>
        </div>
    </>)
}

export default App
