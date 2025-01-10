import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from '../utils/ApiConfig';
import { toast } from 'react-toastify';
import Loader from '../common/loader';
import propertyService from '../utils/propertyService';

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;




const schema = yup.object().shape({
    firstName: yup.string().trim().required('First name is required').min(3, 'First name must be a minimum of 3 characters').max(20, 'First name must be a maximum of 20 characters').matches(/^[A-Za-z]+$/, 'First name must only contain alphabetic characters'),
    lastName: yup.string().trim().required('Last name is required').min(3, 'Last name must be a minimum of 3 characters').max(20, 'Last name must be a maximum of 20 characters').matches(/^[A-Za-z]+$/, 'Last name must only contain alphabetic characters'),
    email: yup.string().required('Email is required').matches(emailRegex, 'Invalid email format'),
    subject: yup.string().trim().required('Subject is required').min(3, 'Subject must be a minimum of 3 characters').max(30, 'Subject must be a maximum of 30 characters'),
    message: yup.string().trim().required('Message is required').max(255, 'Message  must be a maximum of 255 characters'),
});
function Contact() {

    const [loading, setLoading] = useState(false);


    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = async (data) => {
        console.log(data);

        try {
            setLoading(true);


            const response = await propertyService.contacUs(data);
            if (response.statusCode === 200) {
                toast.success("Contact Updated")
                reset();
            } else {
                toast.error(response?.message || "Error While Form Updates")

            }
            setLoading(false);
        } catch (error) {

            setLoading(false);
            toast.error(error?.response?.data?.error || "Internal Server Error")
        }
    };


    const handleKeyDown = (event) => {
        // Allow only alphabetic characters
        if (
            !(
                (event.keyCode >= 65 && event.keyCode <= 90) || // A-Z
                (event.keyCode >= 97 && event.keyCode <= 122) || // a-z
                event.keyCode === 8 || // Backspace
                event.keyCode === 9 || // Tab
                event.keyCode === 32 || // Space
                event.keyCode === 37 || // Left arrow
                event.keyCode === 39 // Right arrow
            )
        ) {
            event.preventDefault();
        }
    };



    return (
        <>
            <section className='container-fluid page_title_banner_section my-4' data-aos="zoom-in">
                <div className="container">
                    <div className='page_title_banner_bgImage_Area' style={{ backgroundImage: `linear-gradient(90deg, #0000007b, #00000000), url('/assests/Img/Contact_title_banner.png')`, }}>
                        <div className='row'>
                            <div className='col-12'>
                                <h3>Contact Us</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container-fluid contact_section my-4'>
                <div className="container">
                    <div className='Container_white_bg_hp'>
                        <div className='row'>
                            {loading ? <Loader /> : (<div className="col-xl-6 col-lg-6 col-md-12 mb-4" data-aos="fade-up-right">
                                <div className='contact_form_Area'>
                                    <h3 className='contact_form_heading'>Send Us A Message</h3>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-group mb-3">
                                            <input type="text" placeholder='First name*' className='form-control' {...register("firstName")}
                                                onKeyDown={handleKeyDown} onCut={(e) => e.preventDefault()}
                                                onCopy={(e) => e.preventDefault()}
                                                onPaste={(e) => e.preventDefault()} />
                                            {errors.firstName && <p className="text-danger">{errors?.firstName?.message}</p>}
                                        </div>
                                        <div className="form-group mb-3">
                                            <input type="text" placeholder='Last name*' className='form-control' {...register("lastName")} onKeyDown={handleKeyDown}
                                                onCut={(e) => e.preventDefault()}
                                                onCopy={(e) => e.preventDefault()}
                                                onPaste={(e) => e.preventDefault()} />
                                            {errors.lastName && <p className="text-danger">{errors?.lastName?.message}</p>}
                                        </div>

                                        <div className="form-group mb-3">
                                            <input type="text" placeholder='Your email*' className='form-control' {...register("email")} maxLength={30} />
                                            {errors.email && <p className="text-danger">{errors?.email?.message}</p>}
                                        </div>

                                        <div className="form-group mb-3">
                                            <input type="text" placeholder='Subject*' className='form-control' {...register("subject")} />
                                            {errors.subject && <p className="text-danger">{errors?.subject?.message}</p>}
                                        </div>


                                        <div className="form-group mb-3">
                                            <textarea name="" id="" rows="5" className='form-control' placeholder='Message*' {...register("message")} ></textarea>
                                            {errors.message && <p className="text-danger">{errors?.message?.message}</p>}
                                        </div>

                                        <button type="submit" className='btn btn_00529B'>Submit</button>
                                    </form>
                                </div>
                            </div>)}

                            <div className="col-xl-6 col-lg-6 col-md-12" data-aos="fade-up-left">
                                <div className='contact_form_Area'>
                                    <h3 className='contact_form_heading'>Contact Us</h3>
                                </div>
                                <div className='contact_info_item_Area'>
                                    <h4>Main office</h4>
                                    <div className='mb-2'>
                                        <a >J.E. Irausquin Blvd. 12, 2nd Floor, Oranjestad, Aruba</a>
                                    </div>
                                    <div className='mb-2'><a href='tel:+18669407453'>+1-866-940-7453</a></div>
                                    <div className='mb-2'><a href='tel:+2975820509'>+297-582-0509</a></div>
                                    <div className='mb-2'>
                                        <p>Monday – Friday <strong className='ms-1'>08:00 AM  – 18:00 PM </strong> </p>
                                        <p>Saturday<strong className='ms-1'> 09:00 AM – 17:00 PM</strong></p>
                                    </div>
                                </div>

                                {/* <div className='row'>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                        <div className='contact_info_item_Area'>
                                            <h4>Main office</h4>
                                            <div className='mb-2'>
                                                <a href=''>J.E. Irausquin Blvd. 12, 2nd Floor, Oranjestad, Aruba</a>
                                            </div>
                                            <div className='mb-2'><a href='tel:+18669407453'>+1-866-940-7453</a></div>
                                            <div className='mb-2'><a href='tel:+2975820509'>+297-582-0509</a></div>
                                            <div className='mb-2'>
                                                <p>Monday – Friday <strong className='ms-1'>09:00 – 20:30</strong> </p>
                                                <p>Saturday<strong className='ms-1'> 09:00 – 18:00</strong></p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                                        <div className='contact_info_item_Area'>
                                            <h4>Second office</h4>
                                            <div className='mb-2'>
                                                <a href=''>J.E. Irausquin Blvd. 12, 2nd Floor, Oranjestad, Aruba</a>
                                            </div>
                                            <div className='mb-2'><a href='tel:+11122344667'>+111 223 446 67</a></div>
                                            <div className='mb-2'><a href='tel:+12345678911'>+123 456 789 11</a></div>
                                            <div className='mb-2'>
                                                <p>Monday – Friday <strong className='ms-1'>09:00 – 20:30</strong> </p>
                                                <p>Saturday<strong className='ms-1'> 09:00 – 18:00</strong></p>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container-fluid contact_section my-4' data-aos="zoom-in">
                <div className="container">
                    <div className='row'>
                        <div className='col-12'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.5155120659446!2d-70.03621788577444!3d12.526430761387286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e840a34f6f10ed3%3A0x9b68d6a13c83b9d1!2sJ.E.%20Irausquin%20Blvd%2012%2C%202nd%20Floor%2C%20Oranjestad%2C%20Aruba!5e0!3m2!1sen!2sin!4v1710419629830!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact