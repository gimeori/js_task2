import { useForm } from 'react-hook-form';
import React, { useCallback, useEffect } from 'react';

export default function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = useCallback((data) => {
    // Отправка данных на сервер
  }, []);

  useEffect(() => {
    const addAuthorButton = document.getElementById('addAuthor');
    const deleteAuthorButton = document.getElementById('deleteAuthor');
    const patchAuthorButton = document.getElementById('patchAuthor');

    const handleAddAuthorClick = async () => {
      const input = document.getElementById('inputname');
      const name = input.value;
      if (name) {
        const res = await fetch('http://127.0.0.1:8000/authors', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name })
        });
        const author = await res.json();
        console.log(author);
        input.value = '';
      }
    };
    //запрос delete
    const handleDeleteAuthorClick = async () => {
      const input = document.getElementById('inputid');
      const id = input.value;
      if (id) {
        const res = await fetch(`http://127.0.0.1:8000/authors/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ id })
        });
        const deletedAuthor = await res.json();
        console.log(deletedAuthor);
        input.value = '';
      }
    };

    //запрос patch
    const handleUpdateAuthorClick = async () => {
      const idInput = document.getElementById('inputid');
      const nameInput = document.getElementById('inputname');

      const id = idInput.value;
      const newName = nameInput.value;

      if (id && newName) {
        const res = await fetch(`http://127.0.0.1:8000/authors/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name: newName })
        });

        if (res.ok) {
          const updatedAuthor = await res.json();
          console.log(updatedAuthor);
          nameInput.value = '';
        } else {
          console.error('Ошибка обновления имени автора:', res.status);
        }
      }
    };

    if (addAuthorButton) {
      addAuthorButton.addEventListener('click', handleAddAuthorClick);
    }

    if (deleteAuthorButton) {
      deleteAuthorButton.addEventListener('click', handleDeleteAuthorClick);
    }
    if (patchAuthorButton) {
      patchAuthorButton.addEventListener('click', handleUpdateAuthorClick);
    }

    return () => {
      if (addAuthorButton) {
        addAuthorButton.removeEventListener('click', handleAddAuthorClick);
      }
      if (deleteAuthorButton) {
        deleteAuthorButton.removeEventListener('click', handleDeleteAuthorClick);
      }
      if (patchAuthorButton) {
        patchAuthorButton.removeEventListener('click', handleUpdateAuthorClick);
      }
    };
  }, []);




  return (
    <div className='login-container'>
      <h3>Автор</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Имя
            <input id="inputname" {...register('login', { required: "укажите имя", minLength: { value: 2, message: 'минимум 2 знака' } })} />
          </label>
          <div style={{ height: 40 }}>
            {errors?.login && <p>{errors?.login?.message || "Error!"}</p>}
          </div>
        </div>

        <div>
          <label>id
            <input id="inputid" {...register('passwd', { required: "укажите id автора", minLength: { value: 1, message: 'минимум 1 знак' } })} />
          </label>
          <div style={{ height: 40 }}>
            {errors?.passwd && <p>{errors?.passwd?.message || "Error!"}</p>}
          </div>
        </div>

        <button id="addAuthor" type="button">Добавить</button>
        <button id="deleteAuthor" type="button">Удалить по id </button>
        <button id="patchAuthor" type="button">Изменить по id </button>
      </form>
    </div>
  );
}
