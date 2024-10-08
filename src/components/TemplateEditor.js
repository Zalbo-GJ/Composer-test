import React, { useState } from 'react';

function TemplateEditor() {
  const [templateName, setTemplateName] = useState('');
  const [elements, setElements] = useState([]);

  const handleAddElement = () => {
    setElements([...elements, { type: 'text', content: 'New Text' }]);
  };

  const handleSaveTemplate = () => {
    console.log('Template Saved:', { templateName, elements });
  };

  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">Template Editor</h2>
      <div className="mb-4">
        <label className="block mb-2">Template Name</label>
        <input
          type="text"
          value={templateName}
          onChange={(e) => setTemplateName(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <button onClick={handleAddElement} className="bg-green-500 text-white p-2 mb-4">
        Add Element
      </button>
      <div className="border p-4 mb-4">
        {elements.map((el, index) => (
          <div key={index} className="mb-2">
            {el.type}: {el.content}
          </div>
        ))}
      </div>
      <button onClick={handleSaveTemplate} className="bg-blue-500 text-white p-2">
        Save Template
      </button>
    </section>
  );
}

export default TemplateEditor;