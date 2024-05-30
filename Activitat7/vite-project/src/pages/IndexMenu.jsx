import React from 'react';
import Card from '../components/Card';

const IndexMenu = () => {
  return (
    <div>
      <Card 
        title="Llistat de pel·lícules"
        description="Veure el llistat complet de pel·lícules disponibles."
        link="/movies/list" 
      />
      <Card 
        title="Afegir una pel·lícula"
        description="Afegir una nova pel·lícula a la llista."
        link="/movies/add" 
      />
    </div>
  );
};

export default IndexMenu;
