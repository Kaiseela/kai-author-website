import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";

type LanguagePageProps = {
    params: Promise<{
        lang: string;
    }>;
};

export default async function LanguagePage({
    params,
}: LanguagePageProps) {
    const { lang } = await params;

    if (!hasLocale(lang)) {
        notFound();
    }

    const dictionary = await getDictionary(lang);
    const otherLanguage = lang === "en" ? "fr" : "en";

    return (
        <main>
            <section className="hero">
                <Image
                    src="/images/Writer-Desk.png"
                    alt="Kai writing at a desk beside a Bible and camera"
                    fill
                    priority
                    className="hero-image"
                />

                <div className="hero-overlay" />

                <nav className="navbar">
                    <Link href={`/${lang}`} className="logo">
                        Kai Lablanche-Tirvassen
                    </Link>

                    <div className="nav-links">
                        <a href="#about">{dictionary.navigation.myStory}</a>
                        <a href="#mission">{dictionary.navigation.mission}</a>
                        <a href="#books">{dictionary.navigation.books}</a>
                        <a href="#photography">
                            {dictionary.navigation.photography}
                        </a>
                        <a href="#giving-back">
                            {dictionary.navigation.givingBack}
                        </a>
                        <a href="#contact">{dictionary.navigation.contact}</a>

                        <Link
                            href={`/${otherLanguage}`}
                            className="language-switcher"
                        >
                            {dictionary.navigation.language}
                        </Link>
                    </div>
                </nav>

                <div className="hero-content">
                    <p className="hero-label">{dictionary.hero.label}</p>

                    <h1>
                        {dictionary.hero.headingLineOne}
                        <br />
                        {dictionary.hero.headingLineTwo}
                    </h1>

                    <p className="hero-description">
                        {dictionary.hero.description}
                    </p>

                    <div className="button-row">
                        <a href="#books" className="primary-button">
                            {dictionary.hero.booksButton}
                        </a>

                        <a href="#about" className="secondary-button">
                            {dictionary.hero.storyButton}
                        </a>
                    </div>
                </div>
            </section>

            <section className="meet-kai-section">
                <div className="meet-kai-container">
                    <div className="meet-kai-image">
                        <Image
                            src="/images/walking-to-church.png"
                            alt="Kai walking towards Salisbury Cathedral"
                            fill
                            sizes="(max-width: 850px) 100vw, 50vw"
                            style={{
                                objectFit: "cover",
                                objectPosition: "center",
                            }}
                        />
                    </div>

                    <div className="meet-kai-content">
                        <p className="section-label">
                            {dictionary.meetKai.label}
                        </p>

                        <h2>{dictionary.meetKai.heading}</h2>

                        <p>{dictionary.meetKai.paragraphOne}</p>
                        <p>{dictionary.meetKai.paragraphTwo}</p>
                        <p>{dictionary.meetKai.paragraphThree}</p>

                        <a href="#about" className="portfolio-button">
                            {dictionary.meetKai.button}
                        </a>
                    </div>
                </div>
            </section>

            <section id="about" className="about-section">
                <div className="about-container">
                    <p className="section-label">{dictionary.story.label}</p>

                    <h2 className="about-heading">
                        {dictionary.story.heading}
                    </h2>

                    <p className="about-introduction">
                        {dictionary.story.introduction}
                    </p>

                    <div className="journey-list">
                        {dictionary.story.chapters.map((chapter) => (
                            <article className="journey-item" key={chapter.number}>
                                <span className="journey-number">
                                    {chapter.number}
                                </span>

                                <div className="journey-content">
                                    <h3>{chapter.title}</h3>
                                    <p>{chapter.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <section id="mission" className="mission-section">
                <div className="mission-container">
                    <p className="section-label mission-label">
                        {dictionary.mission.label}
                    </p>

                    <h2>{dictionary.mission.heading}</h2>

                    <p className="mission-lead">
                        {dictionary.mission.lead}
                    </p>

                    <div className="mission-columns">
                        <div>
                            <h3>{dictionary.mission.missionTitle}</h3>

                            <p>{dictionary.mission.missionText}</p>
                        </div>

                        <div>
                            <h3>{dictionary.mission.pledgeTitle}</h3>

                            <p>{dictionary.mission.pledgeText}</p>
                        </div>
                    </div>

                    <blockquote>
                        “{dictionary.mission.quote}”
                    </blockquote>

                    <a href="#giving-back" className="mission-button">
                        {dictionary.mission.button}
                    </a>
                </div>
            </section>
        </main>
    );
}