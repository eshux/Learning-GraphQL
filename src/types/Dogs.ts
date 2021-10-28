interface Dogs {
  id: number;
  breed: string;
}
interface Dog {
  id: number;
  displayImage: string;
}

export interface DogsType {
  dogs: Dogs[];
  dog: Dog;
}
