export class Item {
    public id: string;
    public name: string;
    public createdAt: Date;

    constructor(name: string, id: string) {
        this.id = id;
        this.name = name;
        this.createdAt = new Date();
    }
}
