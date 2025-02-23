import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import Menu from './Pages/Menu';
import Order from './Pages/OrderOnline';
import Reservations from './Pages/Reservations';
import Navbar from './Components/Navbar';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import Cart from './Pages/Cart';
import BookingPage from './Pages/BookingPage';
import MyAccount from './Pages/MyAccount';
import CreateAnAccount from './Pages/CreateAnAccount';
import './App.css';
import "@fontsource/karla"; // Defaults to weight 400
import "@fontsource/karla/400.css"; // Specify weight
import "@fontsource/karla/400-italic.css"; // Specify weight and style
import "@fontsource/markazi-text"; // Defaults to weight 400

const App = () => {

 return (
    <>
      <Helmet>
        <title>Little Lemon Restaurant</title>
        <meta name="description" content="The Little Lemon Restaurant's site for reading the menu, ordering food, making reservations, and checking your account."/>
        <meta name="og:title" content="Little Lemon Restaurant"/>
        <meta name="og:description" content="The Little Lemon Restaurant's site for reading the menu, ordering food, making reservations, and checking your account."/>
        <meta name="og:image" content="src/assets/restaurant.jpg"/>
      </Helmet>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/order-online" element={<Order />} />
          <Route path="/order-online/my-cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/create-account" element={<CreateAnAccount />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/address" element={<Contact subsection="address" />} />
          <Route path="/contact/phone" element={<Contact subsection="phone" />} />
          <Route path="/contact/email" element={<Contact subsection="email" />} />
          <Route path="/reservations/book" element={<BookingPage />} />
        </Routes>
        <Footer key="footer"/>
    </>
 );
};

export default App;