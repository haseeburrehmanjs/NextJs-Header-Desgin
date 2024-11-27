import React from "react";
import profileImg from "@/public/profileImg.png";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <nav className="main-header">
        <div className="mx-[150px] text-white">
          <div className="flex justify-center">
            <ul className="flex gap-5 mt-6 text-1xl">
              <li className="hover:border-b">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="hover:border-b">
                <Link href={"about"}>About</Link>
              </li>
              <li className="hover:border-b">
                <Link href={"project"}>Project</Link>
              </li>
            </ul>
          </div>
          <hr className="border-[1px] mt-5" />

          <div className="flex justify-between items-center mt-[90px]">
            <div>
              <h1 className="text-5xl font-bold">Haseeb Ur Rehman</h1>
              <p className="text-4xl mt-2">Frontend Developer</p>
              <p className="mt-1 text-xl">
                hello , I'm Haseeb Ur Rehman , frontend developer ,<br /> UI/UX
                designer and freelancer. I love making <br /> web designs and
                building them with code. I <br />
                have 10 years of experience. I'm a <br /> professional and makes
                high-quality <br /> products.
              </p>
            </div>
            <div className="w-[400px] border-[3px] h-[400px] overflow-hidden bg-white rounded-full">
              <Image src={profileImg} width="700" />
            </div>
          </div>
        </div>
      </nav>

      {/* <footer className="w-full h-[300px] bg-[#263238] flex justify-center items-center">
        <div className="container mx-auto text-white">
          <div className="flex justify-between ">
            <div className="flex flex-col gap-5">
              <h1 className="text-4xl font-bold">Nexcent</h1>
              <div>
                <p>Copyright © 2020 Nexcent ltd.</p>
                <p>All rights reserved</p>
              </div>
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-500"></div>
                <div className="w-10 h-10 rounded-full bg-gray-500"></div>
                <div className="w-10 h-10 rounded-full bg-gray-500"></div>
                <div className="w-10 h-10 rounded-full bg-gray-500"></div>
              </div>
            </div>
            <div className="flex justify-between gap-24">
              <div className="flex flex-col gap-3">
                <p className="text-lg font-bold">Company</p>
                <ul className="leading-8">
                  <li>About Us</li>
                  <li>Blog</li>
                  <li>Contact Us</li>
                  <li>Pricing</li>
                  <li>Testimonial</li>
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-lg font-bold">Company</p>
                <ul className="leading-8">
                  <li>About Us</li>
                  <li>Blog</li>
                  <li>Contact Us</li>
                  <li>Pricing</li>
                  <li>Testimonial</li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-lg font-bold">Company</p>
                <form >
                  <input
                    className="w-72 h-10 rounded-lg pl-2 bg-gray-500   outline-none"
                    placeholder="Enter Value"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
    </>
  );
};

export default page;
