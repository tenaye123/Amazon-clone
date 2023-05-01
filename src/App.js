import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import React, { useEffect } from "react";
import { auth } from "./Firebase";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Footer from "./Footer";
import Orders from "./Orders";
// import Home2 from "./Home2";

const promise = loadStripe(
  "pk_test_51Myz5tCpLwztK4sm4AEGMEzmyvSjCF8JEm184HVEuEQmW2d5K2GKgJE6Teuf80S1BIMsV0EAysLEvWIqmr8ohV1X00wYOIBag5"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
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
        <Routes>
          <Route
            path="/payment"
            element={
              <>
                <Header />

                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route path="/login" element={<Login />} />

          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
               
                <Footer />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

//  import "./App.css";
// import Header from "./Header";
// import Home from "./Home";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Checkout from "./Checkout";
// import Login from "./Login";
// import { useStateValue } from "./StateProvider";
// import React, { useEffect } from "react";
// import { auth } from "./Firebase";
// import Payment from "./Payment";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

// const promise = loadStripe(
//   "pk_test_51Hf9EsIjq2KMm1vIrtyaI9OtGTvf45UJtZJgN3TPTmOaTQ5IAqHwTs4YIhZCQNNphj6NkIAFZN75pLloPCwMrsZz00SVhcXIq6"
// );

// function App() {
//   const [{}, dispatch] = useStateValue();

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((authUser) => {
//       if (authUser) {
//         dispatch({
//           type: "SET_USER",
//           user: authUser,
//         });
//       } else {
//         dispatch({
//           type: "SET_USER",
//           user: null,
//         });
//       }
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, [dispatch]);

//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route
//             path="/payment"
//             element={
//               <Elements stripe={promise}>
//                 <Payment />
//               </Elements>
//             }
//           />
//           <Route path="/" element={<Home />} />
//           <Route path="/checkout" element={<Checkout />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;