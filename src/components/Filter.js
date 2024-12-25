import React from 'react';
import './Filter.css';

const Filter = ({ filterData, cateogary, setCateogary }) => {
  function clickHandler(title) {
    setCateogary(title);
  }

  return (
    <div className="filter">
      <div className="btn">
        {filterData.map((data) => (
          <button
            key={data.title}
            onClick={() => clickHandler(data.title)}
            className={cateogary === data.title ? 'active' : ''}
          >
            {data.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
