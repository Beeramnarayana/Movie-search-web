import React, { createElement } from 'react'
import Carouse from './Carousel'
import Card from './Card';
import Footer from './Footer';
import { stringify } from 'postcss';
import { Fullscreen } from '@mui/icons-material';

function Home() {
  let slides=[
    "https://wallpaperaccess.com/full/329633.jpg",
    "http://isquad.tv/wp-content/uploads/2018/08/Netflix-Background.jpg",
    "https://img.freepik.com/premium-photo/stadium-background_403587-7706.jpg?w=1060",
    "https://yi-files.s3.eu-west-1.amazonaws.com/products/1187000/1187484/1980461-full.jpg"
  ];
  function search(){
  let title=document.getElementById('searchBar').value;
  let dis=document.getElementById('place');
   if(title!=null){
  let data=fetch(`https://www.omdbapi.com/?t=${title}&y=2023&&apikey=8964c97b`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if(data.Response==='False'){
        dis.style.display='block';
        dis.style.width='60%';
        dis.style.height='100%';
        dis.innerHTML="Movie not Found";
      }
      else{
      dis.innerHTML='';
      dis.style.display='block';
       dis.style.width='60%';
      dis.style.height='100%';
      const listItem = document.createElement('div');
      const imgcontent=document.createElement('img')
      imgcontent.src=data.Poster;
      imgcontent.style.width='200px';
      imgcontent.style.height='300px';
      imgcontent.style.padding='10px'
      const titlecontent=document.createElement('h1');
      titlecontent.textContent="Title :"+data.Title;
      const ratingcontent=document.createElement('p');
      ratingcontent.textContent="IMDB Rating  :"+data.imdbRating;
      const dirctor=document.createElement('p');
      dirctor.textContent="Director :"+data.Director;
      const lan=document.createElement('p');
      lan.textContent="Language :"+data.Language;
      const gen=document.createElement('p');
      gen.textContent="Genre :"+data.Genre;
      const awards=document.createElement('p');
      awards.textContent="Awards :"+data.Awards;
      const actors=document.createElement('p');
      actors.textContent="Actors :"+data.Actors;
      listItem.appendChild(imgcontent);
      listItem.appendChild(titlecontent);
      listItem.appendChild(gen);
      listItem.appendChild(dirctor);
      listItem.appendChild(lan);
      listItem.appendChild(awards);
      listItem.appendChild(actors);
      listItem.appendChild(ratingcontent);
      dis.appendChild(listItem);
      }
      dis.style.padding="10px";
      dis.style.color="white";
      dis.style.display="flex";
      dis.style.alignItems='center';
      dis.style.justifyContent='center';
      dis.style.backgroundColor="black";
      dis.style.border="1px solid white";
    }
    )
    .catch((error) => {
      console.error('Fetch error:', error);
    });
  }
}
  return (
   <div className="bg-blue-300">
   <div>
    <h1 className='text-red-50 flex items-center justify-center w-full h-24 text-4xl bg-gradient-to-r from-cyan-500 via-blue-400 to-purple-600'>Moive search </h1>
    <ul className="md:flex space-x-6 flex  justify-center p-5">
      <li><a href="#" className="text-black"><button className='w-20 h-10 bg-cyan-300 hover:bg-cyan-500 rounded-lg'>Home</button></a></li>
      <li><a href="#" className="text-black"><button className='w-20 h-10 bg-cyan-300 hover:bg-cyan-500 rounded-lg'>About</button></a></li>
      <li><a href="#" className="text-black"><button className='w-20 h-10 bg-cyan-300 hover:bg-cyan-500 rounded-lg'>contact</button></a></li>
    </ul>
   </div>
   <div className='w-full h-60 flex items-center justify-center' 
   style={{
    backgroundImage: `url('https://handoff-cdn.appadvice.com/wp-content/appadvice-v2-media/2016/11/Netflix-background_860c8ece6b34fb4f43af02255ca8f225.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
   >
     <div className="relative flex items-center">
    <input
      type="search"
      placeholder="Search"
      id='searchBar'
      className="rounded-l-lg w-80 h-10 px-4 border border-gray-300 focus:outline-none"
    />
    <button 
    
    onClick={search}
    className="h-10 px-4 text-white bg-cyan-600 rounded-r-lg hover:bg-cyan-700">
      Search
    </button>
  </div>
   </div>
    <div className='flex items-center justify-center pt-6'>
   <div className='hidden' id='place'></div> 
   </div>
   <div className='w-[60%] m-auto cursor-pointer'>
    <Carouse slides={slides}/>
   </div>
   <div className='p-4'>
    <div className='flex flex-row gap-4 pt-3 items-center justify-center'>
      <Card username="Jeasry" image="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bU9q9yVtxeBiC0Do27CekHXNE6D.jpg" genre='Drama'/>
      <Card username="Ms dhoni" image="https://m.media-amazon.com/images/M/MV5BZjAzZjZiMmQtMDZmOC00NjVmLTkyNTItOGI2Mzg4NTBhZTA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg" genre='Drama'/>
      <Card username='Devara' image="https://cdn.fridayrelease.com/fit-in/movies/largethumb/400x660/2024/ntr-30/ntr-30-1708086618.jpg" genre='Action'/>
      <Card username='Akhanda' image="https://m.media-amazon.com/images/M/MV5BY2Y0YTlkZmMtZDMwZi00MDQwLThmYmUtZjQzMjRlMmQzMTNiXkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_.jpg" genre='Action'/>
    </div>
    <div className='flex flex-row gap-4 pt-3 items-center justify-center'>
      <Card username='Jai Bhim' image="https://m.media-amazon.com/images/M/MV5BOTM0NWFjNGYtNjExMS00ZTZlLWFiYmMtZmU4ZjZkMmMxZTNjXkEyXkFqcGdeQXVyODEyNjEwMDk@._V1_.jpg" genre='Drama'/>
      <Card username='Raayan' image='https://www.businessoftollywood.com/wp-content/uploads/2024/02/raayam-movie-poster-scaled.jpg' genre='Action'/>
      <Card username='12th Fail' image='https://tse4.mm.bing.net/th?id=OIP.syraG1PLFB3GINoP78YbkAHaJQ&pid=Api&P=0&h=180' genre='Drama'/>
      <Card username='Khaididi' image='https://moviegalleri.net/wp-content/uploads/2019/10/Karthi-Khaidi-Movie-Tomorrow-Release-Posters.jpg' genre='Action'/>
    </div>
    <div className='flex flex-row gap-4 pt-3 items-center justify-center'>
      <Card username='Master' image="https://media.senscritique.com/media/000019817904/source_big/Master.jpg" genre='Action,Thriller'/>
      <Card username="Jai lavakusa" image="https://www.chitramala.in/wp-content/uploads/2017/05/Jai-Lavakusa-NTR-First-Look.jpg" genre='Action'/>
      <Card username='Vikram' image='https://feeds.abplive.com/onecms/images/uploaded-images/2021/07/10/273e787ba809e725948334340c658e68_original.jpg?impolicy=abp_images&imwidth=1200' genre='Action'/>
      <Card username='Varun Doctor' image='https://www.cinejosh.com/newsimg/newsmainimg/varun-doctor-trailer_b_2509210848.jpg' genre='Action'/>
    </div>
    </div>
    <div>
      <Footer/>
    </div>
   </div>
  )
}

export default Home