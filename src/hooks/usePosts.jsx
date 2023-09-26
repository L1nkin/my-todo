import { useMemo } from 'react';

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {

        if (sort === 'body' || sort === 'title') {
            return posts.sort((a, b) => { return a[sort].localeCompare(b[sort]) })
        } else if (sort === 'date') {
            return posts.sort((a, b) => { return new Date(b.date) - new Date(a.date) })
        } else {
            return posts
        }
    }, [posts, sort])

    return sortedPosts
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort)
    const filteredPosts = useMemo(() => {
        if (query) {
            return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
        } else {
            return sortedPosts
        }
    }, [query, sortedPosts])

    return filteredPosts
}