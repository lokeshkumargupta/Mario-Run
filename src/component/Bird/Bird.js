import classNames from "classnames";
import "./Bird.css";
import useDocumentReady from "../../config/hook/useDocumentReady";

const Bird = () => {
  const isReady = useDocumentReady();
  return (
    <div className="bird-container">
      <div className={classNames("bird", { "bird-animate": isReady })}></div>
    </div>
  );
};
export default Bird;
