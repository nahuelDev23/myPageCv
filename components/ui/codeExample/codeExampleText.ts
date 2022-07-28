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
