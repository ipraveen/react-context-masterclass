interface Props {
    title: string;
}

import { useUser } from '../contexts/user-context/useUser';
import { useNotification } from '../libs/notifications';

export default function BookActions({title}: Props) {
    const user = useUser();
    const {showNotification, clearNotification} = useNotification();

    const handleClick = (action: 'Edit' | 'Buy') => {

        showNotification((
            <div>
                <p>You're going to <strong>{action}</strong> the Book: <strong>{title}</strong></p>
                <button onClick={() => clearNotification()}>Clear</button>
            </div>
        ))

    }

    return (
        <div className="controls">
            {user.role === 'admin' && <button className="outline todo" onClick={() => handleClick('Edit')}>Edit</button>}
            {user.role === 'user' && <button className="outline todo" onClick={() => handleClick('Buy')}>Buy</button>}
        </div>
    );
}
