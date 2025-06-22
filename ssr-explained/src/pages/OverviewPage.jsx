// src/pages/OverviewPage.jsx
import React from 'react';

function OverviewPage() {
  return (
    <div className="page-container" style={{ textAlign: 'center', paddingTop: '4rem' }}>
      <h1 style={{ fontSize: '3.5rem', fontWeight: '700', color: 'var(--color-accent)' }}>
        SSR Explained
      </h1>
      <p style={{ fontSize: '1.25rem', marginTop: '1rem', color: 'var(--color-text-secondary)' }}>
        A simple guide to the what, why, and when of Server-Side Rendering.
        <br />
        Use the menu above to navigate the topics.
      </p>
    </div>
  );
}
export default OverviewPage;