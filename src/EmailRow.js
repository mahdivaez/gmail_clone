import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import "./EmailRow.css";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { IconButton } from '@mui/material';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import { dispatch } from 'react';
import { useDispatch } from'react-redux'; // Import useDispatch from react-redux
import { selectMail } from './features/mailSlice';
const EmailRow = ({ id,title, subject, description, time,message }) => {
    const navigate = useNavigate(); // Initialize useNavigate hook
    const dispatch = useDispatch(); // Initialize useDispatch hook
    const openMail  = () =>{
        dispatch(selectMail({
            id: id,
            subject: subject,
            message: message,
            time: time,
            description: description,
            title: title,
        }))
        navigate("/mail")
    }
    return (
        <div onClick={openMail} className='emailRow'> {/* Use navigate instead of history.push */}
            <div className="emailRow__options">
                <CheckBoxOutlineBlankIcon />
                <IconButton>
                    <StarBorderOutlinedIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>
            </div>
            <h3 className="emailRow__title">
                {title}
            </h3>
            <div className="emailRow__message">
                <h4>{subject} --
                    <span className='emailRow__description'>
                        {description}
                    </span>
                </h4>
            </div>
            <p className="emailRow__time">
                {time}
            </p>
        </div>
    );
}

export default EmailRow;
