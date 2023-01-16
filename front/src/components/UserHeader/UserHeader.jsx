import { useSelector } from "react-redux";
import "../../css/UserHeader/UserHeader.css"

import ChangeNameForm from "./ChangeNameForm";

export default function UserHeader() {
    // useSelector nous permet d'extraire les datas venant de l'état du store Redux
    const token = useSelector((state) => state.user.token);
    console.log(token)

    return(
        <>
            <div className="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button className="edit-button">Edit Name</button>
                <ChangeNameForm />
            </div>
        </>
    )
}