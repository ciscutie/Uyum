import { useRef, useState } from 'react';
import { BsMailbox, BsTwitter, BsFacebook, BsGithub } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';
import { IoCall } from 'react-icons/io5';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../components/Firebase';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  {
    /*Message state??*/
  }
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [submit, setSubmit] = useState('');

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useState(null);
  const errorRef = useRef(null);
  const handleChange = (e) => {
    // Update the form data when input values change
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      const docRef = await addDoc(collection(db, 'users'), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }

    // Focus on input fields with errors
    if (nameError) {
      nameRef.current.focus(); //if there is an error the email input will focus on name input
    } else if (emailError) {
      emailRef.current.focus(); //if there is an error the email input will focus on email input
    } else if (messageError) {
      messageRef.current.focus(); //if there is an error the textarea will focus on message textarea
    }
    // Access form data from the state
    const { name, email, message } = formData;
    //regex email validation
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    //regex name validation
    const nameRegex = /^[A-Za-z\s'-]+$/;

    //name condition
    if (name.length === 0) {
      setNameError('Your name  is required'); //if name input is empty it will execute this block
    } else if (!nameRegex.test(name)) {
      setNameError('Invalid name'); //if name input doesn't meet regex requirement it will execute this block
    } else {
      setNameError(''); //if meet all requirements all message error will clear
    }

    //email condition
    if (email.length === 0) {
      setEmailError('Email Address is required'); //if email input is empty this condition will execute
    } else if (!emailRegex.test(email)) {
      setEmailError('Invalid Email Address'); //if email input doesn't meet the regex requirement this condition will execute
    } else {
      setEmailError(''); //if meet all requirements the email's message error will clear
    }
    //message textarea condition
    if (message.length === 0) {
      setMessageError('Message is required'); //if message textarea is empty this will execute
    } else {
      setMessageError(''); //if meet all requirements textarea's message error will clear
    }
    // If any of the fields are empty, do not proceed with submission
    if (name.trim() === 0 || email.trim() === 0 || message.trim() === 0) {
      return;
    }
    setSubmit(true);

    //log
    console.log('Name:', formData.name); //log for name input
    console.log('Email:', formData.email); //log for email input
    console.log('Message:', formData.message); //log for message textarea
  };
  return (
    <div className='flex flex-col md:flex-row justify-evenly md:flex items-center h-[160vh] md:h-[93vh]'>
      <div className='flex flex-col'>
        <h1 className='text-4xl font-semibold text-yellow-600 stroke-[10px]'>
          Let's discuss <br /> on something{' '}
          <span className='text-red-900'>cool</span>
          <br /> together
        </h1>
        <div className='font-semibold py-[140px] gap-4'>
          <p className='flex flex-row items-center text-yellow-800 gap-2 text-lg'>
            <span className='text-black font-bold'>
              <BsMailbox />
            </span>
            <a href='mailto:kaycis25@gmail.com' target='_blank'>
              kaycis25@gmail.com
            </a>
          </p>

          <p
            className='text-yellow-800 text-lg flex flex-row items-center gap-2  
          rounded-lg'
          >
            <span className='text-blue-600'>
              <IoCall />
            </span>
            +639-917946893
          </p>
          <p className='text-yellow-800 flex flex-row items-center gap-2 text-lg'>
            <span className='text-red-600'>
              <FaLocationDot />
            </span>
            Taguig City, Philippines
          </p>
        </div>
        <div className='flex flex-row items-center gap-3 text-4xl'>
          <p className='text-blue-600 hover:text-blue-500 cursor-pointer'>
            <BsFacebook />
          </p>{' '}
          <span className=''>
            <p className='text-black hover:text-slate-800 cursor-pointer'>
              <BsGithub />
            </p>
          </span>
          <p className='text-blue-600 hover:text-blue-500 cursor-pointer'>
            <BsTwitter />
          </p>
        </div>
      </div>

      <div className='h-[74vh] w-[64vh] bg-gray-100  rounded-xl border border-yellow-900 mt-4 '>
        <h1 className='text-center font-semibold text-lg py-1'>Contact Form</h1>
        <div className='flex flex-col text-left items-center justify-center'>
          <form onSubmit={handleSubmit} className='mr-2 ml-2'>
            <label className='block'>Name</label>
            <input
              className='border-yellow-900 border w-[62vh] rounded mb-1 focus:text-yellow-900  text-yellow-900'
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='&nbsp;Your name'
              ref={nameRef}
            ></input>

            {submit && nameError && <p className='text-red-600'>{nameError}</p>}
            <label className='text-left block'>Email</label>
            <input
              className='border-yellow-900 border w-[62vh] rounded mb-1 focus:text-yellow-900  text-yellow-900'
              placeholder='&nbsp;Your email'
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              ref={emailRef}
            ></input>
            {emailError ? <p className='text-red-600'>{emailError}</p> : null}
            <label className='text-left block'>Message us</label>
            <textarea
              className='border-yellow-900 border w-[62vh] h-[35vh] rounded mb-1 focus:text-yellow-900  text-yellow-900'
              placeholder='&nbsp;Write your message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              ref={messageRef}
            ></textarea>
            {submit && messageError && (
              <p className='text-red-600'>{messageError}</p>
            )}
            <div className='flex justify-center items-center flex-col'>
              <button
                className='bg-yellow-900 cursor-pointer hover:bg-yellow-800 rounded-lg text-white font-semibold hover:text-white hover:border-yellow-600 py-2 px-[60px] shadow-md hover:shadow-lg transition duration-300 ease-in-out mt-2 mb-2'
                type='submit'
              >
                Submit
              </button>
              {submit && !nameError && !emailError && !messageError && (
                <p className='text-green-600 font-semibold'>
                  Successfully sent!
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
