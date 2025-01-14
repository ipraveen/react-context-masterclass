import BookList from './BookList';
import books from '../data/books.json';

// interface Props {
//     user: User;
// }

export default function BookManager() {
    return (
        <main>
            <div className="container">
                <BookList books={books} />
            </div>
        </main>
    );
}
