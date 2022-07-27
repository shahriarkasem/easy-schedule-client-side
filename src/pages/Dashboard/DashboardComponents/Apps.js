import React from "react";
import apple from "../../../media/images/dashboardApps/apple-logo-rob-janoff-01.jpg";
import appleLogo from "../../../media/images/dashboardApps/available-the-app-store-logo-png-images-14.png";
import android from "../../../media/images/dashboardApps/Android_symbol_green_RGB.png";
import androidLogo from "../../../media/images/dashboardApps/png-transparent-google-play-application-google-play-android-app-store-play-text-label-logo.png";
import chrome from "../../../media/images/dashboardApps/google_chrome_new_logo-512.webp";
import edge from "../../../media/images/dashboardApps/Microsoft_Edge_logo_(2019).png";
import outlook from "../../../media/images/dashboardApps/Microsoft_Office_Outlook_(2018–present).svg.png";
import firefox from "../../../media/images/dashboardApps/Firefox_logo,_2017.svg.png";


const Apps = () => {
  return (
    <div className="min-h-screen my-10">
      <div className=" mx-4 mt-10 lg:mx-48">
        <div>
          <h2 className="my-5 text-lg font-bold">Apps</h2>
        </div>
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">

            <div class="flex flex-col lg:flex-row justify-center lg:card-side bg-base-100 shadow-xl px-5 py-5">
              <figure className="flex items-center">
                <img className="w-40" src={apple} alt="Album" />
              </figure>
              <div class="flex flex-col justify-center items-start mt-3 lg:mt-0 px-5">
                <h4 className="font-semibold">Mobile App</h4>
                <h2 className="font-semibold text-xl"><span className="text-[#ef7841]">Easy-Schedule</span> iPhone App</h2>
                <p>Schedule better meetings on the go.</p>
                <div>
                  <a href="https://www.apple.com/app-store/">
                    <img
                      className="w-40 mt-2 md:mt-6"
                      src={appleLogo}
                      alt=""
                    ></img>
                  </a>
                </div>
              </div>
            </div>
            <div class="flex flex-col lg:flex-row justify-center items- lg:card-side bg-base-100 shadow-xl px-5 py-5">
              <figure className="flex items-center">
                <img className="w-40 mb-20" src={android} alt="Album" />
              </figure>
              <div class="flex flex-col justify-center items-start mt-3 lg:mt-0 px-5">
                <h4 className="font-semibold">Mobile App</h4>
                <h2 className="font-semibold text-xl"><span className="text-[#ef7841]">Easy-Schedule</span> Android App</h2>
                <p>Schedule better meetings on the go.</p>
                <div>
                  <a href="https://play.google.com/store/apps?gl=us">
                    <img
                      className="w-40 mt-2 md:mt-6"
                      src={androidLogo}
                      alt=""
                    ></img>
                  </a>
                </div>
              </div>
            </div>
            <div class="flex flex-col lg:flex-row justify-center items- lg:card-side bg-base-100 shadow-xl px-5 py-5">
              <figure className="flex items-center">
                <img className="w-40" src={chrome} alt="Album" />
              </figure>
              <div class="flex flex-col justify-center items-start mt-3 lg:mt-0 px-5">
                <h4 className="font-semibold">Browser Extension</h4>
                <h2 className="font-semibold text-xl"><span className="text-[#ef7841]">Easy-Schedule</span> for Chrome</h2>
                <p>Quickly access and share your availability right from your browser.</p>
                <div className=" mt-3 md:mt-5">
                  <a className="text-blue-600 hover:underline" href="https://chrome.google.com/webstore/category/extensions">
                    View on Chrome Web Store ➡️
                  </a>
                </div>
              </div>
            </div>
            <div class="flex flex-col lg:flex-row justify-center items- lg:card-side bg-base-100 shadow-xl px-5 py-5">
              <figure className="flex items-center">
                <img className="w-40" src={edge} alt="Album" />
              </figure>
              <div class="flex flex-col justify-center items-start mt-3 lg:mt-0 px-5">
                <h4 className="font-semibold">Browser Extension</h4>
                <h2 className="font-semibold text-xl"><span className="text-[#ef7841]">Easy-Schedule</span> for Edge</h2>
                <p>Use the Easy-Schedule for chrome extension in Microsoft Edge.</p>
                <div className=" mt-3 md:mt-5">
                  <a className="text-blue-600 hover:underline" href="https://chrome.google.com/webstore/category/extensions">
                    View on Chrome Web Store ➡️
                  </a>
                </div>
              </div>
            </div>
            <div class="flex flex-col lg:flex-row justify-center items- lg:card-side bg-base-100 shadow-xl px-5 py-5">
              <figure className="flex items-center">
                <img className="w-40" src={outlook} alt="Album" />
              </figure>
              <div class="flex flex-col justify-center items-start mt-3 lg:mt-0 px-5">
                <h4 className="font-semibold">Email Add-in</h4>
                <h2 className="font-semibold text-xl"><span className="text-[#ef7841]">Easy-Schedule</span> for Outlook</h2>
                <p>Quickly access and share your availability right from your Outlook inbox.</p>
                <div className=" mt-3 md:mt-5">
                  <a className="text-blue-600 hover:underline" href="https://chrome.google.com/webstore/category/extensions">
                    View on Microsoft AppSource ➡️
                  </a>
                </div>
              </div>
            </div>
            <div class="flex flex-col lg:flex-row justify-center items- lg:card-side bg-base-100 shadow-xl px-5 py-5">
              <figure className="flex items-center">
                <img className="w-40" src={firefox} alt="Album" />
              </figure>
              <div class="flex flex-col justify-center items-start mt-3 lg:mt-0 px-5">
                <h4 className="font-semibold">Browser Extension</h4>
                <h2 className="font-semibold text-xl"><span className="text-[#ef7841]">Easy-Schedule</span> for Firefox</h2>
                <p>Quickly access and share your availability right from your browser.</p>
                <div className=" mt-3 md:mt-5">
                  <a className="text-blue-600 hover:underline" href="https://chrome.google.com/webstore/category/extensions">
                    View on Firefox Web Store ➡️
                  </a>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apps;
