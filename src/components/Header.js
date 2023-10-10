import React from "react";
import DarkMode from "./DarkMode";

const Header = () => {
  return (
    <div className="w-full text-white py-10 flex justify-between items-center border-b-[1px] border-b-blue-600">
      <div>
        <h1 className="text-2xl font-bold uppercase">Abhirami</h1>
      </div>
      <div>
        <ul className="flex gap-6 text-sm uppercase font-semibold">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Education</li>
          <li>Projects</li>
          <li>Experience</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
     <DarkMode/>
      </div>
    </div>
  );
};


export default Header;
