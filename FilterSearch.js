import React, { useState, useEffect } from "react";
import "./FilterSearch.css";

const FilterSearch = () => {
  const [firstField, setFirstField] = useState("");
  const [secondFieldOptions, setSecondFieldOptions] = useState([]);
  const [secondField, setSecondField] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const data = [
    { category: "1", name: "1.1" },
    { category: "1", name: "1.2" },
    { category: "2", name: "2.1" },
    { category: "2", name: "2.2" },
  ];

  useEffect(() => {
    // Filter the data based on the selected value of the first field
    const filteredOptions = data.filter((item) => item.category === firstField);
    setSecondFieldOptions(filteredOptions);
    // Reset the second field when the first field changes
    setSecondField("");
  }, [firstField]);

  useEffect(() => {
    // Filter the data based on the selected values of the first and second fields
    const filteredData = data.filter(
      (item) => item.category === firstField && item.name === secondField
    );
    setFilteredData(filteredData);
  }, [firstField, secondField]);

  const handleFirstFieldChange = (e) => {
    setFirstField(e.target.value);
  };

  const handleSecondFieldChange = (e) => {
    setSecondField(e.target.value);
  };

  return (
    <div className="filter-search">
      <select value={firstField} onChange={handleFirstFieldChange}>
        <option value="">Select a category</option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
      <select
        value={secondField}
        onChange={handleSecondFieldChange}
        disabled={!firstField}
      >
        <option value="">Select an option</option>
        {secondFieldOptions.map((item, index) => (
          <option key={index} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>
            {item.category} - {item.name} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterSearch;
