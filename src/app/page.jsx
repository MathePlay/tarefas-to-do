import BarraAdicionar from '../components/BarraAdicionar'
import HeaderMain from '../components/HeaderMain'
import DataAtual from '../components/DataAtual'
import Tarefa from '../components/Tarefa'

export default function Home() {
  return (
    <>
        <HeaderMain nome="Meu Dia"/>
        <BarraAdicionar/>

        {/* <div className='min-h-3/5 flex flex-col justify-between px-12 bg-blue-500 gap-1' >
            <Tarefa />
            <Tarefa />
            <Tarefa />
            <Tarefa />
            <Tarefa />
        </div>

        <BarraAdicionar /> */}
    </>
  )
}



