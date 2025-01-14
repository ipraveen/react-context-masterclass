import React from 'react';
import user from '../../data/user.json';

export const UserContext = React.createContext<User>(user);


interface Props {
    children: React.ReactNode;
}

export function UserContextProvider({ children }: Props) {
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
