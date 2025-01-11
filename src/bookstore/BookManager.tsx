import BookList from './BookList';
import books from './data.json';

export default function BookManager() {
    return (
        <main>
            <div className="container">
                {' '}
                <BookList books={books} />
            </div>
        </main>
    );
}
