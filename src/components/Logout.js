import React, { useState } from "react";
import { NavLink, useNavigate} from "react-router-dom";

export default function Navbar() {
//   const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
   const [error, setError] = useState("");

  const handleLogout = async (e) => {
    if (e) {
      e.preventDefault();
    }
    // assumming our api has a /logout endpoint
    const res = await fetch(
      "https://task-train-api.onrender.com/logout",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await res.json();
    if (data.message) {
      setMessage(data.message);
      setError("");
    } else {
      setMessage("");
      setError(data.error);
    }
  };

  return (
    <div className="logout">
      <nav className="navbar bg-body-tertiary mt-0">
        <div className="container-fluid">
          <NavLink to="/home"> Home</NavLink>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleLogout();
              navigate.push("/");
            }}
          >
            LOGOUT
          </button>

          {/* <div>{message && <p>{message}</p>}</div>
          <div>{error && <p>{error}</p>}</div>
          <form className="d-flex me-3" role="search">
            <select
              className="options me-2"
              onClick={(e) => {
                setSearchType(e.target.value);
              }}
            > */}
              {/* <option>task</option>
              <option>title</option>
            </select>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
            /> */}
            {/* <button
              className="button"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                setSearchText(search.toLowerCase());
                navigate.push("/search");
              }}
            >
              Search
            </button> */}
            {/* </div> */}
          {/* </form> */}
        </div>
      </nav>
    </div>
  );
}