/* eslint-disable max-len */
export const info = {
  useQuery: "Here we are fetching all dog breeds. As soon as the breed has been selected, we are making another call and fetching a photo with 'breed' variable.\nWith REFETCH button we are refetching the data to get the latest.",
  useQueryPoints: [
    'Polling (refetch the latest data after some time interval)',
    'Fetch Policy (choose to fetch data from cache, network or both)',
    'Next Fetch Policy (choose to set different fetch policy for all next fetches)'
  ],
  useLazyQuery: "The difference between useLazyQuery and useQuery is that useLazyQuery can be called manually. useQuery hook is being called automatically when React renders a component, therefore we can't execute it manually. And this is where useLazyQuery becomes handy!",
};
