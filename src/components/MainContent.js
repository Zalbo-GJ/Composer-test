import React from 'react';

function MainContent({ children }) {
  return (
    <main className="container mx-auto p-4">
      {children}
    </main>
  );
}

export default MainContent;