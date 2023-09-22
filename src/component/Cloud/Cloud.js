import { useEffect, useState } from "react";
import "./Cloud.css";
import {documentReadyState, eventType} from "../../constant";
import classNames from "classnames";

const Cloud = () => {
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
    <div className="cloud-container">
      <div className={classNames("cloud", {"cloud-animate": isReady })}></div>
    </div>
  );
};
export default Cloud;
