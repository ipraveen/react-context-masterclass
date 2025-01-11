import BookManager from './bookstore/BookManager';
import Footer from './layout/Footer';
import Header from './layout/Header';

function App() {
    return (
        <div className='bookstore'>
            <Header />
            <BookManager />
            <Footer />
        </div>
    );
}

export default App;
