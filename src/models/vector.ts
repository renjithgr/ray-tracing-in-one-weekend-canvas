export default class Vector {
    x: number;
    y: number;
    z: number;

    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    add(b: Vector): Vector {
        return new Vector(this.x + b.x, this.y + b.y, this.z + b.z);
    }

    subtract(b: Vector): Vector {
        return new Vector(this.x - b.x, this.y - b.y, this.z - b.z);
    }

    multiply(s: number): Vector {
        return new Vector(this.x * s, this.y * s, this.z * s);
    }

    divide(s: number): Vector {
        return new Vector(this.x / s, this.y / s, this.z / s);
    }

    mag(): number {
        return Math.sqrt((this.x * this.x) + (this.y * this.y) + (this.z * this.z));
    }

    normalize(): Vector {
        return this.divide(this.mag());
    }
}