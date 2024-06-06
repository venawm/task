import React from "react";
import OrangeHeading from "./OrangeHeading";
import Image from "next/image";
import DrawOutlineButton from "./ui/OutlineButton";

const Blogs = () => {
  return (
    <div className="py-6 px-12 xl:px-24">
      <OrangeHeading text="Featured Blogs" />
      <h1 className="h1 text-center"> What We Provide</h1>
      <div className="flex flex-col justify-center items-center">
        <ul class="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
          <li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
            <div class="order-1 sm:ml-6 xl:ml-0">
              <h3 class="mb-1 text-slate-900 font-semibold">
                <span class="mb-1 block text-sm leading-6 text-indigo-500">
                  Easy Fruits
                </span>
                EasyFruits: Unlocking the Nutritional Power of Fruits in a
                Convenient Way
              </h3>
              <div class="prose prose-slate prose-sm text-slate-600">
                <p>
                  Welcome to the world of convenience and taste, where Easy
                  Fruits brings you a hassle-free way to enjoy the goodness of
                  nature. Life can be busy, but that doesn't mean you have to
                  compromise on nutrition and flavor.
                </p>
              </div>
              <a
                class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
                href=""
              >
                Learn more
                <svg
                  class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
                  width="3"
                  height="6"
                  viewBox="0 0 3 6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M0 0L3 3L0 6"></path>
                </svg>
              </a>
            </div>
            <div className="relative h-[300px] w-[400px]">
              <Image
                src="/blog/blog-1.png"
                alt=""
                class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full object-cover"
                fill
              />
            </div>
          </li>
          <li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
            <div class="order-1 sm:ml-6 xl:ml-0">
              <h3 class="mb-1 text-slate-900 font-semibold">
                <span class="mb-1 block text-sm leading-6 text-indigo-500">
                  Easy Fruits
                </span>
                Power of Fruits to revitalize your health
              </h3>
              <div class="prose prose-slate prose-sm text-slate-600">
                <p>
                  Fruits are nature's gift to our well-being, packed with
                  essential nutrients, antioxidants, and countless health
                  benefits. At Easyfruits, we're passionate about promoting good
                  health and making it effortless for you to enjoy these natural
                  wonders.
                </p>
              </div>
              <a
                class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
                href=""
              >
                Learn more
                <span class="sr-only"></span>
                <svg
                  class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
                  width="3"
                  height="6"
                  viewBox="0 0 3 6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M0 0L3 3L0 6"></path>
                </svg>
              </a>
            </div>
            <div className="relative h-[300px] w-[400px]">
              <Image
                src="/blog/blog-2.jpg"
                alt=""
                class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full object-cover"
                fill
              />
            </div>
          </li>
          <li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
            <div class="order-1 sm:ml-6 xl:ml-0">
              <h3 class="mb-1 text-slate-900 font-semibold">
                <span class="mb-1 block text-sm leading-6 text-indigo-500">
                  S.G
                </span>
                5 Must Try Fruits for Autumn Season
              </h3>
              <div class="prose prose-slate prose-sm text-slate-600">
                <p>
                  As the leaves change color and the air turns crisp, nature
                  presents us with a bountiful harvest of delicious fruits that
                  are not only a delight to the taste buds but also packed with
                  seasonal goodness.
                </p>
              </div>
              <a
                class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
                href=""
              >
                Learn more
                <span class="sr-only"></span>
                <svg
                  class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
                  width="3"
                  height="6"
                  viewBox="0 0 3 6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M0 0L3 3L0 6"></path>
                </svg>
              </a>
            </div>
            <div className="relative h-[300px] w-[400px]">
              <Image
                src="/blog/blog-3.png"
                alt=""
                class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full object-cover"
                fill
              />
            </div>
          </li>
        </ul>
        <DrawOutlineButton text="Read more" />
      </div>
    </div>
  );
};

export default Blogs;
