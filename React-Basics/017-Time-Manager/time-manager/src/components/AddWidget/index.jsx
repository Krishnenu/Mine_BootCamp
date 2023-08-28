import "./addWidget.css"

const AddWidget=({adddWidgetHandler})=>{
    return (
        <>
        <button className="add-widget" onClick={adddWidgetHandler}>
            +
        </button>
        </>
    )
}

export default AddWidget;