import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header";
import UrlList from "./components/UrlList";

import "./App.css";

function App() {
  const [urls, setUrls] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/urls")
      .then((res) => res.data)
      .then((data) => setUrls(data))
      .catch(() => setUrls([{ shorturl: "OH", longurl: "NO", id: 1 }]));
  }, []);

  return (
    <div className="App">
      <Header />
      <main>{urls && <UrlList urls={urls} />}</main>
    </div>
  );
}

export default App;
