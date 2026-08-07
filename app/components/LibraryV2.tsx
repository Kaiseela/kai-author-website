import Link from "next/link";
import styles from "./LibraryV2.module.css";

type LibraryV2Props = {
    lang: string;
};

export default function LibraryV2({ lang }: LibraryV2Props) {
    return (
        <section id="library" className={styles.library}>
            <div className={styles.inner}>
                <div className={styles.chapter}>
                    <span>CHAPTER III</span>
                    <span className={styles.chapterLine} />
                </div>

                <p className={styles.question}>
                    Which stories stay with us long after the final page?
                </p>

                <h2 className={styles.title}>
                    Stories Worth
                    <br />
                    Sharing
                </h2>

                <div className={styles.links}>
                    <Link href="/books" className={styles.link}>
                        <span className={styles.number}>01</span>

                        <div className={styles.linkText}>
                            <p className={styles.label}>THE LIBRARY</p>
                            <h3 className={styles.linkTitle}>Books</h3>
                        </div>

                        <span className={styles.arrow}>↗</span>
                    </Link>

                    <Link href="/blank-notebooks" className={styles.link}>
                        <span className={styles.number}>02</span>

                        <div className={styles.linkText}>
                            <p className={styles.label}>WRITE YOUR OWN STORY</p>
                            <h3 className={styles.linkTitle}>Blank Notebooks</h3>
                        </div>

                        <span className={styles.arrow}>↗</span>
                    </Link>

                    <Link href="/books#puzzle-books" className={styles.link}>
                        <span className={styles.number}>03</span>

                        <div className={styles.linkText}>
                            <p className={styles.label}>PUZZLES &amp; PLAY</p>
                            <h3 className={styles.linkTitle}>Puzzle Books</h3>
                        </div>

                        <span className={styles.arrow}>↗</span>
                    </Link>

                    <Link href="/kids" className={styles.link}>
                        <span className={styles.number}>04</span>

                        <div className={styles.linkText}>
                            <p className={styles.label}>FOR YOUNGER READERS</p>
                            <h3 className={styles.linkTitle}>Kids Collection</h3>
                        </div>

                        <span className={styles.arrow}>↗</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}