import "./App.css";
import Logo from "./assets/images/logo.svg";
import Dashboard from "./assets/images/illustration-dashboard.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

function App() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <>
      <header className="flex flex-col justify-center items-center gap-4 pt-20 pb-10">
        <img src={Logo} alt="Logo" className="mb-10"></img>
        <h1 className="text-2xl font-thin md:text-3xl lg:text-4xl">
          We are launching <span className="font-bold">soon!</span>
        </h1>
        <p className="text-sm">Subscribe and get notified</p>
      </header>
      <main className="flex flex-col justify-center gap-8  items-center m-auto md:max-w-[700px]">
        <form
          style={{ gridTemplateColumns: ".7fr .3fr" }}
          className="flex flex-col md:grid md:w-full md:items-center md:justify-center gap-2 px-10"
        >
          <div className="flex flex-col items-center justify-center">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Your email address..."
              className={`px-6 py-2  rounded-full w-full border-2 ${
                error ? "border-[tomato]" : null
              } `}
            ></input>
            {error && (
              <p className="italic text-sm text-[tomato]">
                Please provide a valid email address.
              </p>
            )}
          </div>
          <button
            className="bg-blue-500 lg:hover:bg-blue-400 duration-300 text-white px-4 py-2 border-2 rounded-full shadow-md"
            type="button"
            onClick={() => {
              const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!emailPattern.test(email)) {
                setError(true);
              } else {
                setError(false);
              }
            }}
          >
            Notify Me
          </button>
        </form>
        <div className="p-8">
          <img src={Dashboard} alt="dashboard" className="w-full"></img>
        </div>
        <div className="flex flex-row gap-4 justify-center items-center">
          <div className="flex items-center justify-center p-2 rounded-full border-2 cursor-pointer text-blue-400 lg:hover:bg-blue-400 lg:hover:text-white duration-300">
            <FontAwesomeIcon icon={faFacebook} />
          </div>
          <div className="flex items-center justify-center p-2 rounded-full border-2 cursor-pointer text-gray-700 lg:hover:bg-gray-700 lg:hover:text-white duration-300">
            <FontAwesomeIcon icon={faXTwitter} />
          </div>
          <div className="flex items-center justify-center p-2 rounded-full border-2 cursor-pointer text-pink-400 lg:hover:bg-pink-400 lg:hover:text-white duration-300">
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
      </main>
      <footer className="p-8 flex items-center justify-center">
        <p className="text-sm text-gray-400">
          © Copyright Ping. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default App;
