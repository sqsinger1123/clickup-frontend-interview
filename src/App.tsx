import { useState, FormEvent, createContext } from 'react';
import './App.css';
import List from './components/List';
import type { ListItem } from './components/List';

const ThemeContext = createContext('light');

function App() {
  const [listItems, setListItems] = useState<ListItem[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleNewInput = (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue) return;

    setListItems([
      ...listItems,
      {
        id: listItems.length + 1,
        name: inputValue,
      }
    ]);
    setInputValue('');
  }

  const handleDeleteItem = (id: number) => {
    setListItems(listItems.filter(item => item.id !== id));
  }

  return (
    <ThemeContext.Provider value="dark">
      <div className="App">
        <header className="App-header">
          Custom list app
        </header>
        <main className="Main">
          <form onSubmit={e => handleNewInput(e)}>
            <label className="mr-4">
              Add item:
            </label>
            <input
              className="mx-4 border-2 inline-block border-gray-400 px-2"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
            >
            </input>
            <button
              className='mx-4 border-2 border-gray-400 px-2'
              onClick={e => handleNewInput(e)}
            >
              Add to list
            </button>
          </form>
          <List
            items={listItems}
            handleDeleteItem={handleDeleteItem}
          />
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
