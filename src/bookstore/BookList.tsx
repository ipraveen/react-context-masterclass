import BookActions from './BookActions';

interface Props {
    books: Book[];
   
}

export default function BookList({ books }: Props) {
    return (
        <ul className="books">
            {books.map(({ cover, title, description }) => (
                <li className="book">
                    <img src={cover} alt={title} />
                    <div className="content">
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <BookActions />
                    </div>
                </li>
            ))}
        </ul>
    );
}
