import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import MethodSelect from "./MethodSelect";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";

export default function BasicAccordion() {

    const [accordionOpen, setAccordionOpen] = React.useState(false);

    return (
        <div>
            <Accordion expanded={accordionOpen}>
                <AccordionSummary

                    expandIcon={
                        <ExpandMoreIcon
                            style={{ cursor: 'pointer' }}
                            onClick={() => setAccordionOpen(!accordionOpen)} />
                    }
                    sx={{ cursor: 'unset !important', border: 0 }}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <MethodSelect/>
                    <TextField fullWidth sx={{ m: 1 }}
                        required
                        id="outlined-multiline-flexible"
                        label="URL without host"
                        defaultValue="/tib-arm-holdingcard/api/v1/holdins"
                    />
                    <Button sx={{ m: 1 }} variant="contained">SEND</Button>
                </AccordionSummary>
                <AccordionDetails>
                    <TextField
                        sx={{ m: 1, width: '93%' }}
                        id="outlined-multiline-static"
                        label="Body"
                        multiline
                        rows={4}
                    />
                </AccordionDetails>
            </Accordion>
        </div>
    );
}