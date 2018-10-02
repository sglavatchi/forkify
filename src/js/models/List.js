import uniqid from 'uniqid'

export default class List {
    constructor(items = []) {
        this.items = items;
    }

    addItem(count, unit, ingredient) {
        const item = {
            id: uniqid(),
            count,
            unit,
            ingredient
        };
        this.items.push(item);

        return item;
    }

    deleteItem(id) {
        const itemIndex = this.items.findIndex(el => el.id == id);

        // [2,4,8] splice(1,2) 2 is the last index -> returns [4,8], original array is [2]
        // [2,4,8].slice(1,2) 2 - # of elements -> returns [4,8], original array is [2,4,8]

        this.items.splice(itemIndex, 1);
    }

    updateCount(id, newCount) {
        this.items.find(el => el.id == id).count = newCount;
    }
}