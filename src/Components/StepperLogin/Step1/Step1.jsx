
import { useState } from 'react';
import './Step1.css'
import Swal from 'sweetalert2';
function Step1(props) {
    const [company_name, setCompany_name] = useState('');
    const [Full_name, setFull_name] = useState('');
    const [contact_Number, setcontact_Number] = useState('');
    const [company_Fields, setcompany_Fields] = useState('');
    const [company_Size, setcompany_Size] = useState('');
    const [company_Role, setCompany_Role] = useState('');
    function valid() {
        if (company_name !== '' && Full_name !== '' && contact_Number !== '' && company_Fields !== '' && company_Role !== '') {
            props.onSubmit('next');
        } else {
            props.onSubmit('');
        }
    }
    function companyNameChange(e) {
        setCompany_name(e.target.value)
        valid()
    }
    function fullNameChange(e) {
        setFull_name(e.target.value)
        valid()
    }
    function contactNumbeChange(e) {
        function validNumber()
            {
                if(e.target.validity.valid){
                    return e.target.value
                }else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Please enter valid phone number',
                        });
                    return ''
                }
            }
        
        setcontact_Number(validNumber)
        valid()
    }
    function companyFieldsChange(e) {
        setcompany_Fields(e.target.value)
        valid()
    }
    function companySizeChange(e) {
        setcompany_Size(e.target.value)
        valid()
    }
    function companyRoleChange(e) {
        setCompany_Role(e.target.value)
        valid()
    }
    return (
        <div>
            <div className="Ah-container">
                <div className="Ah-container-white">
                    <div className="Ah-title">
                        <p>Business Information</p>
                    </div>
                    <form action="">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 d-flex flex-column">
                                <label className='mb-1 star'>Company Name</label>
                                <input
                                    type="text"
                                    value={company_name}
                                    placeholder='Example: focal X Agency'
                                    onChange={companyNameChange}
                                />
                            </div>
                            <div className='col-lg-6 col-sm-12 d-flex flex-column'>
                                <label className='mb-1 star'>Company Fields </label>
                                <input
                                    type="text"
                                    value={company_Fields}
                                    placeholder='Example: SoftWare Servives'
                                    onChange={companyFieldsChange}
                                />
                            </div>
                            <div className=' col-lg-6 col-sm-12 d-flex flex-column'>
                                <label for="city" className="star mb-2">City </label>
                                <select name="city" id="city">
                                    <option selected value="volvo">Select</option>
                                    <option value="Damascus">Damascus</option>
                                    <option value="Homs">Homs</option>
                                    <option value="Hama">Hama</option>
                                    <option value="Aleppo">Aleppo</option>
                                    <option value="Raqqa">Raqqa</option>
                                    <option value="Daraa">Daraa</option>
                                    <option value="Deir ez-Zor">Deir ez-Zor</option>
                                    <option value="Al-Hasakah">Al-Hasakah</option>
                                    <option value="Latakia">Latakia</option>
                                    <option value="Quneitra">Quneitra</option>
                                    <option value="Rif Dimashq">Rif Dimashq</option>
                                    <option value="Tartus">Tartus</option>
                                    <option value="As-Suwayda">As-Suwayda</option>
                                    <option value="Idlib">Idlib</option>
                                    <option value="Outside Syria">Outside Syria</option>
                                </select>
                            </div>
                            <div className='col-lg-6 col-sm-12 d-flex flex-column'>
                                <label className='mb-1'>Company Size</label>
                                <input
                                    type="text"
                                    value={company_Size}
                                    placeholder='Example: 150 Employees'
                                    onChange={companySizeChange}
                                />
                            </div>
                            <div className='col-lg-6 col-sm-12 d-flex flex-column'>
                                <label className='mb-1'>Year Founded</label>
                                <input
                                    type="date"
                                />
                            </div>
                            <div class="col-lg-6 col-sm-12 d-flex flex-column position-relative">
                                <label>Company Logo </label>
                                <input type="text" class="custom-input" readonly />
                                <input type="file" id="file-upload" class="hidden-input" />
                            </div>
                        </div>
                    </form>
                    <div className="Ah-title">
                        <p>Responsible Person Information</p>
                    </div>
                    <form action="">
                        <div className="row">
                            <div className='col-lg-6 col-sm-12 d-flex flex-column'>
                                <label className='mb-1 star'>Full Name </label>
                                <input
                                    type="text"
                                    value={Full_name}
                                    placeholder='Example: Osama Ibrahem Faroun'
                                    onChange={fullNameChange}
                                />
                            </div>
                            <div className='col-lg-6 col-sm-12 d-flex flex-column'>
                                <label className='mb-1 star'>Contact Number </label>
                                <input
                                    type="tel"
                                    pattern="[0-9]*"
                                    value={contact_Number}
                                    placeholder='+963'
                                    onChange={contactNumbeChange}
                                />
                            </div>
                            <div className='col-lg-6 col-sm-12 d-flex flex-column'>
                                <label className='mb-1 star'>Job Role</label>
                                <input
                                    type="text"
                                    value={company_Role}
                                    placeholder='Example: 150 Employees'
                                    onChange={companyRoleChange}
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Step1