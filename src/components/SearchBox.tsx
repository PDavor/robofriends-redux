import React, { ChangeEvent, ChangeEventHandler } from "react";

interface ISearchBoxProps {
  className?: string;
  placeholder?: string;
  searchChange: ChangeEventHandler<HTMLInputElement>;
}

const SearchBox = ({ searchChange, className, placeholder }: ISearchBoxProps) => {
  return (
    <div className="pa2">
      <input
        aria-label="Search robots"
        className={`pa3 ba b--green bg-lightest-blue ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
