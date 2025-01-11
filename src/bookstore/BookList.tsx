interface Book {
    title: string;
}

interface Props {
    books: Book[];
}

export default function BookList({ books }: Props) {
    return (
        <div>
            <h1>Booklist</h1>

            <ul>
                {books.map((book) => (
                    <li>{book.title}</li>
                ))}
            </ul>
        </div>
    );
}
