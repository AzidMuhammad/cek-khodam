import React, { useState } from 'react';
import Form from './components/Form';
import Result from './components/Result';
import './App.css';

const khodamResults = [
  "Tuyul Tanpa Kancut",
  "Sekop Pasir",
  "Lampu Sein Kanan",
  "Spion",
  "Gardan Depan",
  "Adudu",
  "Boboiboy Kuasa 3",
  "Tok Dalang",
  "Teri Kacang",
  "Cah Kangkung",
  "Undur-Undur Maju",
  "Tikus Sumbing",
  "Anjing Cadel",
  "Kak Gem",
  "Uni Bakwan",
  "Manurung",
  "Emote Rudi",
  "Seblak Rafael",
  "Kosong",
  "Rawa Rontek",
  "Baraspati"
];

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

function getKhodamResult(name) {
  const index = Math.abs(hashString(name)) % khodamResults.length;
  return khodamResults[index];
}

function App() {
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (name) => {
    setLoading(true);
    setTimeout(() => {
      const khodamResult = getKhodamResult(name);
      setResult(khodamResult);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="App">
      <main className="container">
        <Form onSubmit={handleFormSubmit} />
        {loading && <div className="spinner"></div>}
        {result && !loading && <Result result={result} />}
      </main>
    </div>
  );
}

export default App;
