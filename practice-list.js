import React from 'react'
import Card from './practice-card'
import './List.css'

export default function List(props) {
    return (
        <section className='List'>
            <header className='List-header'>
                <h2>{props.header}</h2>
            </header>
            <div className='List-cards'>
                {props.card.map((card) => 
                <Card 
                    key={card.id}
                    id={card.id}
                    title={card.title}
                    content={card.content}
                    onClickDelete={props.onClickDelete}
                />
                )}

                <button
                className='List-add-button'
                type='button'
                onClick={() => props.onClickAdd(props.id)}
                >
                    + Add Random Card
                </button>
            </div>
        </section>
    )
}

List.defaultProps = {
    onClickAdd: () => {},
}