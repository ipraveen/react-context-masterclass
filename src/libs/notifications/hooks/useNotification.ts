import { useContext } from 'react';
import { NotificationContext } from '../context/NotificationContext';

export function useNotification() {
    const { showNotification, clearNotification } = useContext(NotificationContext);

    return { showNotification, clearNotification };
}

export function useNotificationConsumer() {
    const { show, node } = useContext(NotificationContext);

    return { show, node } ;
}
