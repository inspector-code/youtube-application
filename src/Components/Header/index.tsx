import React, {useEffect, useState} from 'react'
import "./index.scss"
import {IAdmin} from "../../models"
import {BASE_URL} from "../../consts"


export const Header: React.FC = () => {
    const [items, setItems] = useState<IAdmin[]>([])
    let admins = null

    useEffect(() => {
        fetch(`${BASE_URL}/admins`)
            .then(res => res.json())
            .then(setItems)
    }, [])

    if (items && items.length) {
        admins = items.map((admin, index) => (
            <React.Fragment key={admin.telegramId}>
                <a
                    href={`https://t.me/${admin.telegramId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='link-admin'
                >
                    {`@${admin.telegramId}`}
                </a>
                {index + 1 === items.length ? '' : ', '}
            </React.Fragment>
        ))
    } else {
        admins = <div>Загрузка...</div>
    }

    return (
        <div className="app-header">
            <div className="app-header__col-left">
                <h1>#ITYouTubersRu</h1>
                <h2>Сообщество русскоязычных IT-ютуберов</h2>
            </div>
            <div className="app-header__col-right">
                По вопросам вступления обращайтесь в телеграм:<br/>
                {admins}
            </div>
        </div>
    )
}

