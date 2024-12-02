import React, { memo, useState } from 'react';
import { Alert, Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

function Login() {
	let [selected, setSelected] = useState([]);
	let [error, setError] = useState('');
	let history = useHistory();

	function handleChange(e) {
		const { options } = e.target;
		let selected = [];
		for (let i = 0; i < options.length; i++) {
			if (options[i].selected) {
				selected.push(options[i].value);
			}
		}
		setSelected(selected);
		setError('');
	}

	function handleClick() {
		if (!selected.length) {
			setError('Please select at least one role to proceed.');
			return;
		}
		localStorage.setItem('roles', JSON.stringify(selected));
		history.push('/app');
	}

	return (
		<div style={{
			backgroundImage: 'radial-gradient(circle, rgba(6, 64, 43, 0.8) 0%, rgba(6, 64, 43, 0.6) 50%, rgba(6, 64, 43, 0.2) 100%)',
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			minHeight: '100vh',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		}}>
			<Container>
				<Row className="justify-content-center">
					<Col md={6}>
						<Card style={{ borderRadius: '15px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' }}>
							<Card.Body>
								<h2 className="text-center mb-4" style={{ color: '#06402b' }}>Login</h2>
								<p className="text-center text-dark mb-4" style={{ fontSize: '14px' }}>Please select your role to log in.</p>
								<Form>
									<Form.Group controlId="roleSelect">
										<Form.Label style={{ fontWeight: 'bold', color: '#06402b' }}>Select Role(s):</Form.Label>
										<Form.Control
											as="select"
											value={selected}
											onChange={handleChange}
											multiple
											style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px' }}
										>
											<option value="SUPER_ADMIN">SUPER_ADMIN</option>
											<option value="ADMIN">ADMIN</option>
											<option value="MANAGER">MANAGER</option>
											<option value="CUSTOMER">CUSTOMER</option>
											<option value="GUEST">GUEST</option>
										</Form.Control>
										<Form.Text className="text-muted mt-2">
											<small>You can select multiple roles by holding down Ctrl (Windows) or Cmd (Mac).</small>
										</Form.Text>
									</Form.Group>

									{selected.length > 0 && (
										<Alert variant="info" className="mt-3">
											<strong>Selected Roles:</strong> {selected.join(', ')}
										</Alert>
									)}

									{error && (
										<Alert variant="danger" className="mt-3">
											{error}
										</Alert>
									)}

									<div className="text-right mb-3">
										<Link to="/forgot-password" style={{ textDecoration: 'none', color: '#06402b' }}>Forgot Password?</Link>
										&nbsp;&nbsp;|&nbsp;&nbsp;
										<Link to="/register" style={{ textDecoration: 'none', color: '#06402b' }}>Register</Link>
									</div>

									<Button
										variant="primary"
										onClick={handleClick}
										className="w-100"
										style={{
											backgroundColor: '#06402b',
											border: 'none',
											fontWeight: 'bold',
											borderRadius: '8px',
											padding: '12px',
											boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
										}}
										disabled={!selected.length}
									>
										Login
									</Button>
								</Form>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default memo(Login);
