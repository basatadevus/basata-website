import { Suspense } from "react";
import "./App.css";
import { useFakeTimeout } from "./hooks/fakeTimeout";
import Title from "./components/Title";
import Team from "./components/Team";

function App() {
  // const enabled = useFakeTimeout();
  return (
    <div>
      <Title />
      <div className="grid grid-cols-2 gap-3 p-3">
        <Team />
        <div className="flex justify-center items-center text-white">
          Contact us form here
        </div>
      </div>
    </div>
  );
}

function Loading() {
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="flex items-center justify-center h-[50%] w-[50%] bg-cyan-500 opacity-50">
        <div className="flex justify-center items-center h-max w-[50%]">
          <p className="text-white">Loading...</p>
        </div>
      </div>
    </div>
  );
}

export default App;
