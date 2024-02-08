import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'

function Blogs() {

    const { loading, posts } = useContext(AppContext)

    return (

        <div className=' w-4/6 h-full py-[100px] flex flex-col gap-5'>
            {
                loading ? (<Spinner />) : (

                    posts.length === 0 ? (
                        <div> No Post Found </div>
                    ) : (
                        posts.map((post) => (
                            <div key={post.id} className=' flex flex-col gap-1'>
                                <p className=' font-bold text-xl'> {post.title} </p>
                                <p className=' text-[1rem]'>
                                    By <span className=' italic'> {post.author}</span> on <span className=' underline font-bold'> {post.category} </span>
                                </p>
                                <p className=' text-sm'>Posted on <span> {post.date} </span></p>
                                <p> {post.content} </p>
                                <div>
                                    {
                                        post.tags.map((tag , index) => {
                                            return <span key={index} className=' text-blue-500 underline'> {`#${tag}`}</span>
                                        }
                                        )
                                    }
                                </div>
                            </div>
                        ))
                    )
                )
            }
        </div>

    )
}

export default Blogs