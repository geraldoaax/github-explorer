import { RepositoryItem } from "./RepositoryItem";

const repository = { //propriedades
  name: 'unform',
  description: 'Forms in React',
  link: 'https://unform.com/'
}

export function RepositoryList() {
  return (
    <section className="reposytory-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        {/* //componente adicionado */}
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>

    </section>
  );
}