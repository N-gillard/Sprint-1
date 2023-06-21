import React, { useState } from "react";

const SearchBar = ({ selectedBreed, numImages, onBreedChange, onNumImagesChange }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onBreedChange(searchQuery);
  };

  const handleNumChange = (event) => {
    const num = parseInt(event.target.value);
    onNumImagesChange(num);
  };

  return (
    <div>
      <label htmlFor="breed">Select Breed:</label>
      <select
        id="breed"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      >
        <option value="">-- Select Breed --</option>
        {/* Add your list of breed options here */}
        <option value="labrador">Labrador</option>
        <option value="poodle">Poodle</option>
        {/* ...and so on */}
      </select>

      <label htmlFor="numImages">Number of Images:</label>
      <input
        type="number"
        id="numImages"
        value={numImages}
        onChange={handleNumChange}
      />

      <button onClick={handleSearch}>Show Images</button>
    </div>
  );
};

export default SearchBar;