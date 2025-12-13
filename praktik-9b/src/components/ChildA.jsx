import React from 'react';
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';
import ChildB from './ChildB';

function ChildA() {
    const {user, setUser } = useContext(MyContext);

    return (
        <div>
        <h1>Component Child A</h1>
        <div>
            <p>User: {user}</p>
            <button onClick={() => setUser("Jane Smith")}>Change User</button>
            </div>
            <ChildB />
        </div>
    )
}
export default ChildA;