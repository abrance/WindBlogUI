import React from "react";
import {LeftSection} from "./left_section";
import {RightSection} from "./right_section";

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

