import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "../components/Search";
function Home() {
  return (
    <div className="home">
      <div className="home_header">
        <div className="home_headerLeft">
          <Link to="about">About</Link>
          <Link to="store">Store</Link>
        </div>
        <div className="home_headerRight">
          <Link to="gmail">Gmail</Link>
          <Link to="images">Images</Link>
          {/*<Link to='images'>Images</Link>*/}
          <AppsIcon />
          <Avatar />
        </div>
      </div>

      <div className="home_body">
        <center>
          <img
            src="https://cdn.vox-cdn.com/thumbor/8tLchaDMIEDNzUD3mYQ7v1ZQL84=/0x0:2012x1341/920x613/filters:focal(0x0:2012x1341):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
            style={{ height: "200px" }}
          />
        </center>
        <div className="search_input">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
