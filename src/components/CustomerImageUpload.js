import React, { useState } from 'react';

function CustomerImageUpload() {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);

      // Generate a preview URL for displaying the image
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    if (!image) {
      alert('Please select an image first.');
      return;
    }

    // Create FormData object to send the image
    const formData = new FormData();
    formData.append('image', image);

    // Send the image to the server
    fetch('http://localhost:3000/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => alert(data.message))
      .catch((error) => alert('An error occurred: ' + error));
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload Image</button>
      {imagePreview && <img src={imagePreview} alt="Preview" />}
    </div>
  );
}

export default CustomerImageUpload;
