# Todo React + MaterialUI App
Simple todo app using Typescript + React + Vite and **MaterialUI** UI library for automatic styling and responsiveness.

![appTodoDecente](https://github.com/AlessandroBonomo28/Todo-React-App/assets/75626033/cf4e37b1-dd9a-4cb8-8f25-37c9dd5301b1)

## Create a react-app with Vite
Check that you have node installed
> node -v

Use react vite for a quick node + react + vite project environment setup (then Select React, Typescript, enter project name)
> npm create vite@latest

**Or create vite react+vite+typescript app with one command**

> npx create-vite@latest my-app --template react-ts

Now enter the app, install and run in dev mode

> cd your-app
> 
> npm install
>
> npm run dev

When you are ready for production
> npm run build

You will find your app built in the *./dist* directory
## install material UI library
> npm install @mui/material @emotion/react @emotion/styled

icons
> npm install @mui/icons-material @mui/material @emotion/styled @emotion/react


# Bad practices to avoid for React
https://tekolio.com/reactjs-bad-practices-and-how-to-avoid-them/

This article explained one of my doubts: deconstructing props. Deconstructing props increases legibility of code and it's good to have a *prop* interface for every react component like *Todo* -> *TodoProps*, *TodoList* -> *TodoListProps*
# Tips
### Comparator
Utilizza === invece di ==, e !== invece di !=
### React arrow function component export
If you tipe *rafce (react arrow function component export)* and hit enter you will be completed with 
 ```
 import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App
 ```
 ### React function component export
If you tipe *rfce (react function component export)* and hit enter you will be completed with 
 ```
import React from 'react'

function App() {
  return (
    <div>App</div>
  )
}

export default App
 ```
 ## Differenza tra Arrow function e function
 La arrow function è una versione semplificata della function. In questo progetto ho utilizzato l'arrow function per definire funzioni nell'**App.tsx** (che sarebbe un pò come il main dell'applicazione). Preferisco definire i components con la sintassi della function invece dell'arrow function.
 # Un buon esempio di programmazione
 In questo esempio c'è un Form con un inputText e un pulsante. Quando il pulsante viene premuto, viene eseguito: *handleSubmit* (di ComponentForm) -> *doSomethingFunction* (di Component Form) -> *doSomethingInMainApp* (di App.tsx). Questo esempio racchiude in poche righe buone pratiche di programmazione e modularità del codice. Riassumendo...
 - **Le ARROW FUNCTION** sono più adatte per gestire eventi 
 - **le FUNCTION** sono più adatte a definire e esportare components.

 #### App.tsx
   ```
 export default function App() {
 const doSomethingInMainApp = (textFromComponent:string) => {
    ... 
    alert("Do something with "+textFromComponent);
 }
 
 return (
    <div>
        <ComponentForm id={1} doSomethingFunction={doSomethingInMainApp}/>
    </div>
 );
 }
   ```
 
 #### ComponentForm.tsx
   ```
 export interface ComponentFormProps {
  id: number;
  doSomethingFunction: (text_attr:string) => void;
}
 
 export default function ComponentForm({ id, doSomethingFunction }: ComponentProps) {
 
 const [attributeText,setAttributeText] = useState<string>("");
 
 const handleSubmit = (e : React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault(); // annulla la ricarica della pagina
    doSomethingFunction(attributeText); // chiama la funzione passata dal main App.tsx
  } 
  
 return (
      <div>
        <form onSubmit={(e)=>handleSubmit(e)}>
        <TextField onChange={(e)=>{setAttributeText(e.target.value)}}/>
        <Button type="submit" >DO SOMETHING</Button>
        </form>
      </div>
    );
 }
  ```
 # Utilzzare sempre le interfacce per definire i props di un component
 ```

export interface TodoProps {
  id: number;
  title: string;
  isCompleted: boolean;
  onToggleCompleted: (id:number) => void;
  onDelete: (id:number) => void;
}

export default function Todo({id, title, isCompleted, onToggleCompleted, onDelete}: TodoProps) {
  return (
    <div>
        ...
    </div>
  )
}
 ```
