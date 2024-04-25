import React from "react";
import "./SendMail.css";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore"; 

const SendMail = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (formData) => {
    console.log(formData);
    try {
      const docRef = await addDoc(collection(db, "emails"), {
        to: formData.to,
        subject: formData.subject,
        message: formData.message,
        time: new Date().toLocaleString(),
        read: false,
        starred: false,
      });
      console.log("Document written with ID: ", docRef.id);
      
      // Dispatch action to close the SendMail box
      dispatch(closeSendMessage());
      
      // Reset the form after successful submission
      reset();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon onClick={() => dispatch(closeSendMessage())} className="sendMail__close" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="email"
          className="sendMail__input"
          {...register('to', { required: true })}
        />
        {errors.to && <p className="sendMail__error">To is required</p>}
        <input
          name="subject"
          type="text"
          placeholder="Subject"
          className="sendMail__input"
          {...register('subject', { required: true })}
        />
        {errors.subject && <p className="sendMail__error">Subject is required</p>}
        <input
          name="message"
          type="text"
          placeholder="Message..."
          className="sendMail__input sendMail__message"
          {...register('message', { required: true })}
        />
        {errors.message && <p className="sendMail__error">Message is required</p>}
        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
