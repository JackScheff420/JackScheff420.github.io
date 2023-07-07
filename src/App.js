import classNames from "classnames";
import data from "./data.json"

function App() {


  return (
    <div className="App">


      <section id="nav">
        <nav className="bg-theme border-b-2 border-theme">
          <div className="max-w-none mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">

                <a href="#" className="text-white text-xl mr-4 font-bold flex items-center transition-colors duration-300 hover:text-blue-400 hover:fill-blue-400">
                  <svg
                    fill="#000000"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 fill-current mr-2"
                    id="memory-alpha-m">

                    <path d="M15 1V2H17V3H18V4H19V5H20V7H21V15H20V17H19V18H18V19H17V20H15V21H7V20H5V19H4V18H3V17H2V15H1V7H2V5H3V4H4V3H5V2H7V1H15M14 3H8V4H6V5H5V6H4V8H3V14H4V16H5V17H6V18H8V19H14V18H16V17H17V16H18V14H19V8H18V6H17V5H16V4H14V3M7 6H15L15 7L16 7V16H14V8H12V15H10V8H8V16H6V7L7 7L7 6Z">
                    </path>

                  </svg>

                  <span className="mr-2">Maximilian Scheffler</span>

                </a>
              </div>
              <div className="flex">
                <a
                  href="#"
                  className="text-theme hover:bg-theme-alt hover:text-theme-alt px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-theme hover:bg-theme-alt hover:text-theme-alt px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-theme hover:bg-theme-alt hover:text-theme-alt px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
      </section>


      <section id="home" className="bg-theme py-8">
        <div className="container md:mx-auto max-w-6xl p-16 border-theme border-2 rounded-xl">
        <h1 className="font-bold text-4xl text-theme">Anwendungsentwickler</h1>
        </div>
      </section>


      <section id="about"></section>


      <section id="projects" className="bg-theme py-8">
        <div className="container md:mx-auto max-w-6xl p-16 border-theme border-2 rounded-xl">
          <div className="flex flex-col">
            <div className="p-0 text-theme font-sans font-bold text-xl">
              Portfolio
            </div>
            <div className="text-3xl text-theme mb-10 font-bold">
              Each project is unique ✨
            </div>
            <div className="grid gap-4 grid-flow-row w-full h-auto justify-center">
              <div className="bg-theme text-theme border-spacing-5 border-theme border-2 rounded-xl shadow-2xl p-2 flex flex-row">
                <div className="basis-1/2 m-4 ">
                  <a target="_blank" href={data.demo} rel="noreferrer">
                    <img
                      src={require("./images/angebotsaufforderung.png")}
                      alt="website"
                      className="rounded-xl shadow-xl max-w-lg transition duration-300 ease-in-out hover:scale-105"
                    />
                  </a>
                </div>
                <div className="basis-1/2 justify-center text-center">
                  <div className="text-2xl mb-4 font-bold">
                    Angebotsaufforderung 🐱‍🏍
                  </div>
                  <div className="text-theme font-bold">
                    {data.description}
                  </div>
                  <div className="flex gap-4 justify-center mt-4">
                    <div className="p-2 text-xl font-semibold shadow-md shadow-black bg-theme-alt text-theme-alt">
                      {data.framework}
                    </div>
                    <div className="p-2 text-xl font-semibold shadow-md shadow-black bg-theme-alt text-theme-alt">
                      {data.library}
                    </div>
                  </div>
                  <div className="mt-4 flex justify-center">
                    <a
                      target="_blank"
                      href={data.github}
                      rel="noreferrer"
                      className="text-lg mr-4 font-semibold flex items-center transition-colors duration-300 hover:text-blue-400 hover:fill-blue-400"
                    >
                      <span className="mr-2">Code</span>
                      <svg
                        className="w-6 h-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 98 96"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                        />
                      </svg>
                    </a>
                    <a
                      target="_blank"
                      href={data.demo}
                      rel="noreferrer"
                      className="text-lg font-semibold flex items-center transition-colors duration-300 hover:text-blue-400 hover:fill-blue-400"
                    >
                      <span className="mr-2">Live Demo</span>
                      <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke-width="1.5"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section id="contact" className="bg-theme text-theme py-8">
        <div className="container mx-auto md:mx-auto max-w-6xl p-16 border-theme border-2 rounded-xl">
          <h2 className="text-3xl text-start font-bold mb-4">Contact</h2>
          <p className="text-start mb-8 font-bold text-xl">
            Schreib mich einfach gerne per mail an! 👇
          </p>
          <div class="flex">
            <div class="w-1/2">
              <div className="flex items-center">
                <svg
                  className="w-12 h-12 mr-2"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z"></path>
                </svg>
                <div>
                  <h3 className="text-2xl text-start font-bold mb-2">Location</h3>
                  <p>Kreis Altenkirchen, Deutschland</p>
                </div>
              </div>
            </div>
            <div class="w-1/2">
              <div className="flex items-center">
                <svg className="w-12 h-12 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor">
                  <polyline fill="none" points="4 9 12 14 20 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline>
                  <polyline fill="none" points="3 8.5 12 3.5 21 8.5" stroke="#currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline>
                  <path d="M21,8.5v10a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2V8.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                </svg>
                <div>
                  <h3 className="text-2xl text-start font bold mb-2">Mail</h3>
                  <a href="mailto:mxscheffler4@gmail.com">mxscheffler4@gmail.com (click me)</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-theme border-t-2 border-theme bottom-0 w-full">
        <div className="max-w-6xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-white">
              <h3 className="text-lg font-semibold">Copyright © 2023. All rights are reserved</h3>
            </div>
            <div className="flex">
              <a
                href={data.github}
                className="text-gray-300 hover:text-gray-400 ml-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 98 96"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/maximilian-scheffler-820a9a251"
                className="text-gray-300 hover:text-gray-400 ml-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path d="M23,0H9C4,0,0,4,0,9v14c0,5,4,9,9,9h14c5,0,9-4,9-9V9C32,4,28,0,23,0z M12,25c0,0.6-0.4,1-1,1H7c-0.6,0-1-0.4-1-1V13 c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1V25z M9,11c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S10.7,11,9,11z M26,25c0,0.6-0.4,1-1,1h-3 c-0.6,0-1-0.4-1-1v-3.5v-1v-2c0-0.8-0.7-1.5-1.5-1.5S18,17.7,18,18.5v2v1V25c0,0.6-0.4,1-1,1h-3c-0.6,0-1-0.4-1-1V13 c0-0.6,0.4-1,1-1h4c0.3,0,0.5,0.1,0.7,0.3c0.6-0.2,1.2-0.3,1.8-0.3c3,0,5.5,2.5,5.5,5.5V25z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
