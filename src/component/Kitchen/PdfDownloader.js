import React from 'react';
import './PdfDownloader.css';

const PdfDownloader = () => {
    const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/kitchen_menu.pdf'; 
    link.download = 'kitchen_menu.pdf';
    link.click();
    window.alert("Menu downloaded successfully!");
  };

  return (
    <div className="pdf-downloader-container">
      <div className="pdf-downloader">
        <h1>Kitchen Menu</h1>
        <p>Total Pages:2</p>
        <p>Thank you for your interest in our kitchen.To access the complete menu, please click the button below and download the PDF.</p>
        <button className="pdf-download-btn" onClick={handleDownload}>
          Download PDF
        </button>
      </div>
    </div>
  );
};
export default PdfDownloader;
