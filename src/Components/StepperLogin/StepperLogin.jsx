import React, { useState } from 'react';
import Stepper from './../../../node_modules/react-stepper-horizontal/lib/Stepper'
import './StepperLogin.css';
import Swal from 'sweetalert2'

import Step1 from './Step1/Step1';
import Step2 from './Step2/Step2';
import Step3 from './Step3/Step3';
import Step4 from './Step4/Step4';


function StepperLogin() {
    const [activeStep, setActiveStep] = useState(0);
    const [nextButton2,setNextButton2] = useState('');
    const [nextButton1,setNextButton1] = useState('')
    
    const getValidOne =(data) => {
        setNextButton1(data);
        
    }
    const getValid =(data) => {
        setNextButton2(data);
        
    }
    

    const steps = [
        { title: 'Complete Information' },
        { title: 'Contact Information' },
        { title: 'Payment Information' },
        { title: 'Terms & Conditions' },
    ];

    function getSectionComponent() {
        switch (activeStep) {
            case 0: return <Step1 onSubmit={getValidOne}/>
            case 1: return <Step2 onSubmit={getValid} /> ;
            case 2: return <Step3 /> ;
            case 3: return <Step4 /> ;
            default: return null;
        }
    }
    

    return (
        <div className='Ah-StepperLogin'>
            <Stepper
                completeBarColor = '#ff8500'
                completeBarBackgroundColor = '#938c8c'
                completeBarHeight = '100px'
                completeTitleColor = '#eee'
                activeColor = '#ff8500'
                completeColor = '#ff8500'
                activeTitleColor = '#938c8c'
                steps={steps}
                activeStep={activeStep} />
            <div style={{ padding: '20px' }}>
                {getSectionComponent()}
                {(activeStep !== 0 && activeStep !== steps.length )
                    && <button className='nb-buttons1' onClick={() => setActiveStep(activeStep - 1)}>Previous</button>
                }
                {activeStep !== steps.length - 1
                    && <button className='nb-buttons2' onClick={() => {
                        if ( activeStep == 0 ){
                            if ( nextButton1 !=='' ){
                                setActiveStep(activeStep + 1);
                                setNextButton1('');
                            }else{
                                setActiveStep(activeStep );
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: 'Please Enter All Required Fields',
                                    })
                            }
                        }else if ( activeStep == 1){
                            if ( nextButton2 !=='' ){
                                setActiveStep(activeStep + 1);
                                setNextButton2('');
                            }else{
                                setActiveStep(activeStep );
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: 'Please enter the phone number',
                                    })
                            }
                        }else {
                            setActiveStep(activeStep + 1);
                        }
                    } }>Next</button>
                }
                {(activeStep === 3 )
                    && <button className='nb-buttons2' >Confirm</button>
                }
            </div>
        </div>
    );
}

export default StepperLogin