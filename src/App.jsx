import { Contador } from './components/Contador';
import { Eventos } from './components/Eventos';
import { Lista } from './components/Lista'
import './App.css'
import {Repositorios} from './components/Repositorios'
import Imagem from './components/Imagem'
import Titulo from './components/Titulo'
import Subtitulo from './components/Subtitulo';

function App() {
  return (
    <div className="App">
           
        <Titulo />
        <Imagem link="https://pbs.twimg.com/profile_images/1573853026980438016/eA-0T1Ke_400x400.jpg"/>
        <Subtitulo />
        <Eventos /> 
        
        <Repositorios/>

    </div>
  )
}
export default App

