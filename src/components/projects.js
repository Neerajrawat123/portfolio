/** @format */

import {projectData}   from "./../assets/constants";


const Projects = () => {

  return (
    <div className="mx-auto max-w-screen-lg px-3 py-6">
      <div class="mb-6 text-2xl font-bold">
        Recent{" "}
        <span class="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">
          Projects
        </span>
      </div>
      <div className="flex flex-col gap-6">
        {projectData.map((item) => (
          <div class="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
            <div class="shrink-0">
              <a href={item.link}>
                <img
                  class="h-36 w-46 hover:translate-y-1"
                  src={item.imageUrl}
                  alt="Project Web Design"
                  loading="lazy"
                />
              </a>
            </div>
            <div>
              <div class="flex flex-col items-center gap-y-2 md:flex-row">
                <a class="hover:text-cyan-400" href="/demo/astro-boilerplate">
                  <div class="text-xl font-semibold">{item.name}</div>
                </a>
                <div class="ml-3 flex gap-2">
                  <div class="rounded-md px-2 py-1 text-xs font-semibold bg-fuchsia-400 text-fuchsia-900">
                  {item.tags[0]}
                    </div>
                  <div class="rounded-md px-2 py-1 text-xs font-semibold bg-lime-400 text-lime-900">
                  {item.tags[1]}

                  </div>
                  <div class="rounded-md px-2 py-1 text-xs font-semibold bg-sky-400 text-sky-900">
                  {item.tags[2]}
                  </div>
                  <div class="rounded-md px-2 py-1 text-xs font-semibold bg-rose-400 text-rose-900">
                  {item.tags[3]}
                  </div>
                </div>
              </div>
              <p class="mt-3 text-gray-400">
               {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
