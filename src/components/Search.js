import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Mic } from "@material-ui/icons";
import "./Search.css";
import { Button } from "@material-ui/core";
import { useEffect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Srearch() {
  const [input, setInput] = useState("");
  const history = useNavigate();

  const search = (e) => {
    e.preventDefault();
    console.log(input);

    history("/searched");
  };
  return (
    <form className="search">
      <div className="search_Input">
        <SearchIcon className="search_inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <Mic />
      </div>
      <div className="search_buttons">
        <Button type="submit" variant="outlined" onClick={search}>
          Google Search
        </Button>
        <Button variant="outlined">Am feeling lucky</Button>
      </div>
    </form>
  );
}

export default Srearch;
