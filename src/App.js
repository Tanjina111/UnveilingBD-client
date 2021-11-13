import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import AddService from './Pages/AddService/AddService';
import AllBooks from './Pages/AllBooks/AllBooks';
import AddReview from './Pages/AddReview/AddReview';
import Detail from './Pages/Detail/Detail';
import Home from './Pages/Home/Home/Home';
import Review from './Pages/Home/Review/Review';
import LogIn from './Pages/LogIn/LogIn';
import ManageOrders from './Pages/ManageOrders/ManageOrders';
import MyOrders from './Pages/MyOrders/MyOrders';
import PageError from './Pages/PageError/PageError';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Registration from './Pages/Registration/Registration';
import Footer from './Pages/Shared/Footer/Footer';
import Navigation from './Pages/Shared/Navigation/Navigation';
import ManageBooks from './Pages/ManageBooks/ManageBooks';
import Payment from './Pages/Payment/Payment';
import MakeAdmin from './Pages/MakeAdmin/MakeAdmin';

function App() {
  return (
    <div className="App">
      <AuthProvider>
     <Router>
     <Navigation></Navigation>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/allthebooks'>
          <AllBooks></AllBooks>
        </Route>

        {/* Private Route */}
         <PrivateRoute path='/detail/:id'>
        <Detail></Detail>
        </PrivateRoute>
        <PrivateRoute path='/orders/:id'>
        <MyOrders></MyOrders>
        </PrivateRoute>
        <PrivateRoute path='/addReview'>
        <AddReview></AddReview>
        </PrivateRoute>
        <PrivateRoute path='/payment'>
        <Payment></Payment>
        </PrivateRoute>

        <PrivateRoute path='/addservice'>
        <AddService></AddService>
        </PrivateRoute>
        <PrivateRoute path='/manageorders'>
        <ManageOrders></ManageOrders>
        </PrivateRoute>
        <PrivateRoute path='/manageBooks'>
        <ManageBooks></ManageBooks>
        </PrivateRoute>
        <PrivateRoute path='/makeAdmin'>
        <MakeAdmin></MakeAdmin>
        </PrivateRoute>

        <Route path='/login'>
        <LogIn></LogIn>
        </Route>
        <Route path='/register'>
        <Registration></Registration>
        </Route>
        <Route path='*'>
        <PageError></PageError>
        </Route>
      </Switch>
      <Footer></Footer>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
