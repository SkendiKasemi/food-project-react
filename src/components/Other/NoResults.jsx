export default function NoResults({ query }) {
  return (
    <div className='no-results-wrapper'>
      <div className='no-results-card'>
        <svg
          className='no-results-icon'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
        >
          <path d='M10 2a8 8 0 105.293 14.293l4.707 4.707 1.414-1.414-4.707-4.707A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z' />
        </svg>
        <h2 className='no-results-title'>No results found</h2>
        <p className='no-results-text'>
          We couldn’t find anything for <span className='query'>‘{query}’</span>
          .
        </p>
        <button
          onClick={() => window.history.back()}
          className='no-results-button'
        >
          Try a different search
        </button>
      </div>
    </div>
  );
}
