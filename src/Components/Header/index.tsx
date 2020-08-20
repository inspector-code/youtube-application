import React from 'react'
import "./index.scss"
import {IAdmin} from "../../models";

const DATA_ADMINS: IAdmin[] = [
    {telegramId: 'bamboleylo'},
    {telegramId: 'jivebelarus'},
    {telegramId: 'peramoga'}
]

export const Header: React.FC = () => {
    return (
        <div className="app-header">
            <div className="app-header__col-left">
                <h1>#ITYouTubersRu</h1>
                <h2>Сообщество русскоязычных IT-ютуберов</h2>
            </div>
            <div className="app-header__col-right">
                По вопросам вступления обращайтесь в телеграм:<br/>
                {
                    DATA_ADMINS.map((admin, index) => (
                        <React.Fragment key={admin.telegramId}>
                            <a
                                href={`https://t.me/${admin.telegramId}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='link-admin'
                            >
                                {`@${admin.telegramId}`}
                            </a>
                            {index + 1 === DATA_ADMINS.length ? '' : ', '}
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    );
}

