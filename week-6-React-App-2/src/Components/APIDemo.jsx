import { useEffect } from "react";
import { useState } from "react";

function APIDemo() {
  console.log("API demo rendered");
  
  // State variables for users data, loading status, and potential errors
  let [users, setUsers] = useState([]);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch data from the placeholder API
    async function getData() {
      setLoading(true);
      try {
        let res = await fetch("https://jsonplaceholder.typicode.com/comments");
        let usersList = await res.json();
        // Update users state with fetched data
        setUsers(usersList);
      } catch (err) {
        console.log("Err is :", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    // Execute data fetch on initial component mount
    getData();
  }, []);

  // Display loading indicator if data is still being fetched
  if (loading) {
    return <p className="text-center text-5xl">Loading...</p>
  }

  // Display error message if the fetch fails
  if (error != null) {
    return <p className="text-center text-red-600 text-5xl">{error.message}</p>
  }

  return (
    <div className="text-center mt-10">
      <h1 className="text-8xl text-blue-200">List of Users</h1>
      <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {users.map((userObj) => (
          <div key={userObj.id}>
            <p>{userObj.name}</p>
            <p>{userObj.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default APIDemo;