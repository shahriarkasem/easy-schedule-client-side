import React from "react";
import team1 from "../../media/images/teams/team1.png";
import team2 from "../../media/images/teams/team2.png";
import team3 from "../../media/images/teams/team3.png";
import Navbar from "../Home/components/Navbar/Navbar";

const Teams = () => {
  return (
    <div className="min-h-screen px-11">
      <Navbar />
      <div className=" mt-28 mb-40">
        <h1>EASY SCHEDULE FOR TEAMS</h1>
        <div className="grid  lg:grid-cols-2 grid-cols-1 gap-10">
          <div>
            <h2 className="text-center lg:text-left lg:text-5xl text-4xl font-bold py-10">
              Smarter scheduling for teams
            </h2>
            <p className="text-2xl leading-loose font-sans pb-10 w-full  lg:pr-20">
              Whether your team’s performance is measured by sales revenue,
              recruiting pipeline, or customer retention, scheduling automation
              enables your team to hit goals faster.
            </p>
            <div className="lg:flex grid  grid-cols-1 justify-center lg:gap-10 gap-5">
              <button className="btn button-orange text-white">
                Start For Free
              </button>
              <button className="btn button-orange text-white">
                {" "}
                Contact Sales{" "}
              </button>
            </div>
          </div>
          <div>
            <img src={team1} alt="" />
          </div>
        </div>
      </div>
      <div className="my-40 ">
        <div className="grid  lg:grid-cols-2 grid-cols-1 gap-10">
          <div>
            <img src={team2} alt="" />
          </div>
          <div>
            <h1>SPEED OF CONNECTION</h1>
            <h2 className="text-center leading-relaxed lg:text-left text-3xl font-bold py-10">
              Outperform the competition with faster connections
            </h2>
            <p className="text-xl leading-relaxed font-sans pb-10 w-full lg:pr-10">
              You can’t waste time when prospects, clients, and candidates
              express interest. Avoid missed opportunities by automatically
              qualifying and routing website visitors to specific team members.
              You can also pool scheduling availability together to offer more
              options to connect.
            </p>
          </div>
        </div>
      </div>
      <div className="mb-40">
        <div className="grid  lg:grid-cols-2 grid-cols-1 gap-10">
          <div>
            <h1>TIME MANAGEMENT</h1>
            <h2 className="text-center leading-relaxed lg:text-left text-3xl font-bold py-10">
              Automate scheduling, improve team performance
            </h2>
            <p className="text-xl leading-relaxed font-sans pb-10 w-full lg:pr-10">
              Scheduling automation eliminates time-consuming admin tasks so
              your team can focus on higher priorities. With actionable insights
              into your team’s scheduling activities and integrations with your
              team’s favorite tools, you can identify potential process
              improvements and empower your team to work more efficiently.
            </p>
          </div>
          <div>
            <img src={team3} alt="" />
          </div>
        </div>
      </div>
      <div className=" bg-[#0A2540] -mx-11 text-center p-10  text-white">
        <h2 className=" lg:text-5xl text-4xl font-bold">
          Smarter scheduling for teams
        </h2>
        <p className="my-10 leading-loose ">
          Get started on the scheduling automation platform that enables teams
          to hit goals faster.
        </p>
        <div className="lg:flex grid  grid-cols-1 justify-center lg:gap-10 gap-5">
          <button className="btn button-orange text-white">
            Start For Free
          </button>
          <button className="btn button-orange text-white">
            {" "}
            Contact Sales{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Teams;
