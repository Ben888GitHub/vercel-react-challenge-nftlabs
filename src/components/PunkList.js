import React from 'react';
import CollectionCard from './CollectionCard';
import './PunkList.css';
const PunkList = ({ punkListData, setSelectedPunk }) => {
	return (
		<div className="punkList">
			{punkListData.map((punk) => (
				<div
					key={punk.metadata.id}
					onClick={() => {
						console.log('id', punk.metadata.id);
						setSelectedPunk(punk.metadata.id);
					}}
				>
					<CollectionCard
						key={punk.metadata.id}
						id={punk.metadata.id}
						name={punk.metadata.name}
						traits={punk.metadata.properties}
						image={punk.metadata.image}
					/>
				</div>
			))}
		</div>
	);
};

export default PunkList;
