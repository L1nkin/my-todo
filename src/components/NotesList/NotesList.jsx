import React from 'react';
import NoteItem from '../NoteItem/NoteItem';
import classes from './NoesList.module.scss'
import CustomInput from '../UI/input/CustomInput';

const NotesList = ({ notes, remove }) => {
    return (
        <div className={classes.notesListContainer}>
            <div className={classes.notesBox}>
                {notes.length
                    ? notes.map(note => { return <NoteItem note={note} remove={remove} key={note.id} /> })
                    : <p className={classes.noNotes}>No notes found</p>
                }
            </div>
        </div >
    )
}

export default NotesList;