import { gql } from '@apollo/client';

const MODEL = 'Like';

const FIELDS = [['value', 'String'], ['userId', 'ID'], ['room', 'ID'] ];

// Standard queries
const FRAGMENT_FIELDS = gql`
fragment likeFields on Like {
    id ${FIELDS.map( f => f[0]).join(' ')} createdAt updatedAt __typename
}
`;
export const GETS_WHERE = gql`
query($room: ID) {
    ${MODEL}Where (room: $room) {...likeFields}
}
${FRAGMENT_FIELDS}
`;
export const UPDATE = gql`
mutation update${MODEL}($id: ID, $value: String, $userId: ID, $room: ID) {
    update${MODEL}(input:{
        id: $id,
        value: $value,
        userId: $userId,
        room: $room
}){ ...likeFields }
}
${FRAGMENT_FIELDS}
`;
export const DELETE = gql`
mutation delete${MODEL}($id: ID) {
    delete${MODEL}(input:{id: $id}){ ...likeFields }
}
${FRAGMENT_FIELDS}
`;

const QUERY = {FRAGMENT_FIELDS, GETS_WHERE, UPDATE, DELETE}
export default QUERY;