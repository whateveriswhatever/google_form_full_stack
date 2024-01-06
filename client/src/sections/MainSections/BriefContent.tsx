const BriefContent: React.FC = () => {
  return (
    <div
      id="breif_content_card"
      className="border w-3/5 flex flex-col justify-center align-middle"
      style={{
        borderTop: "0.6rem solid purple",
        borderLeft: "0.3rem solid rgb(100, 149, 237)",
        borderRight: "0.24rem solid rgb(169, 169, 169)",
        borderBottom: "0.24rem solid rgb(169, 169, 169)",
        borderRadius: "0.5rem",
      }}
    >
      <ContentTitle />
      <br />
      <ContentBody />
      <br />
      <ContentTail />
    </div>
  );
};

export default BriefContent;

const ContentTitle: React.FC = () => {
  return (
    <div id="title" className="flex justify-start w-15 ml-2">
      <div className="text-3xl font-semibold">Content</div>
    </div>
  );
};

const ContentBody: React.FC = () => {
  return (
    <div
      id="content"
      className="ps-4 pe-4 block"
      style={{
        borderTop: "0.8px dotted #000",
        borderBottom: "0.8px dotted #000",
      }}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio veritatis
      libero dolores culpa laborum, quae quos amet itaque recusandae quod ullam
      inventore facilis dolorem est ab! Aliquid ipsam dolor a!
    </div>
  );
};

const ContentTail: React.FC = () => {
  return (
    <div className="ml-2">
      This form is automatically collecting email addresses for Slack users.{" "}
      <a href="#" className="text-sky-600 ml-2">
        Change settings
      </a>
    </div>
  );
};
