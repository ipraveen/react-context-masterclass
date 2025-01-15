import './style.css';
import { useNotificationConsumer } from '../hooks/useNotification';

// interface Props {
//     children: React.ReactNode;
// }

export default function NotificationPanel() {
    const { show, node } = useNotificationConsumer();

    const className = ['notification', show ? 'show' : ''].join(' ');

    return <div className={className}>{node}</div>;
}
