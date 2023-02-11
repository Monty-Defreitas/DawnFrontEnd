// import './App.css';
// import HeadComponent from './components/HeadComponent';
// import FooterComponent from './components/FooterComponent';
// import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
// import PageNotfound from './components/PageNotFound';
// import ListParts from './components/ListParts';
// import CreateEmpire from "./components/CreateEmpire";
// import ListPartsWeapons from "./components/ListPartsWeapons";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import ListMissiles from "./components/ListMissiles";
// import ListHulls from "./components/ListHulls";
// import CreateOrder from "./components/CreateOrder";


//can add "/add-employee:name"
//Routes replaced Switch and All "route" must be contained within a Routes.


// function App() {
//     return (
//         <div>
//             <Router>
//                 <div className="container-fluid" >
//                     <HeadComponent/>
//
//                         <div className="container-fluid">
//                         <Routes>
//                             <Route path = "/" element = {<>
//                                 <div className = "grid">
//                                 <div className = "g-col-6 g-col-md-4"><CreateEmpire/></div>
//                                 <div className = "g-col-6 g-col-md-4"><CreateOrder/></div>
//                             </div>
//                                 <ListParts/>
//                                 <ListPartsWeapons/>
//                                 <ListMissiles/>
//                                 <ListHulls/>
//                                 <FooterComponent/></>}/>
//                             <Route path=  "/create-empire" element = {<CreateEmpire/>}/>
//                             <Route path = "/dawn-parts/shields" element = {<ListParts/>}/>
//                             <Route path = "/dawn-parts/weapons" element = {<ListPartsWeapons/>}/>
//                             <Route path = "/dawn-parts/missiles" element = {<ListMissiles/>}/>
//                             <Route path = "/create-order" element = {<CreateOrder/>}/>
//                             <Route path ="/*" element = {<PageNotfound/>}/>
//                         </Routes>
//                     </div>
//
//                 </div>
//             </Router>
//
//         </div>
//     );
// }

import './globalStyles/App.css';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import PageNotfound from './components/PageNotFound';
import ListParts from './components/ListParts';
import CreateEmpire from "./components/CreateEmpire";
import ListPartsWeapons from "./components/ListPartsWeapons";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListMissiles from "./components/ListMissiles";
import CreateOrder from "./components/CreateOrder";
import Login from "./components/Login";
import Registration from "./components/Registration";
import shipParts from "./components/ShipParts";
import ShipParts from "./components/ShipParts";
function App() {
    return (
        <div>
            <Router>
                <div className="container-fluid" >
                    {/*<HeadComponent/>*/}
                    <div className="container-fluid">
                        <Routes>
                            <Route path = "/" element = {<>
                                <div className = "grid">
                                    <Login/>
                                </div>
                                <FooterComponent/></>}/>
                            <Route path=  "/create-empire" element = {<CreateEmpire/>}/>
                            <Route path = "/dawn-parts/shields" element = {<ShipParts/>}/>
                            <Route path = "/dawn-parts/weapons" element = {<ListPartsWeapons/>}/>
                            <Route path = "/dawn-parts/missiles" element = {<ShipParts/>}/>
                            <Route path = "/create-order" element = {<CreateOrder/>}/>
                            <Route path = "/register" element = {<Registration/>}/>
                            <Route path ="/*" element = {<PageNotfound/>}/>
                        </Routes>
                    </div>

                </div>
            </Router>

        </div>
    );}
    export default App;
