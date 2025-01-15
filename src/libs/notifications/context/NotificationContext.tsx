import React, { ReactNode, useState } from 'react';

interface NotificationProps {
    show: boolean;
    node: React.ReactNode;
    showNotification: (node: React.ReactNode) => void;
    clearNotification: () => void;
}

export const NotificationContext = React.createContext<NotificationProps>({
    show: false,
    node: null,
    showNotification: (node) => node,
    clearNotification: () => {},
});

export function NotificationContextProvider({ children }: { children: React.ReactNode }) {
    const [show, setShow] = useState(false);
    const [node, setNode] = useState<React.ReactNode | null>();

    const showNotification = (node: ReactNode) => {
        setShow(true);
        setNode(node);
    };

    const clearNotification = () => {
        setShow(false);
        setNode(null);
    };

    return (
        <NotificationContext.Provider
            value={{
                show,
                node,
                showNotification,
                clearNotification,
            }}
        >
            {children}
        </NotificationContext.Provider>
    );
}
