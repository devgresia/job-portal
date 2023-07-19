"use client"

import Image from "next/image";
import { useRef, useState } from "react";

function App() {
  const inputRef = useRef<HTMLInputElement>(null); // Specify the type of inputRef

  const [image, setImage] = useState("");

  const handleImageClick = () => {
    inputRef.current!.click(); // Add the non-null assertion operator
  };

  const handleImageChange = (event:any) => {
    const file = event.target.files
    console.log(file);
    
    setImage("");
  };

  return (
    <>
      <div onClick={handleImageClick}>
        <Image width="500" height="500" src="https://media.istockphoto.com/id/637696304/photo/patan.jpg?s=612x612&w=0&k=20&c=-53aSTGBGoOOqX5aoC3Hs1jhZ527v3Id_xOawHHVPpg=" alt="" />
        
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
      </div>
    </>
  );
}

export default App;
