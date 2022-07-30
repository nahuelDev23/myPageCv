const badCode = `// bad 
export class Pokemon {

 constructor(
  public readonly id: number, 
  public name: string,
  ) {}

 async getMoves(): Promise<Move[]> {
  const url = \`https://pokeapi.co/api/v2/pokemon/\${id}\`
  const { data } = await axios.get<PokeapiResponse>(url);
  return data.moves;
  }
}
`;

const goodCode = `// better
export class Pokemon {

 constructor(
  public readonly id: number,
  public name: string,
  private readonly http: HttpAdapter,
) { }

async getMoves(): Promise < Move[] > {
  const url = \`https://pokeapi.co/api/v2/pokemon/\${id}\`
  const data = await this.http.get<PokeapiReponse>(url);
  return data.moves;
 }
}
`;

const caseUse = `
// before
export const charmander = new Pokemon( 4, 'Charmander' );
charmander.getMoves();

// after
const pokeApiAxios = new PokeApiAdapter();
const pokeApiFetch = new PokeApiFetchAdapter();

export const charmander = new Pokemon(
  4, 
  'Charmander',
  pokeApiAxios);

charmander.getMoves();

`;

export const slidesCode = [
  { code: badCode },
  { code: goodCode },
  { code: caseUse },
];

const badAngGoodNamesArray = `
//bad
const fruit = ['manzana', 'plátano', 'fresa'];
// regular
const fruitList = ['manzana', 'plátano', 'fresa'];
// good
const fruits = ['manzana', 'plátano', 'fresa'];
// better
const fruitNames = ['manzana', 'plátano', 'fresa'];
`;

const badAngGoodNamesBooleans = `
//bad
const open = true;
const write = true;
const fruit = true;

// good
const isOpen = true;
const canWrite = true;
const hasFruit = true;
`;

const badAndGoodNamesNumber = `
//bad
const fruits = 3;

//better
const maxFruits = 5;
const minFruits = 1;
const totalFruits = 3;
`;

export const slideCodeVariables = [
  { code: badAngGoodNamesArray },
  { code: badAngGoodNamesBooleans },
  { code: badAndGoodNamesNumber },
];
