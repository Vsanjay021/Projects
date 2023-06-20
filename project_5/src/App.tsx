import { useState } from 'react'
import { MenuType } from './data';
import { menu as items } from './data';
import './App.css'
import { Categories } from './Categories';
import { Menu } from './menu';
const allCategories = ["all", ...new Set(items.map((item) => {
  return item.category;
}))]
function App() {

  const [menuItems, setMenuItems] = useState<MenuType[]>(items);
  const [categories, setCategories] = useState<string[]>(allCategories)


  const filterItems = (category: string) => {
    if (category == "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category == category);
    setMenuItems(newItems);
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App
