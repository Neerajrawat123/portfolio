/** @format */
import { blogData } from "../assets/constants";

const BlogSection = () => {
  return (
    <div className="mx-auto max-w-screen-lg px-3 py-6">
      <div class="mb-6 text-2xl font-bold">
        <div class="flex items-baseline justify-between">
          <div>
            Recent{" "}
            <span class="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">
              Posts
            </span>
          </div>
          <div class="text-sm">
            <a href="/demo/astro-boilerplate/posts">View all Posts →</a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {blogData.map((item) => (
          <a
            class="hover:translate-y-1"
            href={item.link}
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

export default BlogSection;
