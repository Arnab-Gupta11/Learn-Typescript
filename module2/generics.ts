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
  type GenericTuple<U, V> = [U, V];
  const userWithId = ["#12345", { name: "Kabul", age: 34 }];

  //Interface
  interface Developer<T, X = null> {
    name: string;
    age: number;
    device: {
      brand: string;
      model: string;
    };
    smartWatch: T;
    bike?: X;
  }
  interface poorWatch {
    brand: string;
    model: string;
  }
  interface poshWatch {
    brand: string;
    model: string;
    display: string;
  }
  interface royalBike {
    brand: string;
    storage: string;
  }
  let poorDeveloper: Developer<poorWatch> = {
    name: "Patel",
    age: 25,
    device: {
      brand: "ASUS",
      model: "Gajati",
    },
    smartWatch: {
      brand: "devtab",
      model: "k2j2",
    },
  };

  let richDeveloper: Developer<poshWatch, royalBike> = {
    name: "Abul",
    age: 25,
    device: {
      brand: "HP",
      model: "boss",
    },
    smartWatch: {
      brand: "apple",
      model: "x45g6",
      display: "SuperAmoled",
    },
    bike: {
      brand: "Royal Enfield",
      storage: "300cc",
    },
  };
  console.log(poorDeveloper);
  console.log(richDeveloper);

  //Function
  interface CourseId {
    id: string;
  }
  const addCourseToStudent = <T extends CourseId>(student: T): T & { course: string } => {
    const course = "Web Development";
    return {
      ...student,
      course,
    };
  };
  interface Student1 {
    id: string;
    name: string;
    email: string;
    age: number;
  }
  const student1 = addCourseToStudent<Student1>({
    id: "#4546",
    name: "Babul",
    email: "babul@gmail.com",
    age: 23,
  });

  //Constrains example
  function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
  let person = { name: "Rajat", age: 25 };
  getProperty(person, "name");
}
