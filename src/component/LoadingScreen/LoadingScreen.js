import { useEffect, useState } from "react";
import MarioCharacter from "../../asset/img/mario.png";
import "./LoadingScreen.css";
import { setLoadingScreen } from "../../config/redux/engineSlice";
import { useDispatch } from "react-redux";

const LoadingScreen = () => {
  const [isReady, setIsReady] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    // loading screen of 3 seconds
    setTimeout(() => {
      setIsReady(true);
    }, 3000);
  }, []);

  return (
    <div className="loading-screen-container">
      <img src={MarioCharacter} alt="" className="loading-mario" />
      {!isReady && <h1 className="loading-title">Loading...</h1>}
      {isReady && ( // ready
        <button
          className="enter-button"
          onClick={() => dispatch(setLoadingScreen(false))}
        >
          ENTER
        </button>
      )}
    </div>
  );
};
export default LoadingScreen;
