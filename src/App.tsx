import { useState, FormEvent, createContext } from 'react';
import './App.css';
import TodoListTab from './components/TodoListTab';
import TabList from './components/TabList';
import TabEntry from './components/TabEntry';
import { resourceUsage } from 'process';

const ThemeContext = createContext('light');

function App() {

  const FancyTitle = () => {
    return (
      <span className="inline-block">
        <span className="font-bold">
          Fancy
        </span>{' '}
        <span>
          title
        </span>
      </span>
    )
  }

  const tabsData = [
    { id: 1, title: 'Tab 1', content: 'Tab 1 Content' },
    { id: 2, title: <FancyTitle />, content: 'Tab 2 Content' },
    { id: 3, title: 'Todo List', content: <TodoListTab /> },
  ];

  return (
    <ThemeContext.Provider value="dark">
      <div className="App">
        <header className="App-header">
          Clickup Tabs Interview
        </header>
        <main className="Main">
          <TabList
            tabsData={tabsData}
          />
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
