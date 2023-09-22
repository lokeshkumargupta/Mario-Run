import { useEffect, useState } from "react";
import "./Brick.css";
import {documentReadyState, eventType} from "../../constant";
import classNames from "classnames";

const Brick = () => {
  const [isReady, setIsReady] = useState(false);

  // Check if document is loaded before animating clouds
  useEffect(() => {
    const setLoad = () => setIsReady(true);
    if (document.readyState === documentReadyState.COMPLETE) {
      setLoad();
    } else {
      window.addEventListener(eventType.LOAD, setLoad);
      // return cleanup function
      return () => window.removeEventListener(eventType.LOAD, setLoad);
    }
  }, []);

  return (
    <div className="brick-container">
      <div className={classNames("brick", {"brick-animate": isReady })} />
    </div>
  );
};
export default Brick;
