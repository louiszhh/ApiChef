import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { obterReceitaPorId } from './api';
import './DetalhesReceita.css'; // Importar o CSS

function DetalhesReceita() {
  const { id } = useParams();
  const [receita, setReceita] = useState(null);

  useEffect(() => {
    obterReceitaPorId(parseInt(id)).then(data => setReceita(data));
  }, [id]);

  if (!receita) return <div>Carregando...</div>;

  return (
    <div className="detalhes-receita">
      <h1>{receita.titulo}</h1>
      <h2>Ingredientes:</h2>
      <ul>
        {receita.ingredientes.map((ingrediente, index) => (
          <li key={index}>{ingrediente}</li>
        ))}
      </ul>
      <h2>Modo de Preparo:</h2>
      <p>{receita.modoPreparo}</p>
    </div>
  );
}

export default DetalhesReceita;
