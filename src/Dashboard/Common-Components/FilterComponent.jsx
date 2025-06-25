import React from "react";
import { TextField, Select, MenuItem, Button, FormControl, InputLabel } from "@mui/material";

const FilterComponent = ({ filters, onFilterChange, onApplyFilters }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <div className="mb-5 flex flex-wrap gap-3 items-center w-full">
      <TextField
        label="Order ID"
        name="orderId"
        value={filters.orderId}
        onChange={handleInputChange}
        placeholder="Enter Order ID"
        style={{width: "50%"}}
      />
      <TextField
        label="From Date"
        name="fromDate"
        type="date"
        value={filters.fromDate}
        onChange={handleInputChange}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label="To Date"
        name="toDate"
        type="date"
        value={filters.toDate}
        onChange={handleInputChange}
        InputLabelProps={{ shrink: true }}
      />
      {/* <FormControl>
        <InputLabel>Platform</InputLabel>
        <Select
          style={{width: "200px"}}
          name="platform"
          value={filters.platform}
          onChange={handleInputChange}
          label="Platform"
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Amazon">Amazon</MenuItem>
          <MenuItem value="Flipkart">Flipkart</MenuItem>
          
        </Select>
      </FormControl> */}
      <Button variant="contained" onClick={onApplyFilters}>
        Apply Filters
      </Button>
    </div>
  );
};

export default FilterComponent;