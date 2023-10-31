import React, {useEffect, useState} from "react";
import MDEditor from '@uiw/react-md-editor';
import {Button, Space} from "antd";
import axios from "axios";

export default function Body() {
    const bodyStyle = {
        display: "flex",
    }
    return (
        <>
            <div style={bodyStyle}>
                <LeftSection />
                <RightSection />
            </div>
        </>
    )
}

function LeftSection() {
    const leftSectionStyle = {
        backgroundColor: "rgb(209, 209, 209)",
        width: "20vw",
        height: "100vh",
    }

    return (
        <>
            <div style={leftSectionStyle}>
                <TagSection />
            </div>
        </>
    )
}

// function TagSection() {
//     const tagSectionStyle = {
//         margin: "10% 10% 10% 10%",
//         width: "80%",
//         height: "80%",
//     }
//     return (
//         <>
//             <div style={tagSectionStyle}>
//                 <Space wrap={true}>
//                     <Tag content='hello' />
//                     <Tag content='hello' />
//                 </Space>
//             </div>
//         </>
//     )
// }

function TagSection() {
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
                        <Tag key={tag.ID} content={tag.Name} />  // 根据标签列表创建 Tag 组件
                    ))}
                </Space>
            </div>
        </>
    );
}

function Tag({content}) {
    const tagStyle = {
    }
    return (
        <Button type='primary'>{content}</Button>
    )
}

function RightSection() {
    const rightSectionStyle = {
        backgroundColor: "rgb(255, 255, 255)",
        width: "80vw",
        height: "100vh",
    }
    const mdSectionStyle = {
        width: "100%",
        height: "100%",
    }
    return (
        <>
            <div style={rightSectionStyle}>
                <MdSection style={mdSectionStyle}/>
            </div>
        </>
    )
}

export  function MdSection() {
    // value 为 Markdown 字符串
    const [value, setValue] = React.useState("**Hello world!!!**");
    return (
        <div className="container">
            <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
        </div>
    );
}
