import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <main className="hero">

      <div className="hero-text">
        <h1>When cold turkey isn't enough.</h1>
      </div>
      <Link to={"/register"}>
        <button className="btn splash-btn">Sign Up</button>
      </Link>
    </main>
  );
}