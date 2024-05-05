function DrButton({loading, setLoading}) {
    function handleNext() {
        setLoading(!loading);
    }

    return (<div className="dr-button" onClick={handleNext}>
        Next
    </div>);
}

export default DrButton;