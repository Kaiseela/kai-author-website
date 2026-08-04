import Link from "next/link";
import BookCard from "../components/BookCard";


const notebooks = [
    {
        title: "YEARBOOK",
        category:
            "Colour-Coded Monthly Journal for Planning, Reflection and Everyday Notes",
        description:
            "Every year tells a story. YEARBOOK is a month-by-month journal created to organise your thoughts, record meaningful moments, set goals and reflect on your journey. It includes 12 colour-coded monthly sections, planning spreads, lined writing pages, goal-setting pages, a bucket list and year-end reflections across 240 pages.",
        image: "/images/yearbook.png",
        amazonUrl: "https://amzn.eu/d/07Ac70OF",
    },
    {
        title: "Passionate Writer's Journal",
        category: "Write Freely • Capture Ideas • Create Stories",
        description:
            "Created for aspiring authors, poets, students and storytellers, this 120-page lined journal provides the perfect place to capture inspiration, develop ideas, overcome writer's block and build a daily writing habit. Whether you're drafting your next novel or recording everyday thoughts, every page is an invitation to create.",
        image: "/images/books/passionate-writers-journal.png",
        amazonUrl: "https://amzn.eu/d/0gLbCFl4",
    },
];

export default function BlankNotebooksPage() {
    return (
        <main className="library-page">
            <div className="library-container">
                <Link href="/#books" className="back-link">
                    ← Back to all categories
                </Link>

                <div className="library-heading">
                    <p className="section-label">BLANK NOTEBOOKS & JOURNALS</p>

                    <h1>Space for ideas, plans and memories.</h1>

                    <p>
                        Explore notebooks and journals designed for writing, reflection,
                        planning, creativity and everyday life.
                    </p>
                </div>

                <div className="book-grid">
                    {notebooks.map((notebook) => (
                        <BookCard key={notebook.title} {...notebook} />
                    ))}
                </div>
            </div>
        </main>
    );
}