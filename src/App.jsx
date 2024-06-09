
import useAuth from './store/context'
import './App.css'
import { Link } from 'react-router-dom';
function App() {
  const { name, setName } = useAuth();

  

  return (
    <>
    <Link to='/Home'> 
      <button>
        Home
      </button>
    </Link>
     
      <input 
      style={{backgroundColor: "orange", borderRadius: "15px", padding: "1rem,"}}
      type="text" 
      readOnly
      value={name} 
      onChange={e => setName(console.log(e.target.value))} />
      <div>{name}</div>
    </>
  )
    
  
}

export default App
