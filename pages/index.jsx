import Layout from "../components/layout"
import ProfilePic from "../components/profile_pic"
import SocialMediaButton from "../components/social_media_button"


function HomePage() {

    return (
        <Layout>
            <Hero />
        </Layout>
    )
}

function Hero() {
    return (
        <div className="hero">
            <ProfilePic src = "/images/profil.jpg"/>
            
            <h1>Salut! Je Pélé.</h1>
            <h2>Developpeurr</h2>
            <div className="social-row">
                <SocialMediaButton href="https://twitter.com/OthimarPele" faIcon="fa-twitter" />
                <SocialMediaButton href="https://github.com/othimar" faIcon="fa-github" />
                <SocialMediaButton href="https://discord.gg/SxKxQjxC" faIcon="fa-discord" />
            </div>
        </div>
    )
}


export default HomePage
