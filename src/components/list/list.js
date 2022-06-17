import { Item } from "../item/item"

export const List = (props) =>{
    return (
        <div className='todos-list'>
            {
                props.todos.map((todo, i)=>{
                    return (
                        <Item key={i} todo={todo}></Item>
                    )
                })
            }
            
        </div>
    )
}