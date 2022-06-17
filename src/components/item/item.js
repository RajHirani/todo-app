export const Item = (props) =>{
    const { todo, date, status } = props.todo;
    if(status === 'pending'){
        return (
            <div className="todo-item">
                <div className="todo-with-check d-flex ">
                <input className="form-check-input me-2" type="checkbox" value="" id="" />
                <p>{todo} <br></br><span className='todo-date'>{date.toDateString()}</span></p>
                </div>
                <button className='delete-btn'><i class="bi bi-archive-fill"></i></button>
            </div>
        )
    }else{
        return (
            <div className='todo-item'>
                <p>{todo} <br></br><span className='todo-date'>{date.toDateString()}</span></p>
                <button className='delete-btn'><i class="bi bi-archive-fill"></i></button>
            </div>
        )
    }
}