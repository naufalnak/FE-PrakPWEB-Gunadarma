import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import DataMahasiswaPage from './pages/DataMahasiswaPage';
import TambahDataPage from './pages/TambahDataPage';
import EditDataPage from './pages/EditDataPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/data_mhs" element={<DataMahasiswaPage />} />
        <Route path="/tambah_data" element={<TambahDataPage />} />
        <Route path="/edit_data" element={<EditDataPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
