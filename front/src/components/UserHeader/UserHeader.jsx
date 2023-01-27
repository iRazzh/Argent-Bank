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

    // useState pour les inputs de connexion
    const [ itsInput, setItsInput ] = useState({ firstName:"Tony", lastName:"Jarvis" })
    // useState pour les erreurs (true/false)
    const [ error, setError ] = useState(false);

    const inputChange = (e) => {
        const inputID = e.target.id;
        // Récupère tout ce qu'il y a dans 'itsInput' et ajoute la valeur du target dans {firstname:'', lastname:''} grâce à setItsInput.
        setItsInput({
            ...itsInput, 
            [inputID]: e.target.value,
        });
    };

    // useDispatch ne peut pas être appelé dans un callback étant donné que c'est une fonction donc const.
    const dispatchMethod = useDispatch();

    const submitChangeName = (e) => {
        e.preventDefault();
        fetch("http://localhost:3001/api/v1/user/profile", {
            method: "PUT",
            headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`},
            body: JSON.stringify({
                firstName: itsInput.firstName,
                lastName: itsInput.lastName,
            }),
        })
        .then((response) => response.json())
        .then((json) => {
            dispatchMethod(itsFirstname(json.body.firstName));
            dispatchMethod(itsLastname(json.body.lastName));
            console.log(json)
        })
        .catch((error) => {
            setError(true);
            setItsInput({
                ...itsInput, 
            });
            console.error("Problème = " + error)
        })
    }

    if (!token) return <Navigate to="/" />
    
    return(
        <>
            <div className="header">
                <h1>Welcome back<br />{itsInput.firstName + ' ' + itsInput.lastName}!</h1>

                {changeName === "active" ? 
                    <form onSubmit={submitChangeName}>
                        <input id="firstName" type="text" placeholder="Firstname" onChange={inputChange}/>
                        <input id="lastName" type="text"  placeholder="Lastname" onChange={inputChange} />
                        
                        {error && <p style={{color: "red"}}>There is an error in your firstname or lastname.</p>}
                        
                        <button type="submit" className="sign-in-button">Save</button>
                        <button type="submit" className="sign-in-button" onClick={toggleChangeName}>Cancel</button>
                    </form> 
                :
                    <button onClick={toggleChangeName} className={`edit-button ${changeName}`}>Edit Name</button>
                }
            
            </div>
        </>
    )
}