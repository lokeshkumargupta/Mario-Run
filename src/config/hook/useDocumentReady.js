import { useState, useEffect } from "react";
const documentReadyState_COMPLETE = "complete";
const eventType_LOAD = "load";

export default function useDocumentReady() {
  const [isReady, setIsReady] = useState(false);

  // Check if document is loaded before animating clouds
  useEffect(() => {
    const setLoad = () => setIsReady(true);

    if (document.readyState === documentReadyState_COMPLETE) {
      setLoad();
    } else {
      window.addEventListener(eventType_LOAD, setLoad);

      // return cleanup function
      return () => window.removeEventListener(eventType_LOAD, setLoad);
    }
  }, []);

  return isReady;
}
