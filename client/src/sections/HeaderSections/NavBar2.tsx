import React from "react";

const NavBar2: React.FC = () => {
  return (
    <div
      id="quest_or_response_navigation"
      className="w-full flex flex-row justify-center"
    >
      <div className="flex flex-row w-48 justify-between">
        <div id="quest" className="font-bold text-lg">
          Questions
        </div>
        <div id="response" className="font-bold text-lg">
          Responses
        </div>
      </div>
    </div>
  );
};

export default NavBar2;
