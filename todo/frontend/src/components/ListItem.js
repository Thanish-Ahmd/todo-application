import React from 'react'
import { Link } from 'react-router-dom'

let getTime = (item) => {

  return new Date(item.updated).toLocaleDateString()
}


let getTitle = (item) => {
    
  let title = item.body.split('\n')[0] 

  if(title.length > 45)
    return title.slice(0,45)
  return title
}

let getContent = (item) => {
  let title = getTitle(item)
  let content = item.body.replaceAll('\n', ' ')
  content = content.replaceAll(title , '')

  if (content.length > 45) {
    return content.slice(0,45) + '...'
  }else {
    return content
  }
}

const ListItem = ({item}) => {

  
  return (
    <Link to={`/item/${item.id}`}>
      <div className='items-list-item'>
      
      <h3>{getTitle(item)}</h3>
      <p><span>{getTime(item)}</span> {getContent(item)}</p>
      </div>
    </Link>
  )
} 

export default ListItem
