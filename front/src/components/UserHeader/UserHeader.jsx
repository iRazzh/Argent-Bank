import { useState } from "react";
import { useSelector } from "react-redux";
import "../../css/UserHeader/UserHeader.css"

import ChangeNameForm from "./ChangeNameForm";

export default function UserHeader() {
    // useState toggle for <ChangeNameForm />
    const [ changeName, setChangeName ] = useState("");
    const toggleChangeName = () => { setChangeName(changeName === "" ? "active" : "") ;}

    return(
        <>
            <div className="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>

                {changeName === "active" ? <ChangeNameForm toggleChangeName={toggleChangeName} /> : <button onClick={toggleChangeName} className={`edit-button ${changeName}`}>Edit Name</button>}
            </div>
        </>
    )
}