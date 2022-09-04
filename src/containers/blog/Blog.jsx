import React from 'react'
import { Article } from '../../components'
import "./blog.css"
import { blog01, blog02, blog03, blog04, blog05 } from "./imports"

const Blog = () => {
    return (
        <div className='gpt3__blog section_padding' id='blog'>
            <div className='gpt3__blog__headding'>
                <h1 className='gradient_text'>
                    A lot is happening,
                    <br />
                    We are blogging about it.
                </h1>
            </div>
            <div className='gpt3__blog__container'>
                <div className='gpt3__blog__container-groupA'>
                    <Article imageUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                </div>
                <div className='gpt3__blog__container-groupB'>
                    <Article imageUrl={blog02} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article imageUrl={blog03} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article imageUrl={blog04} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article imageUrl={blog05} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                </div>
            </div>

        </div>
    )
}

export default Blog