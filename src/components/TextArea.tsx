import { TextField, TextFieldProps } from "@mui/material";
import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";


export default function TextArea(props:TextFieldProps) {
   
    
    return (
        <div>
            <TextField
                placeholder="Todo with samll desc"
                multiline
                minRows={2}
                maxRows={Infinity}
                fullWidth
                {...props}
            />
        </div>
    )
}
