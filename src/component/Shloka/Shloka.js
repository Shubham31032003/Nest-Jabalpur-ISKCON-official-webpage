import React, { useState, useEffect } from 'react';
import './Shloka.css'; // Import your CSS file for styling


const Geeta = () => {
  const [randomShloka, setRandomShloka] = useState(null);
  const [meaning, setMeaning] = useState(null);
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

  const fetchRandomShloka = async () => {
    const chaptersCount = 18; // Total number of chapters in Bhagavad Gita
    const versesCount = 47; // Assuming each chapter has 47 verses

    // Generate random chapter and verse numbers
    const randomChapter = Math.floor(Math.random() * chaptersCount) + 1;
    const randomVerseNumber = Math.floor(Math.random() * versesCount) + 1;

    const url = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${randomChapter}/verses/${randomVerseNumber}/`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '1890f3f047msh96b4e3edca4757ep149c2ajsnb282aeb8b1a1',
        'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();

      // Extract shloka (verse) and its meaning from the response
      const shloka = result.text;
      const mean = result.translations[0].description;

      // Set the shloka and meaning in the state
      setRandomShloka(shloka);
      setMeaning(mean);

      // Show the popup
      setShowPopup(true);
    } catch (error) {
      console.error(error);
    }
  };

  const closePopup = () => {
    // Close the popup by setting showPopup to false
    setShowPopup(false);
  };

  useEffect(() => {
    fetchRandomShloka(); // Call fetchRandomShloka when the component mounts
    
  }, []); // Empty dependency array ensures that this effect runs only once

  return (
    <div className="geeta-container">
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>&times;</span>
            {randomShloka && <p>{randomShloka}</p>}
            <h3>Meaning</h3>
            {meaning && <p>{meaning}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Geeta;
