import React, { useEffect } from 'react'
import * as Styles from '../styles/pages/HomeLogin';
import { useDispatch, useSelector } from 'react-redux'
import { loginSchema } from './_validationForm'
import { useAlert } from "react-alert";
import * as AuthActions from '../store/modules/auth/actions'

export default function Home() {
  const [fieldEmail, setFieldEmail] = React.useState('')
  const [fieldPass, setFieldPass] = React.useState('')
  const [formErrors, setFormErrors] = React.useState(false)
  const dispatch = useDispatch()
  const alert = useAlert()
  const { token, msg: { error } } = useSelector(state => state.auth)

  useEffect(() => {
    if (token) alert.success("Login efetuado com sucesso!")
    if (error) alert.error(error);
  }, [token, error])

  const validateForm = async (event) => {
    if (fieldEmail <= 0) {
      setFormErrors(false)
      return
    }

    event.preventDefault()
    const isValid = await loginSchema.isValid({
      email: fieldEmail
    })

    return isValid ? setFormErrors(false) : setFormErrors(true)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    if (!fieldEmail || !fieldPass) {
      return
    }

    validateForm(evt)
    if (!formErrors) {
      dispatch(AuthActions.signInRequest(fieldEmail, fieldPass))
    }
  }

  const handleResetField = () => {
    setFieldEmail('')
    setFormErrors(false)
  }



  return (
    <Styles.Root>
      <Styles.Logo />
      <Styles.NavLogin>
        <Styles.CenterDiv>
          <h1>Olá, seja bem-vindo!</h1>
          <h6>Para acessar a plataforma, faça seu login.</h6>

          <Styles.FormLogin error={formErrors} onSubmit={handleSubmit}>
            <label>E-mail</label>
            <div style={{ display: 'flex', position: 'relative' }}>
              <Styles.InputError
                error={formErrors}
                name='email'
                type="text"
                onBlur={(evt) => validateForm(evt)}
                placeholder="user.name@mail.com"
                value={fieldEmail}
                onChange={({ target }) => setFieldEmail(target.value)}
              />
              {formErrors &&
                <Styles.CloseIcon onClick={() => handleResetField()}>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" className="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
                    <path fill="#FF377F" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                  </svg>
                </Styles.CloseIcon>
              }
            </div>
            {formErrors && <p className='error'>Digite um e-mail válido.</p>}
            <label>Senha</label>
            <Styles.Input
              name='password'
              type="password"
              value={fieldPass}
              onChange={({ target }) => setFieldPass(target.value)}
            />

            <button type='submit'>Entrar</button>
          </Styles.FormLogin>
          <Styles.ForgotPassword>
            Esqueceu seu login ou senha? Clique <a href="#">aqui</a>
          </Styles.ForgotPassword>
        </Styles.CenterDiv>
      </Styles.NavLogin>
    </Styles.Root>
  );
}
