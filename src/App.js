import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NewsList from "./components/NewsList";
import SingleNews from "./components/SingleNews";
import { About } from "./components/About/about";
import { Contact } from "./components/Contact/contact";
import { Error } from "./components/Error/error";
import Login from "./components/login/Login";
import Signup from "./components/signup/signup";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from './redux/store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navbar />
					<Container>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route index path="/login" element={<Login />} />
            <Route index path="/signup" element={<Signup />} />
            <Route path="/news-list" element={<NewsList />} />
            <Route path="/news/:index" element={<SingleNews />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<Error/>}/>
          </Routes>
					</Container>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
