import BookManager from './bookstore/BookManager';
import Header from './layout/Header';

function BookStoreApp() {
    return (
        <div className="bookstore">
            <Header  />
            <BookManager />
        </div>
    );
}

export default BookStoreApp;
