import Image from "next/image";
import Navbar from "./Navbar";

export default function Hero() {
    return (
        <section className="hero">
            <Navbar />

            <Image
                src="/images/Writer-Desk.png"
                alt="Kai writing at a desk beside a Bible and camera"
                fill
                priority
                className="hero-image"
            />

            <div className="hero-overlay" />

            <div className="hero-content">
                <p className="hero-label">
                    AUTHOR • PHOTOGRAPHER • STORYTELLER
                </p>

                <h1>
                    This is where ideas
                    <br />
                    become books.
                </h1>

                <p className="hero-description">
                    Every journey leaves a story. Every story has the power to change a
                    life.
                </p>

                <div className="hero-buttons">
                    <a href="#books" className="primary-button">
                        Explore My Books
                    </a>

                    <a href="#about" className="secondary-button">
                        Discover My Story
                    </a>
                </div>
            </div>
        </section>
    );
}