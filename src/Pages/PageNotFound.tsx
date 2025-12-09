import { useEffect } from "react";
import "./PageNotFound.css";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="notfound-container mb-10">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-text">
        Oops! The page you're looking for doesn't exist.
      </p>

      <Link to="/" className="notfound-button">
        Go Back Home
      </Link>
    </div>
  );
}
