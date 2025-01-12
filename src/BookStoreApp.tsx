import BookManager from './bookstore/BookManager';
import Header from './layout/Header';
import user from './data/user.json';

function BookStoreApp() {
    return (
        <div className="bookstore">
            <Header user={user} />
            <BookManager user={user} />
        </div>
    );
}

export default BookStoreApp;
