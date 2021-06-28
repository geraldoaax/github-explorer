import './styles/global.scss';
import { RepositoryList } from './compoments/RepositoryList';
import { Counter } from './compoments/Counter';
export function App() {
  // throw new Error('Coxinha');
  return (
    <>
      <RepositoryList />
      <Counter />
    </>
  )
}