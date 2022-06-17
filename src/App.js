import './App.css';
import { List } from './components/list/list';

function App() {

  const todos = [
    {
      todo: "Take Bath!",
      date: new Date(),
      status: "pending"
    },
    {
      todo: "Make Breakfast",
      date: new Date(),
      status: "completed"
    }
  ]

  return (
    <div className="container-fluid p-0">
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className='p-2'>
            <a className='navbar-brand' href='#/'><i className="bi bi-card-list p-2"></i>Hello Todos</a>
          </div>
        </nav>
      </header>
      <section className='container'>
        <div className='main-container'>
          <div className='input-container mb-4'>
            <input type="text" className='form-control me-2'/>
            <button className='btn btn-primary px-4'>Add</button>
          </div>
          <div className='list-container'>
            <div className='pending-list-container mb-4'>
              <h3> Pending Todos </h3>
              <List todos={todos.filter(todo=>todo.status==="pending")}></List>
            </div>
            <div className='completed-list-container'>
            <h3> Completed Todos </h3>
              <List todos={todos.filter(todo=>todo.status==="completed")}></List>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
