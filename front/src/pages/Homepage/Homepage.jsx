import "../../css/Homepage/Homepage.css"

import Navigation from "../../components/Navigation/Navigation"
import Hero from "../../components/Hero/Hero"
import FeatureHome from "../../components/HomeFeature/HomeFeature"

import iconChat from "../../assets/icon-chat.png"
import iconMoney from "../../assets/icon-money.png"
import iconSecurity from "../../assets/icon-security.png"

export default function Homepage() {

    const chatTitle = `You are our #1 priority`;
    const moneyTitle = `More savings means higher rates`;
    const securityTitle = `Security you can trust`;

    const chatP = `Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.`
    const moneyP = `The more you save with us, the higher your interest rate will be!`
    const securityP = `We use top of the line encryption to make sure your data and money is always safe.`

    return(
        <>
            <Navigation />
            <main>
                <Hero />
                <section className="features">
                    <h2 className="sr-only">Features</h2>
                    <FeatureHome featureIcon={iconChat} featureTitle={chatTitle} featureText={chatP}/>
                    <FeatureHome featureIcon={iconMoney} featureTitle={moneyTitle} featureText={moneyP}/>
                    <FeatureHome featureIcon={iconSecurity} featureTitle={securityTitle} featureText={securityP}/>
                </section>
            </main>
        </>
    )
}