/** @format */

import React from "react";

function BlogData() {
  return (
    <div class="mx-auto max-w-screen-lg px-3 py-6">
      <h1 class="text-center text-3xl font-bold">Nodejs</h1>
      <div class="mt-2 text-center text-sm text-gray-400">By july 6, 2023</div>
      <div className="max-auto mt-5 ">
        <div class="aspect-w-3 aspect-h-2 text-center">
          <img
            class="h-full w-full rounded-lg object-cover object-center"
            src="/images/laptop-image.jpeg"
            alt="laptop"
            loading="lazy"
          />
        </div>
        <div class="prose prose-invert mt-8 prose-img:rounded-lg">
          <p>
          Node.js is an open-source and cross-platform JavaScript runtime environment it runs on v8 engine. It is a single threaded language and run asyncronous function.
          </p>
         
          <h1 className="text-3xl mt-8 mb-6">How it works</h1>
          <p>
          All the user requests to your web application will be handled by a single thread and all the I/O work or long running job is performed asynchronously for a particular request. So, this single thread doesn't have to wait for the request to complete and is free to handle the next request. When asynchronous I/O work completes then it processes the request further and sends the response.
 
          </p>
          <h1 className="text-3xl mt-8 mb-6">Advantages</h1>
          <ul>
            <li>Easy scalability : it can scalable both vertically and horizontally.</li>
            <li>Real time webapps : It is useful in making realtime web apps like chat messaging or streaming apps.</li>
            <li>Fast suite : It is very fast in reading and writting file system or databases.</li>
            <li>Easy to learn : Since it is JavaScript runtime environment so if you learn JavaScript prior it became very easy for you.</li>
            <li>Caching: It provide caching of modules.</li>
            <li>Corporate support : It is used by various big companies like walmart,Google,Microsoft and facebook.</li>

          </ul>
          
          <h3 className="text-3xl mt-8 mb-6">Disadvantages</h3>
         <p>
         It is not fit for cpu-intensive tasks like image processing because it takes time to process a request and thereby block the single thread.
         </p>
          
         
        </div>
      </div>
    </div>
  );
}

export default BlogData;
