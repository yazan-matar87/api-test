import './App.css';
import MainPage from "./MainPage";
import Edit_Page from './components/EditPage';
import LogIn from "./components/logIn";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import NoPage from './components/NoPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/editPage/:id" element={<Edit_Page />} />
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/logIn" element={<LogIn />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
