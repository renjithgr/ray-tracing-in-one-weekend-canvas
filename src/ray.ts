import Vector from "./vector";

export default class Ray {
    
    origin: Vector;
    direction: Vector;

    constructor(origin: Vector, direction: Vector) {
        this.origin = origin;
        this.direction = direction;
    }

    at(time: number): Vector {
        return this.origin.add(this.direction.multiply(time));
    }
}

export const rayColor = (ray: Ray) => {
    const unitDirection = ray.direction.normalize();
    const t = 0.5 * (unitDirection.y + 1.0);
    return new Vector(1.0, 1.0, 1.0)
    .multiply(1.0 - t)
    .add(
        new Vector(0.5, 0.7, 1.0).multiply(t)
    ); 
}