import logo from './logo.svg';
import './App.css';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


function App() {
  return (


    <div className="App">
      <Sidebar>
        <Menu>
          <MenuItem href='/contato'> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default App;
