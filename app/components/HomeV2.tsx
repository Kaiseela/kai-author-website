import Image from "next/image";
import Link from "next/link";
import styles from "../[lang]/home-v2.module.css";
import Journey from "./Journey/Journey";
import LibraryV2 from "./LibraryV2";

type HomeV2Props = {
    lang: string;
};

export default function HomeV2({ lang }: HomeV2Props) {
    return (
        <main className={styles.home}>
            {/* HERO */}
            <section className={styles.hero}>
                <Image
                    src="/images/Writer-Desk.png"
                    alt="Kai writing at a desk beside a Bible and camera"
                    fill
                    priority
                    sizes="100vw"
                    className={styles.heroImage}
                />

                <div className={styles.overlay} />

                <nav className={styles.nav}>
                    <Link href={`/${lang}`} className={styles.brand}>
                        <span>Kai Lablanche-Tirvassen</span>
                        <small>Author · Photographer · Storyteller</small>
                    </Link>

                    <div className={styles.navLinks}>
                        <a href="#journey">Story</a>
                        <a href="#library">Books</a>
                        <a href="#lens">Photography</a>
                        <a href="#purpose">Mission</a>
                        <a href="#connect">Contact</a>
                    </div>
                </nav>

                <div className={styles.heroContent}>
                    <p className={styles.eyebrow}>WELCOME</p>

                    <h1>
                        Every life
                        <br />
                        leaves a story.
                    </h1>

                    <p className={styles.intro}>
                        I&apos;m glad our paths have crossed.
                    </p>

                    <a href="#welcome" className={styles.begin}>
                        <span>Begin</span>
                        <span className={styles.arrow} aria-hidden="true">
                            ↓
                        </span>
                    </a>
                </div>

                <div className={styles.heroSideNote} aria-hidden="true">
                    <span>SCROLL TO DISCOVER</span>
                    <i />
                </div>
            </section>

            {/* CHAPTER I */}
            <section id="welcome" className={styles.welcome}>
                <div className={styles.welcomeInner}>
                    <div className={styles.chapterHeader}>
                        <span>CHAPTER I</span>
                        <span className={styles.chapterLine} />
                    </div>

                    <h2>A letter.</h2>

                    <div className={styles.letter}>
                        <p className={styles.dear}>Dear Friend,</p>

                        <p>
                            Whether you arrived here through a book, a photograph or simple
                            curiosity, I&apos;m grateful you&apos;re here.
                        </p>

                        <p>
                            This is a place where I&apos;ve gathered some of the stories,
                            photographs and lessons that have shaped my life so far.
                        </p>

                        <p>
                            I hope somewhere along the way you find something that encourages
                            you, makes you pause, or reminds you that your own story matters
                            too.
                        </p>

                        <p className={styles.signature}>Kai</p>
                    </div>
                </div>
            </section>


            <Journey />

            {/* PHOTOGRAPHY */}
            <section id="lens" className={styles.darkPlaceholder}>
                <div className={styles.sectionInner}>
                    <div className={styles.chapterHeaderLight}>
                        <span>CHAPTER III</span>
                        <span className={styles.chapterLineLight} />
                    </div>

                    <p className={styles.sectionQuestionLight}>
                        When did you last stop long enough to notice something beautiful?
                    </p>

                    <h2>Through My Lens</h2>
                </div>
            </section>

            {/* LIBRARY */}
            <LibraryV2 lang={lang} />

            {/* STILLNESS */}
            <section className={styles.scripture}>
                <div className={styles.scriptureInner}>
                    <p className={styles.stillnessLabel}>A MOMENT OF STILLNESS</p>

                    <blockquote>
                        “Let your light shine before others…”
                    </blockquote>

                    <p className={styles.verseReference}>Matthew 5:16</p>
                </div>
            </section>

            {/* PURPOSE */}
            <section id="purpose" className={styles.purpose}>
                <div className={styles.sectionInner}>
                    <div className={styles.chapterHeader}>
                        <span>CHAPTER V</span>
                        <span className={styles.chapterLine} />
                    </div>

                    <p className={styles.sectionQuestion}>
                        How can one life leave the world a little brighter?
                    </p>

                    <h2>Leaving Something Behind</h2>
                </div>
            </section>

            {/* CONNECT */}
            <section id="connect" className={styles.connect}>
                <div className={styles.connectInner}>
                    <p className={styles.connectLabel}>OUR PATHS CROSSED HERE</p>

                    <h2>I&apos;m glad you stopped by.</h2>

                    <p>I hope our paths cross again.</p>

                    <a href="mailto:sharonnekaitek@icloud.com">
                        Continue the conversation
                        <span>↗</span>
                    </a>
                </div>
            </section>
        </main>
    );
}