import Image from "next/image";
import Link from "next/link";

export default function PhotographyPage() {
    return (
        <main className="portfolio-page">
            <section className="portfolio-hero">
                <Image
                    src="/images/portfolio/photography-hero.png"
                    alt="Kai Lablanche-Tirvassen photographing a historic castle"
                    fill
                    priority
                    className="portfolio-hero-image"
                />

                <div className="portfolio-hero-overlay" />

                <Link href="/" className="portfolio-back-link">
                    ← Return Home
                </Link>

                <div className="portfolio-hero-content">
                    <p className="portfolio-eyebrow">PHOTOGRAPHY PORTFOLIO</p>

                    <h1>Through My Lens</h1>

                    <p>
                        Every photograph preserves a moment that will never exist again.
                        Through my camera, I capture the landscapes, architecture, people
                        and journeys that have shaped my life and inspired my writing.
                    </p>

                    <a href="#portfolio-introduction" className="portfolio-scroll-link">
                        Explore the portfolio ↓
                    </a>
                </div>
            </section>

            <section
                id="portfolio-introduction"
                className="portfolio-introduction-section"
            >
                <div className="portfolio-introduction">
                    <p className="section-label">A VISUAL JOURNEY</p>

                    <h2>Stories told without words.</h2>

                    <p>
                        Photography taught me to slow down, look closer and recognise the
                        beauty hidden in ordinary moments. This growing collection brings
                        together landscapes, historic places, journeys, acts of service and
                        the moments that continue to shape who I am.
                    </p>
                </div>
            </section>
        </main>
    );
}