import Image from "next/image";

const photoChapters = [
    {
        number: "01",
        title: "The Writer",
        description: "This is where ideas become books.",
        image: "/images/Writer-Desk.png",
        position: "center",
    },
    {
        number: "02",
        title: "The Author",
        description: "The person behind the pages.",
        image: "/images/author-portrait.png",
        position: "center",
    },
    {
        number: "03",
        title: "The Explorer",
        description: "Every journey leaves a story.",
        image: "/images/walking-to-church.png",
        position: "center",
    },
    {
        number: "04",
        title: "The Photographer",
        description: "Learning to notice what others may pass by.",
        image: "/images/the-photographer.png",
        position: "center",
    },
    {
        number: "05",
        title: "The Servant",
        description: "A life measured by the good it leaves behind.",
        image: "/images/scout-volunteer.png",
        position: "center",
    },
];

export default function Photography() {
    return (
        <section id="photography" className="photography-section">
            <div className="photography-container">
                <div className="photography-heading">
                    <p className="section-label photography-label">
                        FIVE PHOTOGRAPHS
                    </p>

                    <h2>Five chapters of my life.</h2>

                    <p>
                        Each photograph represents a different part of the journey: writing,
                        storytelling, exploration, creativity and service.
                    </p>
                    <a href="/photography" className="portfolio-button">
                        Explore the Portfolio →
                    </a>
                </div>

                <div className="photo-chapter-grid">
                    {photoChapters.map((photo) => (
                        <article className="photo-chapter-card" key={photo.title}>
                            <div className="photo-chapter-image">
                                {photo.image ? (
                                    <Image
                                        src={photo.image}
                                        alt={`${photo.title} — Kai Lablanche-Tirvassen`}
                                        fill
                                        sizes="(max-width: 750px) 100vw, 33vw"
                                        style={{
                                            objectFit: "cover",
                                            objectPosition: photo.position,
                                        }}
                                    />
                                ) : (
                                    <div className="photo-placeholder">
                                        <span>Photograph coming soon</span>
                                    </div>
                                )}
                            </div>

                            <span className="photo-chapter-number">{photo.number}</span>

                            <h3>{photo.title}</h3>

                            <p>{photo.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}