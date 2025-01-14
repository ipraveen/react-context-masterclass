// interface Props {
//     user: User;
// }

import { useUser } from '../contexts/user-context/useUser';

export default function BookActions() {
    const user = useUser();

    return (
        <div className="controls">
            {user.role === 'admin' && <button className="outline todo">Edit</button>}
            {user.role === 'user' && <button className="outline todo">Buy</button>}
        </div>
    );
}
