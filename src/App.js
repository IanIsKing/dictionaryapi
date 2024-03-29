import "./App.css";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { fetchWordDefinition } from "./fetchWordDefinition";

function App() {
  // Declare a new state variables
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState([]);
  const [loading, setLoading] = useState(false);

  // Get the API key from the .env file
  const apiKey = process.env.REACT_APP_API_KEY;

  // Function to get the definition of the word using a function from fetchWordDefinition.js
  const getDefinition = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await fetchWordDefinition(word, apiKey);
      setMeaning(data);
    } catch (error) {
      console.error("Fetching error:", error);
      // Handle the fetch error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My new Little Dictionary</h1>
        <form>
          <input
            type="text"
            placeholder="Enter a word"
            onChange={(e) => setWord(e.target.value)}
          />

          {/* Do an API call when the search button is clicked */}
          <Button variant="primary" onClick={getDefinition}>
            Search
          </Button>
          {loading ? (
            <h3>Loading...</h3>
          ) : (
            meaning[0] && (
              <div>
                <h3>{meaning[0].hwi.hw}</h3>
                <h4>{meaning[0].fl}</h4>
                <h4>{meaning[0].shortdef[0]}</h4>
              </div>
            )
          )}
        </form>
      </header>
    </div>
  );
}

export default App;
