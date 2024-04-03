import { TextField, StandardTextFieldProps } from '@mui/material';

type Props = StandardTextFieldProps;

export function TextInput(props: Props) {
  return <TextField variant='outlined' {...props} />;
}
