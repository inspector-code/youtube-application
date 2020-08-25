import React from "react"
import {IChannel} from "../../models"
import "./index.scss"

interface IProps {
    channels: IChannel[]
}

export const Channels: React.FC<IProps> = ({channels}) => {
    return (
        <div className="channels-list">
            {
                channels.length ? channels.map((channel) => (
                    <div className="channels-list__item" key={channel.name}>
                        <a href={channel.link} className="channels-list__item-link" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71.412065 50" width="21.42"
                                 height="15">
                                <g id="g5" transform="scale(0.58823529,0.58823529)">
                                    <path
                                        d="M 118.9,13.3 C 117.5,8.1 113.4,4 108.2,2.6 98.7,0 60.7,0 60.7,0 60.7,0 22.7,0 13.2,2.5 8.1,3.9 3.9,8.1 2.5,13.3 0,22.8 0,42.5 0,42.5 0,42.5 0,62.3 2.5,71.7 3.9,76.9 8,81 13.2,82.4 22.8,85 60.7,85 60.7,85 c 0,0 38,0 47.5,-2.5 5.2,-1.4 9.3,-5.5 10.7,-10.7 2.5,-9.5 2.5,-29.2 2.5,-29.2 0,0 0.1,-19.8 -2.5,-29.3 z"/>
                                    <polygon points="80.2,42.5 48.6,24.3 48.6,60.7" fill="#ffffff"/>
                                </g>
                            </svg>
                            {channel.name}
                        </a>
                    </div>
                )) : (
                    <div className="channels-list--empty">
                        Данные отсутствуют.
                    </div>
                )
            }
        </div>
    )
}