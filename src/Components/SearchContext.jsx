import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

// Create a context to share search data
const SearchContext = createContext();

export const useSearch = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

// Add PropTypes for validation
SearchProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate that `children` is passed and is a valid React node
};
