import React from 'react';

const Pagination = ({
  goPrev,
  goNext,
  currentPage,
  userCount,
  usersPerPage,
}) => {
  // input: currentPage, usersPerPage, userCount
  // output: bool

  const isPrevPageAvailable = currentPage === 1;

  const isNextPageAvailable = currentPage === userCount / usersPerPage;

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={isPrevPageAvailable}>
        {!isPrevPageAvailable && '←'}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button className="btn" onClick={goNext} disabled={isNextPageAvailable}>
        {!isNextPageAvailable && '→'}
      </button>
    </div>
  );
};

export default Pagination;
