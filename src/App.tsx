import { createContext } from 'react';
import './App.css';
import TodoListTab from './components/TodoListTab';
import TabList from './components/TabList';

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
    { id: 1, title: 'Simple', content: 'Raw denim you probably...' },
    { id: 2, title: <FancyTitle />, content: 'Tab 2 Content' },
    { id: 3, title: 'Disabled', content: 'It is a secret, disabled tab. So you will never see this content!', isDisabled: true },
    { id: 4, title: 'Todo List', content: <TodoListTab /> },
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
