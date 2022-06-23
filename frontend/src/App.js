import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Search from "./pages/Search";
import Auth from "./pages/Auth";
import {useSelector} from "react-redux";
import Navbar from "./components/Nav/Navbar";
function App() {
    const {logged} = useSelector(state=>state.auth);
  return (
    <>
      <Router>
          {logged && <Navbar/>}
        <Routes>
            {logged || <Route path={"*"} element={<Auth/>}> </Route>}
            {logged && (<Route path={"*"} element={<Search/>}> </Route>)}
        </Routes>
      </Router>
    </>
  );
}

export default App;
