import gql from 'graphql-tag';

export const ADD_TASK = gql`
mutation createTask($description: String!, $title: String!){
    createTask(description: $description, title: $title){
      id
      title
      description
      version
    }
  }
`;

export const GET_TASKS = gql`
  query allTasks($first: Int) {
    allTasks(first: $first) {
      id
      title
      description
      version
    }
}
`;

export const DELETE_TASK = gql`
mutation deleteTask($id: ID!){
  deleteTask(id: $id)
}
`;

export const UPDATE_TASK = gql`
mutation updateTask($description: String, $id: ID!, $title: String, $version: Int!) {
  updateTask(description: $description, id: $id, title: $title, version: $version) {
    id
    title
    description
    version
  }
}
`;

export const TASK_CREATED_SUBSCRIPTION = gql`
  subscription taskCreated {
    taskCreated {
      id
      title
      description
      version
    }
  }
`;

export const TASK_MODIFIED_SUBSCRIPTION = gql`
  subscription taskModified {
    taskModified {
      id
      title
      description
      version
    }
  }
`;

export const TASK_DELETED_SUBSCRIPTION = gql`
  subscription taskDeleted {
    taskDeleted
  }
`;
