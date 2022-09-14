import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GithubProvider } from "./Context/GitHub/GithubContext";
import { AlertProvider } from './Context/Alert/AlertContext';
import Navbar from './Components/Layout/Navbar';
import Alert from "./Components/Layout/Alert";
import Home from './Pages/Home';
import About from './Pages/About';
import User from './Pages/User';
import NotFound from './Pages/NotFound';
import Footer from './Components/Layout/Footer';

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className='container mx-auto px-3 pb-12'>
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/users/:login" element={<User />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;