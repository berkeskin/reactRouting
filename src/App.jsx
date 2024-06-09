import useAuth from './store/context'
import './App.css'

function App() {
  const { name, setName } = useAuth();

  

  return (
    <>
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
