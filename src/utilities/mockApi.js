import { generateMockData } from "./mockData";

export const getDataById = (id = 1) => {
    const totalData = generateMockData();

    const person = totalData.find(x => x.id === id);
    const spouse = totalData.find(x => id === x.spouse);
    const father = totalData.find(x => x.id === person.parents.father);
    const mother = totalData.find(x => x.id === person.parents.mother);

    const paternalGrandparents = father ? totalData.filter(x => x.id === father.parents.father || x.id === father.parents.mother) : [[]];

    const personSiblings = father ? totalData.filter(x => father.children.includes(x.id)).map(x => {
        if (x.id === id) {
            return [{ ...x, isCurrent: true }, spouse];
        }

        return [x, x.spouse ? totalData.find(y => y.id === x.spouse) : null];
    }) : [[person, spouse]];
    
    const children = person.children.length > 0 ?
        totalData
            .filter(x => person.children.includes(x.id))
            .map(x => [x, x.spouse ? totalData.find(y => y.id === x.spouse) : null])
        :
        [[]];

    return [
        [paternalGrandparents],
        [[father, mother]],
        personSiblings,
        children
    ];
};
