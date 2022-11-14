import "./App.css";
import NewsFeed from "./components/NewsFeed";
import { showNews, login, logout } from "./redux/action";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="header">
        <button className="btn" onClick={() => dispatch(login())}>
          Login
        </button>
        <button className="btn" onClick={() => dispatch(showNews())}>
          Find The News
        </button>
        <button className="btn" onClick={() => dispatch(logout())}>
          Logout
        </button>
      </div>

      <NewsFeed />
    </div>
  );
}

export default App;
