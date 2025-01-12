import BookList from './BookList';
import books from '../data/books.json';

interface Props {
    user: User;
}

export default function BookManager({ user }: Props) {
    return (
        <main>
            <div className="container">
                <BookList books={books} user={user} />
            </div>
        </main>
    );
}
