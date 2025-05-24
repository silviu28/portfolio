import './App.css'
import ProjectContainer from "./components/ProjectContainer.tsx";

function App() {

    return (
        <>
            <div className="grid-panel">
                <ProjectContainer>
                    <img src={"src/assets/restaurant2.png"}/>
                    <h>Restaurant Catalog</h>
                    <p>A Windows app to see menus and items of a restaurant and place orders. Features an employee
                        control panel for users with required privileges.</p>
                </ProjectContainer>

                <ProjectContainer>
                    <img src={"src/assets/shooter1.png"}/>
                    <h>Top-down Shooter</h>
                    <p>A native game based on NES' Battle City. Features a session browser to join multiplayer and a leaderboard for progression.</p>
                </ProjectContainer>

                <ProjectContainer>
                    <img src={"src/assets/calc.png"}/>
                    <h>Programmer Calculator</h>
                    <p>An advanced calculator app that features decimal computations for bases 2-16 with 8-digit
                        precision.</p>
                </ProjectContainer>

                <ProjectContainer>
                    <img src={"src/assets/cards.png"}/>
                    <h>Card Matching Game</h>
                    <p>Extensible card matching game with the ability to save prior game session.</p>
                </ProjectContainer>

                <ProjectContainer>
                    <img src={"src/assets/controller.png"}/>
                    <h>Companion App</h>
                    <p>An Android app to remotely control an Arduino miniature car via Bluetooth.</p>
                </ProjectContainer>
            </div>
        </>
    )
}

export default App
