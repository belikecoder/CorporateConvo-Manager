
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Profile from "./pages/profile";
import Layout from "./components/na";
import Signup from "./pages/signup";
import Events from "./components/events";
import User from "./pages/user";
import EventBooking from "./components/usereventbooking";
import PaymentForm from "./components/userpaymentform";
import Hist from "./shared/history";
import CurrentEvent from "./shared/currentbookedevent";
import OldEvent from "./shared/oldbookedevent";






export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/user" element={<User />} />
          <Route path="/usereventbooking" element={<EventBooking />} />
          <Route path="/usereventbooking" element={<PaymentForm />} />
          <Route path="/history" element={<Hist />} />
          <Route path="/oldbookedevent" element={<OldEvent />} />
          <Route path="/currentbookedevent" element={<CurrentEvent />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
