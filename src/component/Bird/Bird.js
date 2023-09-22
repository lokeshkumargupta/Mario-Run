import {documentReadyState, eventType} from "../../constant";
import { useEffect, useState } from "react";
import classNames from "classnames";
import "./Bird.css";

const Bird = () => {
  const [isReady, setIsReady] = useState(false);

  // check if document is loaded before animating bird
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
    <div className="bird-container">
      <div className={classNames("bird", {"bird-animate": isReady })}></div>
    </div>
  );
};
export default Bird;
