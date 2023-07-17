import { TextField, TextFieldProps } from "@mui/material";

export default function InputForm(props:TextFieldProps) {
    return (
        <div className="input-field">
            <TextField id="outlined-basic" label="Todo..." variant="outlined" {...props} />
        </div>
    )
}
