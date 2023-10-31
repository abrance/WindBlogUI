import {GlobalGreyColor} from "../const";
import {TagSection} from "./tag";
import React from "react";

export function LeftSection() {
    const leftSectionStyle = {
        backgroundColor: GlobalGreyColor,
        width: "20vw",
        height: "100vh",
    }

    return (
        <>
            <div style={leftSectionStyle}>
                <TagSection/>
            </div>
        </>
    )
}