import { useState } from "react";

type CardType = {
  contentTitle: String;
  isRequired: Boolean;
  contentTextInput: String;
};

interface ICardTitle {
  contentTitle: String;
  isNecessary: Boolean;
}

interface ICardBlankTextEditor {
  isHollow: Boolean;
  userInput: String;
}

// type considerToBeEmpty = {
//   checkHollow: Boolean,
//   setCheckHollow: Boolean
// };

const Card: React.FC<CardType> = ({
  contentTitle,
  contentTextInput,
  isRequired,
}) => {
  return (
    <div
      id="card"
      className="border w-1/ flex flex-col justify-center align-middle"
      style={{
        borderTop: "0.6rem solid purple",
        borderLeft: "0.3rem solid rgb(100, 149, 237)",
        borderRight: "0.24rem solid rgb(169, 169, 169)",
        borderBottom: "0.24rem solid rgb(169, 169, 169)",
        borderRadius: "0.5rem",
      }}
    >
      <CardTitle contentTitle={contentTitle} isNecessary={isRequired} />

      <CardBlankTextEditor
        isHollow={contentTextInput.length === 0 ? true : false}
        userInput={contentTextInput}
      />
    </div>
  );
};

export default Card;

const CardTitle: React.FC<ICardTitle> = ({ contentTitle, isNecessary }) => {
  return (
    <div id="card_title" className="flex justify-start w-15 ml-2">
      <div className="text-3xl font-semibold">
        {contentTitle}{" "}
        {isNecessary ? <span className="text-rose-500">*</span> : <></>}
      </div>
    </div>
  );
};

const CardBlankTextEditor: React.FC<ICardBlankTextEditor> = ({
  isHollow,
  userInput,
}) => {
  const [checkHollow, setCheckHollow] = useState(isHollow);
  const [storeUserInput, setStoreUserInput] = useState("");
  return (
    <div
      id="user_text_input_for_answer mb-4 py-4"
      // style={{ marginBottom: "1rem" }}
    >
      <div className="border border-dashed mb-4 me-4 outline-none">
        {checkHollow ? (
          // <p id="howllow_input" className="ml-3 text-slate-300">
          //   Short answer{" "}
          // </p>
          <textarea
            id="hollow_input"
            className="ml-3 text-slate-300 w-full me-4 outline-none"
            placeholder="Short answer text"
            onChange={(e: any) => {
              setStoreUserInput(e.target.value);

              // if (storeUserInput.length < 1) {
              //   setStoreUserInput("");
              // }

              storeUserInput.length > 0
                ? setCheckHollow(false)
                : setCheckHollow(true);

              console.log(
                `Input length : ${storeUserInput.length} --> Empty : ${checkHollow}`
              );
            }}
          >
            {userInput}
          </textarea>
        ) : (
          // <p id="current_input" className="ml-3">
          //   {userInput}
          // </p>
          <textarea
            id="current_input"
            className="ml-3 w-full ms-4 outline-none"
            onChange={(e: any) => {
              setStoreUserInput(e.target.value);

              // if (storeUserInput.length < 1) {
              //   setStoreUserInput("");
              // }

              storeUserInput.length > 0
                ? setCheckHollow(false)
                : setCheckHollow(true);

              console.log(
                `Input length : ${storeUserInput.length} --> Empty : ${checkHollow}`
              );
            }}
          >
            {userInput}
          </textarea>
        )}
      </div>
    </div>
  );
};
