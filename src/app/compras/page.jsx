"use client"
import BarraAdicionar from "@/components/BarraAdicionar"
import HeaderMain from "../../components/HeaderMain"
import { ShoppingCart } from "lucide-react"
import { useEffect, useState } from "react"
import TarefaConcluida from "@/components/TarefaConcluida"
import Tarefa from "@/components/Tarefa"

export default function Compras() {
    const dataAtual = new Date

    const [lista, setLista] = useState([])

    useEffect(() => {
        const tarefasStorage = localStorage.getItem('@minhascompras')

        if (tarefasStorage) {
            setLista(JSON.parse(tarefasStorage))
        }
    }, [])


    useEffect(() => {
        localStorage.setItem('@minhascompras', JSON.stringify(lista))
    }, [lista])


    function adicionarTarefa(novoItem) {
        const idTarefa = Math.floor(Date.now() * Math.random()).toString(36)

        if (novoItem) {
            const dataAtual = new Date

            const objetoTafefa = {
                id: idTarefa,
                nome: novoItem,
                concluido: false,
                data: dataAtual.toDateString()
            }

            setLista([...lista, objetoTafefa])
        }
    }

    function concluirTarefa(concluirTarefa) {

        const indexTarefa = (lista.findIndex(item => item.id === concluirTarefa))

        const tarefaSelecionada = lista[indexTarefa]
        tarefaSelecionada.concluido = true

        setLista(lista.filter(item => item.id !== concluirTarefa))

        setLista([...lista])

    }

    function deletarTarefa(removerTarefa) {
        setLista(lista.filter(item => item.id !== removerTarefa))
    }
    return (
        <>
            <HeaderMain nome="Compras">
                <ShoppingCart />
            </HeaderMain>
            <BarraAdicionar addTarefa={adicionarTarefa} compras/>

            {lista.filter(item => item.concluido === false).map((item) => (
                <Tarefa key={item.id} nome={item.nome} deletarTarefas={() => concluirTarefa(item.id)} data={item.data} />
            ))}

            {lista.filter(item => item.concluido === true).length > 0 ? <h1 className='mt-5'>Tá no carrinho</h1> : ""}

            {lista.filter(item => item.concluido === true).map((item) => (
                <TarefaConcluida key={item.id} nome={item.nome} deletarTarefas={() => deletarTarefa(item.id)} />
            ))}



        </>
    )
}