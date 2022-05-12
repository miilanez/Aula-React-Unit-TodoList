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
          <ListItem />
        </ul>
      </section>
    </div>
  );
}

export default App;
