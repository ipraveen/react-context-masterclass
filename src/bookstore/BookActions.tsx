interface Props {
    user: User;
}

export default function BookActions({ user }: Props) {
    return (
        <div className="controls">
            {user.role === 'admin' && <button className="outline todo">Edit</button>}
            {user.role === 'user' && <button className="outline todo">Buy</button>}
        </div>
    );
}
