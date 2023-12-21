import { Link } from "react-router-dom";
import cloud from './../img/cloudRight.png';
import cloud2 from './../img/cloudLeft.png';


export default function Home() {

  return (
    <main className="hero">
      <div className="hero-call">
        <img className="hero-cloud" src={cloud} alt="" />
        <img className="hero-cloud-2" src={cloud2} alt="" />
        <div className="hero-text">
          <h1>When cold turkey isn't enough.</h1>
        </div>
        <Link to={"/register"}>
          <button className="btn splash-btn">Sign Up</button>
        </Link>
      </div>
    </main>
  );
}