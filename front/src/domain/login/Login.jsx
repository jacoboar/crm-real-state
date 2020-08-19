/** @jsx jsx */
import { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Box, Container, Heading, Alert, Field, jsx } from 'theme-ui';

import { Loader } from '../../common/components/Loader';
import { InputAlert } from '../../common/components/InputAlert';

import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alerts/alertContext';

import { history } from '../../helpers';

function Login(props) {
  const { register, handleSubmit, errors } = useForm({
    mode: 'onSubmit',
  });

  const alertContext = useContext(AlertContext);
  const { alert, showAlert, hideAlert } = alertContext;

  const authContext = useContext(AuthContext);
  const { msg, authenticated, login, loading } = authContext;

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  useEffect(() => {
    if (authenticated) {
      history.push('/panel/inmuebles');
    }

    if (msg) {
      showAlert(msg.msg, msg.category);
    }
    // eslint-disable-next-line
  }, [msg, authenticated, props.history]);

  // Submit login form
  const onSubmit = () => {
    hideAlert();

    login({ email, password });
  };

  // Listening changes in the form
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container
      sx={{
        backgroundColor: 'primary',
        height: '100vh',
        width: '100vw',
        background:
          'linear-gradient(180deg, rgba(69,165,221,1) 50%, rgba(244,244,244,1) 100%)',
      }}>
      <Box
        p={6}
        sx={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'inline-flex',
          alignItems: 'center',
          flexFlow: 'column nowrap',
          backgroundColor: 'background',
          borderRadius: '0.5em',
        }}>
        <Heading as='h2'>CRM - Inmobiliaria Islafer</Heading>
        <Box
          as='form'
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            width: '20vw',
            maxWidth: '30em',
            minWidth: '20em',
          }}>
          <Field
            mt={5}
            label='Email'
            name='email'
            onChange={handleChange}
            ref={register({
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Escribe un email válido',
                fieldRequired: 'Este campo es obligatorio',
              },
            })}
          />
          {errors.email && (
            <InputAlert msg={errors.email.message} category='error' />
          )}
          <Field
            mt={3}
            label='Contraseña'
            name='password'
            type='password'
            onChange={handleChange}
            ref={register({
              required: true,
              message: 'Este campo es obligatorio',
            })}
          />
          {errors.password && (
            <InputAlert msg={errors.password.message} category='error' />
          )}
          {alert ? (
            <Alert p={3} mt={4} variant='danger'>
              {alert.msg}
            </Alert>
          ) : null}
          <Button
            mt={4}
            variant='primary'
            type={'submit'}
            sx={{ width: '100%' }}>
            {loading ? <Loader /> : <span>Login</span>}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export { Login };
