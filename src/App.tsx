import './App.css'
import ProjectContainer from "./components/ProjectContainer.tsx";

function App() {

  return (
      <>
          <p>Silviu</p>
          <div className="main-container">
            <div className="grid-panel">
                <ProjectContainer>
                    <img src={"src/assets/calc.png"}/>
                    <p>An advanced calculator app that features decimal computations for bases 2-16 with 8-digit precision.</p>
                </ProjectContainer>
            </div>
          </div>
      </>
  )
}

export default App
