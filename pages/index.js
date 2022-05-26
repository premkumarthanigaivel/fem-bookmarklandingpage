/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react"
import Head from "next/head"
import Feature from "components/Feature"
import BookmarkIcon from "components/icons/Bookmark"
import ArrowIcon from "components/icons/Arrow"
import CloseIcon from "components/icons/Close"
import { useState } from "react"

export default function Home() {
  const [currentFeature, setCurrentFeature] = useState("Bookmark in one click")
  const [accordionNo, setAccordionNo] = useState(null)
  const [drawerVisible, setDrawerVisible] = useState(false)

  const getTabCSS = cssFeature =>
    cssFeature === currentFeature
      ? "text-slate-600 border-b-[#fb5759] border-b-4"
      : "text-[#999a9f] hover:text-slate-600"

  return (
    <Fragment>
      <Head>
        <title>Bookmark</title>
      </Head>
      <div className="relative w-full transition-all">
        <header className="flex h-28 items-center justify-between px-10 py-3 md:h-36 md:px-28 md:py-12">
          <BookmarkIcon />
          <img
            className="max-w-none cursor-pointer md:hidden"
            src="./icon-hamburger.svg"
            alt=""
            onClick={() => setDrawerVisible(true)}
          />
          <nav className="hidden w-2/5 items-center justify-evenly md:flex">
            {["Features", "Pricing", "Contact"].map(navItem => (
              <div
                key={navItem}
                className="text-xs uppercase tracking-wide text-[#33333a] hover:text-[#fb5759]"
              >
                {navItem}
              </div>
            ))}
            <button
              className="basis-24 rounded-sm bg-[#fb5759] py-3 px-5 text-xs uppercase 
            tracking-wide text-white drop-shadow hover:border hover:border-solid 
            hover:border-[#fb5759] hover:bg-white hover:text-[#fb5759]"
            >
              Login
            </button>
          </nav>
        </header>
        <main>
          <section className="flex flex-col items-center justify-between pb-12 md:flex-row md:py-12 md:pl-28">
            <div className="order-last flex flex-col items-center md:order-first md:w-4/5 md:items-start">
              <h1 className="whitespace-nowrap text-center font-rubik text-3xl font-medium tracking-wide md:w-2/3 md:text-left md:text-5xl">
                A Simple Bookmark <br /> Manager
              </h1>
              <p className="text-md mt-5 w-full px-10 text-center text-[#999a9f] md:w-2/3 md:px-0 md:text-left">
                A clean and simple interface to organize your favourite
                websites. Open a new browser tab and see your sites load
                instantly. Try it for free.
              </p>
              <div className="mt-5 space-x-3">
                <button
                  className="rounded-md bg-[#5365dc] py-3 px-8 text-sm tracking-wide text-white drop-shadow 
                hover:border hover:border-solid hover:border-[#5365dc] hover:bg-white hover:text-[#5365dc]"
                >
                  Get it on Chrome
                </button>
                <button
                  className="rounded-md bg-[#f7f7f7] py-3 px-8 text-sm tracking-wide drop-shadow 
                hover:border hover:border-solid hover:border-black hover:bg-white"
                >
                  Get it on Firefox
                </button>
              </div>
            </div>
            <div className="relative mb-8 md:mb-0">
              <img
                className="relative z-10 block w-full max-w-none md:right-12 md:w-fit"
                src="./illustration-hero.svg"
                alt=""
              />
              <div className="absolute bottom-0 right-0 h-[75%] w-4/5 rounded-l-full bg-[#5365dc] mix-blend-hue" />
            </div>
          </section>
          <section>
            <div className="flex flex-col items-center">
              <h1 className="font-rubik text-3xl font-medium">Features</h1>
              <p className="text-md mt-5 w-full px-10  text-center text-[#999a9f] md:w-5/12  md:px-0">
                Our aim is to make it quick and easy for you to access your
                favourite websites. Your bookmarks sync between your devices so
                you can access them on the go. Simple Bookmarking Speedy
                Searching Easy Sharing
              </p>
              <ul className="mb-10 mt-12 flex w-2/3 flex-col justify-center hover:cursor-pointer md:mb-0 md:flex-row">
                <li>
                  <a
                    className={`mb-2 block  whitespace-nowrap border-y-2 border-solid pt-2 pb-4  text-center md:mb-0 md:border-t-0 md:px-16 md:pt-0 md:text-left ${getTabCSS(
                      "Bookmark in one click"
                    )}`}
                    onClick={() => setCurrentFeature("Bookmark in one click")}
                  >
                    Simple Bookmarking
                  </a>
                </li>
                <li>
                  <a
                    className={`mb-2 block whitespace-nowrap border-b-2  border-solid pt-2 pb-4 text-center md:mb-0 md:px-16 md:pt-0 md:text-left ${getTabCSS(
                      "Intelligent search"
                    )}`}
                    onClick={() => setCurrentFeature("Intelligent search")}
                  >
                    Speedy Searching
                  </a>
                </li>
                <li>
                  <a
                    className={`mb-2 block whitespace-nowrap border-b-2 border-solid pt-2 pb-4 text-center md:mb-0 md:px-16 md:pt-0 md:text-left ${getTabCSS(
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
          <section className="mb-10 md:mb-0">
            <div className="flex flex-col items-center">
              <h1 className="font-rubik text-3xl font-medium">
                Download the extension
              </h1>
              <p className="text-md mt-5 w-full px-16 text-center text-[#999a9f] md:w-5/12 md:px-0">
                We’ve got more browsers in the pipeline. Please do let us know
                if you’ve got a favourite you’d like us to prioritize.
              </p>
            </div>
            <div className="mt-10 flex w-full flex-col justify-center md:flex-row md:space-x-5">
              <div className="md:w-68 relative flex flex-col items-center self-center rounded-md border px-6 pt-8 pb-4 drop-shadow-md md:self-start">
                <img className="w-[40%]" src="./logo-chrome.svg" alt="" />
                <div className="mt-5 font-rubik text-lg tracking-normal">
                  Add to Chrome
                </div>
                <div className="font-rubik text-sm text-slate-500">
                  Minimum version 62
                </div>
                <div className="absolute bottom-[23%] mt-5 mb-4 w-full border-b-[3px] border-dotted py-1" />
                <div
                  className="mt-12  rounded-md bg-[#5365dc] py-4 px-8 font-rubik text-sm tracking-wide text-white drop-shadow 
      hover:border hover:border-solid hover:border-[#5365dc] hover:bg-white hover:text-[#5365dc]"
                >
                  Add & Install Extension
                </div>
              </div>
              <div className="w-68 mt-10 flex  flex-col items-center  self-center rounded-md border px-6 pt-8 pb-4 drop-shadow-md md:self-start">
                <img className="w-[40%]" src="./logo-firefox.svg" alt="" />
                <div className="mt-5 font-rubik text-lg tracking-normal">
                  Add to Firefox
                </div>
                <div className="font-rubik text-sm text-slate-500">
                  Minimum version 55
                </div>
                <div className="absolute bottom-[23%] mt-5 mb-4 w-full border-b-[3px] border-dotted py-1" />
                <div
                  className="mt-12  rounded-md bg-[#5365dc] py-4 px-8 font-rubik text-sm tracking-wide text-white drop-shadow 
      hover:border hover:border-solid hover:border-[#5365dc] hover:bg-white hover:text-[#5365dc]"
                >
                  Add & Install Extension
                </div>
              </div>
              <div className="w-68 mt-10 flex  flex-col items-center  self-center rounded-md border px-6 pt-8 pb-4 drop-shadow-md md:mt-16 md:self-start">
                <img className="w-[40%]" src="./logo-opera.svg" alt="" />
                <div className="mt-5 font-rubik text-lg tracking-normal">
                  Add to Opera
                </div>
                <div className="font-rubik text-sm text-slate-500">
                  Minimum version 46
                </div>
                <div className="absolute bottom-[23%] mt-5 mb-4 w-full border-b-[3px] border-dotted py-1" />
                <div
                  className="mt-12  rounded-md bg-[#5365dc] py-4 px-8 font-rubik text-sm tracking-wide text-white drop-shadow 
      hover:border hover:border-solid hover:border-[#5365dc] hover:bg-white hover:text-[#5365dc]"
                >
                  Add & Install Extension
                </div>
              </div>
            </div>
          </section>
          <section className="mb-12 text-center md:mb-0 md:py-12 md:pl-28 md:text-left">
            <div className="flex flex-col items-center px-4">
              <h1 className=" font-rubik text-3xl font-medium ">
                Frequently Asked Questions
              </h1>
              <p className="text-md mt-5 px-4 text-center  text-[#999a9f] md:w-5/12  md:px-0">
                Here are some of our FAQs. If you have any other questions you’d
                like answered please feel free to email us.
              </p>
              <div className="mt-10 flex w-4/5 flex-col transition-all md:w-2/5">
                <div
                  className="border-y-2  py-4  transition-all"
                  onClick={() => setAccordionNo(1)}
                >
                  <div className="flex justify-between">
                    <div className="text-slate-700">What is Bookmark?</div>
                    <ArrowIcon
                      className={`${accordionNo === 1 && "rotate-180"}`}
                    />
                  </div>
                  {accordionNo === 1 && (
                    <div className="mt-4 text-left text-slate-500">
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
                        accordionNo === 2 && "rotate-180 fill-orange-400"
                      }`}
                    />
                  </div>
                  {accordionNo === 2 && (
                    <div className="mt-4 text-left  text-slate-500">
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
                      className={`${accordionNo === 3 && "rotate-180"}`}
                    />
                  </div>
                  {accordionNo === 3 && (
                    <div className="mt-4 text-left  text-slate-500">
                      Sed consectetur quam id neque fermentum accumsan. Praesent
                      luctus vestibulum dolor, ut condimentum urna vulputate
                      eget. Cras in ligula quis est pharetra mattis sit amet
                      pharetra purus. Sed sollicitudin ex et ultricies bibendum.
                    </div>
                  )}
                </div>
              </div>
              <button
                className="text-md  mt-10 rounded-md bg-[#5365dc] py-4 px-10 tracking-wide text-white drop-shadow 
      hover:border hover:border-solid hover:border-[#5365dc] hover:bg-white hover:text-[#5365dc]"
              >
                More Info
              </button>
            </div>
          </section>
        </main>
        <footer>
          <div className="flex h-auto flex-col items-center justify-center bg-[#5365dc] md:h-[350px]">
            <div className="mt-5 font-[Rubik]  uppercase tracking-wide text-white">
              35,000+ already joined
            </div>
            <div className="mt-5 w-full px-2 text-center font-[Rubik] text-3xl text-white md:w-4/12  md:whitespace-normal md:text-4xl">
              Stay up-to-date with what we’re doing
            </div>
            <div className="mx-auto mt-10 mb-5 md:mx-0 md:ml-10 md:mb-0">
              <input
                className="w-[300px] rounded-md p-4 text-sm"
                type="email"
                placeholder="Enter your email address"
              />
              <button
                className="mt-2 block w-[300px]  basis-24 rounded-md bg-[#fa5859] py-4 px-6 text-sm tracking-wide text-white drop-shadow 
            hover:border hover:border-solid hover:border-[#fb5759] hover:bg-white hover:text-[#fb5759] 
            md:mt-0 md:ml-3 md:inline-block"
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className="flex h-full flex-col items-center justify-start bg-[#242946] px-40 py-12 md:h-[200px] md:flex-row">
            <BookmarkIcon fill="white" />
            <ul className="mt-10 flex flex-col space-y-5 md:ml-12 md:mt-0 md:flex-row md:space-x-10 md:space-y-0">
              <div className="text-sm uppercase tracking-wide text-white hover:text-[#fb5759]">
                Features
              </div>
              <div className="text-sm uppercase tracking-wide text-white hover:text-[#fb5759]">
                Pricing
              </div>
              <div className="text-sm uppercase tracking-wide text-white hover:text-[#fb5759]">
                Contact
              </div>
            </ul>
            <div className="ml-auto mt-10 flex w-[100px] justify-start md:mt-0 md:w-[70px]">
              <img src="./icon-facebook.svg" alt="" />
              <img src="./icon-twitter.svg" alt="" className="pl-5" />
            </div>
          </div>
        </footer>
        {drawerVisible && (
          <div className="absolute top-0 z-50 flex h-full w-screen flex-col bg-[#2f354f] px-10  py-3">
            <div className="mt-5 flex justify-between">
              <BookmarkIcon fill="white" />
              <CloseIcon
                className="cursor-pointer"
                onClick={() => setDrawerVisible(false)}
              />
            </div>
            <div className="mt-10 text-center leading-snug">
              {["Features", "Pricing", "Contact"].map(navItem => (
                <div
                  key={navItem}
                  className="text-md border-t-2 py-3 font-[Rubik] uppercase tracking-widest text-white hover:text-[#fb5759]"
                >
                  {navItem}
                </div>
              ))}
            </div>
            <button
              className="text-md mt-5 w-full basis-14 rounded-sm border-2 border-solid bg-[#2f354f] py-1 px-5
            font-bold uppercase tracking-wide text-white drop-shadow"
            >
              Login
            </button>
            <div className="mt-auto mb-5 flex w-[100px] justify-between   self-center">
              <img className="inline-block" src="./icon-facebook.svg" alt="" />
              <img
                className="inline-block pl-5"
                src="./icon-twitter.svg"
                alt=""
              />
            </div>
          </div>
        )}
      </div>
    </Fragment>
  )
}
