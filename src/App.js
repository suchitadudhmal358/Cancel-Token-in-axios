import React from "react";
import axios from "axios";

import "./App.css";

function App() {
  let cancelToken;
  const handleSearch = async (e) => {
    const search = e.target.value;

    if (cancelToken) {
      cancelToken.cancel("Cancelling previous request...");
    }
    cancelToken = axios.CancelToken.source();

    const result = await axios.get(`https://api.github.com/users/${search}`, {
      cancelToken: cancelToken.token,
    });
    console.table(result.data.name);

    // for above code use hooks now - react-use-cancel-token
  };

  return (
    <div className="App" style={{ marginTop: "50px" }}>
      <input
        type="text"
        style={{ width: "30%" }}
        name="search"
        placeholder="enter your search"
        onChange={handleSearch}
      />
    </div>
  );
}

export default App;
