import React from 'react'
function Footer() {
  return (
    <div className='bg-gray-200 w-full h-auto'>
    <div className='flex flex-row'>
      <div>
        <h1 className='pt-10 ml-20 text-4xl font-bold '>Movie Search</h1>     
        </div>
        <div  className='pt-10 ml-96 p-10'> 
            <h2 className='font-bold text-2xl pb-5 hover:text-red-600 duration-150'>Company</h2>
            <ul>
              <a href='#'><li className='hover:text-red-600 duration-150'>About</li></a>
              <a href='#'><li className='hover:text-red-600 duration-150'>Careers</li></a>
              <a href='#'><li className='hover:text-red-600 duration-150'>Our Culture</li></a>
              <a href='#'><li className='hover:text-red-600 duration-150'>Giving</li></a>
              <a href='#'><li className='hover:text-red-600 duration-150'>Partners</li></a>
              <a href='#'><li className='hover:text-red-600 duration-150'>News</li></a>
              <a href='#'><li className='hover:text-red-600 duration-150'>Plex Gear</li></a>
            </ul>
        </div>  
        <div  className='pt-10 ml-10'> 
            <h2 className='font-bold text-2xl pb-5 hover:text-red-600 duration-150'>Downloads</h2>
            <ul>
              <a href='#'><li className='hover:text-red-600 duration-150'>plex media server</li></a>
              <a href='#'><li className='hover:text-red-600 duration-150'>Plex </li></a>
              <a href='#'><li className='hover:text-red-600 duration-150'>plexAmp</li></a>
              <a href='#'><li className='hover:text-red-600 duration-150'>Plex Photos</li></a>
              <a href='#'><li className='hover:text-red-600 duration-150'>plex Dash</li></a>
              <a href='#'><li className='hover:text-red-600 duration-150'>Whare to Watch</li></a>
            </ul>
        </div>  
    
        <div  className='pt-10 ml-10'> 
            <h2 className='font-bold text-2xl pb-5 hover:text-red-600 duration-150'>Support</h2>
            <ul>
              <a href='#'><li className='hover:text-red-600 duration-150'>Finding help</li></a>
              <a href='#'><li className='hover:text-red-600 duration-150'>Support Library</li></a>
              <a href='#'><li className='hover:text-red-600 duration-150'>Community Guidelines</li></a>
              <a href='#'><li className='hover:text-red-600 duration-150'>Biling Questions</li></a>
              <a href='#'><li className='hover:text-red-600 duration-150'>Status</li></a>
              <a href='#'><li className='hover:text-red-600 duration-150'>Blug Bounty</li></a>
              <a href='#'><li className='hover:text-red-600 duration-150'>CordCutter</li></a>
              <a href='#'><li className='hover:text-red-600 duration-150'>Get in Touch</li></a>
            </ul>
        </div>  
        </div>
        <hr class="border-gray-600"></hr>
       <div className='flex justify-end mr-36 p-5'>
       <a href="#"><img src="https://tse4.mm.bing.net/th?id=OIP.rxdNfNIgwdGoatVHtP1cgAHaEy&pid=Api&P=0&h=180" className='w-32 h-24'></img></a>
       </div>
       <div className='flex flex-row gap-2 justify-end mr-36'>
       <a href="#"><i class="bx bxl-instagram text-white text-3xl w-9 h-9 rounded-full bg-black hover:bg-red-400 duration-200 flex items-center justify-center"></i></a>
       <a href="#"><i class="bx bxl-facebook text-white text-3xl w-9 h-9 rounded-full bg-black hover:bg-red-400 duration-200 flex items-center justify-center"></i></a>
       <a href="#"><i class="bx bxl-twitter text-white text-3xl w-9 h-9 rounded-full bg-black hover:bg-red-400 duration-200 flex items-center justify-center"></i></a>
       <a href="#"><i class="bx bxl-linkedin text-white text-3xl w-9 h-9 rounded-full bg-black hover:bg-red-400 duration-200 flex items-center justify-center"></i></a>
       </div>
       <div>
       <p className='ml-10'><i class='bx bx-copyright text-2xl'></i><sup>copyright 2024</sup></p>
       </div>
    </div>
  )
}

export default Footer