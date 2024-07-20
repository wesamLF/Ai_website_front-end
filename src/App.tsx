import Hero from "./components/Hero"
import Nav from "./components/Nav"

function App() {

  return (
    <>

      <Nav />
      <div className="mx-auto px-4 lg:px-[200px] xl:px-[300px]  bg-bldue-100 ">
        <Hero />

      </div>
    </>
  )
}

export default App
