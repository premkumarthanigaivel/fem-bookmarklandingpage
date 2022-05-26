/* eslint-disable @next/next/no-img-element */

const features = [
  {
    path: "illustration-features-tab-1.svg",
    title: "Bookmark in one click",
    desc: "Organize your bookmarks however you like. Our simple drag-and-dro interface gives you complete control over how you manage your favourite sites.",
    btnTitle: "More Info",
  },
  {
    path: "illustration-features-tab-2.svg",
    title: "Intelligent search",
    desc: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    btnTitle: "More Info",
  },
  {
    path: "illustration-features-tab-3.svg",
    title: "Share your bookmarks",
    desc: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    btnTitle: "More Info",
  },
]

const Feature = ({ currentFeature }) => {
  return features
    .filter(item => item?.title === currentFeature)
    .map((item, idx) => (
      <section
        key={idx}
        className="flex h-[600px] flex-col items-center justify-end py-10 md:mt-0 md:flex-row md:py-24"
      >
        <div className="relative h-72 w-full md:h-full">
          <img
            className={`relative bottom-8 left-12 right-0 z-10 w-4/5 md:absolute md:right-40 md:top-0 md:w-fit md:max-w-full`}
            src={`./${item.path}`}
            alt=""
          />
          <div
            className={`absolute bottom-0 left-0 h-4/5  w-[70%] rounded-r-full bg-[#5365dc] mix-blend-soft-light`}
          />
        </div>
        <div className="mt-8 flex flex-col items-center  md:mt-0 md:items-start ">
          <h1 className="mt-10 text-center font-['Rubik'] text-3xl font-medium md:mt-0 md:w-2/3 md:text-left">
            {item.title}
          </h1>
          <p className="text-md mt-5 w-full px-10 text-[#999a9f] md:w-2/3 md:px-0">
            {item.desc}
          </p>
          <button
            className="mt-5 self-center rounded-md  bg-[#5365dc] py-3 px-8 text-sm tracking-wide text-white drop-shadow hover:border 
      hover:border-solid hover:border-[#5365dc] hover:bg-white hover:text-[#5365dc] md:self-start"
          >
            {item.btnTitle}
          </button>
        </div>
      </section>
    ))
}

export default Feature
