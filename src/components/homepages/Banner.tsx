"use client";
import "animate.css";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className="w-full">
      <div
        className="hero max-w-[1540px] mx-auto my-10 bg-cover bg-center rounded-lg shadow-lg"
        style={{ backgroundImage: "url('/banner.jpg')" }}
      >
        <div className="hero-overlay bg-black bg-opacity-60 p-6 md:px-12 lg:px-24 py-12 flex flex-col md:flex-row items-center gap-6">
          
          {/* Profile Image */}
          <div className="flex justify-center items-center w-full md:w-[35%]">
            {/* <div className="w-36 h-36 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white animate__animated animate__zoomIn"> */}
            <div className="w-36 h-36 lg:w-48 lg:h-48  overflow-hidden border-4 border-white animate__animated animate__zoomIn">
              <Image
                src="/rakesh2.png"
                width={300}
                height={300}
                alt="Rakesh Biswas"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left w-full md:w-[65%] text-white space-y-4 animate__animated animate__fadeInLeft">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Hi ! I am Rakesh Biswas
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-medium">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "Backend Developer",
                  "Frontend Developer",
                  "MERN Stack Developer",
                ]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />{" "}
              <span className="block mt-2 text-lg md:text-xl">| Competitive Programmer</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
