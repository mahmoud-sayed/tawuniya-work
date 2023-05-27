/**
 * this component is build for user registration form
 * tech used here is...
 * 1- primereact => used for dropdown menu and multiple select dropdown 
 * 2- Formik => used for handle next things [form data, from validation, 
 *              enhance user experience, show error messages, write more easy code]
 * 3- Yup => for easy from validation without more code
 */



import React, { useState } from 'react';
import { MultiSelect } from 'primereact/multiselect';
import { Dropdown } from 'primereact/dropdown';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import 'primeicons/primeicons.css';
import './style.scss'

const UserRegistration = () => {

    // initialValues for the form
    const initialValues = {
        entityCrNumber: '',
        entityName: '',
        nationalID: '',
        nationalIdName: '',
        email: '',
        mobile: '',
        business: '',
        selectedRole: '',
        selectedSponsors: '',
        selectedActions: '',
        selectedRegion: ''
    }

    // to handel the form submit
    const onSubmit = values => {
        console.log(formik.values)
    }



    // to handel the form errors ( this is the old way)
    // const validate = values => {
    //     const errors = {};

    //     if (!values.entityCrNumber) {
    //         errors.entityCrNumber = 'Required';
    //     }

    //     if (!values.entityName) {
    //         errors.entityName = 'Required';
    //     }

    //     if (!values.nationalID) {
    //         errors.nationalID = 'Required';
    //     }

    //     if (!values.nationalIdName) {
    //         errors.nationalIdName = 'Required';
    //     }

    //     if (!values.email) {
    //         errors.email = 'Required';
    //     } else if ('[a-z0-9]+@[a-z]+\.[a-z]{2,3}'.test(values.email)) {
    //         errors.email = 'Invalid Email'
    //     }

    //     if (!values.mobile) {
    //         errors.mobile = 'Required';
    //     }

    //     if (!values.business) {
    //         errors.business = 'Required';
    //     }

    //     if (!values.selectedRole) {
    //         errors.selectedRole = 'Required';
    //     }

    //     if (!values.selectedSponsors) {
    //         errors.selectedSponsors = 'Required';
    //     }

    //     if (!values.selectedActions) {
    //         errors.selectedActions = 'Required';
    //     }

    //     if (!values.selectedRegion) {
    //         errors.selectedRegion = 'Required';
    //     }
    //     return errors;
    // }

    // new way to handel form validation 
    const validationSchema = Yup.object({
        entityCrNumber: Yup.number().typeError('enter numbers only').required('required!'),
        entityName: Yup.string().typeError('enter letters only').required('required!'),
        nationalID: Yup.number().typeError('enter numbers only').required('required!'),
        nationalIdName: Yup.string().typeError('enter letters only').required('required!'),
        email: Yup.string().email('invalid email format!').required('required'),
        mobile: Yup.number().typeError('enter numbers only').required('required!'),
        business: Yup.array().of(Yup.object()).required('required!'),
        selectedRole: Yup.object().required('required!'),
        selectedSponsors: Yup.object().required('required!'),
        selectedActions: Yup.object().required('required!'),
        selectedRegion: Yup.array().of(Yup.object()).required('required!')
    })

    // main formik function
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
        // validate
    })

    // to open the form as modal
    const [modal, setModal] = useState(false);

    /*
    this 5 arrays will come from the API
    once we you have the API please just add the items inside the objects
    without changing any thing because this will effect on the validation
    */
    const Business = [
        { name: 'Business1', code: 'Business1' },
        { name: 'Business2', code: 'Business2' },
        { name: 'Business3', code: 'Business3' },
        { name: 'Business4', code: 'Business4' },
        { name: 'Business5', code: 'Business5' }
    ];

    const Role = [
        { name: 'Role1', code: 'Role1' },
        { name: 'Role2', code: 'Role2' },
        { name: 'Role3', code: 'Role3' },
        { name: 'Role4', code: 'Role4' },
        { name: 'Role5', code: 'Role5' }
    ];

    const sponsor = [
        { name: 'sponsor1', code: 'sponsor1' },
        { name: 'sponsor2', code: 'sponsor2' },
        { name: 'sponsor3', code: 'sponsor3' },
        { name: 'sponsor4', code: 'sponsor4' },
        { name: 'sponsor5', code: 'sponsor5' }
    ];

    const action = [

        { name: 'action1', code: 'action1' },
        { name: 'action2', code: 'action2' },
        { name: 'action3', code: 'action3' },
        { name: 'action4', code: 'action4' },
        { name: 'action5', code: 'action5' }
    ];

    const region = [
        { name: 'Region1', code: 'Region1' },
        { name: 'Region2', code: 'Region2' },
        { name: 'Region3', code: 'Region3' },
        { name: 'Region4', code: 'Region4' },
        { name: 'Region5', code: 'Region5' }
    ];

    // for opening and closing the form
    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }


    return (
        <React.Fragment>
            <button onClick={toggleModal} className="btn-modal">
                Open
            </button>
            {modal && (<div className='registration'>
                <div className='registration-head'>
                    <p className='registration-head--title'>add new user</p>
                    <i onClick={toggleModal} className="pi pi-times"></i>
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <div className='registration-form'>

                        {/* entityCrNumber */}
                        <div className='registration-form-input-wrapper small-input'>
                            <input
                                className='input'
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.entityCrNumber}
                                onBlur={formik.handleBlur}
                                placeholder='Entity CR Number'
                                name="entityCrNumber"
                                required
                            />
                            <span className={formik.touched.entityCrNumber && formik.errors.entityCrNumber ? 'error' : 'no-error'}>
                                {formik.errors.entityCrNumber}
                            </span>
                        </div>

                        {/* entityName */}
                        <div className='registration-form-input-wrapper  small-input'>
                            <input
                                className='input'
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.entityName}
                                onBlur={formik.handleBlur}
                                placeholder='Entity name'
                                name="entityName"
                                required
                            />
                            <span className={formik.touched.entityName && formik.errors.entityName ? 'error' : 'no-error'}>
                                {formik.errors.entityName}
                            </span>
                        </div>

                        {/* nationalID */}
                        <div className='registration-form-input-wrapper  small-input'>
                            <input
                                className='input'
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.nationalID}
                                onBlur={formik.handleBlur}
                                placeholder='National ID'
                                name="nationalID"
                                required
                            />
                            <p className={formik.touched.nationalID && formik.errors.nationalID ? 'error' : 'no-error'}>
                                {formik.errors.nationalID}
                            </p>
                        </div>
                        {/* nationalIdName */}
                        <div className='registration-form-input-wrapper small-input'>
                            <input
                                className='input'
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.nationalIdName}
                                onBlur={formik.handleBlur}
                                placeholder='National ID Name'
                                name="nationalIdName"
                                required
                            />
                            <p className={formik.touched.nationalIdName && formik.errors.nationalIdName ? 'error' : 'no-error'}>
                                {formik.errors.nationalIdName}
                            </p>
                        </div>

                        {/* email */}
                        <div className='registration-form-input-wrapper'>
                            <input
                                className='input'
                                type="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                onBlur={formik.handleBlur}
                                placeholder='Email'
                                name="email"
                                required
                            />
                            <p className={formik.touched.email && formik.errors.email ? 'error' : 'no-error'}>
                                {formik.errors.email}
                            </p>
                        </div>

                        {/* mobile */}
                        <div className='registration-form-input-wrapper small-input'>
                            <input
                                className='input'
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.mobile}
                                onBlur={formik.handleBlur}
                                placeholder='Mobile'
                                name="mobile"
                                required
                            />
                            <p className={formik.touched.mobile && formik.errors.mobile ? 'error' : 'no-error'}>
                                {formik.errors.mobile}
                            </p>
                        </div>


                        <div className='registration-form-input-wrapper small-input'>
                            <MultiSelect
                                className='input'
                                onChange={formik.handleChange}
                                value={formik.values.business}
                                onBlur={formik.handleBlur}
                                options={Business}
                                optionLabel="name"
                                name='business'
                                placeholder="Select Business"
                                required
                            />
                            <p className={formik.touched.business && formik.errors.business ? 'error' : 'no-error'}>
                                {formik.errors.business}
                            </p>
                        </div>

                        <div className='registration-form-input-wrapper small-input'>
                            <Dropdown
                                className='input'
                                onChange={formik.handleChange}
                                value={formik.values.selectedRole}
                                onBlur={formik.handleBlur}
                                options={Role}
                                optionLabel="name"
                                name='selectedRole'
                                placeholder="Select Role"
                                required
                            />
                            <p className={formik.touched.selectedRole && formik.errors.selectedRole ? 'error' : 'no-error'}>
                                {formik.errors.selectedRole}
                            </p>
                        </div>
                        <div className='registration-form-input-wrapper full-input'>
                            <Dropdown
                                className='input'
                                onChange={formik.handleChange}
                                value={formik.values.selectedSponsors}
                                onBlur={formik.handleBlur}
                                options={sponsor}
                                optionLabel="name"
                                name='selectedSponsors'
                                placeholder="Select sponsors No"
                                required
                            />
                            <p className={formik.touched.selectedSponsors && formik.errors.selectedSponsors ? 'error' : 'no-error'}>
                                {formik.errors.selectedSponsors}
                            </p>
                        </div>
                        <div className='registration-form-input-wrapper small-input'>
                            <Dropdown
                                className='input'
                                onChange={formik.handleChange}
                                value={formik.values.selectedActions}
                                onBlur={formik.handleBlur}
                                options={action}
                                optionLabel="name"
                                name='selectedActions'
                                placeholder="Select actions"
                            />
                            <p className={formik.touched.selectedActions && formik.errors.selectedActions ? 'error' : 'no-error'}>
                                {formik.errors.selectedActions}
                            </p>
                        </div>
                        <div className='registration-form-input-wrapper small-input'>
                            <MultiSelect
                                className='input'
                                onChange={formik.handleChange}
                                value={formik.values.selectedRegion}
                                onBlur={formik.handleBlur}
                                options={region}
                                name='selectedRegion'
                                optionLabel="name"
                                placeholder="selectedRegion"
                                required
                            />
                            <p className={formik.touched.selectedRegion && formik.errors.selectedRegion ? 'error' : 'no-error'}>
                                {formik.errors.selectedRegion}
                            </p>
                        </div>

                    </div>
                    <hr className='registration-divider' />
                    <div className='registration-control'>
                        <button onClick={toggleModal} className='registration-control--cancel'>Cancel</button>
                        <button className='registration-control--submit' type='submit'>Add</button>
                    </div>
                </form>
                {/* <InputBox labelTxt='hello' placeholderText='hello'/> */}
            </div>)}
        </React.Fragment>

    )
}

export default UserRegistration