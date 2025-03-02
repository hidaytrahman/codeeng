'use client';

import React, { useCallback } from 'react';
import useScreenWidth from './useScreenWidth';

function useScreenClass() {
	// @ts-ignore
	const width: number = useScreenWidth();

	const getResponsiveClass = useCallback(() => {
		if (width >= 1024) {
			return 'lg';
		} else if (width >= 768) {
			return 'md';
		} else if (width >= 640) {
			return 'sm';
		} else {
			return 'xs';
		}
	}, [width]);
	return getResponsiveClass;
}

export default useScreenClass;
