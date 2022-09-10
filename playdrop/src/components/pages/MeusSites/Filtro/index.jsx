import React, { useCallback, useEffect, useState } from "react";

//List teste
const initialItems = [
  {
    area: "Development",
    categoria: "Desenvolvimento",
    id: "1",
    name: "Meu Site",
    comp: "Registro BR",
    url: "https://www.google.com",
    status: "Disponível",
  },
  {
    area: "Restaurante",
    categoria: "Culinária",
    id: "1",
    name: "Delícia Mineira",
    comp: "Registro BR",
    url: "https://www.deliciademinas.com.br",
    status: "Disponível",
  },
  {
    area: "Turismo",
    categoria: "Turismo",
    id: "1",
    name: "Rota da Canastra",
    comp: "Registro BR",
    url: "https://www.rotadacanastra.com",
    status: "Não Disponível",
  },
];
//Render
const filterIt = (terms, arr) => {
  if ("" === terms || terms.length < 3) return arr;
  const words = terms.match(/\w+|"[^"]+"/g);
  words.push(terms);
  return arr.filter((a) => {
    const v = Object.values(a);
    const f = JSON.stringify(v).toLowerCase();

    return words.every((val) => f.includes(val));
  });
};

const FiltroDominio = () => {
  const [items, setItems] = useState([]);

  const filterList = useCallback(({ target }) => {
    const searchQuery = target.value.toLowerCase();
    const updatedList = filterIt(searchQuery, initialItems);
    setItems(updatedList);
  }, []);

  return (
    <>
      <form className="form-dominio">
        <input placeholder="Confirme o seu domínio" onChange={filterList} />
        <button>Cadastrar</button>
        <List items={items} />
      </form>
    </>
  );
};

const List = ({ items }) => (
  <ul className="list_sites">
    {items.map((item) => (
      <li key={item.id}>
        <h2>{item.name}</h2>
        <p>{item.url}</p>
        <p>Status: {item.status}</p>
      </li>
    ))}
  </ul>
);

export default FiltroDominio;
