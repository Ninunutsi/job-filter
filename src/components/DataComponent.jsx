import React, { useEffect, useState } from "react";
import dataJSON from "../data.json";
import Card from "./Card";
import Filter from "../components/Filter";

const DataComponent = () => {
  const [data, setData] = useState([]);
  const [searchedItems, setSearchedItems] = useState([]);

  useEffect(() => {
    setData(dataJSON);
  }, []);

  const handleClick = (e) => {
    e.stopPropagation();
    const value = e.target.textContent;
    const copiedData = [...data];
    if (!searchedItems.includes(value)) {
      setSearchedItems((prevValues) => [...prevValues, value]);
      const filteredData = copiedData.filter(
        ({ role, level, languages, tools }) =>
          role.includes(value) ||
          level.includes(value) ||
          languages.includes(value) ||
          tools.includes(value)
      );
      setShow(true);
      setData(filteredData);
    }
  };

  const handleDelete = (index) => {
    const updatedSearchedItems = searchedItems.filter((_, i) => i !== index);
    setData(dataJSON);
    updatedSearchedItems.forEach((value) => {
      setData((prevData) => {
        return prevData.filter(
          ({ role, level, languages, tools }) =>
            role.includes(value) ||
            level.includes(value) ||
            languages.includes(value) ||
            tools.includes(value)
        );
      });
    });
    setSearchedItems(updatedSearchedItems);
  };

  return (
    <div className="data-component">
      {searchedItems.length > 0 && (
        <Filter searchedItems={searchedItems} handleDelete={handleDelete} />
      )}
      {data.map((elem) => (
        <Card
          key={elem.id}
          company={elem.company}
          newRole={elem.new}
          featured={elem.featured}
          position={elem.position}
          postedAt={elem.postedAt}
          contract={elem.contract}
          location={elem.location}
          languages={elem.languages}
          tools={elem.tools}
          logo={elem.logo}
          role={elem.role}
          level={elem.level}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

export default DataComponent;
