export class Card {
    constructor(identifier, id, icon, isDiscoverd = false) {
        this.identifier = identifier;
        this.id = id;
        this.icon = icon;
        this.isDiscoverd = isDiscoverd;
    }
}