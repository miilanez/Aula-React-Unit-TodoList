import Header from './components/header/header';
import ListItem from './components/list-item';

import './App.css';


function App() {
  return (
    <div className="App">
      <Header title="To-do List"/>
      <section>
        <h2>Itens</h2>
        <ul>
          <ListItem title="Comprar Pão"/>
          <ListItem title="Lavar o carro"/>
          <ListItem title="Lançar notas"/>
          <ListItem title="Gerenciar API"/>
          <ListItem title="Criar CSS"/>
        </ul>
      </section>
    </div>
  );
}

export default App;
