import { createContext, useReducer, useContext } from "react";


interface Book {
  id: string;
  title: string;
  authors: string[];
  pageCount: number;
}

interface BookState {
  favourites: Book[];
}

type BookAction = {type: "ADD_FAV"; payload: Book} | {type: "REMOVE_FAV"; payload: string};

const initialState: BookState = {
  favourites: [],
}

function bookReducer(state: BookState, action: BookAction) {
  
  switch(action.type) {
    case "ADD_FAV":
      return({...state, favourites: [...state.favourites, action.payload]})
      //retorna o estado, os favoritos + oq foi adicionado

    case "REMOVE_FAV":
      return({...state, favourites: state.favourites.filter((b) => b.id !== action.payload)}) //retorna tudo que for diferente do payload

      default: 
      return state
  }
}

//context
const BookContext = createContext<{
  state: BookState;
  dispatch: React.Dispatch<BookAction>;
} | undefined>(undefined);

export default function BookProvider({children}) {

  const [state, dispatch] = useReducer(bookReducer, initialState)

  return (
    <BookContext.Provider value={{state, dispatch}} >
      {children}
    </BookContext.Provider>
  )
}

// Hook customizado
export function useBooks() {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error("useBooks must be used within a BookProvider");
  }
  return context;
}