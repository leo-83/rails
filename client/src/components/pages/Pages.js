import { useState, useEffect } from 'react';
import axios from 'axios';
import Page from './Page';
import PageForm from './PageForm';

const Pages = () => {
  const [pages, setPages] = useState([])

  useEffect( () => {
    axios.get('/api/pages')
      .then( res => setPages(res.data) )
      .catch( err => console.log(err) )
  }, [])

  const addPage = (page) => {
    axios.post('/api/pages', { page })
      .then(res => setPages([...pages, res.data]))
      .catch( err => console.log(err) )
  }

  return (
    <>
      <h1>All Pages</h1>
      <PageForm addPage={addPage} />
      { pages.map( p => 
        <Page 
          key={p.id}
          {...p}
        />
      )}
    </>
  )
}

export default Pages;