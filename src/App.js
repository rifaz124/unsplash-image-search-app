import React, { useState } from 'react'
import axios from 'axios'
import { clear } from '@testing-library/user-event/dist/clear'
function App() {
  const [image, setImage] = useState("")
  const [result, setResult] = useState([])

  const changePhoto = () => {
    axios.get(`https://api.unsplash.com/search/photos?page=1&query=${image}&client_id=0idWf_9rY6GUhTlAWEbnFn-tHTGDqBQsDNaFTG5tgiQ`)
      .then((response) => {
        // console.log(response.data);
        setResult(response.data.results);
      })
  }
  return (
    <>
      <div className='container text-center my-5'>
        <input class="form-control" type="search" placeholder="Search" value={image} onChange={(e) => {
          setImage(e.target.value)
        }} aria-label="Search"></input>
        <button type='submit' onClick={changePhoto} className='btn btn-primary my-2 px-4'>Get Photo</button>
      </div>

      <div className="container">
        <div class="row text-center text-lg-start">
          {result.map((value) => {
            return (
              <div class="col-lg-3 col-md-4 col-6">
                <img class="img-fluid img-thumbnail d-block mb-4 h-60" src={value.urls.small} alt='' />
              </div>
            )
          })}
        </div>

      </div>
    </>
  )
}

export default App
