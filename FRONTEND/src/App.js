import './App.css';
import Infopage from './components/Info/Infopage';
import { Home } from './components/Home-Components/Home'
import { LoginSignup } from './components/Login-Components/LoginSignup';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {

  // UseStates
  // const [darkMode, changeDarkMode] = useState(true)

  // // Function Which will be called As Global
  // const setdarkMode = () => {
  //   if (darkMode) changeDarkMode(false)
  //   else changeDarkMode(true)
  // }

  // const getdata = async () => {
  //   await db.collection('cards').get().then((snapshot) => {
  //     const data = snapshot.docs.map(doc => doc.data());
  //     console.log(data);
  //   })
  // }


  // useEffect(() => {
  //   getdata()
  // }, [])

  // render()
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/"><Infopage /></Route>
          <Route exact path="/home"><Home /></Route>
          <Route exact path="/login"><LoginSignup /></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
