import React, { useState } from 'react';

const Prediction = () => {
  const [headline, setHeadline] = useState("");
  const [prediction, setPrediction] = useState("");

  const handleInputChange = (event) => {
    setHeadline(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Sending POST request to Flask backend
    const response = await fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ headline: headline }),
    });

    const data = await response.json();
    setPrediction(data.prediction);  // Set the prediction returned by Flask
  };

  return (
    <div className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Fake News Detection</h1>
        <div className="flex flex-wrap -m-4 justify-center">
          <form onSubmit={handleSubmit} className="w-full md:w-1/2 bg-white p-6 shadow-md rounded">
            <div className="mb-4">
              <label htmlFor="headline" className="block text-gray-700">Enter News Headline</label>
              <input
                type="text"
                id="headline"
                value={headline}
                onChange={handleInputChange}
                placeholder="Enter the news headline"
                className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-md mt-4"
            >
              Check News
            </button>
          </form>
        </div>

        {prediction && (
          <div className="mt-6 text-center">
            <h2 className="text-xl font-medium">{`Prediction: ${prediction}`}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Prediction;
