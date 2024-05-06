function DrButton({loading, setLoading}) {
    return (<div className="dr-button" onClick={() => {
        setLoading(!loading);
    }}>
        Next
    </div>);
}

export default DrButton;