import "./Brick.css";
import classNames from "classnames";
import useDocumentReady from "../../config/hook/useDocumentReady";

const Brick = () => {
  const isReady = useDocumentReady();
  return (
    <div className="brick-container">
      <div className={classNames("brick", {"brick-animate": isReady })} />
    </div>
  );
};
export default Brick;
