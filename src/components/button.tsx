import { ButtonProps, Button as MaterialButton } from '@mui/material';

interface Props extends ButtonProps {}

export function Button({ title, ...props }: Props) {
  return (
    <MaterialButton variant='contained' {...props}>
      {title}
    </MaterialButton>
  );
}
