import "./Obstacle.css";
import goombla from "../../asset/img/goombla.gif";
import koopa from "../../asset/img/koopa.gif";
import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obstacle1, obstacle2 } from "../../config/redux/obstacleSlice";
import { setSpeed } from "../../config/redux/engineSlice";
import classNames from "classnames";

const Obstacle = () => {
  const dispatch = useDispatch();
  const isPlay = useSelector((state) => state.engine.play);
  const speed = useSelector((state) => state.engine.speed);
  const obstacle1Ref = useRef();
  const obstacle2Ref = useRef();

  useEffect(() => {
    if (isPlay) {
      setInterval(() => {
        dispatch(
          obstacle1({
            height: obstacle1Ref?.current?.getBoundingClientRect().height,
            left: obstacle1Ref?.current?.getBoundingClientRect().left,
            top: obstacle1Ref?.current?.getBoundingClientRect().top,
            width: obstacle1Ref?.current?.getBoundingClientRect().width,
          }),
        );
        dispatch(
          obstacle2({
            height: obstacle2Ref?.current?.getBoundingClientRect().height,
            left: obstacle2Ref?.current?.getBoundingClientRect().left,
            top: obstacle2Ref?.current?.getBoundingClientRect().top,
            width: obstacle2Ref?.current?.getBoundingClientRect().width,
          }),
        );
      }, 100);
    }
  }, [dispatch, isPlay]);

  // increase speed
  useEffect(() => {
    if (speed >= 0) {
      setTimeout(() => {
        dispatch(setSpeed(0.0001));
      }, 1000);
    }
  }, [speed, dispatch]);

  return (
    <div className="obstacles-container">
      <img
        src={goombla}
        alt=""
        className={classNames("obstacle1", { "obstacle1-move": isPlay })}
        style={
          isPlay
            ? { animationDuration: `${3 - speed}s` }
            : { animationDuration: `3s` }
        }
        ref={obstacle1Ref}
      />
      <img
        src={koopa}
        alt=""
        className={classNames("obstacle2", { "obstacle2-move": isPlay })}
        style={
          isPlay
            ? { animationDuration: `${6 - speed}s` }
            : { animationDuration: `6s` }
        }
        ref={obstacle2Ref}
      />
    </div>
  );
};
export default Obstacle;
