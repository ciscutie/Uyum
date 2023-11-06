import React, { useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { FaPen } from 'react-icons/fa';
import { faker } from '@faker-js/faker';
import { format } from 'date-fns';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../components/Firebase';

const Review = () => {
  const commentRef = useRef();
  const [commentStuff, setCommentStuff] = useState('');
  const [comment, setComment] = useState([]);
  const [errorComment, setErrorComment] = useState('');
  const [commentModal, setCommentModal] = useState(false);

  const commentLimit = 50;
  const randomName = faker.internet.userName();
  const addComment = async () => {
    if (commentStuff) {
      // Split the comment by spaces to count words
      const words = commentStuff.split(/\s+/).filter(Boolean);
      if (words.length <= commentLimit) {
        try {
          const docRef = await addDoc(collection(db, 'comments'), {
            comments: commentStuff,
            author: randomName,
            date: new Date(),
          });
          setComment([
            ...comment,
            {
              id: docRef.id,
              comments: commentStuff,
              author: randomName, //this will generate random username, this is from faker-js npm
              date: new Date(), //this will generate the time it was posted, this is from date-fns npm
            },
          ]);
          setCommentStuff('');
          setErrorComment('');
          closeIt();
        } catch (error) {
          console.error('Error adding comment: ', error);
          // Handle error as needed
        }
      } else {
        setErrorComment('Maximum word limit (50) exceeded');
      }
    } else {
      setErrorComment('This field cannot be empty');
      commentRef.current.focus();
    }
  };
  const deleteComment = (id) => {
    setComment(comment.filter((comment) => comment.id !== id));
  };
  const openIt = () => {
    setCommentModal(true);
  };
  const closeIt = () => {
    setCommentModal(false);
  };
  console.log(commentStuff);
  return (
    <div className='flex flex-col max-h-full bg-white'>
      <div className='flex flex-col justify-center items-center w-full h-[30vh] border  border-yellow-900'>
        <h1 className='text-2xl font-semibold pb-2'>Leave us a review</h1>

        <p className='text-center'>
          Reviews are invaluable to us in improving our random filipino food
          generator app website.
          <br />
          Your opinion matters, and we would be incredibly grateful for your
          feedback!
          <br />
        </p>

        <button
          onClick={openIt}
          className='bg-yellow-900 cursor-pointer hover:bg-yellow-800 rounded-lg text-white font-semibold hover:text-white hover:border-yellow-600 py-2 px-[50px] shadow-md hover:shadow-lg transition duration-300 ease-in-out mt-2 mb-2 pt-2'
        >
          <span className='flex items-center justify-center gap-2'>
            <FaPen /> Write a Review
          </span>
        </button>
      </div>
      {commentModal && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='flex flex-col items-center mt-[30px]'>
            <div className='z-1 flex flex-col justify-center items-center w-[450px] h-[310px] bg-slate-50 shadow rounded-md border border-yellow-900'>
              <h1 className='text-lg font-bold m-2'>
                Your comment will remain anonymous
              </h1>
              <textarea
                type='text'
                placeholder='&nbsp; Add your comments here (Max 50 words)'
                className='border-yellow-800 h-[200px] w-[400px] border'
                value={commentStuff}
                onChange={(e) => setCommentStuff(e.target.value)}
              ></textarea>
              <div
                className='gap-4 flex flex-row
            '
              >
                <button
                  onClick={addComment}
                  className='bg-yellow-900 cursor-pointer hover:bg-yellow-800 rounded-lg text-white font-semibold hover:text-white hover:border-yellow-600 py-2 px-[60px] shadow-md hover:shadow-lg transition duration-300 ease-in-out mt-2 mb-2 '
                >
                  Submit
                </button>

                <button
                  onClick={closeIt}
                  className='bg-red-700  hover:bg-red-600 rounded-lg text-white font-semibold hover:text-white hover:border-red-600 py-2 px-[60px] shadow-md hover:shadow-lg transition duration-300 ease-in-out mt-2 mb-2'
                >
                  Close
                </button>
              </div>
              {errorComment ? (
                <p className='text-red-600 text-base py-2'>{errorComment}</p>
              ) : null}
            </div>
          </div>
        </div>
      )}
      <div className='flex justify-center gap-4'>
        <ul className=' grid grid-cols-1 md:grid-cols-2  my-[30px]'>
          {comment.map((commentz, indexComment) => (
            <li
              className='w-[700px] md:w-[600px] h-[200px] border border-yellow-900 bg-gray-200 rounded shadow-lg text-xl flex justify-start py-2 md:py-0 m-0 md:m-1 relative  max-w-full break-words '
              key={indexComment}
            >
              <p className='m-2 flex flex-col'>
                <div className='flex justify-between '>
                  <span className='rounded-lg bg-yellow-800 p-1'>
                    <strong className='text-lg'>{commentz.author}:</strong>
                    &nbsp;{' '}
                  </span>
                  <span className='text-xs  '>
                    &nbsp;{format(commentz.date, 'MM/dd/yyyy HH:mm:ss')}
                  </span>
                </div>
                <span className='text-sm pt-1'>&nbsp;{commentz.comments}</span>
              </p>
              {/*<button
                className=' absolute right-0 top-0 pr-2 pt-2 cursor-pointer text-red-500 hover:text-red-700'
                onClick={() => deleteComment(commentz.id)}
              >
                <AiFillDelete />
          </button> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Review;
