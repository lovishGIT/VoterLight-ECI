import VoteToday from "../Components/Home/voteToday";
import Steps from "../Components/Home/steps";
import "./global.css";
import Layout from "../Layout/layout";
import Hero from "../Components/Home/hero";

function Home() {
    return (
        <>
            <Layout>
                <>
                    <Hero />
                    <Steps />
                    <VoteToday />
                </>
            </Layout>
        </>
    );
}

export default Home;

// family id store
// find a station to vote near you
