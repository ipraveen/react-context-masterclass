// interface Props {
//     user: User;
// }

import { useUser } from '../contexts/user-context/useUser';

export default function Avatar() {
    const user = useUser();

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
