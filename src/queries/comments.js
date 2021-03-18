import { gql } from '@apollo/client';

const MODEL = 'Comment';

const FIELDS = [['text', 'String'], ['room', 'ID'] ];

// Standard queries
const FRAGMENT_FIELDS = gql`
fragment commentFields on Comment {
    id ${FIELDS.map( f => f[0]).join(' ')} createdAt updatedAt __typename
}
`;
export const GETS_WHERE = gql`
query($room: ID) {
    ${MODEL}Where (room: $room) {...commentFields}
}
${FRAGMENT_FIELDS}
`;
export const UPDATE = gql`
mutation update${MODEL}($id: ID, $text: String, $room: ID) {
    update${MODEL}(input:{id: $id, text: $text, room: $room}){ ...commentFields }
}
${FRAGMENT_FIELDS}
`;
export const DELETE = gql`
mutation delete${MODEL}($id: ID) {
    delete${MODEL}(input:{id: $id}){ ...commentFields }
}
${FRAGMENT_FIELDS}
`;

const QUERY = {FRAGMENT_FIELDS, GETS_WHERE, UPDATE, DELETE}
export default QUERY;