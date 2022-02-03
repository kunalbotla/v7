
import Image from 'next/image'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import fetcher from '../util/fetcher'

export const Images = () => {
    // const images = useSWR('/api/photos', fetcher).data;
    // const images = []

    const [images, setImages] = useState([])

    useEffect(() => {
        fetch('/api/photos')
            .then(res => res.json())
            .then(i => setImages(i))
    }, [])

    console.log

    return(
      <div className="photo-grid">
          {
            images && images.map((image) => (
              <img className="photo-item" src={image}/>
            ))
          }
      </div> 
      
    ) 
  }