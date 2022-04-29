import Button from 'react-bootstrap/Button'

//takes in navigate 
const ReturnButton = ( { navigate } ) => {
	return ( 
        <>
            <div className="d-flex justify-content-between align-items-center mt-4">
                <Button variant="secondary" onClick={() => navigate(-1)}>« Back</Button>
            </div>
        </> 
	)
}

export default ReturnButton


