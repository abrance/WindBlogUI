

export default function Body() {
    return (
        <>
            <div>
                <section></section>
                <h1>hello</h1>
            </div>
        </>
    )
}

function LeftSection() {
    return (
        <>
            <div>
                <LeftSection />
                <h1>hello</h1>
            </div>
        </>
    )
}

function RightSection() {
    return (
        <>
            <div>
                <section></section>
                <h1>hello</h1>
            </div>
        </>
    )
}