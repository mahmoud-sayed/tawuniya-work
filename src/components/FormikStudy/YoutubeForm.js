import React from 'react';
import './style.css'
import { useFormik } from 'formik';


const YoutubeForm = () => {


  // initial Values for the form
  const initialValues = {
    name: ' ',
    email: '',
    channel: ''
  }

  // 
  const onSubmit = values => {
    console.log(formik.values)
  }

  const validate = values => {
    // values.name values.email values.channel
    // error.name error.email error.channel
    //error.name = 'this field is required'

    let errors = {}

    if (!values.name) {
      errors.name = 'Required';
    }

    if (!values.email) {
      errors.name = 'Required';
    } 
    // else if ([a-z0-9]+@[a-z]+\.[a-z]{2,3}.test(values.email)) {
    //   errors.email = 'Invalid Email'
    // }

    if (!values.channel) {
      errors.name = 'Required';
    }
    return errors;
  }


  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  });

  return (
    <form onSubmit={formik.handleSubmit} className='form-style'>
      <div>
        <label htmlFor='name'>name</label>
        <input
          type="text"
          id='name'
          name='name'
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name ? <div>{formik.errors.name}</div> : null}
      </div>

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