
import ReactDOM from "react-dom/client";
import './App.css'
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
import EventDetailsPage from "./services/oldBooked data";
import Dash from "./pages/dash";
import AddEvent from "./components/adimnaddevent";
import EditEvent from "./components/admineditevent";
import ASide from "./components/side";
import Sideb from "./components/usersidebar";
import EventTable from "./components/eventtable";
import AdMess from "./components/messages";
import EventTab from "./components/adevents";
import DeleTab from "./components/addelete";
import AProfile from "./pages/aprofile";
import Service from "./pages/service";
import UMessages from "./pages/usermess";








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
          <Route path="/userpaymentform" element={<PaymentForm />} />
          <Route path="/history" element={<Hist />} />
          <Route path="/oldbookedevent" element={<EventDetailsPage />} />
          <Route path="/currentbookedevent" element={<CurrentEvent />} />
          <Route path="/dash" element={<Dash/>} />
          <Route path="/adimnaddevent" element={<AddEvent/>} />
          <Route path="/admineditevent" element={<EditEvent/>} />
          <Route path="/usersidebar" element={<Sideb/>} />
          <Route path="/eventtable" element={<EventTable/>} />
          <Route path="/messages" element={<AdMess/>} />
          <Route path="/adeventtable" element={<EventTab/>} />
          <Route path="/addelete" element={<DeleTab/>} />
          <Route path="/aprofile" element={<AProfile/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/usermess" element={<UMessages/>} />
          
     
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
