import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
	return (
		<div className='home'>
			<img
				className='home__image'
				src='https://images-na.ssl-images-amazon.com/images/G/01/adlp/builder/BFF-V1-01-Hero-D-5ff78a97-f4d3-4242-9344-c1f478aff592._CB428091778_QL85_V1_.jpg'
				alt=''
				alt=''
			/>

			<div className='home__row'>
				<Product
					id='12321351'
					title='
                    Logitech Ergo K860 Wireless Ergonomic Keyboard with Wrist Rest - Split Keyboard Layout for Windows/Mac, Bluetooth or USB Connectivity'
					image='https://images-na.ssl-images-amazon.com/images/I/71qtTeN5y9L._AC_SL1500_.jpg'
					price={125.32}
					rating={4}
				/>
				<Product
					id='12321352'
					title='Ergonomic Office Chair Desk Chair Computer Chair with Lumbar Support Arms Executive Rolling Swivel PU Leather Task Chair for Women Adults, Black'
					image='https://images-na.ssl-images-amazon.com/images/I/61oQKMFqydL._AC_SY606_.jpg'
					price={111.88}
					rating={4}
				/>
			</div>
			<div className='home__row'>
				<Product
					id='12321353'
					title='Discourses and Selected Writings (Penguin Classics)'
					image='https://m.media-amazon.com/images/I/51y3KxmChAL.jpg'
					price={15.44}
					rating={5}
				/>
				<Product
					id='12321354'
					title='Blue Yeti USB Mic for Recording & Streaming on PC and Mac, 3 Condenser Capsules, 4 Pickup Patterns, Headphone Output and Volume Control, Mic Gain Control, Adjustable Stand, Plug & Play – Blackout'
					image='https://images-na.ssl-images-amazon.com/images/I/61Ly9zgVyIL._AC_SX355_.jpg'
					price={109.0}
					rating={5}
				/>
				<Product
					id='12321355'
					title='Sony WH-1000XM4 Wireless Industry Leading Noise Canceling Overhead Headphones with Mic for Phone-Call and Alexa Voice Control, Blue'
					image='https://images-na.ssl-images-amazon.com/images/I/71x8gW79x-L._AC_SY355_.jpg'
					price={298.0}
					rating={4}
				/>
			</div>
			<div className='home__row'>
				<Product
					id='12321351'
					title='SAMSUNG 49-inch Odyssey G9 Gaming Monitor | QHD, 240hz, 1000R Curved, QLED, NVIDIA G-SYNC'
					image='https://images-na.ssl-images-amazon.com/images/I/61SQz8S%2BfEL._AC_SX569_.jpg'
					price={1399.99}
					rating={4}
				/>
			</div>
		</div>
	);
}

export default Home;
