import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import Customer from "../models/Customer";
import {Modal} from 'react-bootstrap';
import customerService from "../services/customer.service";

const CustomerSave=forwardRef((props, ref) =>{
    const [customer, setCustomer] = useState(new Customer('', '', 0));
    const [errorMessage, setErrorMessage] = useState('');
    const [show, setShow] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useImperativeHandle(ref, ()=>({
        showCustomerModal(){
            setTimeout(() => setShow(true), 0);
        }
    }));

    useEffect(()=>{
        setCustomer(props.customer);
        console.log(props.customer);
    }, [props.customer]);

    const saveCustomer = (e) => {
        e.preventDefault();
        setSubmitted(true);

        if (!customer.name || !customer.description || !customer.price) {
			return;
		}

        customerService.saveCustomer(customer)
			.then((response) => {
				props.onSaved(response.data);  //상위컴포넌트에 저장데이터 전달
				setShow(false);
				setSubmitted(false);
			})
			.catch((err) => {
				setErrorMessage('회원 저장시 에러발생!');
				console.log(err);
			});
        setCustomer(new Customer('', '', 0)); //입력창 초기화    
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;

        setCustomer((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };

    return(
        <Modal show={show}>
            <form noValidate onSubmit={saveCustomer} className={submitted ? 'was-validated' : ''}>
                <div className='modal-header'>
                    <h5 className='modal-title'>회원 정보</h5>
                    <button type='button' className='btn-close' onClick={() => setShow(false)}></button>
                </div>
                <div className='modal-body'>

                    {errorMessage && <div className='alert alert-danger'>{errorMessage}</div>}

                    <div className='form-group'>
                        <label htmlFor='name'>회원명 </label>
                        <input
                            type='text'
                            name='name'
                            placeholder='name'
                            className='form-control'
                            value={customer?.name}
                            onChange={handleChange}
                            required
                        />
                        <div className='invalid-feedback'>Name is required.</div>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='description'>회원설명: </label>
                        <textarea
                            name='description'
                            placeholder='description'
                            className='form-control'
                            value={customer?.description}
                            onChange={handleChange}
                            required
                        />
                        
                    </div>
                </div>
                <div className='modal-footer'>
                    <button type='button' className='btn btn-secondary' onClick={() => setShow(false)}>
                        닫기
                    </button>
                    <button type='submit' className='btn btn-primary'>
                        저장하기
                    </button>
                </div>
            </form>

        </Modal>

    );
});
export default CustomerSave;