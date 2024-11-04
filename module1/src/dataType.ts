{
  //Data Type
  // string
  let firstName: string = "Arnab Gupta";
  //number
  let age: number = 24;
  //boolean
  let isAdmin: boolean = true;
  //Array
  let pets: string[] = ["dog", "cat", "birds"];
  let elligibleRollList: number[] = [3, 4, 2];
  //tuple -> Special type of array -> mantain order
  let coordinates: [number, string] = [1, "rahim"];

  //object type
  const user: {
    company: "Backspace"; //literal type
    firstName: string;
    secondName?: string; //optional type
    lastName: string;
    isMarried: boolean;
  } = {
    company: "Backspace",
    firstName: "Rahim",
    // secondName:"gandu",
    lastName: "Monjur",
    isMarried: false,
  };
  // function type
  function add(num1: number, num2: number = 10): number {
    return num1 + num2;
  }
  //Arrow function
  const addNum = (num1: number, num2: number = 10): number => num1 + num2;
  //Object => function => method
  const newUser = {
    name: "Patel",
    balance: 0,
    addBalance: function (balance: number): number {
      return this.balance + balance;
    },
  };

  // map
  const num: number[] = [2, 4, 5];
  const square: number[] = num.map((elem: number): number => elem * elem);

  //spread operator
  const team1: string[] = ["Rahim", "Karim"];
  const team2: string[] = ["Abul", "Kabul"];
  const team: string[] = [...team1, ...team2];

  //Union type |  (OR)
  type frontendDeveloper = "react developer" | "javascript developer";
  type fullStackDeveloper = "Next.js developer" | "django developer";
  const developer: frontendDeveloper = "react developer";
  let id: number | string;
  id = 4;
  id = "afdask";

  //Intersection type & (AND)
  type frontendSkills = {
    skills: string[];
    designation1: "frontendDeveloper1";
  };
  type backendSkills = {
    skills: string[];
    designation2: "backendDeveloper1";
  };
  type fullStackDeveloperSkills = frontendSkills & backendSkills;
  const webDeveloper: fullStackDeveloperSkills = {
    skills: ["dfd", "dff"],
    designation1: "frontendDeveloper1",
    designation2: "backendDeveloper1",
  };
}
