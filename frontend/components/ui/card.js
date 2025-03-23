import React from 'react';

export const Card = ({ children }) => (
  <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px', marginBottom: '10px' }}>
    {children}
  </div>
);

export const CardHeader = ({ children }) => (
  <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>
    {children}
  </div>
);

export const CardTitle = ({ children }) => (
  <h2 style={{ margin: 0 }}>
    {children}
  </h2>
);

export const CardContent = ({ children }) => (
  <div style={{ paddingTop: '10px' }}>
    {children}
  </div>
);

