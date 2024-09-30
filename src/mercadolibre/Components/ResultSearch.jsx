import React, { useEffect, useState  } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useUIStore } from '../../store/ui/ui-category-Store';
import { TbTruckDelivery } from 'react-icons/tb';
import { currencyFormat } from '../../until/currencyFormat';
import { Categories } from '../../components/Categories';
import searchItemService from '../actions/search-item';


export const ResultSearch = () => {
  const [items, setItems] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search');
  const { setlistcategory } = useUIStore(state => state)

  useEffect(() => {
    if (query) {
      searchItemService.getItems(query).then((res)=>{
        setItems(res.items);
        const categoriesList = res.categories.map(category => (
          `${category}`
        )).join(">")
        setlistcategory(categoriesList)
      })
    }
    else {
      setlistcategory("")
    }
  }, [query, setlistcategory]);
  return (
    <>

      <div className='searchresult_search'>
        <Categories />
        {items.map(item => (
          <Link key={`l ${item.id}`} to={`/items/${item.id}`} className="item-link">
            <div key={item.id} className="item" >
              <img src={item.picture} alt={item.title} />
              <div className="item-info">
                <p className="price">{currencyFormat(item.price)}{item.free_shipping && <TbTruckDelivery className="free-shipping" size={20} />} </p>
                <p className="title">{item.title}</p>
              </div>

            </div>
          </Link>

        ))}
      </div>
    </>

  )
}
