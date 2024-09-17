import React from 'react'
import Hero from '../components/Hero/Hero'
import Popularwomen from '../components/Popularwomen/Popular'
import Offers from '../components/Offers/Offers'
import Newcollection from '../components/Newcollection/Newcollection'
import Popularmen from '../components/Popularmen/popularmen'
import Popularkids from '../components/Popularkids/popularkids'

export const Shop = () => {
  return (
    <div>
      <Offers/>
      <Hero/>
      <Popularwomen/>
      <Popularmen/>
      <Popularkids/>
      <Newcollection/>
    </div>
  )
}

export default Shop
