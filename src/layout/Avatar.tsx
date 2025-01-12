interface Props {
    user: User;
}

export default function Avatar({ user }: Props) {
    return (
        <div className="avatar todo">
            <img src={user.avatar}></img>
            <div>
                <label>{user.name}</label>
                <small>@{user.userId}</small>
            </div>
        </div>
    );
}
