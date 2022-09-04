import React from 'react'
import "./article.css"

const Article = ({ imageUrl, date, text }) => {

    return (
        <div className='gpt3__article'>
            <div className='gpt3__article__image'>
                <img alt="article" src={imageUrl} />
            </div>
            <div className='gpt3__article__content'>
                <div>
                    <p className='date'>{date}</p>
                    <h4>{text}</h4>
                </div>
                <p className='read_article'>Read Full Article</p>
            </div>
        </div>
    )
}

export default Article