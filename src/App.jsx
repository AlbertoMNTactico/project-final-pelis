import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import { AuthProvider } from './providers/AuthProvider';
import Home from './pages/Home';
import Reviews from './pages/Reviews'; 
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            {/* Añade una nueva ruta para "reviews" */}
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
