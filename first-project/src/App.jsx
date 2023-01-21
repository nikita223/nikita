import './App.css';
import { Button } from './Button';

// js
// использовать функции JS, синтаксис JS

// html
// используем синстаксис html +  документную вёрстку

// jsx
// синтаксиc JS + синтаксис html + синтаксис JSX


const buttons = [
  { title: 'Действуй' },
  { title: 'Отмена' }
]

// компонент
function App() {

  return (
    <div className="App">
      {buttons.map((button) => <Button title={button.title} />)}
    </div>
  );
}

export

{
  App,
};
