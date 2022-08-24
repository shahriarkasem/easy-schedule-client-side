import React from "react";

const CreateWorkflows = () => {
  return (
    <div className="mx-10">
      <h1 className="text-center my-10 text-2xl">Create a workflows</h1>
      <div className="">
        <div className="flex justify-between my-5">
          <div>
            <h3 className="my-2">Workflow name</h3>
            <input
              type="text"
              placeholder="Email reminder to host"
              class="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <h3 className="my-2">Which event types will this apply to?</h3>
            <select class="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Select...
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
        </div>
        <div className=" border  border-slate-300">
          <div className="p-10">
            <h3 className="mb-5">When this happens</h3>
            <div className=" workflowShadow ">
              <div className="flex justify-between p-5">
                <h3>24 hours before event starts</h3>

                <button className="">
                  <a href="#my-modal-2">Edit</a>

                  <div class="modal " id="my-modal-2">
                    <div class="modal-box p-10">
                      <h3 class="font-bold text-lg">Edit: When this happens</h3>
                      <div>
                        <div>
                          <h3 className="my-3 text-start">When this happens</h3>
                          <select class="select select-bordered w-full ">
                            <option disabled selected>
                              Who shot first?
                            </option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                          </select>
                        </div>
                        <div>
                          <h3 className="my-5 text-start">
                            How long before event starts?
                          </h3>
                          <div className="flex">
                            <div className="flex justify-evenly gap-5">
                              <div className="">
                                <input
                                  type="text "
                                  placeholder="24"
                                  class="input input-bordered w-full max-w-xs"
                                />
                              </div>
                              <div>
                                <select class="select select-bordered w-full max-w-xs">
                                  <option>Day</option>
                                  <option>Hours</option>
                                  <option>Minutes</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="modal-action">
                        <a href="#" class="btn">
                          Close
                        </a>
                        <a href="#" class="btn">
                          Submit
                        </a>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" border  border-slate-300 my-10">
          <div className="p-10">
            <h3 className="mb-5">Do this</h3>
            <div className=" workflowShadow ">
              <div className="flex justify-between p-5">
                <h3>Send email to host</h3>
                <div>
                  <button className="">
                    <a href="#my-modal-3 " className="mr-3">
                      Edit
                    </a>

                    <div class="modal " id="my-modal-3">
                      <div class="modal-box p-10">
                        <h3 class="font-bold text-lg">
                          Edit: Send email to host
                        </h3>
                        <div>
                          <div>
                            <h3 className="my-3 text-start">Subject</h3>
                            <input
                              type="text"
                              placeholder="Type here"
                              class="input input-bordered w-full "
                            />
                          </div>
                          <div>
                            <h3 className="my-3 text-start">Body</h3>
                            <input
                              type="text"
                              placeholder="Type here"
                              class="input input-bordered w-full h-48"
                            />
                          </div>
                        </div>
                        <div class="modal-action">
                          <a href="#" class="btn">
                            Close
                          </a>
                          <a href="#" class="btn">
                            Submit
                          </a>
                        </div>
                      </div>
                    </div>
                  </button>
                  <button className=" text-red-600">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CreateWorkflows;
