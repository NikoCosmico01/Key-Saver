import { useState, useEffect } from "react";
import Axios from "axios";

function Card(){
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const [passwordList, setPasswordList] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:3001/showpassword').then((response) => {
            setPasswordList(response.data)
        });
    }, []);

    const addPassword = () => {
        Axios.post('http://localhost:3001/addpassword', {
            password: password,
            title: title
        });
    };

    const decryptPassword = (encryption) => {
        Axios.post('http://localhost:3001/', { password: encryption.password, iv: encryption.iv });
    };

    return(       
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
             <div className="Passwords">
                {passwordList.map((val, key) => {
                    return <div className="Password" onClick={() => {decryptPassword({password: val.password, iv: val.iv});
                }}
                key={key}
                > 
                    <h1> {val.title} </h1>
                    </div>
                })}
            </div>
        </div>

       
    )
}

export default Card;