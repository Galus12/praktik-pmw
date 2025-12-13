import { MyContext } from "../context/MyContext";
function ChildB() {
    return (
        <MyContext.Consumer>
            {({ user, setUser }) => (
                <div>
                    <hr />
                    <h1>Component Child B</h1>
                <div>
                <p>User: {user}</p>
                <button onClick={() => setUser("Alice Jhonson")}>Change User</button>
                </div>
                </div>
            )}
        </MyContext.Consumer>
    )
}
export default ChildB;