import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Details.css";

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
function ShareLink() {  navigator.clipboard.writeText(document.location.href);
  alert('Copied link!')
}
const Details = () => {
  const [content, setContent] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getContent = async () => {
      const contentData = await axios.post(
        "https://scrumbe.herokuapp.com/api/content/get",
        { id }
      );
      setContent(contentData.data.content);
    };
    getContent();
  }, []);
  return (
    <div>
      <nav id="topbar">
        <span
          style={{
            marginRight: 0.25 + "rem",
          }}
        >
          <a
            href="https://www.comp.nus.edu.sg/~stevenha"
            // style="text-decoration: none; color: white"
          ></a>
          <a
            href="/"
            style={{
              fontSize: " 20px",
              marginLeft: "4px",
            }}
          >
            <img className="logo" src="/Home/logo.png" alt="logo" />
          </a>
        </span>
        <br />
        <div className="button-link">
          <button style={{ fontWeight: 700 }} onClick={ShareLink}>SHARE</button>
        </div>
        
      </nav>

      <div className="body">
        <img src={content.thumb} />
        <h1 >{content.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content.postContent }} />
        <h1>Code example:</h1>
        <div width="100%">
          <iframe style={{width: '100%', height: '1200px'}}src="https://algorithm-visualizer.org/divide-and-conquer/merge-sort" title="W3Schools Free Online Web Tutorials"></iframe>
        </div>
      </div>
    </div>
  );
};
export default Details;
