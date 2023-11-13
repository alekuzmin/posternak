import * as React from 'react';
import {MenuItem, Select} from "@mui/material";

function ControlledSelect() {
    const [method, setMethod] = React.useState("post");

    function handleChange(event) {
        setMethod(event.target.value);
    }

    return (
        <Select
            sx={{ m: 1 }}
            value={method}
            onChange={handleChange}
            inputProps={{
                name: 'method',
                id: 'demo-controlled-open-select',
            }}
        >
            <MenuItem value="post">POST</MenuItem>
            <MenuItem value="get">GET</MenuItem>
        </Select>
    );
}

export default ControlledSelect;