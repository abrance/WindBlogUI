import React, {useEffect, useState} from "react";
import axios from "axios";
import {Button, Space} from "antd";

export function TagSection() {
    const [tags, setTags] = useState([]);  // 创建一个 state 用于保存标签列表

    const tagSectionStyle = {
        margin: "10% 10% 10% 10%",
        width: "80%",
        height: "80%",
    };

    useEffect(() => {
        // 当组件挂载时发送请求
        axios.get('http://localhost:5000/api/tag/v1/list')
            .then(response => {
                setTags(response.data.data);  // 更新标签列表
            })
            .catch(error => {
                console.error('There was an error fetching the tags!', error);
            });
    }, []);  // 空数组作为依赖，确保这个 useEffect 只在组件挂载时运行一次

    return (
        <>
            <div style={tagSectionStyle}>
                <Space wrap={true}>
                    {tags.map(tag => (
                        <Tag key={tag.ID} content={tag.Name}/>  // 根据标签列表创建 Tag 组件
                    ))}
                </Space>
            </div>
        </>
    );
}

function Tag({content}) {
    const tagStyle = {}
    return (
        <Button type='primary'>{content}</Button>
    )
}