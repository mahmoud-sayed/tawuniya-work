/**
 * this component is build for user registration form
 * tech used here is...
 * 1- primereact => used for dropdown menu and multiple select dropdown 
 * 2- Formik => used for handle next things [form data, from validation, 
 *              enhance user experience, show error messages, write more easy code]
 * 3- Yup => for form validation
 */

import React, { useState, useEffect } from 'react';
import { MultiSelect } from 'primereact/multiselect';
import { Dropdown } from 'primereact/dropdown';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import 'primeicons/primeicons.css';
import './style.scss'

const UserRegistration = () => {
    // to open the form as modal
    const [modal, setModal] = useState(false);
    const [disabled, setDisabled] = useState(false);

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
        if (!formik.errors) {
            console.log(formik.values)
        }
    }

    // new way to handel form validation 
    const validationSchema = Yup.object({
        entityCrNumber: Yup.number().typeError('enter numbers only').required('required!'),
        entityName: Yup.string().matches(/^[a-z]+$/, "enter letters only").required('required!'),
        nationalID: Yup.number().typeError('enter numbers only').required('required!'),
        nationalIdName: Yup.string().matches(/^[a-z]+$/, "enter letters only").required('required!'),
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

    // check that all fields have values to enable or disable the button
    useEffect(() => {
        if (
            !formik.errors &&
            formik.values.business.length < 1 &&
            formik.values.email.length < 1 &&
            formik.values.entityCrNumber.length < 1 &&
            formik.values.entityName.length < 1 &&
            formik.values.mobile.length < 1 &&
            formik.values.nationalID.length < 1 &&
            formik.values.nationalIdName.length < 1 &&
            formik.values.selectedActions.length < 1 &&
            formik.values.selectedRegion.length < 1 &&
            formik.values.selectedRole.length < 1 &&
            formik.values.selectedSponsors.length < 1
        ) {
            setDisabled(true)
        } else {
            setDisabled(false)
        }
    }, [formik.errors, formik.values])
    return (
        <React.Fragment>
            <button onClick={toggleModal} className="btn-modal">
                Open
            </button>
            {modal && (
                <div className='registration-confirmation-popup-Background'>
                    <div className={`registration-confirmation-popup  ${modal && 'open'}`}>
                        <div className='registration'>
                            <div className='registration-head'>
                                <p className='registration-head--title'>add new user</p>
                                <i onClick={toggleModal} className="pi pi-times"></i>
                            </div>
                            <form onSubmit={formik.handleSubmit}>
                                <div className='registration-form' >

                                    {/* entityCrNumber */}
                                    <div className='registration-form-input-wrapper small-input'>
                                        <input
                                            className='input'
                                            type="text"
                                            // {...formik.getFieldProps('entityCrNumber')}  this can replace the onchange and value and onBlur functions the 3 lines below this line
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
                                            // {...formik.getFieldProps('entityName')}  this can replace the onchange and value and onBlur functions the 3 lines below this line
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
                                            // {...formik.getFieldProps('nationalID')}  this can replace the onchange and value and onBlur functions the 3 lines below this line
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
                                            // {...formik.getFieldProps('nationalIdName')}  this can replace the onchange and value and onBlur functions the 3 lines below this line
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
                                            // {...formik.getFieldProps('email')}  this can replace the onchange and value and onBlur functions the 3 lines below this line
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
                                            // {...formik.getFieldProps('mobile')}  this can replace the onchange and value and onBlur functions the 3 lines below this line
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
                                            // {...formik.getFieldProps('mobile')}  this can replace the onchange and value and onBlur functions the 3 lines below this line

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
                                            // {...formik.getFieldProps('selectedRole')}  this can replace the onchange and value and onBlur functions the 3 lines below this line
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
                                            // {...formik.getFieldProps('selectedSponsors')}  this can replace the onchange and value and onBlur functions the 3 lines below this line
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
                                            // {...formik.getFieldProps('selectedActions')}  this can replace the onchange and value and onBlur functions the 3 lines below this line
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
                                            // {...formik.getFieldProps('selectedRegion')}  this can replace the onchange and value and onBlur functions the 3 lines below this line
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
                                    <button onClick={toggleModal} className='registration-control--cancel' >Cancel</button>
                                    <button className='registration-control--submit' type='submit'>Add</button>
                                </div>
                            </form>
                            {/* <InputBox labelTxt='hello' placeholderText='hello'/> */}
                        </div>
                    </div>
                </div>)}
        </React.Fragment>

    )
}

export default UserRegistration