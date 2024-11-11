import React from 'react'

function Card({username="king kohil",image="https://media.gettyimages.com/id/998607636/photo/london-england-suresh-raina-of-india-hits-out-during-the-2nd-royal-london-one-day.jpg?s=612x612&w=0&k=20&c=LoHnbvrk36GF_d04poVeO8bTtQ6gaTysHcvPILgAzaQ=",
    width="250cm",genre="comedy/Action"
  }) {
    return (
      <div id='car' className='max-w-lg rounded-lg overflow-hidden shadow-md bg-black cursor-pointer hover:shadow-xl hover:scale-105 hover:border-blue-500 transform transition-all duration-300 border border-gray-200 p-6'> 
      <img src={image} width={width} className='h-60' rel="my image"/>
      <h1 className='text-3xl bg-green-300 rounded p-3'>{username}</h1>
      <p className=' text-white'>Genre: {genre}</p>
      </div>
    )
  }

export default Card

