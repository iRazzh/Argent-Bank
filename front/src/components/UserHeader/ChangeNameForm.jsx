import { useState } from "react";
import { useSelector } from "react-redux";

export default function ChangeNameForm(props) {

    // useSelector nous permet d'extraire les datas venant de l'état du store Redux
    const token = useSelector((state) => state.user.token);

    // useState pour les inputs de connexion
    const [ itsInput, setItsInput ] = useState({ firstName:"", lastName:"" })
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

    return(
        <>
            <form onSubmit={submitChangeName}>
                <input id="firstName" type="text" placeholder="Firstname" onChange={inputChange}/>
                <input id="lastName" type="text"  placeholder="Lastname" onChange={inputChange} />
                
                {error && <p style={{color: "red"}}>There is an error in your firstname or lastname.</p>}
                
                <button type="submit" className="sign-in-button">Save</button>
                <button type="submit" className="sign-in-button" onClick={props.toggleChangeName}>Cancel</button>
            </form>
        </>
    )
}