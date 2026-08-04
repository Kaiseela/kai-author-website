import Link from "next/link";
import BookCard from "../components/BookCard";

const kidsBooks = [
    {
        title: "30 Step-By-Step Dinosaurs Drawing Guide",
        category:
            "Learn to Draw 30 Amazing Dinosaurs—One Simple Step at a Time!",
        description:
            "Designed especially for children aged 4–8, this fun drawing workbook teaches young artists how to draw 30 amazing dinosaurs using simple step-by-step lessons. Every drawing includes a large practice area and fascinating dinosaur facts, plus 10 bonus activities including colouring pages, mazes, spot the difference, word searches and a certificate of completion.",
        image: "/images/books/dinosaurs-drawing-guide.png",
        amazonUrl: "https://amzn.eu/d/085OOCjI",
    },

    {
        title: "Kids Sudoku",
        category:
            "50+ Very Easy Sudoku Puzzles for Ages 6–8 | Solutions Included",
        description:
            "A fun and educational Sudoku book specially created for children aged 6–8. With over 50 beginner-friendly puzzles, kids develop logical thinking, concentration, confidence and problem-solving skills while enjoying a screen-free activity. Perfect for home, school, travel, homeschooling and family fun, complete with solutions.",
        image: "/images/books/kids-sudoku.png",
        amazonUrl: "https://amzn.eu/d/0iLyMML3",
    },
];

export default function KidsPage() {
    return (
        <main className="library-page">
            <div className="library-container">

                <Link href="/#books" className="back-link">
                    ← Back to all categories
                </Link>

                <div className="library-heading">

                    <p className="section-label">
                        KIDS ACTIVITY BOOKS
                    </p>

                    <h1>
                        Learn through creativity and play.
                    </h1>

                    <p>
                        Every activity book is designed to inspire imagination,
                        build confidence and help children learn through drawing,
                        puzzles and creative challenges.
                    </p>

                </div>

                <div className="book-grid">
                    {kidsBooks.map((book) => (
                        <BookCard key={book.title} {...book} />
                    ))}
                </div>

            </div>
        </main>
    );
}