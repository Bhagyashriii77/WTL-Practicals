import { useEffect, useState } from "react";
import axios from "axios";

function App() {
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

useEffect(() => {
axios
.get("https://jsonplaceholder.typicode.com/users")
.then((response) => {
setUsers(response.data);
setLoading(false);
})
.catch(() => {
setError("Failed to fetch data");
setLoading(false);
});
}, []);

if (loading) {
return <h2>Loading...</h2>;
}

if (error) {
return <h2>{error}</h2>;
}

return ( <div> <h1>User List</h1>

```
  {users.map((user) => (
    <div key={user.id}>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
      <hr />
    </div>
  ))}
</div>
```

);
}

export default App;
