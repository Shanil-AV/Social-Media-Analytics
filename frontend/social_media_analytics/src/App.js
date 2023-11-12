import './App.css';
import Login from './components/Login .js';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import SocialMediaDashboard from './components/SocialMediaDashboard.js';
import Analysis from './components/Analysis.js';
import Signup from './components/Signup.js';
import ProfilePage from './components/Profilepage.js';
import { ContextProvider } from './context/context.js';

function App() {
  return (
    <ContextProvider>

    <BrowserRouter>
    <Routes>
         <Route path={"/"} element={<Login/>} exact />
         <Route path={"/signup"} element={<Signup/>} exact />
         <Route path={"/home"} element={<SocialMediaDashboard/>} exact />
         <Route path={"/analysis"} element={<Analysis/>} exact />
         <Route path={"/profile"} element={<ProfilePage/>} exact />
       
     </Routes>         
 </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
