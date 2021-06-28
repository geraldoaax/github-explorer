import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

//https://api.github.com/orgs/rocketseat/repos

// const repository = { //propriedades
//   name: 'unform',
//   description: 'Forms in React',
//   link: 'https://unform.com/'
// }

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]); //estado armazena listagem de repositorios //inicia com valor vazio (mesmo tipo)

  //useEfect -> Dispara uma função quando algo acontece

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, []); //dependencias) nao fica sem parametro ou atualizar uma variavel como dependencia

  return (
    <section className="reposytory-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        {/* //componente adicionado */}
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository} /> //utilizar no primeiro item a propriedadew key
        })}
      </ul>

    </section>
  );
}