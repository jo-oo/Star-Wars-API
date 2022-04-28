import Button from 'react-bootstrap/Button'

//tar in data & page in i komponenten
const ReturnButton = ( { navigate } ) => {
	return ( 
        <> {/*using a Fragment as a container*/}
            <div className="d-flex justify-content-between align-items-center mt-4">
                <Button variant="secondary" onClick={() => navigate(-1)}>« Back</Button>
            </div>
        </> 
	)
}

export default ReturnButton


