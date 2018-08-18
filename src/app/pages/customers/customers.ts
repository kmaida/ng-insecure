interface Customers {
  type: string;
  number: number;
  cvv: number;
  exp: string;
  name: string;
}

const CUSTOMERS: Customers[] = [
  {
    'type': 'visa',
    'number': 4929757302840116,
    'cvv': 435,
    'exp': '04/18',
    'name': 'Riley Turner'
  },
  {
    'type': 'mastercard',
    'number': 5382354591002660,
    'cvv': 993,
    'exp': '03/19',
    'name': 'Julian Simon'
  },
  {
    'type': 'amex',
    'number': 345767946981840,
    'cvv': 304,
    'exp': '10/18',
    'name': 'Cole Lawman'
  },
  {
    'type': 'visa',
    'number': 4539369933065378,
    'cvv': 238,
    'exp': '06/18',
    'name': 'Nicholas Roger'
  },
  {
    'type': 'visa',
    'number': 4119526871837351,
    'cvv': 128,
    'exp': '07/19',
    'name': 'Jayden Adrian'
  }
];

export { Customers, CUSTOMERS };
