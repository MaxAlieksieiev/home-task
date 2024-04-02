import { TextField } from '@mui/material';

interface Props {}

export function TextInput(props: Props) {
  return <TextField variant='outlined' {...props} />;
}
