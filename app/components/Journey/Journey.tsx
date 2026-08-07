import Image from "next/image";
import styles from "./Journey.module.css";

export default function Journey() {
    return (
        <section id="journey" className={styles.journey}>
            {/* CHAPTER INTRODUCTION */}
            <div className={styles.introduction}>
                <div className={styles.chapterMarker}>
                    <span>CHAPTER II</span>
                    <i />
                </div>

                <p className={styles.question}>
                    What experiences shape the person we become?
                </p>

                <h2>
                    The Chapters
                    <br />
                    That Shaped Me
                </h2>

                <p className={styles.introText}>
                    Some chapters arrive quietly. Others change the direction of a life.
                    Each one leaves something behind.
                </p>
            </div>

            {/* LEARNING TO SEE */}
            <article className={styles.story}>
                <div className={styles.imageStage}>
                    <Image
                        src="/images/the-photographer.png"
                        alt="Kai with her camera"
                        fill
                        sizes="100vw"
                        className={styles.image}
                    />

                    <div className={styles.imageShade} />

                    <div className={styles.imageTitle}>
                        <span>PHOTOGRAPHY</span>

                        <h3>
                            Learning
                            <br />
                            to See
                        </h3>
                    </div>
                </div>

                <div className={styles.reflection}>
                    <div className={styles.reflectionNumber}>01</div>

                    <div className={styles.reflectionBody}>
                        <p className={styles.role}>THE PHOTOGRAPHER</p>

                        <p className={styles.lead}>
                            Before I learned to tell stories with words, I learned to tell
                            them through light.
                        </p>

                        <p className={styles.body}>
                            Photography taught me to slow down and pay attention to the
                            details that disappear when life moves too quickly — changing
                            light, quiet expressions, distant landscapes and the ordinary
                            moments that become extraordinary simply because we chose to
                            notice them.
                        </p>

                        <blockquote>
                            “Some of the most meaningful stories are the ones we almost walk
                            past.”
                        </blockquote>
                    </div>
                </div>
            </article>

            {/* SERVING WITH PURPOSE */}
            <article className={styles.scoutStory}>
                <div className={styles.scoutInner}>
                    <div className={styles.scoutHeading}>
                        <p className={styles.scoutEyebrow}>SCOUT VOLUNTEER</p>

                        <h3>
                            Serving
                            <br />
                            with Purpose
                        </h3>

                        <p className={styles.scoutLead}>
                            Leadership means far more than standing at the front.
                        </p>
                    </div>

                    <div className={styles.scoutPortrait}>
                        <Image
                            src="/images/journey/scout.png"
                            alt="Kai volunteering with Scouts"
                            fill
                            sizes="(max-width: 700px) 88vw, 42vw"
                            className={styles.scoutImage}
                        />
                    </div>

                    <div className={styles.scoutReflection}>
                        <p>
                            Volunteering with Scouts taught me that some of the most
                            meaningful forms of leadership happen quietly — encouraging,
                            guiding, listening and helping someone else discover what they
                            are capable of becoming.
                        </p>

                        <blockquote>
                            “The best leaders do not simply show the way. They help others
                            find the confidence to walk it.”
                        </blockquote>
                    </div>
                </div>
            </article>

            {/* CHASING HORIZONS */}
            <article className={styles.horizonStory}>
                <div className={styles.horizonImage}>
                    <Image
                        src="/images/journey/bow-fiddle-rock.png"
                        alt="Long exposure photograph of Bow Fiddle Rock in Scotland"
                        fill
                        sizes="100vw"
                        className={styles.horizonPhoto}
                    />

                    <div className={styles.horizonOverlay} />

                    <div className={styles.horizonTitle}>
                        <p>EXPLORATION</p>

                        <h3>
                            Chasing
                            <br />
                            Horizons
                        </h3>
                    </div>
                </div>

                <div className={styles.horizonReflection}>
                    <p className={styles.horizonLead}>
                        The horizon has never felt like an ending. It has always felt like
                        an invitation.
                    </p>

                    <p className={styles.horizonBody}>
                        Long roads, wild coastlines, mountains, trails and unfamiliar
                        places taught me that exploration is not simply about seeing more
                        of the world. It is about returning with a wider perspective than
                        the one you left with.
                    </p>

                    <blockquote>
                        “Every journey leaves us slightly different from the person who
                        began it.”
                    </blockquote>
                </div>
            </article>

            {/* TELLING STORIES */}
            <article className={styles.writerStory}>
                <div className={styles.writerImage}>
                    <Image
                        src="/images/Writer-Desk.png"
                        alt="Kai writing at a desk beside a Bible and camera"
                        fill
                        sizes="(max-width: 800px) 100vw, 55vw"
                        className={styles.writerPhoto}
                    />
                </div>

                <div className={styles.writerCopy}>
                    <p className={styles.writerEyebrow}>WRITING</p>

                    <h3>
                        Telling
                        <br />
                        Stories
                    </h3>

                    <p className={styles.writerLead}>
                        Eventually, the photographs, journeys and lessons needed somewhere
                        to live.
                    </p>

                    <p className={styles.writerBody}>
                        Writing became the place where experience, memory, faith and
                        imagination could meet. Some stories begin as questions. Others
                        begin as moments that refuse to be forgotten.
                    </p>

                    <blockquote>
                        “Every story is a way of leaving a light on for someone who may
                        arrive later.”
                    </blockquote>
                </div>
            </article>
            {/* LEARNING TO BELIEVE */}
            <article className={styles.faithStory}>
                <div className={styles.faithImage}>
                    <Image
                        src="/images/walking-to-church.png"
                        alt="Kai walking towards Salisbury Cathedral"
                        fill
                        sizes="100vw"
                        className={styles.faithPhoto}
                    />

                    <div className={styles.faithOverlay} />
                </div>

                <div className={styles.faithCopy}>
                    <p className={styles.faithEyebrow}>FAITH</p>

                    <h3>
                        Learning
                        <br />
                        to Believe
                    </h3>

                    <p className={styles.faithLead}>
                        Faith became the quiet thread running through every chapter.
                    </p>

                    <p className={styles.faithBody}>
                        Not every road has been clear, and not every question has arrived
                        with an answer. Faith taught me that sometimes the next step is
                        enough — to keep moving, keep trusting and remain open to where the
                        journey may lead.
                    </p>

                    <blockquote>
                        “For we walk by faith, not by sight.”
                        <span>2 Corinthians 5:7</span>
                    </blockquote>
                </div>
            </article>

            {/* LEAVING A LEGACY */}
            <article className={styles.legacyStory}>
                <div className={styles.legacyInner}>
                    <p className={styles.legacyEyebrow}>PURPOSE</p>

                    <h3>
                        Leaving
                        <br />
                        a Legacy
                    </h3>

                    <p className={styles.legacyLead}>
                        The chapters that matter most are not always the ones about what we
                        achieved.
                    </p>

                    <p className={styles.legacyStatement}>
                        Success, to me, is measured by the difference we make in someone
                        else&apos;s life.
                    </p>

                    <p className={styles.legacyBody}>
                        Whatever I create, wherever I travel and whatever comes next, I
                        want there to be something left behind that made another person&apos;s
                        world a little brighter.
                    </p>

                    <div className={styles.legacyRule} />

                    <blockquote>
                        “Let your light shine before others.”
                        <span>Matthew 5:16</span>
                    </blockquote>
                </div>
            </article>
            {/* NEXT CHAPTER */}
            <div className={styles.nextChapter}>
                <span>CONTINUE</span>
                <p>Stories Worth Sharing</p>
                <i />
            </div>
        </section>
    );
}