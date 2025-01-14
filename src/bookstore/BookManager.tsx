import BookList from './BookList';
import books from '../data/books.json';

interface Props {
}

export default function BookManager({  }: Props) {
    return (
        <main>
            <div className="container">
                <BookList books={books}  />
            </div>
        </main>
    );
}
