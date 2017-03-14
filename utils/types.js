// @flow

export type User = {
  id: number,
  name: string,
  username: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }
};

export type Post = {
  userId: number,
  id: number,
  title: string,
  body: string
};

export type WrappableComponent =
  | Class<React$Component<any, any, any>>
  | ((props: any) => ?React$Element<any>);
