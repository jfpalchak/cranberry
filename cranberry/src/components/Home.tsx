import { Link } from "react-router-dom";

export default function Home() {


  return (
    <main className="hero">
      <div className="hero-call">
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