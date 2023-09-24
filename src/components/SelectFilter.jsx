import { Select, SelectItem } from "@nextui-org/react";

import PropTypes from "prop-types";

const SelectFilter = ({ museums, setMuseumType }) => {
  const museumTypes = museums.map((museum) => museum.type);
  const handleChange = (e) => setMuseumType(e.target.value);

  return (
    <Select
      label="Type of Meseum"
      placeholder="Select type of museum"
      onChange={handleChange}
    >
      {[...new Set(museumTypes)].map((type) => (
        <SelectItem key={type} value={type}>
          {type}
        </SelectItem>
      ))}
    </Select>
  );
};

SelectFilter.propTypes = {
  museums: PropTypes.array.isRequired,
  setMuseumType: PropTypes.func.isRequired,
};

export default SelectFilter;
