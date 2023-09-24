import { Select, SelectItem } from "@nextui-org/react";

import PropTypes from "prop-types";

const SelectFilter = ({ museums, setMuseumType }) => {
  //create array of unique museum types and filter out the duplicates
  const museumTypes = [...new Set(museums.map((museum) => museum.type)), ""];

  //select filter event handler
  const handleChange = (e) => setMuseumType(e.target.value);

  return (
    <Select
      className="max-w-md py-5"
      label="Type of Meseum"
      color={"primary"}
      radius="md"
      onChange={handleChange}
    >
      {museumTypes.map((type) => (
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
