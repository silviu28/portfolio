import './App.css'
import ProjectContainer from "./components/ProjectContainer.tsx";
import LanguageStats from "./components/LanguageStats.tsx";


function App() {

    return (<>
        <h2 className={"fade-in"}>Silviu</h2>
        <LanguageStats />
        <div className="grid-panel" id="main-view">
            <ProjectContainer>
                <img src={"public/restaurant2.png"}/>
                <h1>Restaurant Catalog</h1>
                <p>A Windows app to see menus and items of a restaurant and place orders. Features an employee
                    control panel for users with required privileges.</p>
                <h2>.NET, C#, WPF, JSON, MSSQL</h2>
            </ProjectContainer>

            <ProjectContainer>
                <img src={"public/shooter1.png"}/>
                <h1>Top-down Shooter</h1>
                <p>A native game based on NES' Battle City. Features a session browser to join multiplayer and
                    leaderboard for progression.</p>
                <h2>C++, Qt, SQLite, HTTP</h2>
            </ProjectContainer>

            <ProjectContainer>
                <img src={"public/calc.png"}/>
                <h1>Programmer Calculator</h1>
                <p>An advanced calculator app that features decimal computations for bases 2-16 with 8-digit
                    precision.</p>
                <h2>.NET, C#, WPF</h2>
            </ProjectContainer>

            <ProjectContainer>
                <img src={"public/cards.png"}/>
                <h1>Card Matching Game</h1>
                <p>Extensible card matching game with the ability to save prior game session.</p>
                <h2>.NET, C#, WPF, JSON</h2>
            </ProjectContainer>

            <ProjectContainer>
                <img src={"public/controller.png"}/>
                <h1>Companion App</h1>
                <p>An Android app to remotely control an Arduino miniature car via Bluetooth.</p>
                <h2>Android, Java, Bluetooth, Arduino</h2>
            </ProjectContainer>
        </div>
    </>)
}

export default App
