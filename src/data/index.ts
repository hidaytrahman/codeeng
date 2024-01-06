import { generateRandomId } from "../utils/core";


export const browsers = [
	{
		id: generateRandomId(8),
		title: 'chrome',
		avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/640px-Google_Chrome_icon_%28February_2022%29.svg.png',
		type: 'browser',
		link: 'https://www.google.com/chrome/?brand=FNES&gclid=CjwKCAjwr_CnBhA0EiwAci5simgbuR-Vy3OymtTCiCitR9nJzlcBtiOK3R-oDcvViKxh-AfvNBFW0BoCXqMQAvD_BwE&gclsrc=aw.ds',
		info: 'Google Chrome is a cross-platform web browser developed by Google.',
		isInstalled: false,
		extensions: [
			{
				id: generateRandomId(8),
				title: 'React Developer Tools',
				text: 'React Developer Tools is a Chrome DevTools extension for the open-source React JavaScript library. It allows you to inspect the React component hierarchies in the Chrome Developer Tools.',
				link: 'https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi',
			},
			{
				id: generateRandomId(8),
				title: 'Redux Dev Tools',
				text: '',
				link: 'https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd',
			},
			{
				id: generateRandomId(8),
				title: 'JSON Formatter',
				text: 'Auto-formats JSON when you load it in a browser tab.',
				link: 'https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa',
			},
		],
	},
	{
		id: generateRandomId(8),
		title: 'firefox',
		avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1200px-Firefox_logo%2C_2019.svg.png',
		type: 'browser',
		link: 'https://www.mozilla.org/en-US/firefox/new/',
		info: 'Mozilla Firefox, or simply Firefox, is a free and open-source web browser developed by the Mozilla Foundation',
		extensions: [],
		isInstalled: false,
	},
	{
		id: generateRandomId(8),
		title: 'safari',
		avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Safari_browser_logo.svg/2057px-Safari_browser_logo.svg.png',
		type: 'browser',
		link: 'https://support.apple.com/en_IN/downloads/safari',
		info: 'Safari is a web browser developed by Apple that\'s built into Apple\'s operating systems',
		extensions: [],
		isInstalled: false,
	},
	{
		id: generateRandomId(8),
		title: 'edge',
		avatar: 'https://play-lh.googleusercontent.com/VYvJqGnrQiKkbbyLyMeiL-GM3go4tBIA64uVEGQazLXD4p_M3F45kHyt42o_6d5VXA',
		type: 'browser',
		link: 'https://www.microsoft.com/en-in/edge/download?form=MA13FJ',
		info: 'Microsoft Edge is the web browser developed by Microsoft. It was first released in 2015 as the successor to Internet Explorer and is based on Google\'s Chromium.',
		extensions: [],
		isInstalled: false,
	},
	{
		id: generateRandomId(8),
		title: 'DuckDuckGo',
		avatar: 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgMTg5IDUzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGZpbGw9IiMzMzMiIGQ9Ik0xMTAuMDQ1IDI0LjIyNGgtMi40MDVsLTQuMzc4IDQuNTAydi05LjAwM2gtMS44NXYxNS4zNTRoMS44NXYtNS4wNTZsNC45OTUgNC45OTQuMDYxLjA2MmgyLjIydi0uMTg1bC01LjYxMS01LjU1em0tMTEuODk4IDguMjIzYy0uNjc5LjY3OC0xLjY2NiAxLjA0OC0yLjc3NSAxLjA0OC0xLjkxMiAwLTMuODI0LTEuMTcyLTMuODI0LTMuODg1IDAtMi4yODEgMS42MDQtMy44ODUgMy44MjQtMy44ODUuOTg2IDAgMS45MTEuMzcgMi42NTEgMS4wNDlsLjA2Mi4wNjEgMS4xNzEtMS4yMzMtLjA2MS0uMDYyQzk4LjA4NSAyNC40OTIgOTYuNzkgMjQgOTUuMzEgMjRjLTMuMzkyIDAtNS42NzMgMi4yODEtNS42NzMgNS42MTEgMCAzLjg4NSAyLjgzNiA1LjYxMiA1LjY3MyA1LjYxMmguMDYyYzEuNDggMCAyLjg5OC0uNTU1IDMuODg0LTEuNjA0bC4wNjItLjA2MS0xLjIzMy0xLjIzNHptLTEyLjU4MS0yLjQwNGMwIDEuOTczLTEuMzU2IDMuNDUzLTMuMjY4IDMuNTE1LTIuMDM1IDAtMy4yNjgtMS4yMzMtMy4yNjgtMy4zM3YtNS45ODFoLTEuODV2NS45ODFjMCAzLjA4MyAxLjg1IDUuMDU3IDQuNzQ4IDUuMDU3aC4wNjJjMS40MTggMCAyLjcxMy0uNjc5IDMuNTc2LTEuNzI3bC4wNjItLjEyMy4wNjIgMS42NjVoMS43MjZWMjQuMjQ3aC0xLjg1ek02Ny4yOTggMTkuNjZoLTUuNjEydjE1LjQxN2g1LjYxMmM1LjM2NSAwIDcuNzA4LTMuOTQ3IDcuNzA4LTcuODMyIDAtMy42MzgtMi40MDUtNy41ODUtNy43MDgtNy41ODV6bTUuNzk2IDcuNTI0YzAgMi45Ni0xLjc4OCA1LjkyLTUuNzM1IDUuOTJoLTMuN1YyMS41NzFoMy42MzljMy45NDYgMCA1Ljc5NiAyLjg5OCA1Ljc5NiA1LjYxMnptOTYuMDE4IDEuMTdoNC43NDh2My41NzdjLTEuMTcxLjk4Ni0yLjU5IDEuNTQxLTQuMTMxIDEuNTQxLTQuMTkzIDAtNi4xMDUtMy4wMjEtNi4xMDUtNS45ODEgMC0zLjAyMiAxLjkxMi02LjI5IDYuMDQzLTYuMjkgMS42NjUgMCAzLjIwNy42MTcgNC40NCAxLjcyN2wuMDYyLjA2MSAxLjExLTEuMjk1LS4wNjItLjA2MWMtMS40OC0xLjQ4LTMuNDUzLTIuMjItNS42MTEtMi4yMi0yLjM0NCAwLTQuMzE3Ljc0LTUuNzM1IDIuMjItMS40OCAxLjQ4LTIuMjgyIDMuNTc2LTIuMjIgNS45MiAwIDMuNjM4IDIuMDk2IDcuODMxIDguMDE2IDcuODMxaC4xMjRhNy43MTYgNy43MTYgMCAwIDAgNS43OTYtMi41OVYyNi42OWgtNi41MzZ2MS42NjV6bS01MS4xODEtOC42OTRoLTUuNjEydjE1LjQxN2g1LjYxMmM1LjM2NSAwIDcuNzA4LTMuOTQ3IDcuNzA4LTcuODMyIDAtMy42MzgtMi40MDUtNy41ODQtNy43MDgtNy41ODR6bTUuNzk2IDcuNTI0YzAgMi45Ni0xLjc4OCA1LjkyLTUuNzM1IDUuOTJoLTMuNjM4VjIxLjU3MmgzLjYzOGMzLjg4NSAwIDUuNzM1IDIuODk4IDUuNzM1IDUuNjEyem01OS40NjMtMy4xODVjLTMuMjY5IDAtNS42MTIgMi40MDUtNS42MTIgNS42NzMgMCAzLjI2OCAyLjM0MyA1LjYxMSA1LjYxMiA1LjYxMSAzLjI2OCAwIDUuNjczLTIuMzQzIDUuNjczLTUuNjExIDAtMy4zMy0yLjM0My01LjY3My01LjY3My01LjY3M3ptMy44MjMgNS42NzNjMCAyLjI4Mi0xLjYwMyAzLjg4NS0zLjgyMyAzLjg4NS0yLjE1OSAwLTMuNzYyLTEuNjAzLTMuNzYyLTMuODg1IDAtMi4zNDMgMS41NDItNC4wMDggMy44MjMtNC4wMDggMi4xNTkuMDYxIDMuNzYyIDEuNzI2IDMuNzYyIDQuMDA4em0tNTAuODE0LjM3MWMwIDEuOTczLTEuMzU2IDMuNDUzLTMuMjY4IDMuNTE1LTIuMDM1IDAtMy4yNjgtMS4yMzMtMy4yNjgtMy4zM3YtNS45ODFoLTEuODV2NS45ODFjMCAzLjA4MyAxLjg1IDUuMDU3IDQuNjg2IDUuMDU3aC4wNjJjMS40MTggMCAyLjcxMy0uNjc5IDMuNTc2LTEuNzI3bC4wNjItLjEyMy4wNjIgMS42NjVoMS43MjZWMjQuMjQ3aC0xLjg1djUuNzk2em0xMi41OCAyLjQwNGMtLjY3OC42NzgtMS42NjUgMS4wNDgtMi43NzUgMS4wNDgtMS45MTEgMC0zLjgyMy0xLjE3Mi0zLjgyMy0zLjg4NSAwLTIuMjgxIDEuNjAzLTMuODg1IDMuODIzLTMuODg1Ljk4NyAwIDEuOTEyLjM3IDIuNjUyIDEuMDQ5bC4wNjIuMDYxIDEuMTcxLTEuMjMzLS4wNjEtLjA2MmMtMS4xMS0xLjA0OC0yLjQwNS0xLjU0MS0zLjg4NS0xLjU0MS0zLjM5MiAwLTUuNjczIDIuMjgxLTUuNjczIDUuNjExIDAgMy44ODUgMi44MzYgNS42MTIgNS42NzMgNS42MTJoLjA2MWMxLjQ4IDAgMi44OTktLjU1NSAzLjg4NS0xLjYwNGwuMDYyLS4wNjEtMS4yMzMtMS4yMzR6bTExLjg5OS04LjIyM2gtMi40MDVsLTQuMzc4IDQuNTAydi05LjAwM2gtMS44NXYxNS4zNTRoMS44NXYtNS4wNTZsNC45OTQgNC45OTQuMDYyLjA2MmgyLjIydi0uMTg1bC01LjYxMS01LjU1eiIvPgogIDxwYXRoIGZpbGw9IiNkZTU4MzMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTI2LjUgNTNDNDEuMTM2IDUzIDUzIDQxLjEzNiA1MyAyNi41UzQxLjEzNiAwIDI2LjUgMCAwIDExLjg2NCAwIDI2LjUgMTEuODY0IDUzIDI2LjUgNTN6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICA8cGF0aCBmaWxsPSIjZGRkIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMC4yMjcgNDYuMjcyYzAtLjIwNy4wNS0uMjU1LS42MDgtMS41NjYtMS43NDktMy41MDMtMy41MDctOC40NC0yLjcwNy0xMS42MjUuMTQ2LS41NzktMS42NDgtMjEuNDI1LTIuOTE1LTIyLjA5Ny0xLjQxLS43NS0zLjE0My0xLjk0Mi00LjcyOC0yLjIwNy0uODA1LS4xMjgtMS44Ni0uMDY3LTIuNjg0LjA0NC0uMTQ3LjAyLS4xNTMuMjgzLS4wMTMuMzMuNTQyLjE4NCAxLjIuNTAyIDEuNTg3Ljk4NC4wNzMuMDktLjAyNi4yMzQtLjE0Mi4yMzktLjM2Ni4wMTMtMS4wMjguMTY2LTEuOTAyLjkwOC0uMTAxLjA4Ni0uMDE3LjI0Ni4xMTMuMjIgMS44NzgtLjM3MiAzLjc5Ny0uMTg5IDQuOTI3Ljg0LjA3My4wNjYuMDM1LjE4NS0uMDYuMjExLTkuODExIDIuNjY3LTcuODcgMTEuMi01LjI1NyAyMS42NzQgMi4yMTMgOC44NzUgMy4xMTMgMTIuMDI4IDMuNDMzIDEzLjEwM2EuNjA2LjYwNiAwIDAgMCAuMzY2LjM5OGMzLjQzOCAxLjI5IDEwLjU5IDEuMzE2IDEwLjU5LS45Mzl6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMzEuNTcyIDQ4LjIzOGMtMS4xOS40NjYtMy41Mi42NzMtNC44NjUuNjczLTEuOTczIDAtNC44MTQtLjMxLTUuODQ5LS43NzYtLjYzOS0xLjk2OC0yLjU1Mi04LjA2Ni00LjQ0Mi0xNS44MTEtLjA2MS0uMjU0LS4xMjMtLjUwNi0uMTg1LS43NTdsLS4wMDEtLjAwNmMtMi4yNDYtOS4xNzQtNC4wOC0xNi42NjcgNS45NzQtMTkuMDIxLjA5MS0uMDIyLjEzNi0uMTMxLjA3Ni0uMjA0LTEuMTU0LTEuMzY4LTMuMzE1LTEuODE3LTYuMDQ4LS44NzQtLjExMi4wMzktLjIwOS0uMDc0LS4xNC0uMTcuNTM2LS43MzkgMS41ODQtMS4zMDcgMi4xLTEuNTU2LjEwNy0uMDUxLjEwMS0uMjA4LS4wMTItLjI0M2ExMS41NCAxMS41NCAwIDAgMC0xLjU2Mi0uMzcyYy0uMTUzLS4wMjUtLjE2Ny0uMjg4LS4wMTMtLjMwOSAzLjg3NC0uNTIgNy45Mi42NDIgOS45NSAzLjIuMDE4LjAyNC4wNDYuMDQuMDc2LjA0NyA3LjQzNCAxLjU5NiA3Ljk2NiAxMy4zNDcgNy4xMSAxMy44ODItLjE3LjEwNi0uNzEuMDQ1LTEuNDI0LS4wMzUtMi44OTMtLjMyMy04LjYyLS45NjQtMy44OTMgNy44NDYuMDQ3LjA4Ny0uMDE1LjIwMi0uMTEzLjIxNy0yLjY2NS40MTUuNzUgOC43NjcgMy4yNjEgMTQuMjd6Ii8+CiAgPHBhdGggZmlsbD0iIzNjYTgyYiIgZD0iTTM0Ljg5NyAzNy41NTVjLS41NjYtLjI2My0yLjc0MiAxLjI5OC00LjE4NiAyLjQ5Ni0uMzAyLS40MjctLjg3LS43MzgtMi4xNTQtLjUxNS0xLjEyNC4xOTYtMS43NDQuNDY3LTIuMDIxLjkzNC0xLjc3My0uNjcyLTQuNzU3LTEuNzEtNS40NzgtLjcwOC0uNzg3IDEuMDk1LjE5NyA2LjI3NyAxLjI0NCA2Ljk1LjU0Ni4zNTEgMy4xNi0xLjMyOCA0LjUyNC0yLjQ4Ny4yMi4zMS41NzUuNDg4IDEuMzAzLjQ3MSAxLjEwMi0uMDI1IDIuODktLjI4MiAzLjE2Ny0uNzk1YS41NjkuNTY5IDAgMCAwIC4wNDQtLjExYzEuNDAzLjUyNCAzLjg3MSAxLjA4IDQuNDIzLjk5NiAxLjQzNy0uMjE2LS4yLTYuOTI0LS44NjYtNy4yMzJ6Ii8+CiAgPHBhdGggZmlsbD0iIzRjYmEzYyIgZD0iTTMwLjg0NCA0MC4yMDRjLjA2LjEwNi4xMDcuMjE4LjE0OC4zMzIuMi41Ni41MjUgMi4zMzguMjggMi43NzgtLjI0Ny40MzktMS44NDcuNjUxLTIuODM1LjY2OHMtMS4yMDktLjM0NC0xLjQwOS0uOTAzYy0uMTYtLjQ0Ny0uMjM4LTEuNS0uMjM3LTIuMTAxLS4wNC0uODk0LjI4Ni0xLjIwOCAxLjc5NS0xLjQ1MiAxLjExNi0uMTggMS43MDcuMDMgMi4wNDcuMzkgMS41ODUtMS4xODQgNC4yMy0yLjg1MyA0LjQ4OC0yLjU0OCAxLjI4NiAxLjUyMSAxLjQ0OCA1LjE0MyAxLjE3IDYuNi0uMDkxLjQ3Ni00LjM1LS40NzItNC4zNS0uOTg2IDAtMi4xMzMtLjU1My0yLjcxOC0xLjA5Ny0yLjc3OHptLTkuMzI5LS42NjZjLjM0OS0uNTUyIDMuMTc3LjEzNSA0LjczLjgyNSAwIDAtLjMyIDEuNDQ2LjE4OSAzLjE0OS4xNDguNDk4LTMuNTcyIDIuNzE1LTQuMDU4IDIuMzM0LS41NjEtLjQ0MS0xLjU5NC01LjE0OC0uODYxLTYuMzA4eiIvPgogIDxwYXRoIGZpbGw9IiNmYzMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIyLjg4NSAyOC4zMjVjLjIyOC0uOTk1IDEuMjk1LTIuODcgNS4xMDEtMi44MjUgMS45MjUtLjAwOCA0LjMxNS0uMDAxIDUuOS0uMTgxYTIxLjIxMiAyMS4yMTIgMCAwIDAgNS4yNy0xLjI4MmMxLjY0OC0uNjI4IDIuMjMzLS40ODggMi40MzgtLjExMi4yMjUuNDEzLS4wNCAxLjEyNy0uNjE2IDEuNzg0LTEuMSAxLjI1NS0zLjA3NyAyLjIyOC02LjU3IDIuNTE2cy01LjgwNS0uNjQ4LTYuOC44NzdjLS40My42NTgtLjA5OCAyLjIwOCAzLjI3OSAyLjY5NiA0LjU2My42NTkgOC4zMTEtLjc5MyA4Ljc3NC4wODQuNDYzLjg3Ny0yLjIwNCAyLjY2MS02Ljc3NSAyLjY5OC00LjU3LjAzOC03LjQyNi0xLjYtOC40MzgtMi40MTQtMS4yODUtMS4wMzMtMS44Ni0yLjUzOS0xLjU2My0zLjg0MXoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogIDxnIGZpbGw9IiMxNDMwN2UiIG9wYWNpdHk9Ii44Ij4KICAgIDxwYXRoIGQ9Ik0yOC43MDYgMTcuNDQzYy4yNTUtLjQxNy44Mi0uNzQgMS43NDUtLjc0czEuMzYuMzY5IDEuNjYyLjc4Yy4wNjEuMDgzLS4wMzIuMTgxLS4xMjcuMTRsLS4wNy0uMDNjLS4zMzgtLjE0OC0uNzUzLS4zMy0xLjQ2NS0uMzQtLjc2MS0uMDEtMS4yNDEuMTgtMS41NDQuMzQ0LS4xMDEuMDU2LS4yNjItLjA1NS0uMjAxLS4xNTR6bS0xMC40MTYuNTM0Yy44OTgtLjM3NSAxLjYwNC0uMzI3IDIuMTAzLS4yMDguMTA1LjAyNC4xNzgtLjA4OS4wOTQtLjE1Ni0uMzg3LS4zMTMtMS4yNTQtLjctMi4zODUtLjI4LTEuMDEuMzc3LTEuNDg1IDEuMTU5LTEuNDg3IDEuNjcyLS4wMDEuMTIyLjI0OC4xMzIuMzEyLjAzLjE3NC0uMjc4LjQ2NC0uNjgyIDEuMzYyLTEuMDU4eiIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzEuMjM3IDIzLjE1NGMtLjc5NCAwLTEuNDM4LS42NDItMS40MzgtMS40MzNzLjY0NC0xLjQzMyAxLjQzOC0xLjQzM2MuNzk0IDAgMS40MzguNjQyIDEuNDM4IDEuNDMzcy0uNjQ0IDEuNDMzLTEuNDM4IDEuNDMzem0xLjAxMy0xLjkwOGEuMzcyLjM3MiAwIDAgMC0uNzQ1IDAgLjM3Mi4zNzIgMCAwIDAgLjc0NSAwem0tMTAuNTQ0IDEuNDY3YzAgLjkyMy0uNzUgMS42NzEtMS42NzYgMS42NzFhMS42NzUgMS42NzUgMCAwIDEtMS42NzctMS42N2MwLS45MjQuNzUyLTEuNjcyIDEuNjc3LTEuNjcyLjkyNCAwIDEuNjc2Ljc0OCAxLjY3NiAxLjY3MXptLS40OTQtLjU1NGEuNDM0LjQzNCAwIDEgMC0uODY3LjAwMi40MzQuNDM0IDAgMCAwIC44NjctLjAwMnoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogIDwvZz4KICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNi41IDQ4Ljc1NmMxMi4yOTIgMCAyMi4yNTYtOS45NjQgMjIuMjU2LTIyLjI1NlMzOC43OTIgNC4yNDQgMjYuNSA0LjI0NCA0LjI0NCAxNC4yMDggNC4yNDQgMjYuNSAxNC4yMDggNDguNzU2IDI2LjUgNDguNzU2em0wIDIuMDdjMTMuNDM1IDAgMjQuMzI2LTEwLjg5MSAyNC4zMjYtMjQuMzI2UzM5LjkzNSAyLjE3NCAyNi41IDIuMTc0IDIuMTc0IDEzLjA2NSAyLjE3NCAyNi41IDEzLjA2NSA1MC44MjYgMjYuNSA1MC44MjZ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNi40OTcgNDguNDM4YzEyLjExOCAwIDIxLjk0MS05LjgyMyAyMS45NDEtMjEuOTRTMzguNjE1IDQuNTU1IDI2LjQ5OCA0LjU1NSA0LjU1NSAxNC4zOCA0LjU1NSAyNi40OTdzOS44MjQgMjEuOTQxIDIxLjk0MSAyMS45NDF6bTI0LjI5Mi0yMS45NGMwIDEzLjQxNS0xMC44NzYgMjQuMjktMjQuMjkyIDI0LjI5UzIuMjA2IDM5LjkxNCAyLjIwNiAyNi40OTkgMTMuMDggMi4yMDUgMjYuNDk3IDIuMjA1IDUwLjc5IDEzLjA4IDUwLjc5IDI2LjQ5N3oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K',
		type: 'browser',
		link: 'https://duckduckgo.com/',
		info: 'Search and browse more privately with the DuckDuckGo browser. Unlike Chrome and other browsers, we don\'t track you',
		extensions: [],
		isInstalled: false,
	},



];

export const editors = [
	{
		id: generateRandomId(8),
		title: 'VSCode',
		icon: 'vscode',
		avatar: 'https://vscode-icons-team.gallerycdn.vsassets.io/extensions/vscode-icons-team/vscode-icons/12.6.0/1697899327455/Microsoft.VisualStudio.Services.Icons.Default',
		type: 'editor',
		link: 'https://code.visualstudio.com/download',
		text: 'Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.',
		extensions: [
			{
				id: generateRandomId(8),
				title: 'Simple React Snippets',
				text: '',
				link: 'https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets',
				avatar: 'https://burkeholland.gallerycdn.vsassets.io/extensions/burkeholland/simple-react-snippets/1.2.7/1663085328803/Microsoft.VisualStudio.Services.Icons.Default',
			},
			{
				id: generateRandomId(8),
				title: 'REST Client',
				text: 'REST Client allows you to send HTTP request and view the response in Visual Studio Code directly.',
				link: 'https://marketplace.visualstudio.com/items?itemName=humao.rest-client',
				avatar: 'https://humao.gallerycdn.vsassets.io/extensions/humao/rest-client/0.25.1/1660918934840/Microsoft.VisualStudio.Services.Icons.Default',
			},
			{
				id: generateRandomId(8),
				title: 'Tailwind CSS IntelliSense',
				text: '',
				link: 'https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss',
				avatar: 'https://bradlc.gallerycdn.vsassets.io/extensions/bradlc/vscode-tailwindcss/0.11.36/1703195830472/Microsoft.VisualStudio.Services.Icons.Default',
			},
			{
				id: generateRandomId(8),
				title: 'WakaTime',
				text: '',
				link: 'https://marketplace.visualstudio.com/items?itemName=WakaTime.vscode-wakatime',
				avatar: 'https://wakatime.gallerycdn.vsassets.io/extensions/wakatime/vscode-wakatime/24.4.0/1698913903501/Microsoft.VisualStudio.Services.Icons.Default',
			},
			{
				id: generateRandomId(8),
				title: 'Prettier - Code formatter',
				text: '',
				link: 'https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode',
				avatar: 'https://esbenp.gallerycdn.vsassets.io/extensions/esbenp/prettier-vscode/10.1.0/1690819498575/Microsoft.VisualStudio.Services.Icons.Default',
			},
			{
				id: generateRandomId(8),
				title: 'Path Intellisense',
				text: 'Visual Studio Code plugin that autocompletes filenames',
				link: 'https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense',
				avatar: 'https://christian-kohler.gallerycdn.vsassets.io/extensions/christian-kohler/path-intellisense/2.8.5/1696705231022/Microsoft.VisualStudio.Services.Icons.Default',
			},
			{
				id: generateRandomId(8),
				title: 'npm Intellisense',
				text: '',
				link: 'https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense',
				avatar: 'https://christian-kohler.gallerycdn.vsassets.io/extensions/christian-kohler/npm-intellisense/1.4.5/1696702951497/Microsoft.VisualStudio.Services.Icons.Default',
			},
			{
				id: generateRandomId(8),
				title: 'Js Runner',
				text: '',
				link: 'https://marketplace.visualstudio.com/items?itemName=ZolarDev.js-runner',
				avatar: 'https://zolardev.gallerycdn.vsassets.io/extensions/zolardev/js-runner/3.2.0/1573979942519/Microsoft.VisualStudio.Services.Icons.Default',
			},
			{
				id: generateRandomId(8),
				title: 'Git History',
				text: '',
				link: 'https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory',
				avatar: 'https://donjayamanne.gallerycdn.vsassets.io/extensions/donjayamanne/githistory/0.6.20/1678008598739/Microsoft.VisualStudio.Services.Icons.Default',
			},
			{
				id: generateRandomId(8),
				title: 'ESLint',
				text: '',
				link: 'https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint',
				avatar: 'https://dbaeumer.gallerycdn.vsassets.io/extensions/dbaeumer/vscode-eslint/2.4.2/1687441427519/Microsoft.VisualStudio.Services.Icons.Default',
			},
			{
				id: generateRandomId(8),
				title: 'Color the tag name（タグに色つけ太郎）',
				text: '',
				link: 'https://marketplace.visualstudio.com/items?itemName=jzmstrjp.color-the-tag-name',
				avatar: 'https://jzmstrjp.gallerycdn.vsassets.io/extensions/jzmstrjp/color-the-tag-name/0.19.8/1619520992309/Microsoft.VisualStudio.Services.Icons.Default',
			},
			{
				id: generateRandomId(8),
				title: 'Color Picker',
				text: '',
				link: 'https://marketplace.visualstudio.com/items?itemName=anseki.vscode-color',
				avatar: 'https://anseki.gallerycdn.vsassets.io/extensions/anseki/vscode-color/0.4.5/1501839487317/Microsoft.VisualStudio.Services.Icons.Default',
			},

			{
				id: generateRandomId(8),
				title: 'Color Highlight',
				text: '',
				link: 'https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight',
				avatar: 'https://naumovs.gallerycdn.vsassets.io/extensions/naumovs/color-highlight/2.5.0/1631530639439/Microsoft.VisualStudio.Services.Icons.Default',
			},
			{
				id: generateRandomId(8),
				title: 'Better Comments',
				text: '',
				link: 'https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments',
				avatar: 'https://aaron-bond.gallerycdn.vsassets.io/extensions/aaron-bond/better-comments/3.0.2/1659144495902/Microsoft.VisualStudio.Services.Icons.Default',
			},
		],
	},

	{
		id: generateRandomId(8),
		title: 'Brackets',
		icon: 'brackets',
		avatar: 'https://brackets.io/img/brackets.svg',
		type: 'editor',
		link: 'https://brackets.io/',
		text: 'Modern, Powerful & Open source',
		extensions: [

		],
	},
];
