/* eslint-disable max-len */
export const info = {
  useQuery: "Here we are fetching all dog breeds. As soon as the breed has been selected, we are making another call and fetching a photo with 'breed' variable.\nWith REFETCH button we are refetching the data to get the latest.",
  useQueryPoints: [
    'Polling (refetch the latest data after some time interval)',
    'Fetch Policy (choose to fetch data from cache, network or both)',
    'Next Fetch Policy (choose to set different fetch policy for all next fetches)'
  ],
  useLazyQuery: "The difference between useLazyQuery and useQuery is that useLazyQuery can be called manually. useQuery hook is being called automatically when React renders a component, therefore we can't execute it manually. And this is where useLazyQuery becomes handy!",
  useMutation: 'useMutation hook helps us modify data on server. With useMutation we are POSTing a new task and with useQuery - GETting a list of those saved tasks. After adding a task, the task list is being updated automatically.',
  useMutationPoints: [
    'Refetching Queries (refetching the query after mutation - like we are doing here)',
    'Updating cache directly (more complex, but avoids refetching and making another call to server)'
  ],
  refetchQueries: 'It is also possible to refetch all the queries whose cache have been modified with updateCache callback.',
  subscription: 'useSubscription hook requires more complex configuration on both server and client side. Connection is being made with WebSocket.',
  subscriptionPoints: [
    'Small, incremental changes to large objects.',
    'Low-latency, real-time updates. (e.g. receiving messages or new comments as soons as they are available)'
  ],
  fragments: 'Fragment is a piece of query that can be shared among other queries and mutations. Makes you not to repeat yourself.',
};
