import BookManager from './bookstore/BookManager';
import Header from './layout/Header';
import { UserContextProvider } from './contexts/user-context/UserContext';
import { NotificationPanel, NotificationContextProvider } from './libs/notifications';

function BookStoreApp() {
    return (
        <div className="bookstore">
            <NotificationContextProvider>
                <NotificationPanel>
                    <p>This is a test Notification!</p>
                </NotificationPanel>
                <UserContextProvider>
                    <Header />
                    <BookManager />
                </UserContextProvider>
            </NotificationContextProvider>
        </div>
    );
}

export default BookStoreApp;
