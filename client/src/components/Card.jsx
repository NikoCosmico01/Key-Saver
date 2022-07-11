import { useState } from "react";
import Axios from "axios";

function Card(){
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");

    const addPassword = () => {
        Axios.post('http://localhost:3000/addpassword', {
            password: password,
            title: title
        });
    };

    return(
    
        /*<div className="card" style={{width: '18rem', textAlign: 'center' }}>
            <img className="card-img-top" src="..." alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>*/
        
        <div className="Card">
            <div className="AddingPassword">

                <input
                type="text"
                placeholder="Es.: Password1234"
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
            />
                <input
                type="text"
                placeholder="Es. Facebook"
                onChange={(event) => {
                    setTitle(event.target.value);
                }}
            />
                <button onClick={addPassword}> Save</button>

             </div>
        </div>
    )
}

export default Card;