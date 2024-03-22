import { useForm } from 'react-hook-form';
import React, { useCallback } from 'react';

export default function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = useCallback((data) => {
    alert(JSON.stringify(data));
  }, []);

  return (
    <div className='login-container'>
      <h3>Регистрация</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input">
          <label>Login
            <input {...register('login', { required: "укажите логин", minLength: { value: 5, message: 'минимум 5 знаков' } })} />
          </label>
          <div style={{ height: 40 }}>
            {errors?.login && <p>{errors?.login?.message || "Error!"}</p>}
          </div>
        </div>

        <div className="input">
          <label>Passwd
            <input {...register('passwd', { required: "укажите пароль", minLength: { value: 5, message: 'минимум 5 знаков' } })} />
          </label>
          <div style={{ height: 40 }}>
            {errors?.passwd && <p>{errors?.passwd?.message || "Error!"}</p>}
          </div>
        </div>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}
