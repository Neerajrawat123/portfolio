/** @format */

function HeroSection() {
  return (
    <>
      <div class="mx-auto max-w-screen-lg px-3 py-6">
        {" "}
        <div class="flex flex-col items-center md:flex-row md:justify-between md:gap-x-24">
          <div>
            <h1 class="text-3xl font-bold text-white">
              Hi there, I'm{" "}
              <span class="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">
                Neeraj rawat
              </span>{" "}
              👋
            </h1>
            <p class="mt-6 text-xl leading-9">
            Hiii, i am a frontend developer.<br />
            With a solid foundation in HTML, CSS, and JavaScript, I bring a blend of technical skills and creativity to every project.<br />
            I bring more than just code to the table - I bring enthusiasm, creativity, and a passion for making the web a better place.


              

              
             
            </p>
            <div class="mt-3 flex gap-1">
              <a href="https://twitter.com/Neeraj069384742">
                <img
                  class="h-12 w-12 hover:translate-y-1"
                  src="images/twitter-icon.png"
                  alt="Twitter icon"
                  loading="lazy"
                />
              </a>
             
              <a href="/demo/astro-boilerplate">
                <img
                  class="h-12 w-12 hover:translate-y-1"
                  src="images/linkedin-icon.png"
                  alt="Linkedin icon"
                  loading="lazy"
                />
              </a>
              
            </div>
          </div>
          <div class="shrink-0">
            <img
              class="h-80 w-64"
              src="images/avatar.svg"
              alt="Avatar"

              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
