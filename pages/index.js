/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react"
import Head from "next/head"
import Feature from "components/Feature"
import BookmarkIcon from "components/icons/Bookmark"
import ArrowIcon from "components/icons/Arrow"
import { useState } from "react"

export default function Home() {
  const [currentFeature, setCurrentFeature] = useState("Bookmark in one click")
  const [accordionNo, setAccordionNo] = useState(null)

  const getTabCSS = cssFeature =>
    cssFeature === currentFeature
      ? "text-slate-600 border-[#fb5759] border-b-[6px] pb-3"
      : "text-[#999a9f] hover:text-slate-600"

  return (
    <Fragment>
      <Head>
        <title>Bookmark</title>
      </Head>
      <div className="w-full">
        <header className="px-28 py-12 h-36 flex justify-between items-center">
          <BookmarkIcon />
          <nav className="flex w-2/5 justify-evenly items-center ">
            <div className="uppercase text-xs tracking-wide text-[#33333a] hover:text-[#fb5759]">
              Features
            </div>
            <div className="uppercase text-xs tracking-wide text-[#33333a] hover:text-[#fb5759]">
              Pricing
            </div>
            <div className="uppercase text-xs tracking-wide text-[#33333a] hover:text-[#fb5759]">
              Contact
            </div>
            <button
              className="py-3 px-5 basis-24 rounded-sm uppercase text-xs text-white 
            bg-[#fb5759] tracking-wide drop-shadow hover:bg-white hover:text-[#fb5759] 
            hover:border-solid hover:border hover:border-[#fb5759]"
            >
              Login
            </button>
          </nav>
        </header>
        <main>
          <section className="pl-28 py-12 flex justify-between items-center">
            <div className="flex flex-col w-4/5 items-start">
              <h1 className="w-2/3 font-['Rubik'] text-5xl font-medium tracking-wide whitespace-nowrap">
                A Simple Bookmark <br /> Manager
              </h1>
              <p className="text-md text-[#999a9f] w-2/3 mt-5">
                A clean and simple interface to organize your favourite
                websites. Open a new browser tab and see your sites load
                instantly. Try it for free.
              </p>
              <div className="space-x-3 mt-5">
                <button
                  className="py-3 px-8 rounded-md text-sm text-white bg-[#5365dc] tracking-wide drop-shadow 
                hover:bg-white hover:text-[#5365dc] hover:border-solid hover:border hover:border-[#5365dc]"
                >
                  Get it on Chrome
                </button>
                <button
                  className="py-3 px-8 rounded-md text-sm bg-[#f7f7f7] tracking-wide drop-shadow 
                hover:bg-white hover:border-solid hover:border hover:border-black"
                >
                  Get it on Firefox
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                className="z-10 block relative right-[3rem] max-w-none"
                src="./illustration-hero.svg"
                alt=""
              />
              <div className="w-4/5 h-[75%] bg-[#5365dc] rounded-l-full absolute bottom-0 right-0 mix-blend-hue" />
            </div>
          </section>
          <section>
            <div className="flex flex-col items-center">
              <h1 className="font-['Rubik'] text-3xl font-medium">Features</h1>
              <p className="text-md text-center text-[#999a9f] w-5/12  mt-5">
                Our aim is to make it quick and easy for you to access your
                favourite websites. Your bookmarks sync between your devices so
                you can access them on the go. Simple Bookmarking Speedy
                Searching Easy Sharing
              </p>
              <ul className="flex justify-center w-2/3 mt-12 hover:cursor-pointer">
                <li>
                  <a
                    className={`block border-solid border-b-2 pb-4 px-16 whitespace-nowrap ${getTabCSS(
                      "Bookmark in one click"
                    )}`}
                    onClick={() => setCurrentFeature("Bookmark in one click")}
                  >
                    Simple Bookmarking
                  </a>
                </li>
                <li>
                  <a
                    className={`block border-solid border-b-2 pb-4 px-16 whitespace-nowrap ${getTabCSS(
                      "Intelligent search"
                    )}`}
                    onClick={() => setCurrentFeature("Intelligent search")}
                  >
                    Speedy Searching
                  </a>
                </li>
                <li>
                  <a
                    className={`block border-solid border-b-2 pb-4 px-16 whitespace-nowrap ${getTabCSS(
                      "Share your bookmarks"
                    )}`}
                    onClick={() => setCurrentFeature("Share your bookmarks")}
                  >
                    Easy Sharing
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <Feature currentFeature={currentFeature} />
          <section>
            <div className="flex flex-col items-center">
              <h1 className="font-['Rubik'] text-3xl font-medium">
                Download the extension
              </h1>
              <p className="text-md text-center text-[#999a9f] w-5/12  mt-5">
                We’ve got more browsers in the pipeline. Please do let us know
                if you’ve got a favourite you’d like us to prioritize.
              </p>
            </div>
            <div className="flex  justify-center space-x-5 mt-10">
              <div className="p-6 flex flex-col  self-start border rounded-md drop-shadow-md w-68 items-center">
                <img className="w-[40%]" src="./logo-chrome.svg" alt="" />
                <div className="font-['Rubik'] text-md mt-5">Add to Chrome</div>
                <div className="text-slate-500 text-sm">Minimum version 62</div>
                <div className="w-full py-1 mt-5 mb-4 border-b-[4px] border-dotted" />
                <div
                  className=" font-['Rubik'] py-2 px-4 rounded-md text-sm text-white bg-[#5365dc] tracking-wide drop-shadow 
      hover:bg-white hover:text-[#5365dc] hover:border-solid hover:border hover:border-[#5365dc]"
                >
                  Add & Install Extension
                </div>
              </div>
              <div className="p-6 flex flex-col  self-start  mt-10 border rounded-md drop-shadow-md w-68 items-center">
                <img className="w-[40%]" src="./logo-firefox.svg" alt="" />
                <div className="font-['Rubik'] text-md mt-5">
                  Add to Firefox
                </div>
                <div className="text-slate-500 text-sm">Minimum version 55</div>
                <div className="w-full py-1 mt-5 mb-4 border-b-[3px] border-dotted" />
                <div
                  className=" font-['Rubik'] py-2 px-4 rounded-md text-sm text-white bg-[#5365dc] tracking-wide drop-shadow 
      hover:bg-white hover:text-[#5365dc] hover:border-solid hover:border hover:border-[#5365dc]"
                >
                  Add & Install Extension
                </div>
              </div>
              <div className="p-6 flex flex-col self-start  mt-16 border rounded-md drop-shadow-md w-68 items-center">
                <img className="w-[40%]" src="./logo-opera.svg" alt="" />
                <div className="font-['Rubik'] text-md mt-5">Add to Opera</div>
                <div className="text-slate-500 text-sm">Minimum version 46</div>
                <div className="w-full py-1 mt-5 mb-4 border-b-[3px] border-dotted" />
                <div
                  className=" font-['Rubik'] py-2 px-4 rounded-md text-sm text-white bg-[#5365dc] tracking-wide drop-shadow 
      hover:bg-white hover:text-[#5365dc] hover:border-solid hover:border hover:border-[#5365dc]"
                >
                  Add & Install Extension
                </div>
              </div>
            </div>
          </section>
          <section className="pl-28 py-12">
            <div className="flex flex-col items-center">
              <h1 className="font-['Rubik'] text-3xl font-medium">
                Frequently Asked Questions
              </h1>
              <p className="text-md text-center text-[#999a9f] w-5/12  mt-5">
                Here are some of our FAQs. If you have any other questions you’d
                like answered please feel free to email us.
              </p>
              <div className="w-2/5 mt-10 flex flex-col transition-all">
                <div
                  className="border-y-2  py-4  transition-all"
                  onClick={() => setAccordionNo(1)}
                >
                  <div className="flex justify-between">
                    <div className="text-slate-700">What is Bookmark?</div>
                    <ArrowIcon
                      className={`${
                        accordionNo === 1 && "rotate-180"
                      } hover:rotate-180`}
                    />
                  </div>
                  {accordionNo === 1 && (
                    <div className="text-slate-500 mt-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce tincidunt justo eget ultricies fringilla. Phasellus
                      blandit ipsum quis quam ornare mattis.
                    </div>
                  )}
                </div>
                <div
                  className="border-b-2  py-4 transition-all"
                  onClick={() => setAccordionNo(2)}
                >
                  <div className="flex justify-between">
                    <div className="text-slate-700">
                      How can I request a new browser?
                    </div>
                    <ArrowIcon
                      className={`${
                        accordionNo === 2 && "rotate-180"
                      } hover:rotate-180`}
                    />
                  </div>
                  {accordionNo === 2 && (
                    <div className="text-slate-500 mt-4">
                      Vivamus luctus eros aliquet convallis ultricies. Mauris
                      augue massa, ultricies non ligula. Suspendisse imperdiet.
                      Vivamus luctus eros aliquet convallis ultricies. Mauris
                      augue massa, ultricies non ligula. Suspendisse imperdie
                      tVivamus luctus eros aliquet convallis ultricies. Mauris
                      augue massa, ultricies non ligula. Suspendisse imperdiet.
                    </div>
                  )}
                </div>
                <div
                  className="border-b-2  py-4 transition-all"
                  onClick={() => setAccordionNo(3)}
                >
                  <div className="flex justify-between">
                    <div className="text-slate-700">Is there a mobile app?</div>
                    <ArrowIcon
                      className={`${
                        accordionNo === 3 && "rotate-180"
                      } hover:rotate-180`}
                    />
                  </div>
                  {accordionNo === 3 && (
                    <div className="text-slate-500 mt-4">
                      Sed consectetur quam id neque fermentum accumsan. Praesent
                      luctus vestibulum dolor, ut condimentum urna vulputate
                      eget. Cras in ligula quis est pharetra mattis sit amet
                      pharetra purus. Sed sollicitudin ex et ultricies bibendum.
                    </div>
                  )}
                </div>
              </div>
              <button
                className="mt-10  py-4 px-10 rounded-md text-md text-white bg-[#5365dc] tracking-wide drop-shadow 
      hover:bg-white hover:text-[#5365dc] hover:border-solid hover:border hover:border-[#5365dc]"
              >
                More Info
              </button>
            </div>
          </section>
        </main>
        <footer>
          <div className="flex flex-col justify-center  items-center h-[350px] bg-[#5365dc]">
            <div className="font-[Rubik] mt-5  text-white uppercase tracking-wide">
              35,000+ already joined
            </div>
            <div className="font-[Rubik] mt-5 w-4/12 text-4xl  text-white text-center">
              Stay up-to-date with what we’re doing
            </div>
            <div className="ml-10 mt-10 w-[500px]">
              <input
                className="p-4 w-[300px] text-sm rounded-md"
                type="email"
                placeholder="Enter your email address"
              />
              <button
                className="py-4 px-6 ml-3 basis-24 rounded-md text-sm text-white 
            bg-[#fa5859] tracking-wide drop-shadow hover:bg-white hover:text-[#fb5759] 
            hover:border-solid hover:border hover:border-[#fb5759]"
              >
                Contact Us
              </button>
            </div>
          </div>
          {/* 242946 */}
          <div className="h-[100px] bg-[#242946] px-40 py-12 h-36 flex justify-start items-center">
            <BookmarkIcon fill="white" />
            <ul className="ml-12 flex space-x-10">
              <div className="uppercase text-sm tracking-wide text-white hover:text-[#fb5759]">
                Features
              </div>
              <div className="uppercase text-sm tracking-wide text-white hover:text-[#fb5759]">
                Pricing
              </div>
              <div className="uppercase text-sm tracking-wide text-white hover:text-[#fb5759]">
                Contact
              </div>
            </ul>
            <div className="ml-auto flex w-[70px] justify-between">
              <img src="./icon-facebook.svg" alt="" />
              <img src="./icon-twitter.svg" alt="" />
            </div>
          </div>
        </footer>

        {/* <div className="h-72"></div> */}
      </div>
    </Fragment>
  )
}
