class Building {
    constructor(sqft) {
        this._sqft = sqft;
    }

    get sqft() {
        return this._sqft;
    }

    static get [Symbol.species]() {
        return this;
    }
}

class TestBuilding extends Building {
    constructor(sqft) {
        super(sqft);
        if (this.constructor === TestBuilding) {
            throw new Error('Class extending Building must override evacuationWarningMessage');
        }
    }
}

export default Building;
