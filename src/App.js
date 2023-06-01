import logo from './images/iconmonstr-github-1.svg'

function App() {
  return (
    <div className="App">
      <nav></nav>
      <section id="home"></section>
      <section id="about"></section>
      <section id="projects" className="bg-gray-100 py-8">
        <div className="container md:mx-auto max-w-6xl p-16 border-black border-2">
          <div className="flex flex-col">
            <div className="p-0 text-green-600 font-sans font-bold text-xl">
              Portfolio
            </div>
            <div className="text-3xl mb-10 font-bold">
              Each project is unique ✨
            </div>
            <div className="grid gap-4 grid-flow-row w-full h-auto justify-center">
              <div className="bg-white border-spacing-5 rounded-xl shadow-2xl p-2 flex flex-row">
                <div className="basis-1/2 m-4">
                  <a target="_blank" href="https://google.com" rel="noreferrer">
                    <img
                      src={require("./images/angebotsaufforderung.png")}
                      alt="website"
                      className="rounded-xl shadow-xl"
                    />
                  </a>
                </div>
                <div className="basis-1/2 justify-center text-center">
                  <div className="text-2xl mb-4 font-bold">
                    Angebotsaufforderung 🐱‍🏍
                  </div>
                  <div className="text-zinc-400 font-bold">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                  </div>
                  <div className="flex gap-4 justify-center mt-4">
                    <div className="p-2 text-xl font-semibold shadow-md shadow-neutral-400">
                      React
                    </div>
                    <div className="p-2 text-xl font-semibold shadow-md shadow-neutral-400">
                      Bootstrap
                    </div>
                  </div>
                  <div className="flex justify-center mt-4">
                    <a
                      target="_blank"
                      href="https://github.com/jackscheff420"
                      rel="noreferrer"
                    >
                      Code 
                      <i><img src={logo} alt="gitHub"/></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact"></section>
    </div>
  );
}

export default App;
