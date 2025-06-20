import React from 'react';

export default function EmptyState({ title, suggestion, SVG }) {
  return (
    <div className='empty-state-wrapper'>
      <div className='empty-state-card'>
        {/* <svg
          className='empty-state-icon'
          // xmlns={`http://www.w3.org/2000/svg`}
          xmlns={`http://www.w3.org/2000/svg`}
          viewBox='0 0 24 24'
        >
          <path d='M6 2a2 2 0 0 0-2 2v18l8-5.333L20 22V4a2 2 0 0 0-2-2H6z' />
        </svg> */}
        <SVG /> 
        <h2 className='empty-state-title'>No items in {title}</h2>
        <p className='empty-state-text'>{suggestion}</p>
      </div>
    </div>
  );
}
