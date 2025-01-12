import BookActions from './BookActions';

interface Props {
    books: Book[];
    user: User;
}

export default function BookList({ books, user }: Props) {
    return (
        <ul className="books">
            {books.map(({ cover, title, description }) => (
                <li className="book">
                    <img src={cover} alt={title} />
                    <div className="content">
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <BookActions user={user} />
                    </div>
                </li>
            ))}
        </ul>
    );
}
