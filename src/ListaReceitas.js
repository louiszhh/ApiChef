import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { obterReceitas } from './api';
import './ListaReceitas.css'; // Importar o CSS

function ListaReceitas() {
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    obterReceitas().then(data => setReceitas(data));
  }, []);

  return (
    <div className="lista-receitas">
      <h1>Lista de Receitas</h1>
      <ul>
        {receitas.map(receita => (
          <li key={receita.id}>
            <Link to={`/receita/${receita.id}`}>{receita.titulo}</Link>
          </li>
        ))}
      </ul>
      <Link to="/adicionar" className="link-adicionar">Adicionar Nova Receita</Link>
    </div>
  );
}

export default ListaReceitas;
