import Link from "next/link";
import BookCard from "../components/BookCard";

const books = [
    {
        title: "Dear Mum, I’m Home",
        category: "Christian Fiction · Faith, Family and Hope",
        description:
            "Ethan Hale is a young soldier who treasures the simple things in life—a loving family, a close-knit village, and a faith that guides him through every season. When an unexpected tragedy changes everything, his family and community discover that love does not end with goodbye. Through faith, compassion and the kindness of ordinary people, they learn that hope can flourish even in the deepest sorrow.",
        image: "/images/books/dear-mum-im-home.png",
        amazonUrl: "https://amzn.eu/d/0gOeBngw",
    },
    {
        title: "The Covenant Stone",
        category:
            "Biblical Studies · Tracing God’s Unchanging Faithfulness Through the Stones of Scripture",
        description:
            "From Genesis to Revelation, stones mark some of the Bible’s most unforgettable moments. Jacob’s stone at Bethel, the tablets of Sinai, Joshua’s memorial stones, David’s smooth stones, Solomon’s Temple, the rejected Cornerstone, the stone rolled away from Christ’s tomb and the jewelled foundations of the New Jerusalem all reveal one extraordinary truth—they point to Jesus Christ. In The Covenant Stone, you’ll discover how these ordinary stones form a unified testimony to God’s covenant, His faithfulness and His plan of redemption.",
        image: "/images/books/the-covenant-stone.png",
        amazonUrl: "https://amzn.eu/d/00U6Rvuf",
    },
];

export default function BooksPage() {
    return (
        <main className="library-page">
            <div className="library-container">
                <Link href="/#books" className="back-link">
                    ← Back to all categories
                </Link>

                <div className="library-heading">
                    <p className="section-label">BOOKS</p>

                    <h1>Stories written with purpose.</h1>

                    <p>
                        Explore fiction, faith-centred writing and meaningful stories by
                        Kai Lablanche-Tirvassen.
                    </p>
                </div>

                <div className="book-grid">
                    {books.map((book) => (
                        <BookCard key={book.title} {...book} />
                    ))}
                </div>
            </div>
        </main>
    );
}