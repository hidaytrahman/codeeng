'use client';
import EntityCheckbox from '@/components/common/EntityCheckbox/EntityCheckbox';
import { browsers } from '@/data';
import React, { useState } from 'react';
import { AppListTypes } from './types';
import { BrowserTypes } from '../../Browsers/types';

function MachineSetup() {
	const [installaton, setInstallation] = useState(null);
	const [appList, setAppList] = useState<BrowserTypes[]>(browsers);

	return (
		<div>
			<h2>MachineSetup</h2>

			{appList?.map((app, index) => (
				<EntityCheckbox key={index} checked={app.isInstalled} label={app.title} avatar={app.avatar} />
			))}
		</div>
	);
}

export default MachineSetup;
