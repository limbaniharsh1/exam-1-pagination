import './App.css';
import React, { useEffect, useState } from 'react'

function App() {

  let [data, setData] = useState([])
  let [count, setcount] = useState(1)
  let [rnd,setrnd]=useState

  useEffect(() => {
    get()
  }, [count])
  console.log(count)
  let pre = () => {
    if(count==1){
      setcount(count=1)
    }
    else{
      setcount(count-1)
    }
  }
  let next = () => {
    setcount(count+1)
  }

  let get = async () => {          
    let req = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=${rndg}&page=${count}`)
    let res = await req.json()
    setData(res.data)
  }

  

  // console.log(data)
  return (
    <div>
      {/* <h2>{data[0].name}</h2> */}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {data.map((v, i) => {
          return (
            <div key={i} style={{ width: '300px', textAlign: 'center' }}>

              <h3>id : {v.id}</h3>
              <img src={v.image} />
              <h3>name : {v.name}</h3>
              <h3>type : {v.type}</h3>
              <h3>votes : {v.number_of_votes}</h3>
              <h3>rating : {v.rating}</h3>

            </div>
          )
        })}
      </div>
      <div style={{ textAlign: 'center' }}>
        <button onClick={()=>pre()}>pre</button>
        <button onClick={()=>next()}>next</button>
        <button onClick={setrnd(rnd+1)}>rnd</button>
      </div>
    </div>
  );
}

export default App;
