import React, { useEffect, useState } from 'react'
import './NewCollections.css'
import Item from '../Item/Item'
import { base_url } from '../../config'

const NewCollections = () => {

  const [new_collection,setNew_collection] = useState([]);
  
  const print =async()=>{
    try{
      const res=await fetch(`${base_url}/newcollections`);
      const result=await res.json();
      console.log(result);
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    fetch(`${base_url}/newcollections`).then((response)=>response.json()).then((data)=>setNew_collection(data));
    print();
  },[])

  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className="collections">
            {new_collection.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default NewCollections;