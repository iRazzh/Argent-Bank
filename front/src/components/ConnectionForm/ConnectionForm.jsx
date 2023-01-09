import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"

import { itsEmail, itsToken } from "../../app/reducer"

import "../../css/ConnectionForm/ConnectionForm.css"

export default function ConnectionForm() {
    // useState pour les inputs de connexion
    const [ itsInput, setItsInput ] = useState({ email:"", password:"" })
    console.log(itsInput)

    // Va permettre de récupérer la valeur des inputs et changer son état.
    const inputChange = (e) => {
        const inputID = e.target.id;

        // Récupère tout ce qu'il y a dans 'itsInput' et ajoute la valeur du target dans {email:'', password:''} grâce à setItsInput.
        setItsInput({
            ...itsInput, 
            [inputID]: e.target.value,
        });
    };

    const submitLogin = (e) => {
        e.preventDefault();
    }

    // useDispatch ne peut pas être appelé dans un callback étant donné que c'est une fonction donc const.
    const dispatchMethod = useDispatch();

    // useEffect pour le fetch
    useEffect(() => {
        const url = `http://localhost:3001/api/v1/user/login`;

        const fetchLoginValues = {
            email: itsInput.email,
            password: itsInput.password,
        };

        const requestHeaders = {
            method: "POST",
            body: JSON.stringify(fetchLoginValues),
            headers: {
                "Content-Type": "application/json",
            },
        };

        fetch(url, requestHeaders)
            .then((response) => response.json())
            .then((json) => {
                // useDispatch est le seul moyen de déclencher un changement d'état. La fonction du reducer en question sera appelée de manière synchrone. 
                // Sa valeur de retour sera considérée comme le prochain état.
                dispatchMethod((itsEmail(itsInput.email)))
                console.log("/user/login response to POST:", json)
            })
            .catch((error) => {
                setItsInput({
                    ...itsInput, 
                });
                console.error("Problème" + error)
            })
    }, [dispatchMethod, itsInput])

    return(
        <>
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>

                <form onSubmit={submitLogin}>
                <div className="input-wrapper">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={inputChange} />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={inputChange} />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <Link to ="/user"><button type="submit" className="sign-in-button">Sign In</button></Link>
                </form>
            </section>
        </>
    )
}