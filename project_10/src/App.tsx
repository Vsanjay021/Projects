import { useEffect, useState } from 'react'
import './App.css'
import { List } from './List';
import { Alert } from './Alert';

export type ListType = {
  id: string,
  title: string
}

function getListFromLocalStorage() {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(list)
  } else {
    return []
  }
}
function App() {

  const [name, setName] = useState<string>('');
  const [list, setList] = useState<ListType[]>(getListFromLocalStorage());
  const [isEditing, setisEditing] = useState<boolean>(false)
  const [editID, setEditID] = useState<string>("");
  const [alert, setAlert] = useState<{ show: boolean, msg: string, type: string }>(
    { show: false, msg: "", type: "" });

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list])

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "please enter the value");
    } else if (name && isEditing) {
      let editedList = list.map((item) => {
        if (item.id == editID) {
          return { ...item, title: name }
        }
        return item;
      })
      setList(editedList);
      setName('');
      setEditID('');
      setisEditing(false);
      showAlert(true, "success", "Item Edited successfully");
    }
    else {
      showAlert(true, "success", "Item as been added to list")
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName('');

    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg })
  }
  const clearList = () => {
    showAlert(true, "danger", "Delted all the items in the list");
    setList([]);
  }
  const removeItem = (id: string) => {
    showAlert(true, "danger", "Item deleted");
    setList(list.filter((item) => item.id !== id));
  }
  const editItem = (id: string) => {
    const specificItem = list.find((item) => item.id === id);
    if (specificItem) {
      setisEditing(true);
      setEditID(id);
      setName(specificItem.title)
    }
  }
  return (
    <>
      <section className='section-center'>
        <form className='grocery-form' onSubmit={handleSubmit}>
          {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
          <h3>Grocery bud</h3>
          <div className='form-control'>
            <input type='text' className='grocery' placeholder='e.g. Carrots' value={name}
              onChange={(e) => setName(e.target.value)} />
            <button type='submit' className='submit-btn'>
              {isEditing ? "edit" : 'submit'}
            </button>
          </div>
        </form>
        {list.length > 0 &&
          <div className='grocery-container'>
            <List items={list} removeitem={removeItem} edititem={editItem} />
            <button className='clear-btn' onClick={clearList}>
              clear items
            </button>
          </div>}

      </section>
    </>
  )
}

export default App
