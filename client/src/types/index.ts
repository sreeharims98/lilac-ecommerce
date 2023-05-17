export interface UserState {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
}

export interface ProductState {
  description: string;
  image: string;
  name: string;
  price: number;
  rating: number;
  stock: number;
  totalRating: number;
  _id: string;
}

export interface CartState {
  product: ProductState;
  quantity: number;
  _id: string;
}
