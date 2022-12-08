import {useEffect} from 'react';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

const itemId = useParams()

useEffect(() => {
  console.log('recibi este id', itemId)

  return () => {
    console.log('no recibi este id', itemId)
  }
}, [itemId])

}

export default ItemDetailContainer;