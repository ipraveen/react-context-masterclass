import Avatar from './Avatar';

interface Props{
    user: User;
}
export default function Header({user}: Props) {
    return (
        <header>
            <div className="container">
                <h1 className='logo'>Harry Potter Book Store</h1>
                <Avatar user={user} />
            </div>
        </header>
    );
}
