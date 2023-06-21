import React, { useEffect, useState } from "react";

const DogInformation = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(response => response.json())
      .then(data => {
        const breedNames = Object.keys(data.message);
        setBreeds(breedNames);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      <h1>Dog Information</h1>
      <h2>Available Breeds:</h2>
      <ul>
        {breeds.map(breed => (
          <li key={breed}>{breed}</li>
        ))}
      </ul>
    </div>
  );
};

export default DogInformation;