import "./Mario.css";
import MarioCharacter from "../../asset/img/mario-run.gif";
import { useEffect, useRef, useCallback, useMemo } from "react";
import jumpAudio from "../../asset/audio/mario-jump.mp3";
import backgroundMusic from "../../asset/audio/running-about.mp3";
import { useDispatch, useSelector } from "react-redux";
import { marioJumping, marioPosition } from "../../config/redux/marioSlice";
import { setPlay, setDie, setScore } from "../../config/redux/engineSlice";
import dieAudio from "../../asset/audio/mario-died.mp3";
import classNames from "classnames";
const keyCode = {
  ENTER: "Enter",
  SPACE: "Space",
};

const Mario = () => {
  const marioRef = useRef();
  const dispatch = useDispatch();
  const die = useSelector((state) => state.engine.die);
  const loadingScreen = useSelector((state) => state.engine.loadingScreen);

  const isPlay = useSelector((state) => state.engine.play);
  // Mario positions & jump
  const mario_jump = useSelector((state) => state.mario.jumping);
  const mario = useSelector((state) => state.mario.position);
  // Obstacle1 positions
  const obs1 = useSelector((state) => state.obstacle.obstacle1);
  // Obstacle2 positions
  const obs2 = useSelector((state) => state.obstacle.obstacle2);

  // Jump audio
  const jump = useMemo(() => {
    return new Audio(jumpAudio);
  }, []);
  // Die audio
  const marioDie = useMemo(() => {
    return new Audio(dieAudio);
  }, []);
  // background audio
  const bgMusic = useMemo(() => {
    return new Audio(backgroundMusic);
  }, []);

  // Handling key press event
  const handleKey = useCallback(
    (e) => {
      if (e.code === keyCode.ENTER && !isPlay && !die && !loadingScreen) {
        // start playing
        dispatch(setPlay(true));
      }
      if (
        // jump now
        !mario_jump &&
        e.code === keyCode.SPACE &&
        isPlay &&
        !die &&
        !loadingScreen
      ) {
        dispatch(marioJumping(true));
        jump.play(); // play jump audio
        setTimeout(() => {
          // on jump complete
          dispatch(marioJumping(false));
          jump.pause();
          jump.currentTime = 0; // reset audio
        }, 400);
      }
    },
    [mario_jump, jump, dispatch, isPlay, die, loadingScreen],
  );

  useEffect(() => {
    const gameOver = () => {
      dispatch(setDie(true));
      marioDie.play();
      dispatch(setPlay(false));
      setTimeout(() => {
        dispatch(setDie(false));
      }, 2000);
      setTimeout(() => {
        dispatch(setScore(0));
      }, 100);
    };
    // check if mario & obstacles collides
    const hasBumped = (obs) => {
      return (
        mario.left < obs.left + obs.width &&
        mario.left + mario.width > obs.left &&
        mario.top < obs.top + obs.height &&
        mario.top + mario.height > obs.top
      );
    };
    if (hasBumped(obs1) || hasBumped(obs2)) {
      gameOver();
    }
  }, [mario, obs1, dispatch, marioDie, obs2]);

  // Monitor key press.
  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    dispatch(
      marioPosition({
        height: marioRef?.current?.getBoundingClientRect().height,
        left: marioRef?.current?.getBoundingClientRect().left,
        top: marioRef?.current?.getBoundingClientRect().top,
        width: marioRef?.current?.getBoundingClientRect().width,
      }),
    );

    if (isPlay) {
      bgMusic.play();
    } else {
      bgMusic.pause();
      bgMusic.currentTime = 0;
    }
    return () => document.removeEventListener("keydown", handleKey);
  }, [handleKey, dispatch, bgMusic, isPlay]);

  return (
    <div className="mario-container">
      <img
        src={MarioCharacter}
        alt=""
        className={classNames("mario", {
          die: die,
          jump: mario_jump,
        })}
        ref={marioRef}
      />
    </div>
  );
};
export default Mario;
