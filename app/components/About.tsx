const journeyItems = [
    {
        title: "Photographer",
        description:
            "Learning to notice beauty, preserve meaningful moments and tell stories through images.",
    },
    {
        title: "Police Officer",
        description:
            "Serving the community with responsibility, integrity and compassion.",
    },
    {
        title: "Scout Volunteer",
        description:
            "Volunteering in Mauritius and the United Kingdom, helping young people build confidence, resilience and practical skills.",
    },
    {
        title: "British Army Soldier",
        description:
            "Developing discipline, leadership, teamwork and resilience through military service.",
    },
    {
        title: "Giving Back",
        description:
            "Supporting children and working towards projects that create hope and opportunity.",
    },
    {
        title: "Author",
        description:
            "Bringing every chapter of my life together through books, stories and ideas that encourage others.",
    },
];

export default function About() {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <p className="section-label">MY STORY</p>

                <h2 className="about-heading">The Journey That Shaped Me</h2>

                <p className="about-introduction">
                    Every chapter has shaped the next. Every experience has become part
                    of the story I now have the privilege to share.
                </p>

                <div className="journey-list">
                    {journeyItems.map((item, index) => (
                        <article className="journey-item" key={item.title}>
                            <div className="journey-number">
                                {String(index + 1).padStart(2, "0")}
                            </div>

                            <div className="journey-content">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}