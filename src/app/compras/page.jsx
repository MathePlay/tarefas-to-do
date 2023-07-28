"use client";
import BarraAdicionar from "@/components/BarraAdicionar";
import HeaderMain from "../../components/HeaderMain";
import { ShoppingCart } from "lucide-react";
import useListaCompras from "@/data/hooks/useListaCompras";
import TarefaConcluida from "@/components/Tarefas/TarefaConcluida";
import Tarefa from "@/components/Tarefas/Tarefa";

export default function Compras() {
  const { lista, adicionarTarefa, concluirTarefa, deletarTarefa } =
    useListaCompras();

  return (
    <>
      <HeaderMain nome="Compras">
        <ShoppingCart />
      </HeaderMain>
      <BarraAdicionar addTarefa={adicionarTarefa} compras />

      {lista
        .filter((item) => item.concluido === false)
        .map((item) => (
          <Tarefa
            key={item.id}
            nome={item.nome}
            deletarTarefas={() => concluirTarefa(item.id)}
            data={item.data}
          />
        ))}

      {lista.filter((item) => item.concluido === true).length > 0 ? (
        <h1 className="mt-5">Tá no carrinho</h1>
      ) : (
        ""
      )}

      {lista
        .filter((item) => item.concluido === true)
        .map((item) => (
          <TarefaConcluida
            key={item.id}
            nome={item.nome}
            deletarTarefas={() => deletarTarefa(item.id)}
          />
        ))}
    </>
  );
}
