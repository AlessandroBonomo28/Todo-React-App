import { CustomCheckbox } from "./CustomCheckbox";
import { CustomSpan } from "./CustomSpan";


interface ToDoProps {
    isCompleted: boolean
    name: string
    id: number
    toggleCompleted: () => void
};
export type {ToDoProps};

export default function Todo(props : ToDoProps){
    return (
        <div>
            <CustomCheckbox type="checkbox" checked={props.isCompleted} onChange={props.toggleCompleted}/>
            <CustomSpan style={{textDecoration: props.isCompleted ? 'line-through' : 'none'}}>{props.name}</CustomSpan>
        </div>
    );
};