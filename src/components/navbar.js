/** @format */
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <>
      <div class="mx-auto max-w-screen-lg px-3 py-6">
        <div class="flex flex-col gap-y-3 sm:flex-row sm:items-center sm:justify-between">
          <a href="/demo/astro-boilerplate">
            <div class="flex items-center bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-xl font-bold text-transparent">
              <svg
                class="mr-1 h-10 w-10 stroke-cyan-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M0 0h24v24H0z" stroke="none"></path>
                <rect x="3" y="12" width="6" height="8" rx="1"></rect>
                <rect x="9" y="8" width="6" height="12" rx="1"></rect>
                <rect x="15" y="4" width="6" height="16" rx="1"></rect>
                <path d="M4 20h14"></path>
              </svg>
              Neeraj
            </div>
          </a>
          <nav>
            <ul class="flex gap-x-3 font-medium text-gray-200">
              <li class="hover:text-white">
                <Link to={'/blogs'}>Blogs</Link>
              </li>
              <li class="hover:text-white">
              <Link to={'https://github.com/Neerajrawat123'}>github</Link>
                
              </li>
              <li class="hover:text-white">
                <a href="https://twitter.com/Neeraj069384742">Twitter</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
