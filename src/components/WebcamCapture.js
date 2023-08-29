import React, { useRef, useEffect, useState } from 'react';
import { createWorker } from 'tesseract.js';

const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const worker = useRef(null);
  const [vin, setVin] = useState(null);
  const [vehicleInfo, setVehicleInfo] = useState(null);

  useEffect(() => {
    const getMedia = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (webcamRef.current) {
        webcamRef.current.srcObject = stream;
      }
    }
    getMedia();

    worker.current = createWorker({
      logger: m => console.log(m)
    });
  }, []);

  const capture = async () => {
    const context = canvasRef.current.getContext('2d');
    context.drawImage(webcamRef.current, 0, 0, 640, 480);
    const { data: { text } } = await worker.current.recognize(canvasRef.current);
    console.log(text);
    setVin(text);
  };

  useEffect(() => {
    const getVehicleInfo = async () => {
      const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvalues/${vin}?format=json`);
      const data = await response.json();
      setVehicleInfo(data.Results[0]);
    }

    if (vin) {
      getVehicleInfo();
    }
  }, [vin]);

  return (
    <div>
      <video ref={webcamRef} autoPlay width="640" height="480" />
      <canvas ref={canvasRef} width="640" height="480" />
      <button onClick={capture}>Capture</button>
      {vehicleInfo && (
        <div>
          <h2>Vehicle Information</h2>
          <p>Make: {vehicleInfo.Make}</p>
          <p>Model: {vehicleInfo.Model}</p>
          <p>Year: {vehicleInfo.ModelYear}</p>
          {/* Add more fields as needed */}
        </div>
      )}
    </div>
  );
}

export default WebcamCapture;
