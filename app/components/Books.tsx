const bookCategories = [
    {
        title: "Books",
        description:
            "Explore fiction, faith-based writing, memoir, personal development and meaningful stories.",
        href: "/books",
    },
    {
        title: "Blank Notebooks",
        description:
            "Simple, practical notebooks and journals created for writing, planning and everyday ideas.",
        href: "/blank-notebooks",
    },
    {
        title: "Puzzle Books",
        description:
            "Crosswords, Sudoku and themed puzzles designed to challenge, entertain and help readers unwind.",
        href: "/puzzle-books",
    },
    {
        title: "Kids’ Section",
        description:
            "Activity, colouring, drawing and educational books created to encourage imagination and learning.",
        href: "/kids",
    },
];

export default function Books() {
    return (
        <section id="books" className="books-section">
            <div className="books-container">
                <div className="books-heading">
                    <p className="section-label">EXPLORE MY WORK</p>

                    <h2>Books for every chapter of the journey.</h2>

                    <p>
                        From meaningful stories and faith-centred writing to puzzles,
                        notebooks and children’s activity books, every project is created
                        with a clear purpose.
                    </p>
                </div>

                <div className="book-category-grid">
                    {bookCategories.map((category, index) => (
                        <a
                            href={category.href}
                            className="book-category-card"
                            key={category.title}
                        >
                            <span className="book-category-number">
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <h3>{category.title}</h3>

                            <p>{category.description}</p>

                            <span className="book-category-link">Explore category →</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}