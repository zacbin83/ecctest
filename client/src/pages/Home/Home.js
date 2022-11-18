import React, {useState, useEffect} from "react";
import './Home.css';
import axios from 'axios';


const Home = () => {
    const [contents, setContents] = useState([]);
    const [key, setKey] = useState("");

    useEffect(() => {
        const getContents = async () => {
            const contentsData = await axios.get(
                "https://scrumbe.herokuapp.com/api/content/get-all"
            );
            console.log(contentsData.data.contents);
            setContents(contentsData.data.contents);
        };
        getContents();
    }, []);

    const handleOnSearch = (e) => {
        setKey(e.target.value)
    }

    return (
        <div>
            <nav id="topbar">
        
        <span style={{marginRight: 0.25 + 'rem'}}>
        <a >
            <img class="nav-logo" src="/Home/logo.png" alt=""/>
        </a>
        <a href="index.html" style={{fontFamily: 'SilkscreenNormal,sans-serif', fontSize: 20 + 'px', marginLeft: 4 + 'px'}}>
        </a>
        </span>
                <span style={{maxHeight: 30 + 'px'}}>
        </span>
                <span style={{maxHeight: 30 + 'px', backgroundColor: 'rgb(0,0,0)', color: 'white', marginLeft: 'auto'}}>
        </span>
            </nav>
            <div id="head-content-container" style={{flex: 1}}>
                <img src="/Home/logo.png" class="head-logo" alt=""/>
                <div class="search-container">
                    <form action="/action_page.php">
                        <input type="text" onChange={handleOnSearch} placeholder="Search.." name="search"/>
                        <button type="submit"><i class="search-btn fa fa-search"></i></button>
                    </form>
                </div>
                <br/>
            </div>
            <div class="container">
                <div class="row">
                    {contents.length > 0 ? (
                        contents.map((item) => {
                            if (item.postTitle.toLowerCase().includes(key.toLowerCase()))
                                return (
                                    <div class="col-md-4 col-sm-6 grid">
                                        <div class="gridcustom">
                                            <div class="card">
                                                <a href={`details/${item._id}`}>
                                                    <div class="img-wrapper">
                                                        <img src={item.thumb} class="d-block w-100" alt="..."/>
                                                    </div>
                                                </a>
                                                <a href="index.html" class="card-title">{item.postTitle}</a>
                                            </div>
                                        </div>
                                    </div>
                                );
                        })
                    ) : (
                        <div></div>
                    )}

                </div>
            </div>
        </div>
    );

};
export default Home;