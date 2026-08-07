import Image from "next/image";

export default function HeroV2() {
    return (
        <section className="hero-v2">
            <Image
                src="/images/walking-to-church.png"
                alt="Kai walking towards Salisbury Cathedral"
                fill
                priority
                className="hero-v2-image"
            />

            <div className="hero-v2-overlay" />

            <div className="hero-v2-inner">
                <div className="hero-v2-copy">
                    <p className="hero-v2-kicker">KAI LABLANCHE-TIRVASSEN</p>

                    <h1>Every life leaves a story.</h1>

                    <p className="hero-v2-welcome">
                        Welcome. I&apos;m glad you&apos;re here.
                    </p>

                    <a href="#welcome" className="hero-v2-button">
                        Begin the journey
                    </a>
                </div>
            </div>

            <div className="hero-v2-scroll" aria-hidden="true">
                <span />
            </div>
        </section>
    );
}