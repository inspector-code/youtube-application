import React, {useState} from 'react'
import './index.scss'
import {ETagGroup} from '../../enums'
import {Tags} from "../Tags";
import {Channels} from "../Channels";
import {ITag, IChannel} from "../../models";

const DATA_TAGS: ITag[] = [
    {
        group: ETagGroup.FRONTEND,
        value: 'html',
        displayValue: 'HTML'
    },
    {
        group: ETagGroup.FRONTEND,
        value: 'css',
        displayValue: 'CSS'
    },
    {
        group: ETagGroup.FRONTEND,
        value: 'javascript',
        displayValue: 'JavaScript'
    },
    {
        group: ETagGroup.BACKEND,
        value: 'java',
        displayValue: 'Java'
    },
    {
        group: ETagGroup.DESIGN,
        value: 'sketch',
        displayValue: 'Sketch'
    },
    {
        group: ETagGroup.COMMON,
        value: 'interview',
        displayValue: 'Интервью'
    },
]

const DATA_CHANNELS: IChannel[] = [
    {
        name: 'Просто: разработка',
        link: 'http://google.com',
        tags: [
            {
                group: ETagGroup.FRONTEND,
                value: 'html',
                displayValue: 'HTML'
            },
            {
                group: ETagGroup.FRONTEND,
                value: 'css',
                displayValue: 'CSS'
            }
        ]
    },
    {
        name: 'Inspector-code',
        link: 'http://google.com',
        tags: [
            {
                group: ETagGroup.FRONTEND,
                value: 'javascript',
                displayValue: 'JavaScript'
            }
        ]
    },
    {
        name: 'АйТиБорода',
        link: 'http://google.com',
        tags: [
            {
                group: ETagGroup.COMMON,
                value: 'interview',
                displayValue: 'Интервью'
            }
        ]
    },
    {
        name: 'ХайТак',
        link: 'http://google.com',
        tags: [
            {
                group: ETagGroup.BACKEND,
                value: 'java',
                displayValue: 'Java'
            }
        ]
    },
    {
        name: 'Веб Дизайн',
        link: 'http://google.com',
        tags: [
            {
                group: ETagGroup.DESIGN,
                value: 'sketch',
                displayValue: 'Sketch'
            }
        ]
    },
    {
        name: 'HTML Boss',
        link: 'http://google.com',
        tags: [
            {
                group: ETagGroup.COMMON,
                value: 'interview',
                displayValue: 'Интервью'
            },
            {
                group: ETagGroup.FRONTEND,
                value: 'javascript',
                displayValue: 'JavaScript'
            }
        ]
    },
]

export const Main: React.FC = () => {
    const [activeTags, setActiveTags] = useState<ITag[]>([])

    const filterData = (channelsArray: IChannel[]) => {
        return channelsArray.filter((channel) => {
            return activeTags.every((activeTag) => {
                return channel.tags.some((channelTag) => {
                    return JSON.stringify(activeTag) === JSON.stringify(channelTag)
                })
            })
        })
    }

    const channels = activeTags.length ? filterData(DATA_CHANNELS) : DATA_CHANNELS

    return (
        <div>
            <Tags
                tags={DATA_TAGS}
                activeTags={activeTags}
                onSetActiveTags={setActiveTags}
            />
            <Channels channels={channels}/>
        </div>
    );
}

