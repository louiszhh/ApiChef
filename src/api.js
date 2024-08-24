import receitasData from '../src/receitas.json';

export const obterReceitas = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(receitasData);
    }, 1000);
  });
};

export const obterReceitaPorId = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const receita = receitasData.find(r => r.id === id);
      resolve(receita);
    }, 1000);
  });
};

export const adicionarReceita = (novaReceita) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      receitasData.push(novaReceita);
      resolve(novaReceita);
    }, 1000);
  });
};
