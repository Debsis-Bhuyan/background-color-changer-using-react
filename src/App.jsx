import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [Color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen p-0 m-0   "
        style={{ backgroundColor: Color }}
      >
        <div className=" shadow top-6  rounded-lg overflow-hidden mb-6">
          <h1 className="text-center m-20 text-white my-3 text-3xl">
            Background Color Changer{" "}
          </h1>
        </div>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "red" }}
              onClick={() => {
                setColor("red");
              }}
            >
              Red
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "green" }}
              onClick={() => {
                setColor("green");
              }}
            >
              Green
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "black" }}
              onClick={() => {
                setColor("black");
              }}
            >
              black
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "orange" }}
              onClick={() => {
                setColor("orange");
              }}
            >
              Orange
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "blue" }}
              onClick={() => {
                setColor("blue");
              }}
            >
              Blue
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "violet" }}
              onClick={() => {
                setColor("violet");
              }}
            >
              Violet
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "white", color: "black" }}
              onClick={() => {
                setColor("white");
              }}
            >
              White
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "pink" }}
              onClick={() => {
                setColor("pink");
              }}
            >
              Pink
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
