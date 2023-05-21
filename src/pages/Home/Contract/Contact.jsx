import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import contract from "../../../assets/73195-business-partnership-contract-handshake.json";

const Contact = () => {
  return (
    <div
      className="hero min-h-[600px] my-10"
      style={{
        backgroundImage: `url('https://image.slidesdocs.com/responsive-images/slides/0-blue-simple-contract-law-practical-training-powerpoint-background_93f8269ea7__960_540.jpg')`,
      }}
    >
      <div className="my-10 py-8">
        <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="mt-2 mx-auto text-4xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Contact with us
            </h2>
            <p className="text-base mx-auto lg:px-20 text-white font-semibold tracking-wide ">
              We value your feedback and are always happy to assist you. If you
              have any questions, comments, or suggestions, please don not
              hesitate to reach out to us. Here are the various ways you can
              contact us.
            </p>
          </div>
          <div className="mt-10 md:grid md:grid-cols-2 md:gap-6">
            <div className="md:col-span-1">
              <div>
                <Player
                  autoplay
                  style={{ height: "100%", width: "100%" }}
                  loop
                  src={contract}
                ></Player>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 bg-blue-900  md:mt-0 md:col-span-1">
              <div className="max-w-md mx-auto">
                <form className="mt-8 space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-white"
                    >
                      Name
                    </label>
                    <div className="mt-1">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-white"
                    >
                      Message
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows="3"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      ></textarea>
                    </div>
                  </div>
                  <div className="pb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
