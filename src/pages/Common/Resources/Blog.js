import React from "react";
import "./Blog.css";
import bg from "../../../media/images/blog/11.jpg";
import blog1 from "../../../media/images/blog/22.jpg";
import blog2 from "../../../media/images/blog/33.jpg";
import blog3 from "../../../media/images/blog/44.jpg";
import blog4 from "../../../media/images/blog/55.jpg";
import blog5 from "../../../media/images/blog/66.jpg";
import blog6 from "../../../media/images/blog/77.jpg";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <div className=" blog-bg-2 pb-40  pt-20  flex justify-center items-center">
        <div class="">
          <h2 className=" text-gray-800 lg:text-6xl text-center  text-3xl  font-bold">
            Blog
          </h2>
          <p className="mt-10 text-center">
            Guides, articles and resources to get you up to speed with online
            scheduling
          </p>
        </div>
      </div>
      <div>
        <a href="">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 px-20">
            <div>
              <h3 className=" text-3xl py-5">
                7 Productivity Podcasts To Help You Get More Done
              </h3>
              <p className=" text-gray-500">July 2020</p>
              <p className="my-5  text-gray-500">
                Looking for ways to get more done in less time? This
                productivity podcast guide (filled with favorite episodes from
                each show) is here to help you be more efficient.
              </p>
              <div className="flex  items-center gap-6">
                <div class="avatar">
                  <div class=" w-12 rounded-full">
                    <img src="https://placeimg.com/192/192/people8" alt="" />
                  </div>
                </div>
                <div>
                  <h5>Madeline Miller</h5>
                  <p className="text-gray-500">4 min read</p>
                </div>
              </div>
            </div>
            <div className="">
              <img className="shadow-xl rounded-xl" src={bg} alt="" />
            </div>
          </div>
        </a>
        <div className="blog-bg-1  grid lg:grid-cols-3 gap-5 grid-cols-1 mt-20 lg:px-20 px-5">
          <div className="shadow-xl my-16 rounded-xl">
            <a href="">
              <img src={blog1} alt="" />
              <div className="px-8 py-5 bg-white">
                <h3 className=" text-2xl mb-5">
                  Scheduling Software: The Ultimate Guide for Academic Advisors
                </h3>
                <p className=" text-gray-500">July 2020</p>
                <p className="text-gray-500 mt-5 ">
                  Add appointment scheduling software to your toolkit to make
                  your advising more effective and create an outstanding student
                  experience.
                </p>
                <div className="flex  items-center gap-6  mt-5">
                  <div class="avatar">
                    <div class=" w-12 rounded-full">
                      <img src="https://placeimg.com/192/192/people7" alt="" />
                    </div>
                  </div>
                  <div>
                    <h5>Madeline Miller</h5>
                    <p className="text-gray-500">4 min read</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="shadow-xl my-16 rounded-1xl">
            <a href="">
              <img className="" src={blog2} alt="" />
              <div className="px-8 py-5 bg-white">
                <h3 className=" text-2xl mb-5">
                  How to Manage University Walk-in Hours
                </h3>
                <p className=" text-gray-500">July 2020</p>
                <p className="text-gray-500 mt-5 ">
                  Open office hours or scheduled appointments? We take a look at
                  what works best for students, and for advisors. You might be
                  surprised at the answers!
                </p>
                <div className="flex  items-center gap-6  mt-5">
                  <div class="avatar">
                    <div class=" w-12 rounded-full">
                      <img src="https://placeimg.com/192/192/people6" alt="" />
                    </div>
                  </div>
                  <div>
                    <h5>Kate Reynier</h5>
                    <p className="text-gray-500">6 min read</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="shadow-xl rounded-xl my-16">
            <a href="">
              <img src={blog3} alt="" />
              <div className="px-8 py-5 bg-white">
                <h3 className=" text-2xl mb-5">
                  Starting a Podcast? See How a Calendar Scheduling App Can Help
                </h3>
                <p className=" text-gray-500">July 2020</p>
                <p className="text-gray-500 mt-5 ">
                  Want to learn how to start your own podcast? Well, we’re
                  starting a new Captivate show of our own and we’re taking you
                  along for the ride!
                </p>
                <div className="flex  items-center gap-6  mt-5">
                  <div class="avatar">
                    <div class=" w-12 rounded-full">
                      <img src="https://placeimg.com/192/192/people5" alt="" />
                    </div>
                  </div>
                  <div>
                    <h5>Ben Dlugiewicz</h5>
                    <p className="text-gray-500">5 min read</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="my-20">
          <a href="">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 px-20">
              <div className="">
                <img className="shadow-xl rounded-xl" src={bg} alt="" />
              </div>
              <div>
                <h3 className=" text-3xl py-5">
                  What is a Sales Pipeline and How to Build Yours
                </h3>
                <p className=" text-gray-500">July 2020</p>
                <p className="my-5  text-gray-500">
                  Sourcing, connecting with, and converting leads can be a
                  daunting task. Get the tools and steps you need to build a
                  solid sales pipeline to meet your targets and grow your
                  revenue.
                </p>
                <div className="flex  items-center gap-6">
                  <div class="avatar">
                    <div class=" w-12 rounded-full">
                      <img src="https://placeimg.com/192/192/people4" alt="" />
                    </div>
                  </div>
                  <div>
                    <h5>Cristian Ungureanu</h5>
                    <p className="text-gray-500">7 min read</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="blog-bg-1  grid lg:grid-cols-3 gap-5 grid-cols-1 mt-20 lg:px-20 px-5">
          <div className="shadow-xl my-16 rounded-xl">
            <a href="">
              <img src={blog4} alt="" />
              <div className="px-8 py-5 bg-white">
                <h3 className=" text-2xl mb-5">
                  Life Lessons from a Serial Entrepreneur with Nic Haralambous
                </h3>
                <p className=" text-gray-500">July 2020</p>
                <p className="text-gray-500 mt-5 ">
                  On this episode of our productivity podcast, Get More Done, we
                  learn how Nic stays motivated despite failures, how his unique
                  worldviews shape his life, and how he built a business in 30
                  days with just $300.
                </p>
                <div className="flex  items-center gap-6  mt-5">
                  <div class="avatar">
                    <div class=" w-12 rounded-full">
                      <img src="https://placeimg.com/192/192/people3" alt="" />
                    </div>
                  </div>
                  <div>
                    <h5>Easy Schedulers Team</h5>
                    <p className="text-gray-500">10 min read</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="shadow-xl my-16 rounded-1xl">
            <a href="">
              <img className="" src={blog5} alt="" />
              <div className="px-8 py-5 bg-white">
                <h3 className=" text-2xl mb-5">
                  6 Ways to Generate Sales Leads on Autopilot
                </h3>
                <p className=" text-gray-500">July 2020</p>
                <p className="text-gray-500 mt-5 ">
                  Do you address the right audience with the right message? Do
                  you know what the single most crucial element of keyword
                  research is? Find out the answers to these and other burning
                  lead generation questions.
                </p>
                <div className="flex  items-center gap-6  mt-5">
                  <div class="avatar">
                    <div class=" w-12 rounded-full">
                      <img src="https://placeimg.com/192/192/people2" alt="" />
                    </div>
                  </div>
                  <div>
                    <h5>David Morneau</h5>
                    <p className="text-gray-500">6 min read</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="shadow-xl rounded-xl my-16">
            <a href="">
              <img src={blog6} alt="" />
              <div className="px-8 py-5 bg-white">
                <h3 className=" text-2xl mb-5">
                  6 Ways to Personalize the Employee Onboarding Process
                </h3>
                <p className=" text-gray-500">July 2020</p>
                <p className="text-gray-500 mt-5 ">
                  Do you want your new employees to feel comfortable and excited
                  to jump into their roles? Find out how to customize your
                  onboarding process to quickly integrate new hires into your
                  team.
                </p>
                <div className="flex  items-center gap-6  mt-5">
                  <div class="avatar">
                    <div class=" w-12 rounded-full">
                      <img src="https://placeimg.com/192/192/people1" alt="" />
                    </div>
                  </div>
                  <div>
                    <h5>Kate Reynier</h5>
                    <p className="text-gray-500">5 min read</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="flex  justify-center my-10">
          <div class="btn-group">
            <button class="btn  btn-sm btn-active">1</button>
            <button class="btn btn-sm ">2</button>
            <button class="btn btn-sm">3</button>
            <button class="btn btn-sm">4</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
