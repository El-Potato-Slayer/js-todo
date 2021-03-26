import addButtonFunctionalities from "../helpers/buttonshelper"
import displayHeaders, { displayTodos } from "../helpers/todos"

export default function todoList(){
    displayHeaders()
    displayTodos()
    addButtonFunctionalities()
}