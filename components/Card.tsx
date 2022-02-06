import React, { ReactElement } from 'react'
import Styles from './Card.module.scss'

type CardProps = {
    type: string
    children: ReactElement
}

const Card = (props: CardProps) => {
    return (
        <div className={Styles[props.type]}>
            {props.children}
        </div>
    )
}

export default Card
