import { generateMockData } from "./mockData";

export const getDataById = (id = 1) => {
    const totalData = generateMockData();

    const person = totalData.find(x => x.id === id);
    const father = totalData.find(x => x.id === person.parents.father);
    const mother = totalData.find(x => x.id === person.parents.mother);
    const siblings = totalData.filter(x => father.children.includes(x.id)).map(x => {
        if (x.id === id) {
            return [{ ...x, isCurrent: true}];
        }

        return [x];
    });
    const paternalGrandparents = totalData.filter(x => x.id === father.parents.father || x.id === father.parents.mother);

    return [
        [paternalGrandparents],
        [[father, mother]],
        [...siblings]
    ];
};
