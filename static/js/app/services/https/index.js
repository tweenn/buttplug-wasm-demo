
export default () => {
	if ((document.location.hostname !== 'localhost') && (document.location.protocol !== 'https:')) {
		document.location.protocol = 'https:';
	}
}
