import React, { useState, useEffect } from 'react';
import { MultiSelect } from 'primereact/multiselect';

import 'primeicons/primeicons.css';
import './style.scss'

const UserRegistration = () => {
    // to open the form as modal
    const [modal, setModal] = useState(false);

    // handel entityCrNumber input and error
    const [entityCrNumber, setEntityCrNumber] = useState('');
    const [entityCrNumberError, setEntityCrNumberError] = useState(false);

    // handel entityName input and error
    const [entityName, setEntityName] = useState('');
    const [entityNameError, setEntityNameError] = useState(false);

    // handel nationalID input and error
    const [nationalID, setNationalID] = useState('');
    const [nationalIDError, setNationalIDError] = useState(false);

    // handel nationalIdName input and error
    const [nationalIdName, setNationalIdName] = useState('');
    const [nationalIdNameError, setNationalIdNameError] = useState(false);

    // handel email input and error
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);

    // handel mobile input and error
    const [mobile, setMobile] = useState('');
    const [mobileError, setMobileError] = useState(false);

    // handel selectedBusiness input and error
    const [selectedBusiness, setSelectedBusiness] = useState(null);
    const [selectedBusinessError, setSelectedBusinessError] = useState(false);

    // handel selectedRole input and error
    const [selectedRole, setSelectedRole] = useState(null);
    const [selectedRoleError, setSelectedRoleError] = useState(false);

    // handel sponsors input and error
    const [sponsors, setSponsors] = useState(null);
    const [sponsorsError, setSponsorsError] = useState(false);


    // handel actions input and error
    const [actions, setActions] = useState(null);
    const [actionsError, setActionsError] = useState(false);

    // handel regions input and error
    const [regions, setRegion] = useState(null);
    const [regionsError, setRegionError] = useState(false);




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
        { name: 'actions1', code: 'actions1' },
        { name: 'actions2', code: 'actions2' },
        { name: 'actions3', code: 'actions3' },
        { name: 'actions4', code: 'actions4' },
        { name: 'actions5', code: 'actions5' }
    ];

    const region = [
        { name: 'Region1', code: 'Region1' },
        { name: 'Region2', code: 'Region2' },
        { name: 'Region3', code: 'Region3' },
        { name: 'Region4', code: 'Region4' },
        { name: 'Region5', code: 'Region5' }
    ];

    // entityName error
    const entityCrNumberErrors = {
        addNumbersMoreThan2: 'add number more than 2',
        onlyNumbers: 'only numbers accepted',

    }

    // errors handling for entityCrNumber
    useEffect(() => {
        if (entityCrNumber.length < 2) {
            setEntityCrNumberError(true);
        } else if (isNaN(entityCrNumber)) {
            setEntityCrNumberError(true);
        }
    }, [entityCrNumber])



    // entityName
    const entityNameErrors = {
        noNumbers: 'name must not contain numbers',

    }


    // errors handling for entityName
    function Clicked() {
        if (entityName.length > 2) {
            setEntityCrNumberError(true);
        }
    }
    useEffect(() => {

        if (entityName.length > 2) {
            setEntityCrNumberError(true);
        } else if (isNaN(entityCrNumber)) {
            setEntityCrNumberError(true);
        }

    }, [entityName])





    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }




    const handelSubmit = (e) => {
        e.preventDefault();
        const data = {
            'entityCrNumber': entityCrNumber,
            'entityName': entityName,
            'nationalID': nationalID,
            'nationalIdName': nationalIdName,
            'email': email,
            'mobile': mobile,
            'selectedBusiness': selectedBusiness,
            'selectedRole': selectedRole,
            'sponsors': sponsors,
            'actions': actions,
            'regions': regions,
        };
        console.log(data)
    }



    return (
        <React.Fragment>
            <button onClick={toggleModal} className="btn-modal">
                Open
            </button>
            {modal && (<div className='registration'>
                <div className='registration-head'>
                    <p className='registration-head--title'>add new user</p>
                    <i className="pi pi-times"></i>
                </div>
                <form onSubmit={(e) => handelSubmit(e)}>
                    <div className='registration-form'>

                        {/* entityCrNumber */}
                        <div className='registration-form-input-wrapper small-input'>
                            <input
                                className='input'
                                type="text"
                                onChange={(e) => setEntityCrNumber(e.target.value)}
                                onClick={(e) => Clicked}
                                value={entityCrNumber}
                                placeholder='Entity CR Number'
                                name="entityCrNumber"
                                required
                            />
                            <p className={entityCrNumberError === true ? 'error' : 'no-error'}>
                                {
                                    entityCrNumber.length < 2 ? entityCrNumberErrors.addNumbersMoreThan2 :
                                        isNaN(entityCrNumber) ? entityCrNumberErrors.onlyNumbers : ''
                                }
                            </p>
                        </div>

                        {/* entityName */}
                        <div className='registration-form-input-wrapper  small-input'>
                            <input
                                className='input'
                                type="text"
                                onChange={(e) => setEntityName(e.target.value)}
                                value={entityName}
                                placeholder='Entity name'
                                name="entityName"
                                required
                            />
                            <p className='error'>error</p>
                        </div>

                        {/* nationalID */}
                        <div className='registration-form-input-wrapper  small-input'>
                            <input
                                className='input'
                                type="text"
                                onChange={(e) => setNationalID(e.target.value)}
                                value={nationalID}
                                placeholder='National ID'
                                name="nationalID"
                                required
                            />
                            <p className='error'>error</p>
                        </div>
                        {/* nationalIdName */}
                        <div className='registration-form-input-wrapper small-input'>
                            <input
                                className='input'
                                type="text"
                                onChange={(e) => setNationalIdName(e.target.value)}
                                value={nationalIdName}
                                placeholder='National ID Name'
                                name="nationalIdName"
                                required
                            />
                            <p className='no-error'>error</p>
                        </div>

                        {/* email */}
                        <div className='registration-form-input-wrapper'>
                            <input
                                className='input'
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                placeholder='Email'
                                name="email"
                                required
                            />
                            <p className='error'>error</p>
                        </div>

                        {/* mobile */}
                        <div className='registration-form-input-wrapper small-input'>
                            <input
                                className='input'
                                type="text"
                                onChange={(e) => setMobile(e.target.value)}
                                value={mobile}
                                placeholder='Mobile'
                                name="mobile"
                                required
                            />
                            <p className='error'>error</p>
                        </div>


                        <div className='registration-form-input-wrapper small-input'>
                            <MultiSelect value={selectedBusiness} onChange={(e) => setSelectedBusiness(e.value)} options={Business} optionLabel="name"
                                placeholder="Select Business" className='input' required />
                            <p className='error'>error</p>
                        </div>

                        <div className='registration-form-input-wrapper small-input'>
                            <MultiSelect value={selectedRole} onChange={(e) => setSelectedRole(e.value)} options={Role} optionLabel="name"
                                placeholder="Select Role" className='input' required />
                            <p className='error'>error</p>
                        </div>
                        <div className='registration-form-input-wrapper full-input'>
                            <MultiSelect value={sponsors} onChange={(e) => setSponsors(e.value)} options={sponsor} optionLabel="name"
                                placeholder="Select sponsors" className='input' required />
                            <p className='error'>error</p>
                        </div>
                        <div className='registration-form-input-wrapper small-input'>
                            <MultiSelect value={actions} onChange={(e) => setActions(e.value)} options={action} optionLabel="name"
                                placeholder="Select actions" className='input' required />
                            <p className='error'>error</p>
                        </div>
                        <div className='registration-form-input-wrapper small-input'>
                            <MultiSelect value={regions} onChange={(e) => setRegion(e.value)} options={region} optionLabel="name"
                                placeholder="Select region" className='input' required />
                            <p className='no-error'>error</p>
                        </div>

                    </div>
                    <hr className='registration-divider' />
                    <div className='registration-control'>
                        <button className='registration-control--cancel'>Cancel</button>
                        <button className='registration-control--submit' type='submit'>Add</button>
                    </div>
                </form>
                {/* <InputBox labelTxt='hello' placeholderText='hello'/> */}
            </div>)}
        </React.Fragment>

    )
}

export default UserRegistration