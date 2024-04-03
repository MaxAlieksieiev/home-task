import { Stack, Typography } from '@mui/material';
import { TextInput } from 'components/textInput';
import { Button } from 'components/button';
import { useFormik } from 'formik';
import { ILoginForm, initialValues, validationSchema } from './config';
import { useNavigate } from 'react-router';
import { useAuth } from 'hooks/useAuth';

export function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const onSubmit = (user: ILoginForm) => {
    login(user);
    navigate('/dashboard/calculator');
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack
        sx={{
          borderRadius: '4px',
          gap: '16px',
          padding: '10px',
          maxWidth: '400px',
          width: '100%',
          background: 'white',
        }}
      >
        <Typography variant='h5' textAlign='center'>
          Login
        </Typography>
        <Stack flexDirection='row' alignItems='center' justifyContent='space-between' columnGap='8px'>
          <Typography sx={{ whiteSpace: 'nowrap' }}>User name:</Typography>
          <TextInput
            fullWidth
            name='username'
            placeholder='Enter user name'
            sx={{ width: '250px' }}
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
        </Stack>
        <Stack flexDirection='row' alignItems='center' justifyContent='space-between' columnGap='8px'>
          <Typography>Email:</Typography>
          <TextInput
            fullWidth
            sx={{ width: '250px' }}
            name='email'
            placeholder='Enter user name'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Stack>
        <Button
          title='Login'
          size='small'
          sx={{ padding: '8px', width: '100px', alignSelf: 'center' }}
          type='submit'
          disabled={!formik.isValid || !formik.dirty}
        />
      </Stack>
    </form>
  );
}
