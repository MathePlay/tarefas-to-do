"use client"
import BarraAdicionar from '../components/BarraAdicionar'
import HeaderMain from '../components/HeaderMain'
import Tarefa from '../components/Tarefa'
import {useEffect, useState} from 'react'

export default function Home() {

  const dataAtual = new Date
  
  const [tarefas, setTarefas] = useState([])

  useEffect(() => {
    const tarefasStorage = localStorage.getItem('@minhastarefas')

    if (tarefasStorage){
        setTarefas(JSON.parse(tarefasStorage))
    }
  },[])

  
  useEffect(() => {
    localStorage.setItem('@minhastarefas', JSON.stringify(tarefas))
  },[tarefas])

  
  function adicionarTarefa(newTarefa) {
    const idTarefa = Math.floor(Date.now() * Math.random()).toString(36)
    
    if (newTarefa) {
      const dataAtual = new Date
      
      const objetoTafefa = {
        id: idTarefa,
        nome: newTarefa,
        concluido: false,
        data: dataAtual.toDateString()
      }

      setTarefas([...tarefas, objetoTafefa])
    }
  }

  function concluirTarefa(concluirTarefa){

    const indexTarefa = (tarefas.findIndex(item => item.id === concluirTarefa))
    
    const tarefaSelecionada = tarefas[indexTarefa]
    tarefaSelecionada.concluido = true
    
    setTarefas(tarefas.filter(item => item.id !== concluirTarefa))
    
    setTarefas([...tarefas])

  }

  function deletarTarefa(removerTarefa){
    setTarefas(tarefas.filter(item => item.id !== removerTarefa))
  }

  return (
    <>
      <HeaderMain nome="Meu Dia" />
      <BarraAdicionar addTarefa={adicionarTarefa}/>

      {tarefas.filter(item => item.concluido === false && item.data === dataAtual.toDateString()).map((item) => (
        <Tarefa key={item.id} nome={item.nome} deletarTarefas={() => concluirTarefa(item.id)} data={item.data}/>
      ))}

      {tarefas.filter(item => item.concluido === true && item.data === dataAtual.toDateString()).length > 0 ? <h1 className='mt-5'>Concluidas</h1>: ""}

      {tarefas.filter(item => item.concluido === true && item.data === dataAtual.toDateString()).map((item) => (
        <Tarefa key={item.id} nome={item.nome} deletarTarefas={() => deletarTarefa(item.id)}/>
      ))}

    </>
  )
}



