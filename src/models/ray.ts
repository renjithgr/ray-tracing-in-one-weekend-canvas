import Vector, { dot } from "./vector";

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
    if(hit_sphere(new Vector(0, 0, -1), 0.5, ray)) {
        return new Vector(1.0, 0, 0);
    }
    const unitDirection = ray.direction.normalize();
    const t = 0.5 * (unitDirection.y + 1.0);
    return new Vector(1.0, 1.0, 1.0).multiply(1.0 - t).add(new Vector(0.5, 0.7, 1.0).multiply(t)); 
};

export const hit_sphere = (center: Vector, radius: number, ray: Ray): boolean => {
    const oc = ray.origin.subtract(center);
    const a = dot(ray.direction, ray.direction);
    const b = 2.0 * dot(oc, ray.direction);
    const c = dot(oc, oc) - radius * radius;
    const discriminant = b * b - 4 * a * c;
    return (discriminant > 0);
};