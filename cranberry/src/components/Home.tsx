import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
      <h1 style={headerStyle}>When cold turkey isn't enough</h1>

      <Link to={"/register"}>
        <button className="btn splash-btn">Sign Up</button>
      </Link>
    </main>
  );
}

const headerStyle = {
  fontSize: "5em",
}

const buttonStyle = {
  border: "2px red solid",
  fontSize: "1.2em",
  padding: "1em",
  borderRadius: "3px",
  background: "white",
  color: "red",
}