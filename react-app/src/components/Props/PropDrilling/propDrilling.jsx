import './propDrilling.css'

function GrandChild({maxCount}) {
    return(
        <div className="grandChild"> 
            Grand Child - The max count value is - {maxCount}

        </div>
    )
}

function Child1({count}) {
    return (
        <div className="child">
            Child 1 - {count}
            <GrandChild maxCount={count}></GrandChild>
        </div>
    )
}

export function PropDrillingDemo() {
    var maxCount = 20;
    return (
        <div className="parent">
            prop drilling - Parent
            <Child1 count={maxCount}></Child1>
        </div>
    )
}