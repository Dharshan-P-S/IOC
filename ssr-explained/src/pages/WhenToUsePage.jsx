// src/pages/WhenToUsePage.jsx
import React from 'react';
import './WhenToUsePage.css';

const data = [
  { title: 'SEO Matters', description: 'SSR is ideal when search engines need to see your content immediately — like marketing pages, blogs, and news articles.', icon: '📢' },
  { title: 'Frequently Updated Content', description: 'Use SSR when content changes often — like stock prices, weather data, or real-time dashboards.', icon: '📊' },
  { title: 'User-Specific Pages', description: "Pages that rely on user authentication or show custom data (e.g., dashboards, profiles) benefit from SSR.", icon: '🔐' },
  { title: 'Dynamic Routes', description: "If you're rendering dynamic pages (like `/product/[id]`) with content that changes often, SSR ensures fresh, relevant content.", icon: '🔗' },
];

function WhenToUsePage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>When Should You Use Server-Side Rendering (SSR)?</h1>
        <p>SSR is powerful, but not always the best choice. Here are the most common use cases.</p>
      </div>

      <div className="info-grid">
        {data.map(item => (
          <div className="info-card" key={item.title}>
            <h3>{item.icon} {item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhenToUsePage;