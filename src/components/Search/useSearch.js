import { useEffect, useState } from "react";

const useSearch = () => {
  const [albums, setAlbums] = useState([]);
  const fetchData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums`);
    const data = await response.json();
    await setAlbums(data);  
  };


  function onChangeSearchNumber( index) {
    (albums.length > 0)
      ?( albums.map((item) =>
String(item.id).includes(index) ? 
//  ()=> {return item.title }
   console.log(item.title)
:null))
      : (console.log("No album found"));
  }



  useEffect(() => {
    fetchData();
  }, []);

  return {
    onChangeSearchNumber
  };
};

export {useSearch};
