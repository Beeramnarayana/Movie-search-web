import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs"
import { useState } from "react";

function Carousel({slides}) {
  let  [current,setcurrent]=useState(0);
  const handleNext=()=>{
    if(current===slides.length-1) setcurrent(0);
    else
    setcurrent(current+1);
  }
  const handlePrev=()=>{
    if(current===0) setcurrent(slides.length-1);
    else
    setcurrent(current-1)
  }
   
  return (
    <div>
        <div>
      <ul className='md:flex space-x-6 flex p-5'>
      <li><a href='#'><button onClick={()=>{setcurrent(0)}} className='w-40 h-10 bg-cyan-300 hover:bg-cyan-500 rounded-lg'>All Channels</button></a></li>
      <li><a href='#'><button onClick={()=>{setcurrent(1)}} className='w-40 h-10 bg-cyan-300 hover:bg-cyan-500 rounded-lg'>Live Tv</button></a></li>
      <li><a href='#'> <button onClick={()=>{setcurrent(2)}} className='w-40 h-10 bg-cyan-300 hover:bg-cyan-500 rounded-lg'>Sports</button></a></li>
      <li><a href='#'><button onClick={()=>{setcurrent(3)}} className='w-40 h-10 bg-cyan-300 hover:bg-cyan-500 rounded-lg'>Movies</button></a></li>
    </ul>
    </div>
    <div className='flex overflow-hidden relative h-96 items-center justify-center'>
       <div className={`flex transition ease-out duration-40`}
            style={{
              transform:`translateX(-${current*100}%)`
            }}
       >
        {
            slides.map((s)=>{
               return <img src={s} alt='image'/>
            })
        }
    </div>
    <div className="absolute top-0 w-full h-full justify-between items-center flex text-white p-10 text-3xl">
    <button onClick={handlePrev}>
       <BsFillArrowLeftCircleFill/>
    </button>
    <button onClick={handleNext}>
       <BsFillArrowRightCircleFill/>
    </button>
  </div>

    <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full"> 
     {
       slides.map((s,i)=>{
        return <div onClick={()=>{setcurrent(i)}}
        key={"circle"+i}
        className={`rounded-full w-5 h-5 cursor-pointer ${i==current?"bg-white":"bg-gray-500"}`}></div>
       })
     }   
   </div>
  </div>
    </div>
  );
}
export default Carousel;