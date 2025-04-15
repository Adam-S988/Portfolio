import React, { useEffect, useState } from "react";

function Dogs() {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [numImages, setNumImages] = useState(1);
  const [images, setImages] = useState([]);

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await response.json();
        setBreeds(Object.keys(data.message));
      } catch (error) {
        console.error("Error fetching breeds:", error);
      }
    };
    fetchBreeds();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedBreed || numImages <= 0) return;

    try {
      const formattedBreed = selectedBreed.toLowerCase().replace(/ /g, "-");
      const response = await fetch(
        `https://dog.ceo/api/breed/${formattedBreed}/images/random/${numImages}`
      );
      const data = await response.json();

      if (data.status === "success") {
        setImages(data.message);
      } else {
        console.error("Failed to fetch images");
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <div className="Dogs">
      <p>
        Use this page to look up different pictures from a variety of dog
        breeds.
      </p>

      <div className="breedSection">
        <form onSubmit={handleSubmit} className="formSection">
          <label htmlFor="breedSelect">Select a breed:</label>
          <select
            id="breedSelect"
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e.target.value)}
          >
            <option value="">--Please choose an option--</option>
            {breeds.map((breed) => (
              <option key={breed} value={capitalize(breed)}>
                {capitalize(breed)}
              </option>
            ))}
          </select>

          <label htmlFor="numImages">Number of Images:</label>
          <input
            type="number"
            id="numImages"
            min="1"
            max="100"
            value={numImages}
            onChange={(e) => setNumImages(e.target.value)}
          />
          <button type="submit">Generate</button>
        </form>

        {selectedBreed && <h2>{selectedBreed}</h2>}

        <div id="imageGallery" className="image-gallery">
          {images.map((url, index) => (
            <img key={index} src={url} alt={`Dog breed ${selectedBreed}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dogs;
