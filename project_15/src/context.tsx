import React, { useState, useContext, useEffect ,Dispatch,SetStateAction } from 'react'
import { useCallback ,ReactNode} from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
export default interface Cocktail {
  idDrink: string;
  strDrink: string;
  strGlass: string;
  strCategory: string;
  strDrinkThumb: string;
  strAlcoholic: string;
}

type ContextType={
  loading:boolean,
  cocktails:Cocktail[],
  setLoading:Dispatch<SetStateAction<boolean>>,
  setSearchTerm:Dispatch<SetStateAction<string>>
}

const AppContext = React.createContext<ContextType>({
  loading:false,
  cocktails:[],
  setLoading:()=>{},
  setSearchTerm:()=>{}
})

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('a');
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);


  const fetchDrinks = useCallback( async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json()
      console.log(data);
      const { drinks } = data
      if (drinks) {
        const newCocktails = drinks.map((item:any) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
          } = item

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          }
        })
        setCocktails(newCocktails)
      } else {
        setCocktails([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  },[searchTerm])
  useEffect(() => {
    fetchDrinks()
  }, [searchTerm,fetchDrinks])

  return (
    <AppContext.Provider
      value={{
        loading,
        cocktails,
        setLoading,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }