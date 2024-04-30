import VoteToday from "../Components/Home/voteToday";
import Steps from "../Components/Home/steps";
import "./global.css";
import Layout from "../Layout/layout";
import Hero from "../Components/Home/hero";
import Information from "../Components/Home/information";

function Home() {
    return (
        <>
            <Layout>
                <>
                    <Hero />
                    <Steps />
                    <VoteToday />
                    <Information />
                </>
            </Layout>
        </>
    );
}

export default Home;

// family id store
// find a station to vote near you
