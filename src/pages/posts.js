/** @format */

import {blogData} from '../assets/constants'
import Navbar from "../components/navbar";


const Posts = () => {
  return (
    
    <div className="bg-slate-900 text-gray-100">
    
    
    <Navbar />
    <div class="mx-auto max-w-screen-lg px-3 py-6">
      <div class="text-center">
          <h1 class="text-3xl font-bold">Blogs </h1>
        <div class="mt-3 text-gray-200">
          Blogs written by me
        </div>
      </div>
    </div>
    <div class="mx-auto max-w-screen-lg px-3 py-6">
    {blogData.map((item) => (

          <a
            class="hover:translate-y-1"
            href={'/blogs/first-blog'}
          >
            <div class="overflow-hidden rounded-md bg-slate-800">
              <div class="aspect-w-3 aspect-h-2">
                <img
                  class="h-full w-full object-cover object-center"
                  src={item.imageUrl}
                  alt="post"
                  loading="lazy"
                />
              </div>
              <div class="px-3 pt-4 pb-6 text-center">
                <h2 class="text-xl font-semibold">{item.name}</h2>
                <div class="mt-1 text-xs text-gray-400">{item.publishDate}</div>
                <div class="mt-2 text-sm">
                 {item.description}
                </div>
              </div>
            </div>
          </a>
        ))}
        </div>
    </div>
  );
};

export default Posts;
