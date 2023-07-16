"use client"
import BarraAdicionar from '../components/BarraAdicionar'
import HeaderMain from '../components/HeaderMain'
import DataAtual from '../components/DataAtual'
import Tarefas from '../components/Tarefas'
import {useState} from 'react'

export default function Home() {
  
  const [tarefas, setTarefas] = useState(['teste'])

  function adicionarTarefa(result) {
    setTarefas(...tarefas, result)
  }

  return (
    <>
      <HeaderMain nome="Meu Dia" />
      <BarraAdicionar addTarefa={adicionarTarefa}/>

      {tarefas.map(item => (
        <p>{item}</p>
      ))}

      <Tarefas/>

      {/* <div>
        {tarefas.map(tarefa => (
          <h1>
            {tarefa.nome}
          </h1>
        ))}
      </div> */}

    </>
  )
}



