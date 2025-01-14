import BookManager from './bookstore/BookManager';
import Header from './layout/Header';
import { UserContextProvider } from './contexts/user-context/UserContext';

function BookStoreApp() {
    return (
        <div className="bookstore">
            <UserContextProvider>
                <Header />
                <BookManager />
            </UserContextProvider>
        </div>
    );
}

export default BookStoreApp;
