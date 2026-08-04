import Image from "next/image";

type BookCardProps = {
    title: string;
    category: string;
    description: string;
    image: string;
    amazonUrl: string;
};

export default function BookCard({
    title,
    category,
    description,
    image,
    amazonUrl,
}: BookCardProps) {
    return (
        <article className="book-card">
            <div className="book-cover-wrapper">
                <Image
                    src={image}
                    alt={`Front cover of ${title}`}
                    width={700}
                    height={1050}
                    className="book-cover"
                />
            </div>

            <div className="book-card-content">
                <p className="book-card-category">{category}</p>

                <h2>{title}</h2>

                <p className="book-card-description">{description}</p>

                <a
                    href={amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="buy-button"
                >
                    View on Amazon →
                </a>
            </div>
        </article>
    );
}