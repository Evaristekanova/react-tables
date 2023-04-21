import Form from './components/Form';
import Lists from './components/Lists';
import Table from './components/Table';
import './App.css';
import { useState, useEffect } from 'react';
function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/';
  const [reqType, setReqType] = useState('users')
  const [items, setItems] = useState([])
  const [isloading, setIsLoading] = useState(false)

  useEffect(() => {
    const getItems = async () => {
      try {
        const result = await fetch(`${API_URL}${reqType}`);
        const data = await result.json()
        setItems(data)
      } catch (error) {
        console.log(error);
      }
    }
    getItems()
  },[reqType])
  return (
    <div className="App">
      <Form
        reqType={reqType}
        setReqType={setReqType}
        isloading={isloading}
        setIsLoading={setIsLoading}
      />
      {/* <Lists items={items} isloading={isloading} setIsLoading={setIsLoading} /> */}
      <Table items={items} />
    </div>
  );
}

export default App;
