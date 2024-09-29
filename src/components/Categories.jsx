import React from 'react';
import { useUIStore } from '../store/ui/ui-category-Store';

export const Categories = () => {
  const {listcategory} = useUIStore(state=>state)
  return (
    <>
       <p>
      {
        listcategory
      }
    </p>
    </>
 
  )
}
