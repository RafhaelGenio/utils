export const getDistance = (point_a, point_b, options) => {
	const xCoordinateKey = options.x || 'x';
	const yCoordinateKey = options.y || 'y';

	const x1 = point_a[xCoordinateKey] || 0;
	const x2 = point_b[xCoordinateKey] || 0;

	const y1 = point_a[yCoordinateKey] || 0;
	const y2 = point_b[yCoordinateKey] || 0;


	const xDistanceSquared = (x2 - x1) ** 2;
	const yDistanceSquared = (y2 - y1) ** 2;

	return (xDistanceSquared + yDistanceSquared) ** (1 / 2)
}
