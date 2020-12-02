export default class Vector {
    x: number;
    y: number;
    z: number;

    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    dotProduct(b: Vector): Vector {
        return new Vector(this.x * b.x, this.y * b.y, this.z * b.z);
    }

    static unitVector(): Vector {
        return new Vector(1, 1, 1);
    }
}