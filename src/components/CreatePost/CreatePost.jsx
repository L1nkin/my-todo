import React, { useState } from 'react';
import CustomModal from '../UI/customModal/CustomModal';
import CustomInput from '../UI/input/CustomInput';
import CustomButton from '../UI/button/CustomButton';
import classes from './CreatePost.module.css'

const CreatePost = ({ create }) => {
    const [post, setPost] = useState({ title: '', body: '' })

    const createPost = (event) => {
        event.preventDefault()
        create(post)
        setPost({ title: '', body: '' })
    }

    return (
        <form className={classes.createPost}>
            <CustomInput
                type='text'
                placeholder='Title'
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
            ></CustomInput>
            <CustomInput
                type='text'
                placeholder='Description'
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
            ></CustomInput>
            <CustomButton onClick={createPost} >Create post</CustomButton>
        </form>
    )
}

export default CreatePost;