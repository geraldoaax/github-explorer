import { useState } from 'react';

//hook -> funcao comeca com use

//javascript comum faz uma mutaçao na vairável .. Ex. usuarios.push('coxinha)
//Não pode ser feito para o gerenciamento do estado, no react...

//imutabilidade -> Uma varivável não pode ter o seu valor alterado, ela sempre recebe um novo valor.
//Novosusuarios = [...usuarios, 'geraldo'] -> ...spreadOperator (repete os valores)
//Cria um novo espaço na memória (Conceito de programação funcional + performance)

export function Counter() {
  //const -> Constante
  //Let -> let it Change
  const [counter, setCounter] = useState(0); //seta um novo valor para counter (setCounter)
  //retorna um array

  function increment() {
    setCounter(counter + 1) // -> Cria uma nova variável counter
  }
  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}