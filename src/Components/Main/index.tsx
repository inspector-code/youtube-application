import React, {useEffect, useState} from 'react'
import './index.scss'
import {Tags} from "../Tags"
import {Channels} from "../Channels"
import {ITag, IChannel} from "../../models"
import {BASE_URL} from "../../consts"

export const Main: React.FC = () => {
    const [channels, setChannels] = useState<IChannel[]>([])
    const [tags, setTags] = useState<ITag[]>([])
    const [activeTags, setActiveTags] = useState<ITag[]>([])

    useEffect(() => {
        fetch(`${BASE_URL}/channels`)
            .then(res => res.json())
            .then(setChannels)
    }, [])

    useEffect(() => {
        fetch(`${BASE_URL}/tags`)
            .then(res => res.json())
            .then(setTags)
    }, [])

    const filteredData = () => {
        return channels.filter(channel => {
            return activeTags.every(activeTag => {
                return channel.tags.some(channelTag => {
                    return (
                        activeTag.value === channelTag.value &&
                        activeTag.group === channelTag.group
                    )
                })
            })
        })
    }

    return (
        <div>
            <Tags
                tags={tags}
                activeTags={activeTags}
                onSetActiveTags={setActiveTags}
            />
            <Channels channels={activeTags.length ? filteredData() : channels}/>
        </div>
    )
}

