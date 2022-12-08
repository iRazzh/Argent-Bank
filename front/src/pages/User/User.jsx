import "../../css/User/User.css"

import Navigation from "../../components/Navigation/Navigation"
import UserHeader from "../../components/UserHeader/UserHeader"
import UserAccount from "../../components/UserAccount/UserAccount.jsx"

export default function User() {

    const titleChecking = `Argent Bank Checking (x8349)`;
    const amountChecking = `$2,082.79`;
    const descriptionChecking = `Available Balance`;

    const titleSavings = `Argent Bank Savings (x6712)`;
    const amountSavings = `$10,928.42`;
    const descriptionSavings = `Available Balance`;

    const titleCredit = `Argent Bank Credit Card (x8349)`;
    const amoutCredit = `$184.30`;
    const descriptionCredit = `Current Balance`;

    return(
        <>
            <Navigation />
            <main className="main bg-dark">
                <UserHeader />
                <h2 className="sr-only">Accounts</h2>
                <UserAccount userAccountTitle={titleChecking} userAccountAmount={amountChecking} userAccountDescription={descriptionChecking} />
                <UserAccount userAccountTitle={titleSavings} userAccountAmount={amountSavings} userAccountDescription={descriptionSavings} />
                <UserAccount userAccountTitle={titleCredit} userAccountAmount={amoutCredit} userAccountDescription={descriptionCredit} />
            </main>
        </>
    )
}