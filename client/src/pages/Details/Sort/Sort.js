import React from "react";
import './Sort.css';

const Sort = () => {
  return (
    <div>
    <nav id="topbar">
      <span style= {{
marginRight: 0.25+"rem"
      }}
      >
        <a
          href="https://www.comp.nus.edu.sg/~stevenha"
          // style="text-decoration: none; color: white"
        >
        </a>
        <a
          href="https://visualgo.net"
          style= {{
            fontSize: " 20px",
            marginLeft: "4px"
          }}

        >
          <img className="logo" src="/Home/logo.png" alt="logo" />
        </a>
      </span>
      
      <br/>
      <div className="content" style={{width:100+"%"}}>
        
      </div>
      
      </nav>
    </div>
  );
};
export default Sort;
