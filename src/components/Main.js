import React, { useState, useEffect } from 'react';

import './Main.css';
import twitterLogo from '../assets/owner/twitter.png';
import instagramLogo from '../assets/owner/instagram.png';
import moreIcon from '../assets/owner/more.png';
const Main = ({ selectedPunk, punkListData }) => {
	const [activePunk, setActivePunk] = useState(punkListData[0]);
	useEffect(() => {
		console.log(activePunk);
		setActivePunk(punkListData[selectedPunk]);
	}, [selectedPunk, punkListData]);

	return (
		<div className="main">
			<div className="mainContent">
				<div className="punkHighLight">
					<div className="punkContainer">
						<img
							className="selectedPunk"
							src={activePunk?.metadata.image}
							alt=""
						/>
					</div>
				</div>
				<div className="punkDetails" style={{ color: '#fff' }}>
					<div className="title">{activePunk.metadata.name}</div>
					<span className="itemNumber">#{activePunk.metadata.id}</span>

					<div className="owner">
						<div className="ownerImageContainer">
							<img src={activePunk?.metadata.image} alt="" />
						</div>

						<div className="ownerDetails">
							<div className="ownerNameAndHandle">
								<div>{activePunk.owner}</div>

								<div className="ownerHandle">NftsDeveloper200</div>
							</div>
							<div className="ownerLink">
								<img src={instagramLogo} alt=" " />
							</div>
							<div className="ownerLink">
								<img src={twitterLogo} alt=" " />
							</div>
							<div className="ownerLink">
								<img src={moreIcon} alt=" " />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
