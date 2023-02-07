import "../../css/Navigation/Navigation.css"
import argentBankLogo from "../../assets/argentBankLogo.png"

import { itsToken } from "../../app/reducer"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";

export default function Navigation() {
    // useSelector nous permet d'extraire les datas venant de l'état du store Redux
    const token = useSelector((state) => state.user.token);
    const firstName = useSelector((state) => state.user.firstName);

    // useDispatch ne peut pas être appelé dans un callback étant donné que c'est une fonction donc const.
    const dispatchMethod = useDispatch();
    const Logout = () => {
        dispatchMethod(itsToken(null))
    }

    return(
        <>
            <nav className="main-nav">
                <Link to="/" className="main-nav-logo"> 
                    <img className="main-nav-logo-image" src={argentBankLogo} alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    {token ? 
                        <>
                            <p className="main-nav-firstname">{firstName}</p>
                            <p onClick={Logout} className="main-nav-signout">Sign Out</p>
                        </>
                    :                    
                        <Link to="/connection" className="main-nav-item">
                            <i className="fa fa-user-circle"></i>Sign In
                        </Link>
                    }
                </div>
            </nav>
        </>
    )
}