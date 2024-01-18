import { Container } from 'react-bootstrap';
import NavBar from './Components/NavBar';
import MoviesList from './Components/MoviesList';
import MovieDetails from './Components/MovieDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="font color-body">
      <NavBar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviesList />} />
            <Route path="/movie/:id/" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
