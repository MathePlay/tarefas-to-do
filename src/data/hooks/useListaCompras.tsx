import { useCallback, useEffect, useState } from "react";

export default function useListaCompras() {
    const [lista, setLista] = useState<any []>([])

    useEffect(() => {
        const tarefasStorage = localStorage.getItem('@minhascompras')

        if (tarefasStorage) {
            setLista(JSON.parse(tarefasStorage))
        }
    }, [])


    useEffect(() => {
        localStorage.setItem('@minhascompras', JSON.stringify(lista))
    }, [lista])


    function adicionarTarefa(item: string) {
        const idTarefa = Math.floor(Date.now() * Math.random()).toString(36)

        if (item) {
            const dataAtual = new Date

            const objetoTafefa = {
                id: idTarefa,
                nome: item,
                concluido: false,
                data: dataAtual.toDateString()
            }

            setLista([...lista, objetoTafefa])
        }
    }

    function concluirTarefa(item: string) {

        const indexTarefa = (lista.findIndex(item => item.id === item))

        const tarefaSelecionada = lista[indexTarefa]
        tarefaSelecionada.concluido = true

        setLista(lista.filter(item => item.id !== item))

        setLista([...lista])

    }

    function deletarTarefa(item: string) {
        setLista(lista.filter(item => item.id !== item))
    }

    return {
        lista,
        adicionarTarefa,
        concluirTarefa,
        deletarTarefa
    }
}