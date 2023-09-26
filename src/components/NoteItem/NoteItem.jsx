import React from 'react';
import classes from './NoteItem.module.scss'
import { dateToString } from '../../utils/dateFormat';
import CustomButton from '../UI/button/CustomButton';

const NoteItem = ({ ...props }) => {

    const removePost = (event) => {
        event.preventDefault()
        props.remove(props.note)
    }


    return (
        <div className={classes.contentWrapper}>
            <div className={classes.bodyWrapper}>
                <h3 style={{ margin: 10, float: 'left' }}>{props.note.title}</h3>
                <p style={{ margin: 10, float: 'left' }}>{props.note.body}</p>
            </div>
            <div className={classes.dateWrapper}>
                <div>{dateToString(props.note.date)}</div>
                <CustomButton onClick={removePost} style={{ padding: 10 }} >Remove item</CustomButton>
            </div>

        </div>
    )
}

export default NoteItem;