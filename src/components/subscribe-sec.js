/** @format */

import React from "react";

export const SubscribeSection = () => {
  return (
    <div class="mx-auto max-w-screen-lg px-3 py-6">
      <div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div class="sm:w-7/12">
          <div class="text-3xl font-bold">
            Subscribe to my{" "}
            <span class="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">
              Newsletters
            </span>
          </div>
          <p class="mt-3 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            vero esse non molestias eos excepturi, inventore atque cupiditate.
          </p>
        </div>
        <div class="w-full sm:w-5/12">
          <form class="flex rounded-full bg-slate-800 px-4 py-2 focus-within:ring-2 focus-within:ring-cyan-600 hover:ring-2 hover:ring-cyan-600">
            <input class="w-full appearance-none bg-slate-800 focus:outline-none" />
            <button
              class="ml-2 shrink-0 rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 px-3 py-1 text-sm font-medium hover:from-sky-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/50"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
