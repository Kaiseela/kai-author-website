import Image from "next/image";

export default function MeetKai() {
    return (
        <section className="meet-kai-section">
            <div className="meet-kai-container">
                <div className="meet-kai-image">
                    <Image
                        src="/images/walking-to-church.png"
                        alt="Kai Lablanche-Tirvassen walking towards Salisbury Cathedral"
                        fill
                        sizes="(max-width: 800px) 100vw, 50vw"
                        style={{
                            objectFit: "cover",
                            objectPosition: "center",
                        }}
                    />
                </div>

                <div className="meet-kai-content">
                    <p className="section-label">MEET KAI</p>

                    <h2>More than an author.</h2>

                    <p>
                        Every chapter of my life has shaped the stories I tell today.
                    </p>

                    <p>
                        From serving as a police officer and British Army soldier to
                        exploring the world through photography, endurance sport and
                        travel, I have learned that every experience has the power to
                        change us.
                    </p>

                    <p>
                        Writing allows me to bring those experiences together—sharing
                        stories that inspire hope, strengthen faith, encourage curiosity
                        and remind us that even ordinary lives can make an extraordinary
                        difference.
                    </p>

                    <a href="#about" className="portfolio-button">
                        Discover My Story →
                    </a>
                </div>
            </div>
        </section>
    );
}