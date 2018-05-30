export const onLoad = (funct, ...args) => {
	if (!window.google) {
		setInterval(() => {
			if (window.google) {
				funct(...args)
			}
		}, 100)
	}

	funct(...args)
}
