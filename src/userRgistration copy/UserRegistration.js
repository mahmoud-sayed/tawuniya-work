import React, { useState } from 'react';
import { MultiSelect } from 'primereact/multiselect';
import { Dropdown } from 'primereact/dropdown';
import { useFormik } from 'formik';

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
        business: [],
        selectedRole: [],
        selectedSponsors: [],
        selectedActions: [],
        selectedRegion: []
    }

    // to handel the form submit
    const onSubmit = values => {
        console.log(formik.values)
    }

    // to handel the form errors
    const validate = values => {
        const errors = {};

        if (!values.entityCrNumber) {
            errors.entityCrNumber = 'Required';
        }

        if (!values.entityName) {
            errors.entityName = 'Required';
        }

        if (!values.nationalID) {
            errors.nationalID = 'Required';
        }

        if (!values.nationalIdName) {
            errors.nationalIdName = 'Required';
        }

        if (!values.email) {
            errors.email = 'Required';
        } else if ('[a-z0-9]+@[a-z]+\.[a-z]{2,3}'.test(values.email)) {
            errors.email = 'Invalid Email'
        }

        if (!values.mobile) {
            errors.mobile = 'Required';
        }

        if (!values.business) {
            errors.business = 'Required';
        }

        if (!values.selectedRole) {
            errors.selectedRole = 'Required';
        }

        if (!values.selectedSponsors) {
            errors.selectedSponsors = 'Required';
        }

        if (!values.selectedActions) {
            errors.selectedActions = 'Required';
        }

        if (!values.selectedRegion) {
            errors.selectedRegion = 'Required';
        }
        return errors;
    }


    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })
    console.log(formik.values)
    console.log(formik.errors)
    // to open the form as modal
    const [modal, setModal] = useState(false);

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

    // // entityName error
    // const entityCrNumberErrors = {
    //     addNumbersMoreThan2: 'add number more than 2',
    //     onlyNumbers: 'only numbers accepted',
    // }
    // // entityName
    // const entityNameErrors = {
    //     noNumbers: 'name must not contain numbers',

    // }

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
                                placeholder='Entity CR Number'
                                name="entityCrNumber"
                                required
                            />
                            <p className={formik.errors.entityCrNumber ? 'error' : 'no-error'}>
                                {formik.errors.entityCrNumber}
                            </p>
                        </div>

                        {/* entityName */}
                        <div className='registration-form-input-wrapper  small-input'>
                            <input
                                className='input'
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.entityName}
                                placeholder='Entity name'
                                name="entityName"
                                required
                            />
                            <p className={formik.errors.entityName ? 'error' : 'no-error'}>
                                {formik.errors.entityName}
                            </p>
                        </div>

                        {/* nationalID */}
                        <div className='registration-form-input-wrapper  small-input'>
                            <input
                                className='input'
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.nationalID}
                                placeholder='National ID'
                                name="nationalID"
                                required
                            />
                            <p className={formik.errors.nationalID ? 'error' : 'no-error'}>
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
                                placeholder='National ID Name'
                                name="nationalIdName"
                                required
                            />
                            <p className={formik.errors.nationalIdName ? 'error' : 'no-error'}>
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
                                placeholder='Email'
                                name="email"
                                required
                            />
                            <p className={formik.errors.email ? 'error' : 'no-error'}>
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
                                placeholder='Mobile'
                                name="mobile"
                                required
                            />
                            <p className={formik.errors.mobile ? 'error' : 'no-error'}>
                                {formik.errors.mobile}
                            </p>
                        </div>


                        <div className='registration-form-input-wrapper small-input'>
                            <MultiSelect
                                className='input'
                                onChange={formik.handleChange}
                                value={formik.values.business}
                                options={Business}
                                optionLabel="name"
                                name='business'
                                placeholder="Select Business"
                                required
                            />
                            <p className={formik.errors.business ? 'error' : 'no-error'}>
                                {formik.errors.business}
                            </p>
                        </div>

                        <div className='registration-form-input-wrapper small-input'>
                            <Dropdown
                                className='input'
                                onChange={formik.handleChange}
                                value={formik.values.selectedRole}
                                options={Role}
                                optionLabel="name"
                                name='selectedRole'
                                placeholder="Select Role"
                                required
                            />
                            <p className={formik.errors.selectedRole ? 'error' : 'no-error'}>
                                {formik.errors.selectedRole}
                            </p>
                        </div>
                        <div className='registration-form-input-wrapper full-input'>
                            <Dropdown
                                className='input'
                                onChange={formik.handleChange}
                                value={formik.values.selectedSponsors}
                                options={sponsor}
                                optionLabel="name"
                                name='selectedSponsors'
                                placeholder="Select sponsors No"
                                required
                            />
                            <p className={formik.errors.selectedSponsors ? 'error' : 'no-error'}>
                                {formik.errors.selectedSponsors}
                            </p>
                        </div>
                        <div className='registration-form-input-wrapper small-input'>
                            <Dropdown
                                className='input'
                                onChange={formik.handleChange}
                                value={formik.values.selectedActions}
                                options={action}
                                optionLabel="name"
                                name='selectedActions'
                                placeholder="Select actions"
                            />
                            <p className={formik.errors.selectedActions ? 'error' : 'no-error'}>
                                {formik.errors.selectedActions}
                            </p>
                        </div>
                        <div className='registration-form-input-wrapper small-input'>
                            <MultiSelect
                                onChange={formik.handleChange}
                                value={formik.values.selectedRegion}
                                className='input'
                                options={region}
                                name='selectedRegion'
                                optionLabel="name"
                                placeholder="selectedRegion"
                                required
                            />
                            <p className={formik.errors.selectedRegion ? 'error' : 'no-error'}>
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