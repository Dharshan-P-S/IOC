// src/pages/BenefitsPage.jsx
import React from 'react';
import './BenefitsPage.css';

const data = [
  { aspect: '⚡️ Performance', benefit: 'Fast first paint because HTML is pre-rendered.', tradeoff: 'Longer server response time (TTFB) for each user.' },
  { aspect: '🔎 SEO', benefit: 'Bots see complete content instantly, improving indexing.', tradeoff: 'Slightly slower compared to pre-rendered (SSG) content.' },
  { aspect: '👤 Personalization', benefit: 'Supports dynamic, user-specific content (e.g., dashboards).', tradeoff: "Can't use CDN-level caching effectively." },
  { aspect: '🔄 Freshness', benefit: 'Always fetches up-to-date data on each request.', tradeoff: 'Adds load to your server and database.' },
  { aspect: '🧩 Complexity', benefit: 'Simplifies dynamic rendering compared to CSR workarounds.', tradeoff: 'More moving parts: auth, DB, caching, etc. to manage.' },
];

function BenefitsPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Benefits & Trade-offs of Server-Side Rendering</h1>
        <p>Like every great tool, SSR comes with pros and cons. Here’s a side-by-side breakdown.</p>
      </div>

      <div className="comparison-table">
        <div className="table-header">
          <div>Aspect</div>
          <div>✅ Benefit</div>
          <div>⚠️ Trade-off</div>
        </div>
        {data.map(item => (
          <div className="table-row" key={item.aspect}>
            <div className="aspect-cell">{item.aspect}</div>
            <div className="benefit-cell">{item.benefit}</div>
            <div className="tradeoff-cell">{item.tradeoff}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BenefitsPage;