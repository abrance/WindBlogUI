import React from "react";
import MDEditor from "@uiw/react-md-editor";
import {GlobalWhiteColor} from "../const";

export function RightSection() {
    const rightSectionStyle = {
        backgroundColor: GlobalWhiteColor,
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

export function MdSection() {
    // value 为 Markdown 字符串
    const [value, setValue] = React.useState("**Hello world!!!**");
    return (
        <div className="container">
            <MDEditor.Markdown source={value} style={{whiteSpace: 'pre-wrap'}}/>
        </div>
    );
}