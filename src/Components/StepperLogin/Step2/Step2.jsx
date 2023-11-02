import './Step2.css'
import { useState } from 'react';
import Swal from 'sweetalert2'
function Step2(props) {
    const [phone, setPhone] = useState("");
    const [companyWebsite, setcompanyWebsite] = useState("");
    const [facebookAccount, setFacebookAccount] = useState("");
    const [behanceAccount, setBehanceAccount] = useState("");
    const [linkedInAccount, setLinkedInAccount] = useState("");
    function handleChange(e) {
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
        
        setPhone(validNumber)
        props.onSubmit(phone);
    }
    return (
        <div>
            <div className="Ah-container">
                <div className="Ah-container-white">
                    <div className="Ah-title">
                        <p>Contact Information</p>
                    </div>
                    <form action="">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 d-flex flex-column">
                                <label className='mb-1 star'>Phone Number</label>
                                <input
                                    type="tel"
                                    pattern='[0-9]*'
                                    value={phone}
                                    placeholder='+963-'
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-lg-6 col-sm-12 d-flex flex-column">
                                <label className='mb-1'>Company Website</label>
                                <input
                                    type="text"
                                    value={companyWebsite}
                                    placeholder='Example: www.focal-x.com'
                                    onChange={(e) => setcompanyWebsite(e.target.value)}
                                />
                            </div>
                            <div className="col-lg-6 col-sm-12 d-flex flex-column">
                                <label className='mb-1'>Facebook Account</label>
                                <input
                                    type="email"
                                    value={facebookAccount}
                                    placeholder='Example: @taplin_33 '
                                    onChange={(e) => setFacebookAccount(e.target.value)}
                                />
                            </div>
                            <div className='col-lg-6 col-sm-12 d-flex flex-column'>
                                <label className='mb-1'>Behance Account</label>
                                <input
                                    type="email"
                                    value={behanceAccount}
                                    placeholder='Example: @taplin_33 '
                                    onChange={(e) => setBehanceAccount(e.target.value)}
                                />
                            </div>
                            <div className="col-lg-6 col-sm-12 d-flex flex-column">
                                <label className='mb-1'>Linked-in Account</label>
                                <input
                                    type="email"
                                    value={linkedInAccount}
                                    placeholder='Example: @taplin_33 '
                                    onChange={(e) => setLinkedInAccount(e.target.value)}
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Step2