import "../../css/Connection/Connection.css"

import Navigation from "../../components/Navigation/Navigation"
import ConnectionForm from "../../components/ConnectionForm/ConnectionForm.jsx"

export default function Connection() {

    return(
        <>
            <Navigation />
            <main className="main bg-dark">
                <ConnectionForm />
            </main>
        </>
    )
}