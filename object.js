export const traverse = (object, funct) => {
	for (let property in object) {
		const value = object[property];
		const key = property;

		funct(value, key);

		if (value !== null && typeof(value) == "object") {
			traverse(value, funct);
		}
	}
}
