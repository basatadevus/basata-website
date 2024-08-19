import React from "react";

function Team() {
  return (
    <div>
      <div>
        <h1 className="text-white text-2xl pl-[8px] font-bold">
          Meet our team!
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-5 p-5">
        <div className="flex flex-col items-center">
          <img src="https://via.placeholder.com/150" alt="Profile Pic" />
          <h2 className="text-white">John Doe</h2>
          <p className="text-white">Software Engineer</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="https://via.placeholder.com/150" alt="Profile Pic" />
          <h2 className="text-white">Jane Smith</h2>
          <p className="text-white">Product Manager</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="https://via.placeholder.com/150" alt="Profile Pic" />
          <h2 className="text-white">John Doe</h2>
          <p className="text-white">Software Engineer</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="https://via.placeholder.com/150" alt="Profile Pic" />
          <h2 className="text-white">Jane Smith</h2>
          <p className="text-white">Product Manager</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="https://via.placeholder.com/150" alt="Profile Pic" />
          <h2 className="text-white">John Doe</h2>
          <p className="text-white">Software Engineer</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="https://via.placeholder.com/150" alt="Profile Pic" />
          <h2 className="text-white">Jane Smith</h2>
          <p className="text-white">Product Manager</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
