import { v4 as uuidv4 } from 'uuid';

let types: { id: string, type: string }[] = [
    { "id": uuidv4(), "type": "Boolean" },
    { "id": uuidv4(), "type": "Number" },
    { "id": uuidv4(), "type": "String" },
    { "id": uuidv4(), "type": "Array" },
    { "id": uuidv4(), "type": "Date" },
    { "id": uuidv4(), "type": "Null" },
];

export default types;
