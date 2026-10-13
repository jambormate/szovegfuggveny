import SzovegKezeloFuggvenyek from "./components/SzovegKezeloFuggvenyek"
import Fejlec from "./components/Fejlec"

function App() {

  return (
    <>
       <div className="container-fluid bg-light min-vh-100">
        <div className="container">
          <header className="col-12 text-center">
            <Fejlec />
          </header>
          <main className="row">
            <div className="col-12">
              <SzovegKezeloFuggvenyek />
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default App
