import React from "react";
import meet2 from "../../../../media/images/meet-1.jpg";
import meet3 from "../../../../media/images/meet-2.jpg";
import meet1 from "../../../../media/images/meet-3.jpg";

const Meeting = () => {
  return (
    <div className="my-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold  text-[#ef7841]">
          Simplicity Meets Power
        </h1>
        <p className="my-4">
          <span className="font-medium ">
            Tools that take the hassle out of online <br /> scheduling, booking
            and payments.
          </span>
        </p>
      </div>
      <div className="bg-base-100 shadow-xl p-8 md:mx-20 lg:mx-36 rounded">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
          <div class="card w-80">
            <div class="card-body">
              <figure>
                <img src={meet1} alt="Shoes" />
              </figure>
              <h2 class="card-title">Promote your availability.</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
          <div class="card w-80">
            <div class="card-body">
              <figure>
                <img src={meet2} alt="Shoes" />
              </figure>
              <h2 class="card-title">Stay organized.</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
          <div class="card w-80">
            <div class="card-body">
              <figure>
                <img src={meet3} alt="Shoes" />
              </figure>
              <h2 class="card-title">Save time.</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meeting;
