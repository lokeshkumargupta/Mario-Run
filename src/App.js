import { Provider, useSelector } from "react-redux";
import { store } from "./config/redux/store";
import LoadingScreen from "./component/LoadingScreen/LoadingScreen";
import Title from "./component/Title/Title";
import StartMenu from "./component/StartMenu/StartMenu";
import "./App.css";
import Brick from "./component/Brick/Brick";
import Sun from "./component/Sun/Sun";
import Cloud from "./component/Cloud/Cloud";
import Bird from "./component/Bird/Bird";
import Score from "./component/Score/Score";
import Obstacle from "./component/Obstacle/Obstacle";
import Mario from "./component/Mario/Mario";

function Home() {
  const isLoading = useSelector((state) => state.engine.loadingScreen);
  const isPlay = useSelector((state) => state.engine.play);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Title />
          <div className="App">
            {!isPlay && <StartMenu />}
            <Score />
            <Brick />
            <Cloud />
            <Sun />
            <Bird />
            <Obstacle />
            <Mario />
          </div>
        </>
      )}
    </>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
