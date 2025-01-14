import Avatar from './Avatar';

interface Props {}

export default function Header({}: Props) {
    return (
        <header>
            <div className="container">
                <h1 className="logo">Harry Potter Book Store</h1>
                <Avatar  />
            </div>
        </header>
    );
}
