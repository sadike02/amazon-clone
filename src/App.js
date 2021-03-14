import './App.css';
import Header from './Header'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
 import Login from "./Login";
 import { auth } from "./firebase";
 import React, { useEffect } from "react";
import { useStateValue } from "./Stateprovider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';
const promise = loadStripe(
  "pk_test_51IOW4PHS3F4QcTvC2h6cRBtt6YmP9Ev7M5Jkoxrxw3RiIATn63W8OtjMezIsYfYQy7eMxVsBsvI7dXhhyrpWNbS100xOZJKfz5"
);
 
function App() {
    const [{}, dispatch] = useStateValue();
    useEffect(() => {
      auth.onAuthStateChanged((authUser) => {
        
        if (authUser) {
        

          dispatch({
            type: "SET_USER",
            user: authUser,
          });
        } else {
         
          dispatch({
            type: "SET_USER",
            user: null,
          });
        }
      });
    }, []);
   return (
     <Router>
       <div className="App">
         <Switch>
           <Route path="/orders">
             <Header />
             <Orders />
           </Route>
           <Route path="/login">
             <Login />
           </Route>
           <Route path="/payment">
             <Elements stripe={promise}>
               <Payment />
             </Elements>
           </Route>
           <Route path="/checkout">
             <Header />
             <Checkout />
           </Route>
           <Route path="/">
             <Header />
             <Home />
           </Route>
         </Switch>
       </div>
     </Router>
   );
}

export default App;
