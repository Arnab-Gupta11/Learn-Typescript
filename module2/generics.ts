{
  //Type allias generics
  type GenericArray<T> = Array<T>;
  const age: GenericArray<number> = [3, 5, 6, 7];
  const fruits: GenericArray<string> = ["apple", "orange", "banana"];
  const users: GenericArray<{ name: string; age: number }> = [
    {
      name: "Patel",
      age: 23,
    },
    {
      name: "Abul",
      age: 34,
    },
  ];
  //Tuple
  type GenericTuple<U,V>=[U,V];
  const userWithId=["#12345",{name:"Kabul",age:34}]
}
