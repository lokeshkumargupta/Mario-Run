import useDocumentReady from "../../config/hook/useDocumentReady";
import "./Cloud.css";
import classNames from "classnames";

const Cloud = () => {
  const isReady = useDocumentReady();
  return (
    <div className="cloud-container">
      <div className={classNames("cloud", {"cloud-animate": isReady })}></div>
    </div>
  );
};
export default Cloud;
