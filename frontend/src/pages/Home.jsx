import './Home.css';

function Home() {
    return (
        <div>
            <section>

                <div className="profile-pic-wrapper fade-in delay-1">
                    <div className="profile-pic" />
                </div>
                <h1 className="about-text fade-in delay-2">About</h1>
                <p className="bio-p fade-in delay-3">
                    Hi, I'm Nat Cabrera, I made this website. I am an impact-driven data professional with 6+
                    years of experience spanning analytics, regulatory reporting, and
                    program management across legal advocacy, impact finance, and
                    sustainability. I'm currently a part-time Data Science Master's student at Northeastern's Roux Institute, and a Data Fellow and Business
                    Development Services Analyst at CEI (Coastal Enterprises, Inc.)
                    in Portland, Maine, where I manage end-to-end data pipelines
                    across Salesforce, SQL, and Power BI to track outcomes for CDFI
                    programs, and build dashboards tracking capital transactions,
                    loans, and investments exceeding $7M.
                </p>
                <p className="bio-p fade-in delay-4">
                    I'm also the founder of Align, an ethical consumer insights
                    platform, currently in development, where I design PostgreSQL schemas modeling ESG data,
                    supply chains, and corporate governance to help people make more
                    informed purchasing decisions.
                </p>
                <p className="bio-p fade-in delay-5">
                    My background spans advocacy and data work in the NYC court
                    system, sustainability program management, and CRM-driven
                    business development, all driven by a focus on using data to
                    surface trends, improve outcomes, and support better
                    decision-making for social impact.
                </p>
            </section>
        </div>
    );
}

export default Home;