import React from 'react';

const ProjectCard = ({ data }) => {
  return (
    <div className="grid gap-4 mt-4 max-w-3xl grid-flow-row h-auto justify-center">
      <div className="bg-theme text-theme border-spacing-5 border-theme border-2 rounded-xl shadow-2xl p-6 flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 mr-4">
          <a target="_blank" href={data.demo} rel="noreferrer">
            <img
              src={require(`${data.image}`)}
              alt="website"
              className="rounded-xl shadow-xl max-w-lg w-full mx-auto sm:mx-0 transition duration-300 ease-in-out hover:scale-105"
            />
          </a>
        </div>
        <div className="w-full sm:w-1/2 justify-center text-center">
          <div className="text-2xl mb-4 font-bold">{data.title}</div>
          <div className="text-theme font-bold">{data.description}</div>
          <div className="flex flex-wrap gap-4 justify-center mt-4">
          {Object.keys(data.tools).map((toolKey) => (
              <div
                key={toolKey}
                className="p-2 text-xl font-semibold shadow-md shadow-black bg-theme-alt text-theme-alt"
              >
                {data.tools[toolKey]}
              </div>
            ))}
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
                  fillRule="evenodd"
                  clipRule="evenodd"
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
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
