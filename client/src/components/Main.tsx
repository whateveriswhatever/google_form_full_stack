import { useState } from "react";
import BriefContent from "../sections/MainSections/BriefContent";
import Card from "../sections/Cards/Card";

const Main: React.FC = () => {
  const [isNecessary, setIsNecessary] = useState(true);
  const [contentInputForTitle, setContentInputForTitle] = useState("Title");
  return (
    <div
      id="main"
      className="w-full flex flex-col justify-center items-center"
      style={{ height: "50rem" }}
    >
      {/* <BriefContent />

      <div id="cards_collection" className="flex flex-col justify-start w-3/5">
        <Card content={contentInputForTitle} isRequired={isNecessary} />

        <Card content="Writer" isRequired={true} />

        <Card content="Skateholder" isRequired={true} />
      </div> */}

      <div className="w-full flex flex-col justify-between items-center h-full">
        <BriefContent />

        <div
          id="cards_collection"
          className="flex flex-col justify-start w-3/5"
          style={{ height: "69%" }}
        >
          {/* <Card content={contentInputForTitle} isRequired={isNecessary} />

          <Card content="Writer" isRequired={true} />

          <Card content="Skateholder" isRequired={true} /> */}
          <div className="flex flex-col h-1/2 justify-between">
            <Card
              contentTitle={contentInputForTitle}
              contentTextInput=""
              isRequired={isNecessary}
            />

            <Card contentTitle="Writer" contentTextInput="" isRequired={true} />

            <Card
              contentTitle="Sketch holder"
              contentTextInput=""
              isRequired={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
