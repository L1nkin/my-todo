import React, { useState } from 'react';
import './styles/MyTodoList.scss';
import { usePosts } from '../hooks/usePosts';
import CustomModal from '../components/UI/customModal/CustomModal';
import CreatePost from '../components/CreatePost/CreatePost';
import CustomButton from '../components/UI/button/CustomButton';
import PostsFilters from '../components/PostsFilters/PostsFilters';
import NotesList from '../components/NotesList/NotesList';

const MyTodoList = () => {
    const [posts, setPosts] = useState([
        { id: 1, title: "something", body: "fvbeetnertj;b", date: new Date(Date.now()) },
        { id: 2, title: "wrtbwr", body: "twrjwrtjdgfs;b", date: new Date(Date.now()) },
        { id: 3, title: "ertbgn", body: "ebrybjetybwer;b", date: new Date(Date.now()) },
        { id: 4, title: "nhfftn", body: "berytbdbyjb;b", date: new Date(Date.now()) },
        { id: 5, title: "xxnfgn", body: "bertbjuer;b", date: new Date(Date.now()) },
        { id: 6, title: "gnxfnxfn ", body: "ytyertybjytjfgjdfj;b", date: new Date(Date.now()) }]
    )

    const options = [
        { id: 1, name: "Sort by title", value: "title" },
        { id: 2, name: "Sort by body", value: "body" },
        { id: 3, name: "Sort by date", value: "date" }
    ]

    const [filters, setFilters] = useState({ sort: '', query: '' })

    const [isShowModal, setIsShowModal] = useState(false)

    const sortedAndFilteredPosts = usePosts(posts, filters.sort, filters.query)

    const create = (post) => {
        setPosts([...posts, { id: posts.length + 1, title: post.title, body: post.body, date: new Date(Date.now()) }])
        setIsShowModal(false)
    }

    const remove = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className='my-todo'>
            <CustomModal visible={isShowModal} setVisible={setIsShowModal}>
                <CreatePost create={create}></CreatePost>
            </CustomModal>
            <PostsFilters filters={filters} setFilters={setFilters}></PostsFilters>
            <NotesList remove={remove} notes={sortedAndFilteredPosts} />
            <CustomButton style={{ minWidth: 460, margin: 30 }} onClick={() => setIsShowModal(true)}>Create post</CustomButton>
        </div>
    );
}

export default MyTodoList;