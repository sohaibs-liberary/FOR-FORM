import React, { useState } from 'react';

const SimpleDropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='' >
      <div className='lg:p-4 p-1 bg-slate-200 m-2 rounded-lg ' >

      <label htmlFor="sortSelect" className='lg:text-xl font-semibold ' >Sort By: </label>
      <select id="sortSelect" value={selectedOption} onChange={handleChange} className='bg-slate-200 font-semibold lg:p-2 border-gray-100 ' >
        <option value=""           className='bg-slate-200 font-semibold ' >Select</option>
        <option value="relative"   className='bg-slate-200 font-semibold ' >Relative</option>
        <option value="lowtohigh"  className='bg-slate-200 font-semibold ' >Low to High</option>
        <option value="hightolow"  className='bg-slate-200 font-semibold ' > High to Low</option>
        
      </select>
      </div>

      
    </div>
  );
};

export default SimpleDropdown;
