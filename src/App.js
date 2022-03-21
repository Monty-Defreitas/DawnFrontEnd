import './App.css';
import HeadComponent from './components/HeadComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import PageNotfound from './components/PageNotFound';
import ListParts from './components/ListParts';
import CreateEmpire from "./components/CreateEmpire";
import ListPartsWeapons from "./components/ListPartsWeapons";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListMissiles from "./components/ListMissiles";
import ListHulls from "./components/ListHulls";
import CreateOrder from "./components/CreateOrder";


//can add "/add-employee:name"
//Routes replaced Switch and All "route" must be contained within a Routes.


function App() {
    return (
        <div>
            <Router>
                <div className="container-fluid" >
                    <HeadComponent/>
                    <FooterComponent/>
                        <div className="container-fluid">
                        <Routes>
                            <Route path = "/" element = {<><div><CreateEmpire/></div><ListParts/><ListPartsWeapons/><ListMissiles/><ListHulls/><CreateOrder/> </>}/>
                            <Route path=  "/create-empire" element = {<CreateEmpire/>}/>
                            <Route path = "/dawn-parts/shields" element = {<ListParts/>}/>
                            <Route path = "/dawn-parts/weapons" element = {<ListPartsWeapons/>}/>
                            <Route path = "/dawn-parts/missiles" element = {<ListMissiles/>}/>
                            <Route path = "/create-order" element = {<CreateOrder/>}/>
                            <Route path ="/*" element = {<PageNotfound/>}/>
                        </Routes>
                    </div>

                </div>
            </Router>

        </div>
    );
}

export default App;
