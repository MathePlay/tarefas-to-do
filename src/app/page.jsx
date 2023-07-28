"use client";
import { SunIcon } from "lucide-react";
import BarraAdicionar from "../components/BarraAdicionar";
import TarefaConcluida from "../components/Tarefas/TarefaConcluida";
import HeaderMain from "../components/HeaderMain";
import Tarefa from "../components/Tarefas/Tarefa";
import useTarefas from "@/data/hooks/useTarefas";

export default function Home() {
  const { adicionarTarefa, concluirTarefa, deletarTarefa, tarefas } =
    useTarefas();

  const dataAtual = new Date();

  return (
    <>
      <HeaderMain nome="Meu Dia">
        <SunIcon />
      </HeaderMain>

      <BarraAdicionar addTarefa={adicionarTarefa} />

      {tarefas
        .filter(
          (item) =>
            item.concluido === false && item.data === dataAtual.toDateString()
        )
        .map((item) => (
          <Tarefa
            key={item.id}
            nome={item.nome}
            deletarTarefas={() => concluirTarefa(item.id)}
            data={item.data}
          />
        ))}

      {tarefas.filter(
        (item) =>
          item.concluido === true && item.data === dataAtual.toDateString()
      ).length > 0 ? (
        <h1 className="mt-5">Concluidas</h1>
      ) : (
        ""
      )}

      {tarefas
        .filter(
          (item) =>
            item.concluido === true && item.data === dataAtual.toDateString()
        )
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
