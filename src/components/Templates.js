import React, { useState } from 'react';

function Templates() {
  const [searchTerm, setSearchTerm] = useState('');
  const templates = ['Template 1', 'Template 2', 'Template 3']; // Example data

  const filteredTemplates = templates.filter(template =>
    template.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="p-8">
      <h3 className="text-2xl font-bold mb-4">Templates</h3>
      <input
        type="text"
        placeholder="Search templates..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTemplates.map((template, index) => (
          <div key={index} className="border p-4">
            {template}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Templates;