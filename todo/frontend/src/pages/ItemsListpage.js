import React , { useState , useEffect } from 'react'
import ListItem from '../components/ListItem'
import AddButton from '../components/AddButton'


const ItemsListpage = () => {

    let[items , setItems] = useState([])

    useEffect(() => {
        getItems()
    } , [])

    let getItems  = async () => {
        let response = await fetch('/api/items/')
        let data = await response.json() 
        console.log('DATA :', data)
        setItems(data)
    }
  return (
    <div className='items'>

      <div className='items-header'>
        <h2 className='items-title'>&#9782; To Do...</h2>
        <p className='items-count'>{items.length}</p>
      </div>
        <div className='item-list'>
              { items.map( (item , index) => (
                  <ListItem key={index} item={item} />
              ))}
        </div>

      <AddButton />
    </div>
  )
}

export default ItemsListpage
