import { useState, useEffect } from "react";

function Fetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) throw new Error(`An error in fetching data: ${error}`);

      const responseData = await response.json();
      setData(responseData);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  /*
  //  This code runs exactly on page loading

    useEffect(() => {
      fetchData();
     }, []);
*/

  return (
    <div>
      <hr />
      <h3>A simple data fetching</h3>

      {loading && <p>Loading...</p>}

      <button onClick={() => fetchData()}>Fetch data</button>

      {data &&
        data.map((post) => (
          <div key={post.id}>
            <h5>
              {post.id}: {post.title}
            </h5>
            <p>{post.body}</p>
          </div>
        ))}

      {error && <p>{error.message}</p>}
    </div>
  );
}

export default Fetch;
