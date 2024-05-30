import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Assegura't que el camí és correcte
import './index.css'; // Importa els teus estils

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('No s\'ha trobat l\'element root');
}
