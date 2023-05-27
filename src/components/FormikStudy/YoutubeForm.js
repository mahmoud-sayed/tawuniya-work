import React from 'react';
import './style.css'
import { useFormik } from 'formik';


const YoutubeForm = () => {

  const formik = useFormik({
    initialValues: {
      name: ' ',
      email: '',
      channel: ''
    },
    onSubmit: values => {
      console.log(formik.values)

    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className='form-style'>
      <label htmlFor='name'>name</label>
      <input
        type="text"
        id='name'
        name='name'
        onChange={formik.handleChange}
        value={formik.values.name}
      />


      <label htmlFor='email'>E-mail</label>
      <input
        type="email"
        id='email'
        name='email'
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <label htmlFor='channel'>channel</label>
      <input
        type="text"
        id='channel'
        name='channel'
        onChange={formik.handleChange}
        value={formik.values.channel}
      />

      <button type='submit'>submit</button>
    </form>
  )
}

export default YoutubeForm