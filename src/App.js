import './App.css';
import Content from './components/Content';
import Title from './components/Title';
import {createContext, useState} from "react"

export const ThemeContext = createContext()

function App() {
  // eslint-disable-next-line
  const [theme,setTheme] = useState("light")
  return (
      <ThemeContext.Provider value={{theme,setTheme}}>
        <div>
          <Title/>
          <Content/>
        </div>
      </ThemeContext.Provider>
  );
}

export default App;
