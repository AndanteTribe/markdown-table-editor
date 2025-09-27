import React from 'react';
import { createRoot } from 'react-dom/client';
import { Table } from './components/Table';

// Demo table data
const demoData = [
  [
    { value: 'Name', isEditing: false, width: 100 },
    { value: 'Age', isEditing: false, width: 100 },
    { value: 'City', isEditing: false, width: 120 }
  ],
  [
    { value: 'John', isEditing: false, width: 100 },
    { value: '25', isEditing: false, width: 100 },
    { value: 'New York', isEditing: false, width: 120 }
  ],
  [
    { value: 'Alice', isEditing: false, width: 100 },
    { value: '30', isEditing: false, width: 100 },
    { value: 'Paris', isEditing: false, width: 120 }
  ]
];

function DemoApp() {
  const handleSave = (markdown: string) => {
    console.log('Saved markdown:', markdown);
    alert('Table saved! Check console for markdown output.');
  };

  const handleAutoSave = (markdown: string) => {
    console.log('Auto-saved markdown:', markdown);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Markdown Table Editor Demo</h1>
      <p>Test the new insert/delete row/column functionality:</p>
      <ul>
        <li>Click on a cell to select it</li>
        <li>Use toolbar buttons to insert rows above/below selected cell</li>
        <li>Use toolbar buttons to insert columns left/right of selected cell</li>
        <li>Use delete buttons to remove selected row/column</li>
      </ul>
      <Table 
        initialData={demoData}
        onSave={handleSave}
        onAutoSave={handleAutoSave}
      />
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DemoApp />
  </React.StrictMode>
);