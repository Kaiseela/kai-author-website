import Link from "next/link";
import BookCard from "../components/BookCard";

const puzzleBooks = [
    {
        title: "Psalms Crossword Puzzle Book",
        category:
            "Easy-to-Read Crossword Puzzles About Psalms, the Bible and Christian Faith",
        description:
            "Strengthen your faith one puzzle at a time with more than 50 thoughtfully created crossword puzzles inspired by the Book of Psalms. This 120-page puzzle book offers a relaxing and meaningful way to explore Scripture, improve memory and focus, encourage spiritual reflection and enjoy quiet devotional time. Suitable for adults, seniors, teens, Bible-study groups and church activities, with a complete answer key included.",
        image: "/images/books/psalms-crossword.png",
        amazonUrl: "https://amzn.eu/d/0gLiHyuX",
    },
    {
        title: "Fruits of the Spirit Crossword Challenge",
        category:
            "120 Scripture-Based Crossword Puzzles and 30 Bonus Pages of Bible Trivia",
        description:
            "Explore the qualities described in Galatians 5:22–23 through 120 Scripture-based crossword puzzles and 30 bonus pages of Bible trivia. Designed for Christians of all ages, this faith-filled activity book encourages Bible study, reflection, memory, concentration and screen-free relaxation. Ideal for personal devotion, families, Bible-study groups, Sunday school, homeschooling and church activities.",
        image: "/images/books/fruits-of-the-spirit-crossword.png",
        amazonUrl: "https://amzn.eu/d/0g3jwDlw",
    },
];

export default function PuzzleBooksPage() {
    return (
        <main className="library-page">
            <div className="library-container">
                <Link href="/#books" className="back-link">
                    ← Back to all categories
                </Link>

                <div className="library-heading">
                    <p className="section-label">PUZZLE BOOKS</p>

                    <h1>Relax, reflect and enjoy the challenge.</h1>

                    <p>
                        Discover faith-filled crosswords, Sudoku and themed puzzle books
                        created to exercise the mind, encourage reflection and provide
                        meaningful screen-free entertainment.
                    </p>
                </div>

                <div className="book-grid">
                    {puzzleBooks.map((book) => (
                        <BookCard key={book.title} {...book} />
                    ))}
                </div>
            </div>
        </main>
    );
}