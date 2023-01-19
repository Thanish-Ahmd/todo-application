import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assets/chevron-left.svg';


const ItemPage = ({history}) => {
    const navigate = useNavigate();
    let { id } = useParams();
    let itemId = id ;

    let [item , setItem] = useState(null) ;

    useEffect(()=> {
        getItem() 
    } , [id])

    let getItem = async () => {
      if( itemId === 'new') return
        let response = await  fetch(`/api/items/${itemId}/`)
        let data = await response.json() ;
        setItem(data) 
    }

    let createItem = async () => {
      
      fetch(`/api/items/`, {
        method: "POST" ,
        headers:{
          'Content-Type': 'application/json'
        } ,
        body: JSON.stringify(item)
      })
  }


    let updateItem = async () => {
      
        fetch(`/api/items/${id}/`, {
          method: "PUT" ,
          headers:{
            'Content-Type': 'application/json'
          } ,
          body: JSON.stringify(item)
        })
    }

    let deleteItem = async () => {
      fetch(`/api/items/${id}/`,{
        method: "DELETE",
        headers:{
          'Content-Type': 'application/json'
        } 
      })
      navigate(-1)
    }

    let handleSubmit =() =>{
      if( itemId !== 'new' && item.body === ''){
        deleteItem()
      }else if (itemId !== 'new') {
        updateItem()
      }else if ( itemId == 'new' && item.body !== null) {
        createItem()
      }
      navigate(-1)
    }


    let handleChange = (value) => {
      setItem(item => ({...item , 'body':value}))
    }

  return (
    <div className='item'>
      <div className='item-header'>
        <h3>   
            <ArrowLeft  onClick={handleSubmit}/>
        </h3>
        { itemId !== 'new' ? (
          <button onClick={deleteItem}>Delete</button>

        ): (
          <button onClick={handleSubmit}>Done</button>
        )}
        
      </div>
      <textarea onChange={(e) => {handleChange(e.target.value)}} value={item?.body}></textarea>
    </div>
  )
}

export default ItemPage
