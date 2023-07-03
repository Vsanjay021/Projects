import React from 'react'
import { useGlobalContext } from '../context'
export default function SearchForm() {
  const { setSearchTerm } = useGlobalContext()
  const searchValueRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (searchValueRef.current) {
      searchValueRef.current.focus();
    }
  }, []);

  function searchCocktail() {
    setSearchTerm(searchValue.current.value)
  }
  function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            type='text'
            name='name'
            id='name'
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  )
}