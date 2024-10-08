import React, { useState } from 'react';

function PinCreator() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    setImages(files);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Pin Created:', { title, description, images });
  };

  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">Create a Pin</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-2">Upload Images</label>
          <input
            type="file"
            multiple
            onChange={handleImageUpload}
            className="border p-2 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 w-full md:w-auto">
          Create Pin
        </button>
      </form>
    </section>
  );
}

export default PinCreator;