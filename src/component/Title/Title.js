import "./Title.css";
import Mario from "../../asset/img/mario.png";

const Title = () => {
  return (
    <div className="title-container">
      <img src={Mario} alt="" className="mario-logo" />
      <h1 className="title">Mario Run</h1>
    </div>
  );
};
export default Title;
