import { gql } from '@apollo/client';

const MODEL = 'Room';
// Standard queries
const FRAGMENT_FIELDS = gql`
fragment roomFields on Room {
    name
    id
    createdAt
    updatedAt
    __typename
}
`;

export const GETS_WHERE = gql`
query($parentID: ID) {
    ${MODEL}Where (parentID: $parentID) { ...roomFields }
}
${FRAGMENT_FIELDS}
`;

export const UPDATE = gql`
mutation update${MODEL}($id: ID, $name: String) {
    update${MODEL}(input:{
        id: $id,
        name: $name
}){ ...roomFields }
}
${FRAGMENT_FIELDS}
`;
export const DELETE = gql`
mutation delete${MODEL}($id: ID) {
    delete${MODEL}(input:{id: $id}){ ...roomFields }
}
${FRAGMENT_FIELDS}
`;

const QUERY = {FRAGMENT_FIELDS, GETS_WHERE, UPDATE, DELETE}
export default QUERY;