"use client";
import BarraAdicionar from "@/components/BarraAdicionar";
import HeaderMain from "../../components/HeaderMain";
import { ShoppingCart, Star,  } from "lucide-react";
import useListaCompras from "@/data/hooks/useListaCompras";
import Tarefa from "@/components/Tarefas/Tarefa";
import useTarefas from "@/data/hooks/useTarefas";

export default function Favoritos() {
    const { adicionarTarefa, concluirTarefa, deletarTarefa, tarefas, favoritar } =
    useTarefas();

  return (
    <>
      <HeaderMain nome="Favoritos">
        <Star />
      </HeaderMain>
      <BarraAdicionar addTarefa={adicionarTarefa} />

      {tarefas
        .filter((item) => item.concluido == false && item.favorito == true)
        .map((item) => (
          <Tarefa
            key={item.id}
            nome={item.nome}
            deletarTarefas={() => concluirTarefa(item.id)}
            data={item.data}
            isfavorito={item.favorito}
            favoritarTarefas={() => favoritar(item.id)}
          />
        ))}

      {tarefas.filter((item) => item.concluido === true && item.favorito === true).length > 0 ? (
        <h1 className="mt-5">Concluidas</h1>
      ) : (
        ""
      )}

      {tarefas
        .filter((item) => item.concluido === true && item.favorito === true)
        .map((item) => (
          <Tarefa
            key={item.id}
            nome={item.nome}
            deletarTarefas={() => deletarTarefa(item.id)}
            concluida
          />
        ))}
    </>
  );
}
