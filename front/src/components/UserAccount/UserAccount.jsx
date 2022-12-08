import "../../css/UserAccount/UserAccount.css"

export default function UserAccount(props) {

    return(
        <>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">{props.userAccountTitle}</h3>
                    <p className="account-amount">{props.userAccountAmount}</p>
                    <p className="account-amount-description">{props.userAccountDescription}</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
        </>
    )
}