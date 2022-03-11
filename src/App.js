import './App.css';
import CardImg from './components/CardImg';
import CardText from './components/CardText';

function App() {
  return (
    <div className="App">
      <div className='card'>
        <CardImg  />
        <CardText title="Backpack" price="34$" text="With a concept designed to be easy to understand,RAINS bridge the gap between geography and lifestyle."
          titleColors="Colors" titleSizes="Size" size1="S" size2="M" size3="L" />
      </div>
    </div>
  );
}

export default App;
