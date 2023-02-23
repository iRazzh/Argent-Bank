import "../../css/UserHeader/UserHeader.css"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itsFirstname, itsLastname } from "../../app/reducer"
import { Navigate } from "react-router";

export default function UserHeader() {
    // useState toggle for <ChangeNameForm />
    const [ changeName, setChangeName ] = useState("");
    const toggleChangeName = () => { setChangeName(changeName === "" ? "active" : "") ;}

    // useSelector nous permet d'extraire les datas venant de l'état du store Redux
    const token = useSelector((state) => state.user.token);
    const firstName = useSelector((state) => state.user.firstName);
    const lastName = useSelector((state) => state.user.lastName);

    // useState pour les datas lors de la connexion
    const [ dataUserName, setDataUserName ] = useState({ firstName:"", lastName:"" })
    // useState pour les erreurs (true/false)
    const [ errorUserName, setErrorUserName ] = useState(false);
    const [ errorUpdate, setErrorUpdate ] = useState(false);

    const [ changeFirstname, setChangeFirstname ] = useState()
    const [ changeLastname, setChangeLastname ] = useState()

    // useDispatch ne peut pas être appelé dans un callback étant donné que c'est une fonction donc const.
    const dispatchMethod = useDispatch();

    // PUT - Data User Name
    const submitChangeName = (e) => {
        e.preventDefault();
        fetch("http://localhost:3001/api/v1/user/profile", {
            method: "PUT",
            headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`},
            body: JSON.stringify({
                firstName: changeFirstname,
                lastName: changeLastname,
            }),
        })
        .then((response) => response.json())
        .then((json) => {
            dispatchMethod(itsFirstname(json.body.firstName));
            dispatchMethod(itsLastname(json.body.lastName));
        })
        .catch((error) => {
            setErrorUpdate(true);
            console.error("Problème = " + error)
        })
    }
    // POST - Data user
    const getUserName = () => {
        fetch("http://localhost:3001/api/v1/user/profile", {
            method: "POST",
            headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`},
            body: JSON.stringify({
                firstName: dataUserName.firstName,
                lastName: dataUserName.lastName,
            }),
        })
        .then((response) => response.json())
        .then((json) => {
            dispatchMethod(itsFirstname(json.body.firstName));
            dispatchMethod(itsLastname(json.body.lastName));
        })
        .catch((error) => {
            setErrorUserName(true);
            setDataUserName({
                ...dataUserName, 
            });
            console.error("Problème = " + errorUserName + " " + error)
        })
    }
    getUserName()

    if (!token) return <Navigate to="/" />
    
    return(
        <>
            <div className="header">
                <h1>Welcome back<br />{firstName + ' ' + lastName}!</h1>

                {changeName === "active" ? 
                    <form onSubmit={submitChangeName} className="modify-user-name">
                        <input id="firstName" type="text" placeholder={firstName} onChange={(e) => setChangeFirstname(e.target.value)}/>
                        <input id="lastName" type="text"  placeholder={lastName} onChange={(e) => setChangeLastname(e.target.value)} />
                        
                        {errorUpdate && <p style={{color: "red"}}>There is an error in your firstname or lastname.</p>}
                        
                        <button type="submit" className="sign-in-button" id="save-button">Save</button>
                        <button type="submit" className="sign-in-button" onClick={toggleChangeName}>Cancel</button>
                    </form> 
                :
                    <button onClick={toggleChangeName} className={`edit-button ${changeName}`}>Edit Name</button>
                }
            
            </div>
        </>
    )
}