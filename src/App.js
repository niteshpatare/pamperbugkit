import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import Helmet from "react-helmet";
import { appendScript } from './razor/Paybtnscript.js';
import {   BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";
import Exploreenjoy from "./component/Exploreenjoy.js";
import Festivekit from "./component/Festivekit.js";
import Aboutbug from "./component/Aboutbug.js";

function App() {

  useEffect(() => {       
    appendScript("https://checkout.razorpay.com/v1/payment-button.js", "btnbottom", "pl_I7JIn2PZzCZpeN");  
  }, []);

  return (
    <Router>
    <div>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Helmet>

      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-8 w-8" src={ logo } alt="Pamper Bug"/>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {/*<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->*/}
                  <NavLink to="/" exact aria-current activeClassName="bg-gray-900" className="bg-gray-900 hover:bg-gray-700 hover:text-white text-white px-3 py-2 rounded-md text-sm font-medium">
                    Explore and Enjoy
                  </NavLink>
                  
                  <NavLink to="/festivekit" aria-current activeClassName="bg-gray-900" className="bg-gray-900 hover:bg-gray-700 hover:text-white text-white px-3 py-2 rounded-md text-sm font-medium">
                    Festive Kit
                  </NavLink>


                  <NavLink to="/aboutpamperbug" aria-current activeClassName="bg-gray-900" className="bg-gray-900 hover:bg-gray-700 hover:text-white text-white px-3 py-2 rounded-md text-sm font-medium">
                  About Pamper Bug
                  </NavLink>                  

                </div>
              </div>
            </div>
          </div>
        </div>

        {/*<!-- Mobile menu, show/hide based on menu state. -->*/}
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/*<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->*/}
            <a href="/" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Explore and Enjoy</a>

            <a href="/festivekit" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Festive Kit</a>

            <a href="/aboutpamperbug" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About Pamper Bug</a>

          </div>
        </div>
      </nav>




      <Switch>
      <Route exact path="/aboutpamperbug" component={Aboutbug}>
          <Aboutbug />
        </Route>
        <Route exact path="/festivekit" component={Festivekit}>
          <Festivekit />
        </Route>
        <Route exact path="/" component={Exploreenjoy}>
          <Exploreenjoy />
        </Route>
      </Switch>




          {/*<!-- This example requires Tailwind CSS v2.0+ -->*/}
          <div className="bg-indigo-600">
            <div className="max-w-8xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between flex-wrap">
                <div className="w-0 flex-1 flex items-center">
                  <span className="flex p-2 rounded-lg bg-indigo-800">
                    {/*<!-- Heroicon name: outline/speakerphone -->*/}
                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  </span>
                  <p className="ml-3 font-medium text-white truncate">
                    <span className="md:hidden">
                      We announced a new product!
                    </span>
                    <span className="hidden md:inline">
                      Big news! We're excited to announce a brand new product.
                      <a href="https://kayakcm.com" className="flex items-centertext-sm font-small text-xs text-gray-900">
                    Crafted by KayakCM.com
                  </a> 
                  <a href="https://www.pandagoesfishing.com" className="flex items-centertext-sm font-small text-xs text-gray-900">
                  In love with pandagoesfishing.com
                  </a> 
                    
                    </span>

                  </p>
                </div>
                <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                  
                  <form id="btnbottom">
                              
                  </form>
                </div>

              </div>
            </div>
          </div>

        </div>
      
        </Router>
  );
}

export default App;
