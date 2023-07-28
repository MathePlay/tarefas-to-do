"use client";
import BarraAdicionar from "@/components/BarraAdicionar";
import HeaderMain from "../../components/HeaderMain";
import Tarefa from "@/components/Tarefas/Tarefa";
import { HomeIcon } from "lucide-react";
import TarefaConcluida from "@/components/Tarefas/TarefaConcluida";
import useTarefas from "../../data/hooks/useTarefas";

export default function Tarefas() {
  const { adicionarTarefa, concluirTarefa, deletarTarefa, tarefas } =
    useTarefas();

  return (
    <>
      <HeaderMain nome="Tarefas">
        <HomeIcon />
      </HeaderMain>
      <BarraAdicionar addTarefa={adicionarTarefa} />

      {tarefas
        .filter((item) => item.concluido === false)
        .map((item) => (
          <Tarefa
            key={item.id}
            nome={item.nome}
            deletarTarefas={() => concluirTarefa(item.id)}
            data={item.data}
          />
        ))}

      {tarefas.filter((item) => item.concluido === true).length > 0 ? (
        <h1 className="mt-5">Concluidas</h1>
      ) : (
        ""
      )}

      {tarefas
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
