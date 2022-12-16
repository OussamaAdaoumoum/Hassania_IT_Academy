
import { Link, Route, Routes } from "react-router-dom";

function Home() {
  return (

<div className="relative antialiased tracking-tight text-gray-500 bg-black font-inter">
    <div className="absolute inset-0 bg-top bg-no-repeat bg-illustration-01"></div>
    <div
      className="absolute inset-0 bg-center bg-no-repeat bg-illustration-02"
    ></div>
    <div className="container relative">
      <div className="flex items-center justify-between py-6">
        <Link to="/Home">
          <img className="block w-8 h-8" src="img/logo.svg" alt="" />
        </Link>
        <Link to="/Home">
          <svg
            className="w-6 h-6 fill-current md:hidden"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </Link>
        <div className="flex items-center mb-4 md:block">
          <Link className="mr-8 font-semibold hover:text-white" to="/Home"
            >Documentation</Link>
          <Link className="bg-indigo-600 btn hover:bg-indigo-500" to="/Home">Sign up</Link>
        </div>
      </div>
      <h1
        className="px-8 mt-16 mb-4 text-5xl font-extrabold leading-tight text-center text-white xl:text-6xl"
      >
        Landing template for <span className="text-indigo-700">startups</span>
      </h1>
      <p className="max-w-xl mx-auto mb-8 text-xl text-center xl:max-w-2xl">
        Our landing page template works on all devices, so you only have to set
        it up once, and get beautiful results forever.
      </p>
      <div
        className="flex flex-col justify-center max-w-xs mx-auto mb-12 sm:max-w-full sm:flex-row"
      >
        <Link
          className="w-full mb-4 whitespace-no-wrap bg-indigo-600 btn btn-tall md:w-auto hover:bg-indigo-500 sm:mr-2"
          to="/Home"
        >
          Get started
        </Link>
        <Link
          className="w-full mb-4 whitespace-no-wrap bg-gray-800 btn btn-tall md:w-auto hover:bg-gray-600 sm:ml-2"
          to="/Home"
        >
          View on Github
        </Link>
      </div>
      <div className="mb-16">
        <img
          className="block w-full max-w-5xl mx-auto rounded"
          src="img/video-placeholder.jpg"
          alt=""
        />
      </div>
      <div>
        <h2 className="title sm:text-4xl md:text-5xl">
          Build up the whole picture
        </h2>
        <p className="mb-16 mx-auto intro sm:max-w-xl">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum — semper quis lectus nulla
          at volutpat diam ut venenatis.
        </p>
        <ul
          className="flex flex-col flex-wrap justify-center mb-20 text-center border-b border-gray-900 sm:flex-row"
        >
          <li className="w-full px-6 mb-8 sm:mb-16 md:w-1/2 lg:w-1/3">
            <span
              className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white bg-indigo-700 rounded-full"
            >
              <img src="img/feature-tile-icon-01.svg" alt="" />
            </span>
            <h3 className="mb-2 text-2xl font-bold text-white">Robust Workflow</h3>
            <p className="max-w-xs mx-auto text-lg text-gray-500">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </p>
          </li>
          <li className="w-full px-6 mb-8 sm:mb-16 md:w-1/2 lg:w-1/3">
            <span
              className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white bg-indigo-700 rounded-full"
            >
              <img src="img/feature-tile-icon-02.svg" alt="" />
            </span>
            <h3 className="mb-2 text-2xl font-bold text-white">Robust Workflow</h3>
            <p className="max-w-xs mx-auto text-lg text-gray-500">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </p>
          </li>
          <li className="w-full px-6 mb-8 sm:mb-16 md:w-1/2 lg:w-1/3">
            <span
              className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white bg-indigo-700 rounded-full"
            >
              <img src="img/feature-tile-icon-03.svg" alt="" />
            </span>
            <h3 className="mb-2 text-2xl font-bold text-white">Robust Workflow</h3>
            <p className="max-w-xs mx-auto text-lg text-gray-500">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </p>
          </li>
          <li className="w-full px-6 mb-8 sm:mb-16 md:w-1/2 lg:w-1/3">
            <span
              className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white bg-indigo-700 rounded-full"
            >
              <img src="img/feature-tile-icon-04.svg" alt="" />
            </span>
            <h3 className="mb-2 text-2xl font-medium text-white">
              Robust Workflow
            </h3>
            <p className="max-w-xs mx-auto text-lg text-gray-500">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </p>
          </li>
          <li className="w-full px-6 mb-8 sm:mb-16 md:w-1/2 lg:w-1/3">
            <span
              className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white bg-indigo-700 rounded-full"
            >
              <img src="img/feature-tile-icon-05.svg" alt="" />
            </span>
            <h3 className="mb-2 text-2xl font-medium text-white">
              Robust Workflow
            </h3>
            <p className="max-w-xs mx-auto text-lg text-gray-500">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </p>
          </li>
          <li className="w-full px-8 mb-8 sm:mb-16 md:w-1/2 lg:w-1/3">
            <span
              className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white bg-indigo-700 rounded-full"
            >
              <img src="img/feature-tile-icon-06.svg" alt="" />
            </span>
            <h3 className="mb-2 text-2xl font-medium text-white">
              Robust Workflow
            </h3>
            <p className="max-w-xs mx-auto text-lg text-gray-500">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </p>
          </li>
        </ul>
      </div>
      <div className="mb-16 border-b border-gray-800">
        <h2 className="mb-2 title sm:text-4xl md:text-5xl">
          Workflow that just works
        </h2>
        <p className="mb-20 mx-auto intro sm:max-w-xl">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum — semper quis lectus nulla
          at volutpat diam ut venenatis.
        </p>
        <div className="flex flex-col mb-8 sm:flex-row">
          <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
            <img
              className="rounded-sm"
              src="img/features-split-image-01.png"
              alt=""
            />
          </div>
          <div
            className="flex flex-col justify-center mb-8 sm:w-1/2 md:w-7/12 sm:pr-16"
          >
            <p
              className="mb-2 text-sm font-semibold leading-none text-center text-indigo-600 uppercase sm:text-left"
            >
              Lightning fast workflow
            </p>
            <h3 className="title title-small sm:text-left md:text-4xl">
              Data-driven insights
            </h3>
            <p className="text md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="flex flex-col mb-8 sm:flex-row">
          <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12">
            <img
              className="rounded-sm"
              src="img/features-split-image-02.png"
              alt=""
            />
          </div>
          <div
            className="flex flex-col justify-center mb-8 sm:w-1/2 md:w-7/12 sm:pl-16"
          >
            <p
              className="mb-2 text-sm font-semibold leading-none text-center text-indigo-600 uppercase sm:text-left"
            >
              Lightning fast workflow
            </p>
            <h3 className="title title-small sm:text-left md:text-4xl">
              Data-driven insights
            </h3>
            <p className="text md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="flex flex-col mb-8 sm:flex-row">
          <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
            <img
              className="rounded-sm"
              src="img/features-split-image-03.png"
              alt=""
            />
          </div>
          <div
            className="flex flex-col justify-center mb-8 sm:w-1/2 md:w-7/12 sm:pr-16"
          >
            <p
              className="mb-2 text-sm font-semibold leading-none text-center text-indigo-600 uppercase sm:text-left"
            >
              Lightning fast workflow
            </p>
            <h3 className="title title-small sm:text-left md:text-4xl">
              Data-driven insights
            </h3>
            <p className="text md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <div className="mb-16">
        <h2 className="title sm:text-4xl md:text-5xl">Customer testimonials</h2>
        <p className="intro mx-auto sm:max-w-xl">
          Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper
          quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.
        </p>
        <div
          className="flex flex-col justify-center -ml-4 -mr-4 md:flex-row md:flex-wrap"
        >
          <div
            className="max-w-sm p-4 mx-auto md:max-w-full md:mx-0 md:w-1/2 lg:w-1/3"
          >
            <div className="p-8 bg-gray-800">
              <div className="mb-8 text-indigo-600">
                <svg
                  className="fill-current"
                  width="24"
                  height="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 13.481c0-2.34.611-4.761 1.833-7.263C3.056 3.716 4.733 1.643 6.865 0L11 2.689C9.726 4.382 8.777 6.093 8.152 7.824c-.624 1.73-.936 3.578-.936 5.545V18H0v-4.519zm13 0c0-2.34.611-4.761 1.833-7.263 1.223-2.502 2.9-4.575 5.032-6.218L24 2.689c-1.274 1.693-2.223 3.404-2.848 5.135-.624 1.73-.936 3.578-.936 5.545V18H13v-4.519z"
                    fill-rule="nonzero"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <blockquote
                className="pb-8 mb-4 -mt-4 text-lg border-b border-gray-700"
              >
                — Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum cillum dolore eu fugiat.
              </blockquote>
              <p className="font-semibold">
                <span className="text-white">Roman Level</span>
                <span className="text-gray-700">/</span>
                <Link to="/Home" className="text-green-400 hover:text-green-300"
                  >AppName</Link>
    
              </p>
            </div>
          </div>
          <div
            className="max-w-sm p-4 mx-auto md:max-w-full md:mx-0 md:w-1/2 lg:w-1/3"
          >
            <div className="p-8 bg-gray-800">
              <div className="mb-8 text-indigo-600">
                <svg
                  className="fill-current"
                  width="24"
                  height="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 13.481c0-2.34.611-4.761 1.833-7.263C3.056 3.716 4.733 1.643 6.865 0L11 2.689C9.726 4.382 8.777 6.093 8.152 7.824c-.624 1.73-.936 3.578-.936 5.545V18H0v-4.519zm13 0c0-2.34.611-4.761 1.833-7.263 1.223-2.502 2.9-4.575 5.032-6.218L24 2.689c-1.274 1.693-2.223 3.404-2.848 5.135-.624 1.73-.936 3.578-.936 5.545V18H13v-4.519z"
                    fill-rule="nonzero"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <blockquote
                className="pb-8 mb-4 -mt-4 text-lg border-b border-gray-700"
              >
                — Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum cillum dolore eu fugiat.
              </blockquote>
              <p className="font-semibold">
                <span className="text-white">Diana Rynzhuk</span>
                <span className="text-gray-700">/</span>
                <Link to="/Home" className="text-green-400 hover:text-green-300"
                  >AppName</Link>
              </p>
            </div>
          </div>
          <div
            className="max-w-sm p-4 mx-auto md:max-w-full md:mx-0 md:w-1/2 lg:w-1/3"
          >
            <div className="p-8 bg-gray-800">
              <div className="mb-8 text-indigo-600">
                <svg
                  className="fill-current"
                  width="24"
                  height="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 13.481c0-2.34.611-4.761 1.833-7.263C3.056 3.716 4.733 1.643 6.865 0L11 2.689C9.726 4.382 8.777 6.093 8.152 7.824c-.624 1.73-.936 3.578-.936 5.545V18H0v-4.519zm13 0c0-2.34.611-4.761 1.833-7.263 1.223-2.502 2.9-4.575 5.032-6.218L24 2.689c-1.274 1.693-2.223 3.404-2.848 5.135-.624 1.73-.936 3.578-.936 5.545V18H13v-4.519z"
                    fill-rule="nonzero"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <blockquote
                className="pb-8 mb-4 -mt-4 text-lg border-b border-gray-700"
              >
                — Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum cillum dolore eu fugiat.
              </blockquote>
              <p className="font-semibold">
                <span className="text-white">Ben Stafford</span>
                <span className="text-gray-700">/</span>
                <Link to="/Home" className="text-green-400 hover:text-green-300"
                  >AppName</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col items-center px-4 py-8 mb-16 bg-indigo-700 bg-right-bottom bg-no-repeat bg-cover sm:flex-row sm:py-16 sm:px-12"
        style="background-image: url('img/cta-illustration.svg')"
      >
        <h2
          className="max-w-xs mx-auto mb-10 text-2xl font-bold text-center text-white sm:text-3xl sm:mr-10 sm:max-w-full sm:text-left sm:w-1/3 sm:mx-0 sm:mb-0 md:w-1/2 lg:w-7/12"
        >
          For previewing layouts and visual?
        </h2>
        <div className="flex flex-grow w-full sm:w-2/3 md:w-1/2 lg:w-5/12">
          <form
            className="flex items-center w-full p-4 bg-white rounded-sm space-between"
            action="#"
          >
            <input
              className="flex-grow text-gray-900 placeholder-gray-500 bg-white appearance-none"
              type="text"
              placeholder="Your best email"
            />
            <svg
              className="text-indigo-700 fill-current"
              width="16"
              height="12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z"
                fill="#376DF9"
              ></path>
            </svg>
          </form>
        </div>
      </div>
      <div className="flex flex-col items-center sm:flex-row sm:justify-between">
        <Link className="text-indigo-700" to="/Home">
          <img src="img/logo.svg" alt="" className="mx-auto mb-4" />
        </Link>
        <div className="flex flex-row justify-center mb-4 -ml-4 -mr-4">
          <Link to="/Home" className="p-4 text-indigo-700 hover:text-indigo-400">
            <svg
              className="fill-current"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"
                fill="currentColor"
              ></path>
            </svg>
          </Link>
          <Link to="/Home" className="p-4 text-indigo-700 hover:text-indigo-400">
            <svg
              className="fill-current"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"
                fill="currentColor"
              ></path>
            </svg>
          </Link>
          <Link to="/Home" className="p-4 text-indigo-700 hover:text-indigo-400">
            <svg
              className="fill-current"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <circle cx="12.145" cy="3.892" r="1"></circle>
                <path
                  d="M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"
                  fill="currentColor"
                ></path>
                <path
                  d="M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z"
                  fill="currentColor"
                ></path>
              </g>
            </svg>
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-between mb-8 text-center sm:flex-row">
        <p className="order-last mb-4 text-sm text-gray-500 sm:order-first">
          Designed by
          <Link to="/Homettps://cruip.com/" className="text-white">Cruip</Link>. Coded by
          <Link to="/Homettps://michelegera.dev/" className="text-white">michelegera</Link>
        </p>
        <ul className="flex flex-row justify-center mb-6 -ml-4 -mr-4 text-sm">
          <li>
            <Link to="/Home" className="px-4 text-gray-500 hover:text-white">Contact</Link>
          </li>
          <li>
            <Link to="/Home" className="px-4 text-gray-500 hover:text-white">About us</Link>
          </li>
          <li>
            <Link to="/Home" className="px-4 text-gray-500 hover:text-white">FAQ's</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  );
  }


  export default Home;