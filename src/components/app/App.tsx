import React, { useState } from 'react';
import KeyValueList from '../keyValueList/KeyValueList';
import CreateForm from '../createForm/CreateForm';
import SearchForm from '../searchForm/SearchForm';
import KeyValueTabs from '../keyValueTabs/KeyValueTabs';
import { v4 as uuidv4 } from 'uuid';

import './App.css';

function App() {
  const initialValue: any = [
    { itemKey: 'Key 1', itemValue: 'Value 1', type: 'String', id: uuidv4() },
    { itemKey: 'Key 2', itemValue: 'Value 2', type: 'String', id: uuidv4() },
    { itemKey: 'Key 3', itemValue: 'Value 2', type: 'String', id: uuidv4() }
  ]

  const [listItems, setListItems] = useState(initialValue);
  const [term, setTerm] = useState('');


  const deleteItem = (id: string) => {
    setListItems(listItems.filter((item: any) => item.id !== id))
  }

  const addItem = (itemKey: any, itemValue: any, type: any) => {
    const newItem = {
      itemKey,
      itemValue,
      type,
      id: uuidv4()
    }
    const newArr = [...listItems, newItem];
    setListItems(newArr);
  }

  const onUpdateSearch = (term: string) => {
    setTerm(term);
  }

  const searchConfig = (items: any, term: any) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item: any) => {
      return item.itemKey.indexOf(term) > -1
    })
  }

  const visibleData = searchConfig(listItems, term);

  return (
    <div className="App">
      <CreateForm onAdd={addItem} />
      <KeyValueTabs />
      <KeyValueList
        data={visibleData}
        onDelete={deleteItem}
      />
      <SearchForm onUpdateSearch={onUpdateSearch} />
    </div>
  );
}

export default App;
