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
        className="h-[600px] py-24 flex justify-end items-center"
      >
        <div className="relative w-full h-full">
          <img
            className={`z-10 absolute right-40`}
            src={`./${item.path}`}
            alt=""
          />
          <div
            className={`w-[70%] h-4/5 bg-[#5365dc] rounded-r-full absolute bottom-0 left-0 mix-blend-soft-light`}
          />
        </div>
        <div className="flex flex-col  items-start">
          <h1 className="w-2/3 font-['Rubik'] text-3xl font-medium">
            {item.title}
          </h1>
          <p className="text-md text-[#999a9f] w-2/3 mt-5">{item.desc}</p>
          <button
            className="self-start mt-5  py-3 px-8 rounded-md text-sm text-white bg-[#5365dc] tracking-wide drop-shadow 
      hover:bg-white hover:text-[#5365dc] hover:border-solid hover:border hover:border-[#5365dc]"
          >
            {item.btnTitle}
          </button>
        </div>
      </section>
    ))
}

export default Feature
