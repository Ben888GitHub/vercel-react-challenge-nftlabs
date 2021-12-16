import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import PunkList from './components/PunkList';
import Main from './components/Main';
import Header from './components/Header';
import { ethers } from 'ethers';
import { NFTLabsSDK } from '@nftlabs/sdk';

function App() {
	const [punkListData, setPunkListData] = useState([]);
	const [selectedPunk, setSelectedPunk] = useState(0);

	useEffect(() => {
		const getMyNfts = async () => {
			// Web3 browser user detected. You can now use the provider.
			const accounts = await window.ethereum.request({
				method: 'eth_requestAccounts'
			});
			console.log(accounts);

			const provider = new ethers.providers.Web3Provider(window.ethereum);
			console.log(provider);

			const signer = provider.getSigner();

			const sdk = new NFTLabsSDK(signer);
			console.log(sdk);

			const nft = await sdk.getNFTModule(
				'0x83A164Ad6947ddDc64Fe959e50625760b51946bB'
			);
			console.log(nft);

			const owned = await nft.getAllWithOwner();
			console.log(owned);

			setPunkListData(owned);
		};
		getMyNfts();
		// fetchData();
	}, []);

	return (
		<div className="app">
			<Header />
			{punkListData.length > 0 && (
				<>
					<Main punkListData={punkListData} selectedPunk={selectedPunk} />
					<PunkList
						punkListData={punkListData}
						setSelectedPunk={setSelectedPunk}
					/>
				</>
			)}
		</div>
	);
}

export default App;
