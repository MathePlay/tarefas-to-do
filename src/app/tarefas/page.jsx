"use client"
import BarraAdicionar from "@/components/BarraAdicionar"
import HeaderMain from "../../components/HeaderMain"
import Tarefa from "@/components/Tarefa"
import { useState, useEffect } from "react"

export default function Tarefas() {

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
      console.log(newTarefa)
      
      if (newTarefa) {
        const dataAtual = new Date
        
        const objetoTafefa = {
          id: idTarefa,
          nome: newTarefa,
          concluido: false,
          data: dataAtual.toDateString()
        }
        console.log(objetoTafefa)
  
        setTarefas([...tarefas, objetoTafefa])
      }
    }
  
    function concluirTarefa(concluirTarefa){
      console.log("parametro da funcao: ", concluirTarefa)
  
      const indexTarefa = (tarefas.findIndex(item => item.id === concluirTarefa))
      console.log("index: ", indexTarefa)
      
      const tarefaSelecionada = tarefas[indexTarefa]
      tarefaSelecionada.concluido = true
      console.log("Tarefa selecionada apos a alteração: ", tarefaSelecionada)
      
      setTarefas(tarefas.filter(item => item.id !== concluirTarefa))
      console.log("apos o delete: ",tarefas)
      
      setTarefas([...tarefas])
  
    }
  
    function deletarTarefa(removerTarefa){
      setTarefas(tarefas.filter(item => item.id !== removerTarefa))
    }
  
    return (
      <>
        <HeaderMain nome="Meu Dia" />
        <BarraAdicionar addTarefa={adicionarTarefa}/>
  
        {tarefas.filter(item => item.concluido === false).map((item) => (
          <Tarefa key={item.id} nome={item.nome} deletarTarefas={() => concluirTarefa(item.id)} data={item.data}/>
        ))}
  
        {tarefas.filter(item => item.concluido === true).length > 0 ? <h1 className='mt-5'>Concluidas</h1>: ""}
  
        {tarefas.filter(item => item.concluido === true).map((item) => (
          <Tarefa key={item.id} nome={item.nome} deletarTarefas={() => deletarTarefa(item.id)}/>
        ))}
  
      </>
    )
  }