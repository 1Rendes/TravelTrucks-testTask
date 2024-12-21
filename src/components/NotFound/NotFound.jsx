import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      This page does not exist. If you see this you need to{" "}
      <Link to="/" style={{ textDecoration: "underline", color: "var(--red)" }}>
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
