const givingBackItems = [
    {
        title: "Compassion UK",
        description:
            "For several years, I have sponsored a young girl named Milayla through Compassion UK. That experience has strengthened my belief that consistent support can create lasting change in one child’s life.",
    },
    {
        title: "Scouting",
        description:
            "I have volunteered with Scouts in both Mauritius and the United Kingdom, helping young people build confidence, resilience, practical skills and a spirit of service.",
    },
    {
        title: "The Future",
        description:
            "As my work grows, I want to create practical opportunities for children through education, creativity, sport, faith and community support.",
    },
];

export default function GivingBack() {
    return (
        <section id="giving-back" className="giving-back-section">
            <div className="giving-back-container">
                <div className="giving-back-heading">
                    <p className="section-label">GIVING BACK</p>

                    <h2>Hope becomes meaningful when it leads to action.</h2>

                    <p>
                        Helping others has always been at the heart of my journey. I believe
                        even small acts of kindness, repeated faithfully, can change a life.
                    </p>
                </div>

                <div className="giving-back-grid">
                    {givingBackItems.map((item, index) => (
                        <article className="giving-back-card" key={item.title}>
                            <span>{String(index + 1).padStart(2, "0")}</span>

                            <h3>{item.title}</h3>

                            <p>{item.description}</p>
                        </article>
                    ))}
                </div>

                <div className="giving-back-quote">
                    <p>I can’t change the whole world.</p>
                    <p>But I can change someone’s world.</p>
                </div>
            </div>
        </section>
    );
}