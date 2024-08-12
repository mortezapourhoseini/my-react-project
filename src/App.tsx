import './App.css'
import Hello from './component/Hello';
import TodoList from './component/Todo/TodoList';
import Weather from './component/Weather';

function App() {

  return (
    <>
      <div className="flex flex-col w-8/12 h-4/6 ">
        <div className="flex">
          <div className="flex w-4/12 justify-center align-middle p-1">
            <Hello />
          </div>
          <div className="flex w-8/12 justify-center align-middle p-1">
            <Weather />
          </div>
        </div>
        <div className="flex justify-center align-middle p-1">
          <TodoList />
        </div>
      </div>

    </>
  )
}

export default App;
