
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model Npc
 * 
 */
export type Npc = $Result.DefaultSelection<Prisma.$NpcPayload>
/**
 * Model Offer
 * 
 */
export type Offer = $Result.DefaultSelection<Prisma.$OfferPayload>
/**
 * Model City
 * 
 */
export type City = $Result.DefaultSelection<Prisma.$CityPayload>
/**
 * Model Quest
 * 
 */
export type Quest = $Result.DefaultSelection<Prisma.$QuestPayload>
/**
 * Model NpcLocation
 * 
 */
export type NpcLocation = $Result.DefaultSelection<Prisma.$NpcLocationPayload>
/**
 * Model NpcQuest
 * 
 */
export type NpcQuest = $Result.DefaultSelection<Prisma.$NpcQuestPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ItemType: {
  Weapon: 'Weapon',
  Armor: 'Armor',
  Ammunition: 'Ammunition',
  Wand: 'Wand',
  Rod: 'Rod',
  Shield: 'Shield',
  Helmet: 'Helmet',
  Legs: 'Legs',
  Boots: 'Boots',
  Amulet: 'Amulet',
  Ring: 'Ring',
  Creature_Product: 'Creature_Product',
  Food: 'Food',
  Other: 'Other'
};

export type ItemType = (typeof ItemType)[keyof typeof ItemType]

}

export type ItemType = $Enums.ItemType

export const ItemType: typeof $Enums.ItemType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Items
 * const items = await prisma.item.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Items
   * const items = await prisma.item.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.npc`: Exposes CRUD operations for the **Npc** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Npcs
    * const npcs = await prisma.npc.findMany()
    * ```
    */
  get npc(): Prisma.NpcDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.offer`: Exposes CRUD operations for the **Offer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Offers
    * const offers = await prisma.offer.findMany()
    * ```
    */
  get offer(): Prisma.OfferDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.city`: Exposes CRUD operations for the **City** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cities
    * const cities = await prisma.city.findMany()
    * ```
    */
  get city(): Prisma.CityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quest`: Exposes CRUD operations for the **Quest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quests
    * const quests = await prisma.quest.findMany()
    * ```
    */
  get quest(): Prisma.QuestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.npcLocation`: Exposes CRUD operations for the **NpcLocation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NpcLocations
    * const npcLocations = await prisma.npcLocation.findMany()
    * ```
    */
  get npcLocation(): Prisma.NpcLocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.npcQuest`: Exposes CRUD operations for the **NpcQuest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NpcQuests
    * const npcQuests = await prisma.npcQuest.findMany()
    * ```
    */
  get npcQuest(): Prisma.NpcQuestDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Item: 'Item',
    Npc: 'Npc',
    Offer: 'Offer',
    City: 'City',
    Quest: 'Quest',
    NpcLocation: 'NpcLocation',
    NpcQuest: 'NpcQuest'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "item" | "npc" | "offer" | "city" | "quest" | "npcLocation" | "npcQuest"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      Npc: {
        payload: Prisma.$NpcPayload<ExtArgs>
        fields: Prisma.NpcFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NpcFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NpcPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NpcFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NpcPayload>
          }
          findFirst: {
            args: Prisma.NpcFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NpcPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NpcFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NpcPayload>
          }
          findMany: {
            args: Prisma.NpcFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NpcPayload>[]
          }
          create: {
            args: Prisma.NpcCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NpcPayload>
          }
          createMany: {
            args: Prisma.NpcCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NpcCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NpcPayload>[]
          }
          delete: {
            args: Prisma.NpcDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NpcPayload>
          }
          update: {
            args: Prisma.NpcUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NpcPayload>
          }
          deleteMany: {
            args: Prisma.NpcDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NpcUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NpcUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NpcPayload>[]
          }
          upsert: {
            args: Prisma.NpcUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NpcPayload>
          }
          aggregate: {
            args: Prisma.NpcAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNpc>
          }
          groupBy: {
            args: Prisma.NpcGroupByArgs<ExtArgs>
            result: $Utils.Optional<NpcGroupByOutputType>[]
          }
          count: {
            args: Prisma.NpcCountArgs<ExtArgs>
            result: $Utils.Optional<NpcCountAggregateOutputType> | number
          }
        }
      }
      Offer: {
        payload: Prisma.$OfferPayload<ExtArgs>
        fields: Prisma.OfferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OfferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OfferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          findFirst: {
            args: Prisma.OfferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OfferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          findMany: {
            args: Prisma.OfferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>[]
          }
          create: {
            args: Prisma.OfferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          createMany: {
            args: Prisma.OfferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OfferCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>[]
          }
          delete: {
            args: Prisma.OfferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          update: {
            args: Prisma.OfferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          deleteMany: {
            args: Prisma.OfferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OfferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OfferUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>[]
          }
          upsert: {
            args: Prisma.OfferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          aggregate: {
            args: Prisma.OfferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOffer>
          }
          groupBy: {
            args: Prisma.OfferGroupByArgs<ExtArgs>
            result: $Utils.Optional<OfferGroupByOutputType>[]
          }
          count: {
            args: Prisma.OfferCountArgs<ExtArgs>
            result: $Utils.Optional<OfferCountAggregateOutputType> | number
          }
        }
      }
      City: {
        payload: Prisma.$CityPayload<ExtArgs>
        fields: Prisma.CityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          findFirst: {
            args: Prisma.CityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          findMany: {
            args: Prisma.CityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          create: {
            args: Prisma.CityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          createMany: {
            args: Prisma.CityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          delete: {
            args: Prisma.CityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          update: {
            args: Prisma.CityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          deleteMany: {
            args: Prisma.CityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          upsert: {
            args: Prisma.CityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          aggregate: {
            args: Prisma.CityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCity>
          }
          groupBy: {
            args: Prisma.CityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CityCountArgs<ExtArgs>
            result: $Utils.Optional<CityCountAggregateOutputType> | number
          }
        }
      }
      Quest: {
        payload: Prisma.$QuestPayload<ExtArgs>
        fields: Prisma.QuestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          findFirst: {
            args: Prisma.QuestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          findMany: {
            args: Prisma.QuestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>[]
          }
          create: {
            args: Prisma.QuestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          createMany: {
            args: Prisma.QuestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>[]
          }
          delete: {
            args: Prisma.QuestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          update: {
            args: Prisma.QuestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          deleteMany: {
            args: Prisma.QuestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>[]
          }
          upsert: {
            args: Prisma.QuestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          aggregate: {
            args: Prisma.QuestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuest>
          }
          groupBy: {
            args: Prisma.QuestGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestCountArgs<ExtArgs>
            result: $Utils.Optional<QuestCountAggregateOutputType> | number
          }
        }
      }
      NpcLocation: {
        payload: Prisma.$NpcLocationPayload<ExtArgs>
        fields: Prisma.NpcLocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NpcLocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NpcLocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NpcLocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NpcLocationPayload>
          }
          findFirst: {
            args: Prisma.NpcLocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NpcLocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NpcLocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NpcLocationPayload>
          }
          findMany: {
            args: Prisma.NpcLocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NpcLocationPayload>[]
          }
          create: {
            args: Prisma.NpcLocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NpcLocationPayload>
          }
          createMany: {
            args: Prisma.NpcLocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NpcLocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NpcLocationPayload>[]
          }
          delete: {
            args: Prisma.NpcLocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NpcLocationPayload>
          }
          update: {
            args: Prisma.NpcLocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NpcLocationPayload>
          }
          deleteMany: {
            args: Prisma.NpcLocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NpcLocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NpcLocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NpcLocationPayload>[]
          }
          upsert: {
            args: Prisma.NpcLocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NpcLocationPayload>
          }
          aggregate: {
            args: Prisma.NpcLocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNpcLocation>
          }
          groupBy: {
            args: Prisma.NpcLocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NpcLocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NpcLocationCountArgs<ExtArgs>
            result: $Utils.Optional<NpcLocationCountAggregateOutputType> | number
          }
        }
      }
      NpcQuest: {
        payload: Prisma.$NpcQuestPayload<ExtArgs>
        fields: Prisma.NpcQuestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NpcQuestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NpcQuestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NpcQuestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NpcQuestPayload>
          }
          findFirst: {
            args: Prisma.NpcQuestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NpcQuestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NpcQuestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NpcQuestPayload>
          }
          findMany: {
            args: Prisma.NpcQuestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NpcQuestPayload>[]
          }
          create: {
            args: Prisma.NpcQuestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NpcQuestPayload>
          }
          createMany: {
            args: Prisma.NpcQuestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NpcQuestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NpcQuestPayload>[]
          }
          delete: {
            args: Prisma.NpcQuestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NpcQuestPayload>
          }
          update: {
            args: Prisma.NpcQuestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NpcQuestPayload>
          }
          deleteMany: {
            args: Prisma.NpcQuestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NpcQuestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NpcQuestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NpcQuestPayload>[]
          }
          upsert: {
            args: Prisma.NpcQuestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NpcQuestPayload>
          }
          aggregate: {
            args: Prisma.NpcQuestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNpcQuest>
          }
          groupBy: {
            args: Prisma.NpcQuestGroupByArgs<ExtArgs>
            result: $Utils.Optional<NpcQuestGroupByOutputType>[]
          }
          count: {
            args: Prisma.NpcQuestCountArgs<ExtArgs>
            result: $Utils.Optional<NpcQuestCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    item?: ItemOmit
    npc?: NpcOmit
    offer?: OfferOmit
    city?: CityOmit
    quest?: QuestOmit
    npcLocation?: NpcLocationOmit
    npcQuest?: NpcQuestOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    offers: number
  }

  export type ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offers?: boolean | ItemCountOutputTypeCountOffersArgs
  }

  // Custom InputTypes
  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
     */
    select?: ItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountOffersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferWhereInput
  }


  /**
   * Count Type NpcCountOutputType
   */

  export type NpcCountOutputType = {
    offers: number
    locations: number
    npc_quests: number
  }

  export type NpcCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offers?: boolean | NpcCountOutputTypeCountOffersArgs
    locations?: boolean | NpcCountOutputTypeCountLocationsArgs
    npc_quests?: boolean | NpcCountOutputTypeCountNpc_questsArgs
  }

  // Custom InputTypes
  /**
   * NpcCountOutputType without action
   */
  export type NpcCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NpcCountOutputType
     */
    select?: NpcCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NpcCountOutputType without action
   */
  export type NpcCountOutputTypeCountOffersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferWhereInput
  }

  /**
   * NpcCountOutputType without action
   */
  export type NpcCountOutputTypeCountLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NpcLocationWhereInput
  }

  /**
   * NpcCountOutputType without action
   */
  export type NpcCountOutputTypeCountNpc_questsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NpcQuestWhereInput
  }


  /**
   * Count Type CityCountOutputType
   */

  export type CityCountOutputType = {
    locations: number
  }

  export type CityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locations?: boolean | CityCountOutputTypeCountLocationsArgs
  }

  // Custom InputTypes
  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityCountOutputType
     */
    select?: CityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NpcLocationWhereInput
  }


  /**
   * Count Type QuestCountOutputType
   */

  export type QuestCountOutputType = {
    npc_quests: number
  }

  export type QuestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    npc_quests?: boolean | QuestCountOutputTypeCountNpc_questsArgs
  }

  // Custom InputTypes
  /**
   * QuestCountOutputType without action
   */
  export type QuestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestCountOutputType
     */
    select?: QuestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestCountOutputType without action
   */
  export type QuestCountOutputTypeCountNpc_questsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NpcQuestWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    id: number | null
    weight: Decimal | null
  }

  export type ItemSumAggregateOutputType = {
    id: number | null
    weight: Decimal | null
  }

  export type ItemMinAggregateOutputType = {
    id: number | null
    name: string | null
    weight: Decimal | null
    type: $Enums.ItemType | null
    task_deliverable: boolean | null
    icon_url: string | null
  }

  export type ItemMaxAggregateOutputType = {
    id: number | null
    name: string | null
    weight: Decimal | null
    type: $Enums.ItemType | null
    task_deliverable: boolean | null
    icon_url: string | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    name: number
    weight: number
    type: number
    task_deliverable: number
    icon_url: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    id?: true
    weight?: true
  }

  export type ItemSumAggregateInputType = {
    id?: true
    weight?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    name?: true
    weight?: true
    type?: true
    task_deliverable?: true
    icon_url?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    name?: true
    weight?: true
    type?: true
    task_deliverable?: true
    icon_url?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    name?: true
    weight?: true
    type?: true
    task_deliverable?: true
    icon_url?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: number
    name: string
    weight: Decimal
    type: $Enums.ItemType
    task_deliverable: boolean
    icon_url: string | null
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    weight?: boolean
    type?: boolean
    task_deliverable?: boolean
    icon_url?: boolean
    offers?: boolean | Item$offersArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    weight?: boolean
    type?: boolean
    task_deliverable?: boolean
    icon_url?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    weight?: boolean
    type?: boolean
    task_deliverable?: boolean
    icon_url?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectScalar = {
    id?: boolean
    name?: boolean
    weight?: boolean
    type?: boolean
    task_deliverable?: boolean
    icon_url?: boolean
  }

  export type ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "weight" | "type" | "task_deliverable" | "icon_url", ExtArgs["result"]["item"]>
  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offers?: boolean | Item$offersArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      offers: Prisma.$OfferPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      weight: Prisma.Decimal
      type: $Enums.ItemType
      task_deliverable: boolean
      icon_url: string | null
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemFindManyArgs>(args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends ItemCreateArgs>(args: SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCreateManyArgs>(args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {ItemCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends ItemDeleteArgs>(args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemUpdateArgs>(args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDeleteManyArgs>(args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemUpdateManyArgs>(args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items and returns the data updated in the database.
     * @param {ItemUpdateManyAndReturnArgs} args - Arguments to update many Items.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends ItemUpsertArgs>(args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    offers<T extends Item$offersArgs<ExtArgs> = {}>(args?: Subset<T, Item$offersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Item model
   */
  interface ItemFieldRefs {
    readonly id: FieldRef<"Item", 'Int'>
    readonly name: FieldRef<"Item", 'String'>
    readonly weight: FieldRef<"Item", 'Decimal'>
    readonly type: FieldRef<"Item", 'ItemType'>
    readonly task_deliverable: FieldRef<"Item", 'Boolean'>
    readonly icon_url: FieldRef<"Item", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item createManyAndReturn
   */
  export type ItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item updateManyAndReturn
   */
  export type ItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }

  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to delete.
     */
    limit?: number
  }

  /**
   * Item.offers
   */
  export type Item$offersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    where?: OfferWhereInput
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    cursor?: OfferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
  }


  /**
   * Model Npc
   */

  export type AggregateNpc = {
    _count: NpcCountAggregateOutputType | null
    _avg: NpcAvgAggregateOutputType | null
    _sum: NpcSumAggregateOutputType | null
    _min: NpcMinAggregateOutputType | null
    _max: NpcMaxAggregateOutputType | null
  }

  export type NpcAvgAggregateOutputType = {
    id: number | null
  }

  export type NpcSumAggregateOutputType = {
    id: number | null
  }

  export type NpcMinAggregateOutputType = {
    id: number | null
    name: string | null
    needs_quest_to_unlock: boolean | null
  }

  export type NpcMaxAggregateOutputType = {
    id: number | null
    name: string | null
    needs_quest_to_unlock: boolean | null
  }

  export type NpcCountAggregateOutputType = {
    id: number
    name: number
    needs_quest_to_unlock: number
    _all: number
  }


  export type NpcAvgAggregateInputType = {
    id?: true
  }

  export type NpcSumAggregateInputType = {
    id?: true
  }

  export type NpcMinAggregateInputType = {
    id?: true
    name?: true
    needs_quest_to_unlock?: true
  }

  export type NpcMaxAggregateInputType = {
    id?: true
    name?: true
    needs_quest_to_unlock?: true
  }

  export type NpcCountAggregateInputType = {
    id?: true
    name?: true
    needs_quest_to_unlock?: true
    _all?: true
  }

  export type NpcAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Npc to aggregate.
     */
    where?: NpcWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Npcs to fetch.
     */
    orderBy?: NpcOrderByWithRelationInput | NpcOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NpcWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Npcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Npcs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Npcs
    **/
    _count?: true | NpcCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NpcAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NpcSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NpcMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NpcMaxAggregateInputType
  }

  export type GetNpcAggregateType<T extends NpcAggregateArgs> = {
        [P in keyof T & keyof AggregateNpc]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNpc[P]>
      : GetScalarType<T[P], AggregateNpc[P]>
  }




  export type NpcGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NpcWhereInput
    orderBy?: NpcOrderByWithAggregationInput | NpcOrderByWithAggregationInput[]
    by: NpcScalarFieldEnum[] | NpcScalarFieldEnum
    having?: NpcScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NpcCountAggregateInputType | true
    _avg?: NpcAvgAggregateInputType
    _sum?: NpcSumAggregateInputType
    _min?: NpcMinAggregateInputType
    _max?: NpcMaxAggregateInputType
  }

  export type NpcGroupByOutputType = {
    id: number
    name: string
    needs_quest_to_unlock: boolean
    _count: NpcCountAggregateOutputType | null
    _avg: NpcAvgAggregateOutputType | null
    _sum: NpcSumAggregateOutputType | null
    _min: NpcMinAggregateOutputType | null
    _max: NpcMaxAggregateOutputType | null
  }

  type GetNpcGroupByPayload<T extends NpcGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NpcGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NpcGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NpcGroupByOutputType[P]>
            : GetScalarType<T[P], NpcGroupByOutputType[P]>
        }
      >
    >


  export type NpcSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    needs_quest_to_unlock?: boolean
    offers?: boolean | Npc$offersArgs<ExtArgs>
    locations?: boolean | Npc$locationsArgs<ExtArgs>
    npc_quests?: boolean | Npc$npc_questsArgs<ExtArgs>
    _count?: boolean | NpcCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["npc"]>

  export type NpcSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    needs_quest_to_unlock?: boolean
  }, ExtArgs["result"]["npc"]>

  export type NpcSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    needs_quest_to_unlock?: boolean
  }, ExtArgs["result"]["npc"]>

  export type NpcSelectScalar = {
    id?: boolean
    name?: boolean
    needs_quest_to_unlock?: boolean
  }

  export type NpcOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "needs_quest_to_unlock", ExtArgs["result"]["npc"]>
  export type NpcInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offers?: boolean | Npc$offersArgs<ExtArgs>
    locations?: boolean | Npc$locationsArgs<ExtArgs>
    npc_quests?: boolean | Npc$npc_questsArgs<ExtArgs>
    _count?: boolean | NpcCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NpcIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type NpcIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NpcPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Npc"
    objects: {
      offers: Prisma.$OfferPayload<ExtArgs>[]
      locations: Prisma.$NpcLocationPayload<ExtArgs>[]
      npc_quests: Prisma.$NpcQuestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      needs_quest_to_unlock: boolean
    }, ExtArgs["result"]["npc"]>
    composites: {}
  }

  type NpcGetPayload<S extends boolean | null | undefined | NpcDefaultArgs> = $Result.GetResult<Prisma.$NpcPayload, S>

  type NpcCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NpcFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NpcCountAggregateInputType | true
    }

  export interface NpcDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Npc'], meta: { name: 'Npc' } }
    /**
     * Find zero or one Npc that matches the filter.
     * @param {NpcFindUniqueArgs} args - Arguments to find a Npc
     * @example
     * // Get one Npc
     * const npc = await prisma.npc.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NpcFindUniqueArgs>(args: SelectSubset<T, NpcFindUniqueArgs<ExtArgs>>): Prisma__NpcClient<$Result.GetResult<Prisma.$NpcPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Npc that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NpcFindUniqueOrThrowArgs} args - Arguments to find a Npc
     * @example
     * // Get one Npc
     * const npc = await prisma.npc.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NpcFindUniqueOrThrowArgs>(args: SelectSubset<T, NpcFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NpcClient<$Result.GetResult<Prisma.$NpcPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Npc that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NpcFindFirstArgs} args - Arguments to find a Npc
     * @example
     * // Get one Npc
     * const npc = await prisma.npc.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NpcFindFirstArgs>(args?: SelectSubset<T, NpcFindFirstArgs<ExtArgs>>): Prisma__NpcClient<$Result.GetResult<Prisma.$NpcPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Npc that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NpcFindFirstOrThrowArgs} args - Arguments to find a Npc
     * @example
     * // Get one Npc
     * const npc = await prisma.npc.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NpcFindFirstOrThrowArgs>(args?: SelectSubset<T, NpcFindFirstOrThrowArgs<ExtArgs>>): Prisma__NpcClient<$Result.GetResult<Prisma.$NpcPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Npcs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NpcFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Npcs
     * const npcs = await prisma.npc.findMany()
     * 
     * // Get first 10 Npcs
     * const npcs = await prisma.npc.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const npcWithIdOnly = await prisma.npc.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NpcFindManyArgs>(args?: SelectSubset<T, NpcFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NpcPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Npc.
     * @param {NpcCreateArgs} args - Arguments to create a Npc.
     * @example
     * // Create one Npc
     * const Npc = await prisma.npc.create({
     *   data: {
     *     // ... data to create a Npc
     *   }
     * })
     * 
     */
    create<T extends NpcCreateArgs>(args: SelectSubset<T, NpcCreateArgs<ExtArgs>>): Prisma__NpcClient<$Result.GetResult<Prisma.$NpcPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Npcs.
     * @param {NpcCreateManyArgs} args - Arguments to create many Npcs.
     * @example
     * // Create many Npcs
     * const npc = await prisma.npc.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NpcCreateManyArgs>(args?: SelectSubset<T, NpcCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Npcs and returns the data saved in the database.
     * @param {NpcCreateManyAndReturnArgs} args - Arguments to create many Npcs.
     * @example
     * // Create many Npcs
     * const npc = await prisma.npc.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Npcs and only return the `id`
     * const npcWithIdOnly = await prisma.npc.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NpcCreateManyAndReturnArgs>(args?: SelectSubset<T, NpcCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NpcPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Npc.
     * @param {NpcDeleteArgs} args - Arguments to delete one Npc.
     * @example
     * // Delete one Npc
     * const Npc = await prisma.npc.delete({
     *   where: {
     *     // ... filter to delete one Npc
     *   }
     * })
     * 
     */
    delete<T extends NpcDeleteArgs>(args: SelectSubset<T, NpcDeleteArgs<ExtArgs>>): Prisma__NpcClient<$Result.GetResult<Prisma.$NpcPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Npc.
     * @param {NpcUpdateArgs} args - Arguments to update one Npc.
     * @example
     * // Update one Npc
     * const npc = await prisma.npc.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NpcUpdateArgs>(args: SelectSubset<T, NpcUpdateArgs<ExtArgs>>): Prisma__NpcClient<$Result.GetResult<Prisma.$NpcPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Npcs.
     * @param {NpcDeleteManyArgs} args - Arguments to filter Npcs to delete.
     * @example
     * // Delete a few Npcs
     * const { count } = await prisma.npc.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NpcDeleteManyArgs>(args?: SelectSubset<T, NpcDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Npcs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NpcUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Npcs
     * const npc = await prisma.npc.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NpcUpdateManyArgs>(args: SelectSubset<T, NpcUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Npcs and returns the data updated in the database.
     * @param {NpcUpdateManyAndReturnArgs} args - Arguments to update many Npcs.
     * @example
     * // Update many Npcs
     * const npc = await prisma.npc.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Npcs and only return the `id`
     * const npcWithIdOnly = await prisma.npc.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NpcUpdateManyAndReturnArgs>(args: SelectSubset<T, NpcUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NpcPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Npc.
     * @param {NpcUpsertArgs} args - Arguments to update or create a Npc.
     * @example
     * // Update or create a Npc
     * const npc = await prisma.npc.upsert({
     *   create: {
     *     // ... data to create a Npc
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Npc we want to update
     *   }
     * })
     */
    upsert<T extends NpcUpsertArgs>(args: SelectSubset<T, NpcUpsertArgs<ExtArgs>>): Prisma__NpcClient<$Result.GetResult<Prisma.$NpcPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Npcs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NpcCountArgs} args - Arguments to filter Npcs to count.
     * @example
     * // Count the number of Npcs
     * const count = await prisma.npc.count({
     *   where: {
     *     // ... the filter for the Npcs we want to count
     *   }
     * })
    **/
    count<T extends NpcCountArgs>(
      args?: Subset<T, NpcCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NpcCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Npc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NpcAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NpcAggregateArgs>(args: Subset<T, NpcAggregateArgs>): Prisma.PrismaPromise<GetNpcAggregateType<T>>

    /**
     * Group by Npc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NpcGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NpcGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NpcGroupByArgs['orderBy'] }
        : { orderBy?: NpcGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NpcGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNpcGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Npc model
   */
  readonly fields: NpcFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Npc.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NpcClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    offers<T extends Npc$offersArgs<ExtArgs> = {}>(args?: Subset<T, Npc$offersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    locations<T extends Npc$locationsArgs<ExtArgs> = {}>(args?: Subset<T, Npc$locationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NpcLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    npc_quests<T extends Npc$npc_questsArgs<ExtArgs> = {}>(args?: Subset<T, Npc$npc_questsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NpcQuestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Npc model
   */
  interface NpcFieldRefs {
    readonly id: FieldRef<"Npc", 'Int'>
    readonly name: FieldRef<"Npc", 'String'>
    readonly needs_quest_to_unlock: FieldRef<"Npc", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Npc findUnique
   */
  export type NpcFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Npc
     */
    select?: NpcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Npc
     */
    omit?: NpcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NpcInclude<ExtArgs> | null
    /**
     * Filter, which Npc to fetch.
     */
    where: NpcWhereUniqueInput
  }

  /**
   * Npc findUniqueOrThrow
   */
  export type NpcFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Npc
     */
    select?: NpcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Npc
     */
    omit?: NpcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NpcInclude<ExtArgs> | null
    /**
     * Filter, which Npc to fetch.
     */
    where: NpcWhereUniqueInput
  }

  /**
   * Npc findFirst
   */
  export type NpcFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Npc
     */
    select?: NpcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Npc
     */
    omit?: NpcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NpcInclude<ExtArgs> | null
    /**
     * Filter, which Npc to fetch.
     */
    where?: NpcWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Npcs to fetch.
     */
    orderBy?: NpcOrderByWithRelationInput | NpcOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Npcs.
     */
    cursor?: NpcWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Npcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Npcs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Npcs.
     */
    distinct?: NpcScalarFieldEnum | NpcScalarFieldEnum[]
  }

  /**
   * Npc findFirstOrThrow
   */
  export type NpcFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Npc
     */
    select?: NpcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Npc
     */
    omit?: NpcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NpcInclude<ExtArgs> | null
    /**
     * Filter, which Npc to fetch.
     */
    where?: NpcWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Npcs to fetch.
     */
    orderBy?: NpcOrderByWithRelationInput | NpcOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Npcs.
     */
    cursor?: NpcWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Npcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Npcs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Npcs.
     */
    distinct?: NpcScalarFieldEnum | NpcScalarFieldEnum[]
  }

  /**
   * Npc findMany
   */
  export type NpcFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Npc
     */
    select?: NpcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Npc
     */
    omit?: NpcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NpcInclude<ExtArgs> | null
    /**
     * Filter, which Npcs to fetch.
     */
    where?: NpcWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Npcs to fetch.
     */
    orderBy?: NpcOrderByWithRelationInput | NpcOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Npcs.
     */
    cursor?: NpcWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Npcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Npcs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Npcs.
     */
    distinct?: NpcScalarFieldEnum | NpcScalarFieldEnum[]
  }

  /**
   * Npc create
   */
  export type NpcCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Npc
     */
    select?: NpcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Npc
     */
    omit?: NpcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NpcInclude<ExtArgs> | null
    /**
     * The data needed to create a Npc.
     */
    data: XOR<NpcCreateInput, NpcUncheckedCreateInput>
  }

  /**
   * Npc createMany
   */
  export type NpcCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Npcs.
     */
    data: NpcCreateManyInput | NpcCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Npc createManyAndReturn
   */
  export type NpcCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Npc
     */
    select?: NpcSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Npc
     */
    omit?: NpcOmit<ExtArgs> | null
    /**
     * The data used to create many Npcs.
     */
    data: NpcCreateManyInput | NpcCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Npc update
   */
  export type NpcUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Npc
     */
    select?: NpcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Npc
     */
    omit?: NpcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NpcInclude<ExtArgs> | null
    /**
     * The data needed to update a Npc.
     */
    data: XOR<NpcUpdateInput, NpcUncheckedUpdateInput>
    /**
     * Choose, which Npc to update.
     */
    where: NpcWhereUniqueInput
  }

  /**
   * Npc updateMany
   */
  export type NpcUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Npcs.
     */
    data: XOR<NpcUpdateManyMutationInput, NpcUncheckedUpdateManyInput>
    /**
     * Filter which Npcs to update
     */
    where?: NpcWhereInput
    /**
     * Limit how many Npcs to update.
     */
    limit?: number
  }

  /**
   * Npc updateManyAndReturn
   */
  export type NpcUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Npc
     */
    select?: NpcSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Npc
     */
    omit?: NpcOmit<ExtArgs> | null
    /**
     * The data used to update Npcs.
     */
    data: XOR<NpcUpdateManyMutationInput, NpcUncheckedUpdateManyInput>
    /**
     * Filter which Npcs to update
     */
    where?: NpcWhereInput
    /**
     * Limit how many Npcs to update.
     */
    limit?: number
  }

  /**
   * Npc upsert
   */
  export type NpcUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Npc
     */
    select?: NpcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Npc
     */
    omit?: NpcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NpcInclude<ExtArgs> | null
    /**
     * The filter to search for the Npc to update in case it exists.
     */
    where: NpcWhereUniqueInput
    /**
     * In case the Npc found by the `where` argument doesn't exist, create a new Npc with this data.
     */
    create: XOR<NpcCreateInput, NpcUncheckedCreateInput>
    /**
     * In case the Npc was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NpcUpdateInput, NpcUncheckedUpdateInput>
  }

  /**
   * Npc delete
   */
  export type NpcDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Npc
     */
    select?: NpcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Npc
     */
    omit?: NpcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NpcInclude<ExtArgs> | null
    /**
     * Filter which Npc to delete.
     */
    where: NpcWhereUniqueInput
  }

  /**
   * Npc deleteMany
   */
  export type NpcDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Npcs to delete
     */
    where?: NpcWhereInput
    /**
     * Limit how many Npcs to delete.
     */
    limit?: number
  }

  /**
   * Npc.offers
   */
  export type Npc$offersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    where?: OfferWhereInput
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    cursor?: OfferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Npc.locations
   */
  export type Npc$locationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NpcLocation
     */
    select?: NpcLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NpcLocation
     */
    omit?: NpcLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NpcLocationInclude<ExtArgs> | null
    where?: NpcLocationWhereInput
    orderBy?: NpcLocationOrderByWithRelationInput | NpcLocationOrderByWithRelationInput[]
    cursor?: NpcLocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NpcLocationScalarFieldEnum | NpcLocationScalarFieldEnum[]
  }

  /**
   * Npc.npc_quests
   */
  export type Npc$npc_questsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NpcQuest
     */
    select?: NpcQuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NpcQuest
     */
    omit?: NpcQuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NpcQuestInclude<ExtArgs> | null
    where?: NpcQuestWhereInput
    orderBy?: NpcQuestOrderByWithRelationInput | NpcQuestOrderByWithRelationInput[]
    cursor?: NpcQuestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NpcQuestScalarFieldEnum | NpcQuestScalarFieldEnum[]
  }

  /**
   * Npc without action
   */
  export type NpcDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Npc
     */
    select?: NpcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Npc
     */
    omit?: NpcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NpcInclude<ExtArgs> | null
  }


  /**
   * Model Offer
   */

  export type AggregateOffer = {
    _count: OfferCountAggregateOutputType | null
    _avg: OfferAvgAggregateOutputType | null
    _sum: OfferSumAggregateOutputType | null
    _min: OfferMinAggregateOutputType | null
    _max: OfferMaxAggregateOutputType | null
  }

  export type OfferAvgAggregateOutputType = {
    id: number | null
    item_id: number | null
    npc_id: number | null
    price: number | null
  }

  export type OfferSumAggregateOutputType = {
    id: number | null
    item_id: number | null
    npc_id: number | null
    price: number | null
  }

  export type OfferMinAggregateOutputType = {
    id: number | null
    item_id: number | null
    npc_id: number | null
    price: number | null
  }

  export type OfferMaxAggregateOutputType = {
    id: number | null
    item_id: number | null
    npc_id: number | null
    price: number | null
  }

  export type OfferCountAggregateOutputType = {
    id: number
    item_id: number
    npc_id: number
    price: number
    _all: number
  }


  export type OfferAvgAggregateInputType = {
    id?: true
    item_id?: true
    npc_id?: true
    price?: true
  }

  export type OfferSumAggregateInputType = {
    id?: true
    item_id?: true
    npc_id?: true
    price?: true
  }

  export type OfferMinAggregateInputType = {
    id?: true
    item_id?: true
    npc_id?: true
    price?: true
  }

  export type OfferMaxAggregateInputType = {
    id?: true
    item_id?: true
    npc_id?: true
    price?: true
  }

  export type OfferCountAggregateInputType = {
    id?: true
    item_id?: true
    npc_id?: true
    price?: true
    _all?: true
  }

  export type OfferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Offer to aggregate.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Offers
    **/
    _count?: true | OfferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OfferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OfferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OfferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OfferMaxAggregateInputType
  }

  export type GetOfferAggregateType<T extends OfferAggregateArgs> = {
        [P in keyof T & keyof AggregateOffer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOffer[P]>
      : GetScalarType<T[P], AggregateOffer[P]>
  }




  export type OfferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferWhereInput
    orderBy?: OfferOrderByWithAggregationInput | OfferOrderByWithAggregationInput[]
    by: OfferScalarFieldEnum[] | OfferScalarFieldEnum
    having?: OfferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OfferCountAggregateInputType | true
    _avg?: OfferAvgAggregateInputType
    _sum?: OfferSumAggregateInputType
    _min?: OfferMinAggregateInputType
    _max?: OfferMaxAggregateInputType
  }

  export type OfferGroupByOutputType = {
    id: number
    item_id: number
    npc_id: number
    price: number
    _count: OfferCountAggregateOutputType | null
    _avg: OfferAvgAggregateOutputType | null
    _sum: OfferSumAggregateOutputType | null
    _min: OfferMinAggregateOutputType | null
    _max: OfferMaxAggregateOutputType | null
  }

  type GetOfferGroupByPayload<T extends OfferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OfferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OfferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OfferGroupByOutputType[P]>
            : GetScalarType<T[P], OfferGroupByOutputType[P]>
        }
      >
    >


  export type OfferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    item_id?: boolean
    npc_id?: boolean
    price?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
    npc?: boolean | NpcDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offer"]>

  export type OfferSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    item_id?: boolean
    npc_id?: boolean
    price?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
    npc?: boolean | NpcDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offer"]>

  export type OfferSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    item_id?: boolean
    npc_id?: boolean
    price?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
    npc?: boolean | NpcDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offer"]>

  export type OfferSelectScalar = {
    id?: boolean
    item_id?: boolean
    npc_id?: boolean
    price?: boolean
  }

  export type OfferOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "item_id" | "npc_id" | "price", ExtArgs["result"]["offer"]>
  export type OfferInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
    npc?: boolean | NpcDefaultArgs<ExtArgs>
  }
  export type OfferIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
    npc?: boolean | NpcDefaultArgs<ExtArgs>
  }
  export type OfferIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
    npc?: boolean | NpcDefaultArgs<ExtArgs>
  }

  export type $OfferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Offer"
    objects: {
      item: Prisma.$ItemPayload<ExtArgs>
      npc: Prisma.$NpcPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      item_id: number
      npc_id: number
      price: number
    }, ExtArgs["result"]["offer"]>
    composites: {}
  }

  type OfferGetPayload<S extends boolean | null | undefined | OfferDefaultArgs> = $Result.GetResult<Prisma.$OfferPayload, S>

  type OfferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OfferFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OfferCountAggregateInputType | true
    }

  export interface OfferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Offer'], meta: { name: 'Offer' } }
    /**
     * Find zero or one Offer that matches the filter.
     * @param {OfferFindUniqueArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OfferFindUniqueArgs>(args: SelectSubset<T, OfferFindUniqueArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Offer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OfferFindUniqueOrThrowArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OfferFindUniqueOrThrowArgs>(args: SelectSubset<T, OfferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Offer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferFindFirstArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OfferFindFirstArgs>(args?: SelectSubset<T, OfferFindFirstArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Offer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferFindFirstOrThrowArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OfferFindFirstOrThrowArgs>(args?: SelectSubset<T, OfferFindFirstOrThrowArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Offers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Offers
     * const offers = await prisma.offer.findMany()
     * 
     * // Get first 10 Offers
     * const offers = await prisma.offer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const offerWithIdOnly = await prisma.offer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OfferFindManyArgs>(args?: SelectSubset<T, OfferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Offer.
     * @param {OfferCreateArgs} args - Arguments to create a Offer.
     * @example
     * // Create one Offer
     * const Offer = await prisma.offer.create({
     *   data: {
     *     // ... data to create a Offer
     *   }
     * })
     * 
     */
    create<T extends OfferCreateArgs>(args: SelectSubset<T, OfferCreateArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Offers.
     * @param {OfferCreateManyArgs} args - Arguments to create many Offers.
     * @example
     * // Create many Offers
     * const offer = await prisma.offer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OfferCreateManyArgs>(args?: SelectSubset<T, OfferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Offers and returns the data saved in the database.
     * @param {OfferCreateManyAndReturnArgs} args - Arguments to create many Offers.
     * @example
     * // Create many Offers
     * const offer = await prisma.offer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Offers and only return the `id`
     * const offerWithIdOnly = await prisma.offer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OfferCreateManyAndReturnArgs>(args?: SelectSubset<T, OfferCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Offer.
     * @param {OfferDeleteArgs} args - Arguments to delete one Offer.
     * @example
     * // Delete one Offer
     * const Offer = await prisma.offer.delete({
     *   where: {
     *     // ... filter to delete one Offer
     *   }
     * })
     * 
     */
    delete<T extends OfferDeleteArgs>(args: SelectSubset<T, OfferDeleteArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Offer.
     * @param {OfferUpdateArgs} args - Arguments to update one Offer.
     * @example
     * // Update one Offer
     * const offer = await prisma.offer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OfferUpdateArgs>(args: SelectSubset<T, OfferUpdateArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Offers.
     * @param {OfferDeleteManyArgs} args - Arguments to filter Offers to delete.
     * @example
     * // Delete a few Offers
     * const { count } = await prisma.offer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OfferDeleteManyArgs>(args?: SelectSubset<T, OfferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Offers
     * const offer = await prisma.offer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OfferUpdateManyArgs>(args: SelectSubset<T, OfferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Offers and returns the data updated in the database.
     * @param {OfferUpdateManyAndReturnArgs} args - Arguments to update many Offers.
     * @example
     * // Update many Offers
     * const offer = await prisma.offer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Offers and only return the `id`
     * const offerWithIdOnly = await prisma.offer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OfferUpdateManyAndReturnArgs>(args: SelectSubset<T, OfferUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Offer.
     * @param {OfferUpsertArgs} args - Arguments to update or create a Offer.
     * @example
     * // Update or create a Offer
     * const offer = await prisma.offer.upsert({
     *   create: {
     *     // ... data to create a Offer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Offer we want to update
     *   }
     * })
     */
    upsert<T extends OfferUpsertArgs>(args: SelectSubset<T, OfferUpsertArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferCountArgs} args - Arguments to filter Offers to count.
     * @example
     * // Count the number of Offers
     * const count = await prisma.offer.count({
     *   where: {
     *     // ... the filter for the Offers we want to count
     *   }
     * })
    **/
    count<T extends OfferCountArgs>(
      args?: Subset<T, OfferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OfferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Offer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OfferAggregateArgs>(args: Subset<T, OfferAggregateArgs>): Prisma.PrismaPromise<GetOfferAggregateType<T>>

    /**
     * Group by Offer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OfferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OfferGroupByArgs['orderBy'] }
        : { orderBy?: OfferGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OfferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Offer model
   */
  readonly fields: OfferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Offer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OfferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    npc<T extends NpcDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NpcDefaultArgs<ExtArgs>>): Prisma__NpcClient<$Result.GetResult<Prisma.$NpcPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Offer model
   */
  interface OfferFieldRefs {
    readonly id: FieldRef<"Offer", 'Int'>
    readonly item_id: FieldRef<"Offer", 'Int'>
    readonly npc_id: FieldRef<"Offer", 'Int'>
    readonly price: FieldRef<"Offer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Offer findUnique
   */
  export type OfferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer findUniqueOrThrow
   */
  export type OfferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer findFirst
   */
  export type OfferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Offers.
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Offers.
     */
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Offer findFirstOrThrow
   */
  export type OfferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Offers.
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Offers.
     */
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Offer findMany
   */
  export type OfferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offers to fetch.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Offers.
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Offers.
     */
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Offer create
   */
  export type OfferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * The data needed to create a Offer.
     */
    data: XOR<OfferCreateInput, OfferUncheckedCreateInput>
  }

  /**
   * Offer createMany
   */
  export type OfferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Offers.
     */
    data: OfferCreateManyInput | OfferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Offer createManyAndReturn
   */
  export type OfferCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * The data used to create many Offers.
     */
    data: OfferCreateManyInput | OfferCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Offer update
   */
  export type OfferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * The data needed to update a Offer.
     */
    data: XOR<OfferUpdateInput, OfferUncheckedUpdateInput>
    /**
     * Choose, which Offer to update.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer updateMany
   */
  export type OfferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Offers.
     */
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyInput>
    /**
     * Filter which Offers to update
     */
    where?: OfferWhereInput
    /**
     * Limit how many Offers to update.
     */
    limit?: number
  }

  /**
   * Offer updateManyAndReturn
   */
  export type OfferUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * The data used to update Offers.
     */
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyInput>
    /**
     * Filter which Offers to update
     */
    where?: OfferWhereInput
    /**
     * Limit how many Offers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Offer upsert
   */
  export type OfferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * The filter to search for the Offer to update in case it exists.
     */
    where: OfferWhereUniqueInput
    /**
     * In case the Offer found by the `where` argument doesn't exist, create a new Offer with this data.
     */
    create: XOR<OfferCreateInput, OfferUncheckedCreateInput>
    /**
     * In case the Offer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OfferUpdateInput, OfferUncheckedUpdateInput>
  }

  /**
   * Offer delete
   */
  export type OfferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter which Offer to delete.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer deleteMany
   */
  export type OfferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Offers to delete
     */
    where?: OfferWhereInput
    /**
     * Limit how many Offers to delete.
     */
    limit?: number
  }

  /**
   * Offer without action
   */
  export type OfferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
  }


  /**
   * Model City
   */

  export type AggregateCity = {
    _count: CityCountAggregateOutputType | null
    _avg: CityAvgAggregateOutputType | null
    _sum: CitySumAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  export type CityAvgAggregateOutputType = {
    id: number | null
  }

  export type CitySumAggregateOutputType = {
    id: number | null
  }

  export type CityMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CityMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CityCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CityAvgAggregateInputType = {
    id?: true
  }

  export type CitySumAggregateInputType = {
    id?: true
  }

  export type CityMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CityMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CityCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which City to aggregate.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cities
    **/
    _count?: true | CityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CityMaxAggregateInputType
  }

  export type GetCityAggregateType<T extends CityAggregateArgs> = {
        [P in keyof T & keyof AggregateCity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCity[P]>
      : GetScalarType<T[P], AggregateCity[P]>
  }




  export type CityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CityWhereInput
    orderBy?: CityOrderByWithAggregationInput | CityOrderByWithAggregationInput[]
    by: CityScalarFieldEnum[] | CityScalarFieldEnum
    having?: CityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CityCountAggregateInputType | true
    _avg?: CityAvgAggregateInputType
    _sum?: CitySumAggregateInputType
    _min?: CityMinAggregateInputType
    _max?: CityMaxAggregateInputType
  }

  export type CityGroupByOutputType = {
    id: number
    name: string
    _count: CityCountAggregateOutputType | null
    _avg: CityAvgAggregateOutputType | null
    _sum: CitySumAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  type GetCityGroupByPayload<T extends CityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CityGroupByOutputType[P]>
            : GetScalarType<T[P], CityGroupByOutputType[P]>
        }
      >
    >


  export type CitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    locations?: boolean | City$locationsArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["city"]>

  export type CitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["city"]>

  export type CitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["city"]>

  export type CitySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["city"]>
  export type CityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locations?: boolean | City$locationsArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "City"
    objects: {
      locations: Prisma.$NpcLocationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["city"]>
    composites: {}
  }

  type CityGetPayload<S extends boolean | null | undefined | CityDefaultArgs> = $Result.GetResult<Prisma.$CityPayload, S>

  type CityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CityCountAggregateInputType | true
    }

  export interface CityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['City'], meta: { name: 'City' } }
    /**
     * Find zero or one City that matches the filter.
     * @param {CityFindUniqueArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CityFindUniqueArgs>(args: SelectSubset<T, CityFindUniqueArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one City that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CityFindUniqueOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CityFindUniqueOrThrowArgs>(args: SelectSubset<T, CityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first City that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CityFindFirstArgs>(args?: SelectSubset<T, CityFindFirstArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first City that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CityFindFirstOrThrowArgs>(args?: SelectSubset<T, CityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cities
     * const cities = await prisma.city.findMany()
     * 
     * // Get first 10 Cities
     * const cities = await prisma.city.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cityWithIdOnly = await prisma.city.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CityFindManyArgs>(args?: SelectSubset<T, CityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a City.
     * @param {CityCreateArgs} args - Arguments to create a City.
     * @example
     * // Create one City
     * const City = await prisma.city.create({
     *   data: {
     *     // ... data to create a City
     *   }
     * })
     * 
     */
    create<T extends CityCreateArgs>(args: SelectSubset<T, CityCreateArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cities.
     * @param {CityCreateManyArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const city = await prisma.city.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CityCreateManyArgs>(args?: SelectSubset<T, CityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cities and returns the data saved in the database.
     * @param {CityCreateManyAndReturnArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const city = await prisma.city.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cities and only return the `id`
     * const cityWithIdOnly = await prisma.city.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CityCreateManyAndReturnArgs>(args?: SelectSubset<T, CityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a City.
     * @param {CityDeleteArgs} args - Arguments to delete one City.
     * @example
     * // Delete one City
     * const City = await prisma.city.delete({
     *   where: {
     *     // ... filter to delete one City
     *   }
     * })
     * 
     */
    delete<T extends CityDeleteArgs>(args: SelectSubset<T, CityDeleteArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one City.
     * @param {CityUpdateArgs} args - Arguments to update one City.
     * @example
     * // Update one City
     * const city = await prisma.city.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CityUpdateArgs>(args: SelectSubset<T, CityUpdateArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cities.
     * @param {CityDeleteManyArgs} args - Arguments to filter Cities to delete.
     * @example
     * // Delete a few Cities
     * const { count } = await prisma.city.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CityDeleteManyArgs>(args?: SelectSubset<T, CityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cities
     * const city = await prisma.city.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CityUpdateManyArgs>(args: SelectSubset<T, CityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities and returns the data updated in the database.
     * @param {CityUpdateManyAndReturnArgs} args - Arguments to update many Cities.
     * @example
     * // Update many Cities
     * const city = await prisma.city.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cities and only return the `id`
     * const cityWithIdOnly = await prisma.city.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CityUpdateManyAndReturnArgs>(args: SelectSubset<T, CityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one City.
     * @param {CityUpsertArgs} args - Arguments to update or create a City.
     * @example
     * // Update or create a City
     * const city = await prisma.city.upsert({
     *   create: {
     *     // ... data to create a City
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the City we want to update
     *   }
     * })
     */
    upsert<T extends CityUpsertArgs>(args: SelectSubset<T, CityUpsertArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityCountArgs} args - Arguments to filter Cities to count.
     * @example
     * // Count the number of Cities
     * const count = await prisma.city.count({
     *   where: {
     *     // ... the filter for the Cities we want to count
     *   }
     * })
    **/
    count<T extends CityCountArgs>(
      args?: Subset<T, CityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CityAggregateArgs>(args: Subset<T, CityAggregateArgs>): Prisma.PrismaPromise<GetCityAggregateType<T>>

    /**
     * Group by City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CityGroupByArgs['orderBy'] }
        : { orderBy?: CityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the City model
   */
  readonly fields: CityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for City.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    locations<T extends City$locationsArgs<ExtArgs> = {}>(args?: Subset<T, City$locationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NpcLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the City model
   */
  interface CityFieldRefs {
    readonly id: FieldRef<"City", 'Int'>
    readonly name: FieldRef<"City", 'String'>
  }
    

  // Custom InputTypes
  /**
   * City findUnique
   */
  export type CityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City findUniqueOrThrow
   */
  export type CityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City findFirst
   */
  export type CityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City findFirstOrThrow
   */
  export type CityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City findMany
   */
  export type CityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which Cities to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City create
   */
  export type CityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The data needed to create a City.
     */
    data: XOR<CityCreateInput, CityUncheckedCreateInput>
  }

  /**
   * City createMany
   */
  export type CityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cities.
     */
    data: CityCreateManyInput | CityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * City createManyAndReturn
   */
  export type CityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * The data used to create many Cities.
     */
    data: CityCreateManyInput | CityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * City update
   */
  export type CityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The data needed to update a City.
     */
    data: XOR<CityUpdateInput, CityUncheckedUpdateInput>
    /**
     * Choose, which City to update.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City updateMany
   */
  export type CityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cities.
     */
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyInput>
    /**
     * Filter which Cities to update
     */
    where?: CityWhereInput
    /**
     * Limit how many Cities to update.
     */
    limit?: number
  }

  /**
   * City updateManyAndReturn
   */
  export type CityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * The data used to update Cities.
     */
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyInput>
    /**
     * Filter which Cities to update
     */
    where?: CityWhereInput
    /**
     * Limit how many Cities to update.
     */
    limit?: number
  }

  /**
   * City upsert
   */
  export type CityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The filter to search for the City to update in case it exists.
     */
    where: CityWhereUniqueInput
    /**
     * In case the City found by the `where` argument doesn't exist, create a new City with this data.
     */
    create: XOR<CityCreateInput, CityUncheckedCreateInput>
    /**
     * In case the City was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CityUpdateInput, CityUncheckedUpdateInput>
  }

  /**
   * City delete
   */
  export type CityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter which City to delete.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City deleteMany
   */
  export type CityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cities to delete
     */
    where?: CityWhereInput
    /**
     * Limit how many Cities to delete.
     */
    limit?: number
  }

  /**
   * City.locations
   */
  export type City$locationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NpcLocation
     */
    select?: NpcLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NpcLocation
     */
    omit?: NpcLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NpcLocationInclude<ExtArgs> | null
    where?: NpcLocationWhereInput
    orderBy?: NpcLocationOrderByWithRelationInput | NpcLocationOrderByWithRelationInput[]
    cursor?: NpcLocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NpcLocationScalarFieldEnum | NpcLocationScalarFieldEnum[]
  }

  /**
   * City without action
   */
  export type CityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
  }


  /**
   * Model Quest
   */

  export type AggregateQuest = {
    _count: QuestCountAggregateOutputType | null
    _avg: QuestAvgAggregateOutputType | null
    _sum: QuestSumAggregateOutputType | null
    _min: QuestMinAggregateOutputType | null
    _max: QuestMaxAggregateOutputType | null
  }

  export type QuestAvgAggregateOutputType = {
    id: number | null
  }

  export type QuestSumAggregateOutputType = {
    id: number | null
  }

  export type QuestMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type QuestMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type QuestCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type QuestAvgAggregateInputType = {
    id?: true
  }

  export type QuestSumAggregateInputType = {
    id?: true
  }

  export type QuestMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type QuestMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type QuestCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type QuestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quest to aggregate.
     */
    where?: QuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quests to fetch.
     */
    orderBy?: QuestOrderByWithRelationInput | QuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quests
    **/
    _count?: true | QuestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestMaxAggregateInputType
  }

  export type GetQuestAggregateType<T extends QuestAggregateArgs> = {
        [P in keyof T & keyof AggregateQuest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuest[P]>
      : GetScalarType<T[P], AggregateQuest[P]>
  }




  export type QuestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestWhereInput
    orderBy?: QuestOrderByWithAggregationInput | QuestOrderByWithAggregationInput[]
    by: QuestScalarFieldEnum[] | QuestScalarFieldEnum
    having?: QuestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestCountAggregateInputType | true
    _avg?: QuestAvgAggregateInputType
    _sum?: QuestSumAggregateInputType
    _min?: QuestMinAggregateInputType
    _max?: QuestMaxAggregateInputType
  }

  export type QuestGroupByOutputType = {
    id: number
    name: string
    _count: QuestCountAggregateOutputType | null
    _avg: QuestAvgAggregateOutputType | null
    _sum: QuestSumAggregateOutputType | null
    _min: QuestMinAggregateOutputType | null
    _max: QuestMaxAggregateOutputType | null
  }

  type GetQuestGroupByPayload<T extends QuestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestGroupByOutputType[P]>
            : GetScalarType<T[P], QuestGroupByOutputType[P]>
        }
      >
    >


  export type QuestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    npc_quests?: boolean | Quest$npc_questsArgs<ExtArgs>
    _count?: boolean | QuestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quest"]>

  export type QuestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["quest"]>

  export type QuestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["quest"]>

  export type QuestSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type QuestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["quest"]>
  export type QuestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    npc_quests?: boolean | Quest$npc_questsArgs<ExtArgs>
    _count?: boolean | QuestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type QuestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $QuestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quest"
    objects: {
      npc_quests: Prisma.$NpcQuestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["quest"]>
    composites: {}
  }

  type QuestGetPayload<S extends boolean | null | undefined | QuestDefaultArgs> = $Result.GetResult<Prisma.$QuestPayload, S>

  type QuestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestCountAggregateInputType | true
    }

  export interface QuestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quest'], meta: { name: 'Quest' } }
    /**
     * Find zero or one Quest that matches the filter.
     * @param {QuestFindUniqueArgs} args - Arguments to find a Quest
     * @example
     * // Get one Quest
     * const quest = await prisma.quest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestFindUniqueArgs>(args: SelectSubset<T, QuestFindUniqueArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestFindUniqueOrThrowArgs} args - Arguments to find a Quest
     * @example
     * // Get one Quest
     * const quest = await prisma.quest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestFindFirstArgs} args - Arguments to find a Quest
     * @example
     * // Get one Quest
     * const quest = await prisma.quest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestFindFirstArgs>(args?: SelectSubset<T, QuestFindFirstArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestFindFirstOrThrowArgs} args - Arguments to find a Quest
     * @example
     * // Get one Quest
     * const quest = await prisma.quest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quests
     * const quests = await prisma.quest.findMany()
     * 
     * // Get first 10 Quests
     * const quests = await prisma.quest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questWithIdOnly = await prisma.quest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestFindManyArgs>(args?: SelectSubset<T, QuestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quest.
     * @param {QuestCreateArgs} args - Arguments to create a Quest.
     * @example
     * // Create one Quest
     * const Quest = await prisma.quest.create({
     *   data: {
     *     // ... data to create a Quest
     *   }
     * })
     * 
     */
    create<T extends QuestCreateArgs>(args: SelectSubset<T, QuestCreateArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quests.
     * @param {QuestCreateManyArgs} args - Arguments to create many Quests.
     * @example
     * // Create many Quests
     * const quest = await prisma.quest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestCreateManyArgs>(args?: SelectSubset<T, QuestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Quests and returns the data saved in the database.
     * @param {QuestCreateManyAndReturnArgs} args - Arguments to create many Quests.
     * @example
     * // Create many Quests
     * const quest = await prisma.quest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Quests and only return the `id`
     * const questWithIdOnly = await prisma.quest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Quest.
     * @param {QuestDeleteArgs} args - Arguments to delete one Quest.
     * @example
     * // Delete one Quest
     * const Quest = await prisma.quest.delete({
     *   where: {
     *     // ... filter to delete one Quest
     *   }
     * })
     * 
     */
    delete<T extends QuestDeleteArgs>(args: SelectSubset<T, QuestDeleteArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quest.
     * @param {QuestUpdateArgs} args - Arguments to update one Quest.
     * @example
     * // Update one Quest
     * const quest = await prisma.quest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestUpdateArgs>(args: SelectSubset<T, QuestUpdateArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quests.
     * @param {QuestDeleteManyArgs} args - Arguments to filter Quests to delete.
     * @example
     * // Delete a few Quests
     * const { count } = await prisma.quest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestDeleteManyArgs>(args?: SelectSubset<T, QuestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quests
     * const quest = await prisma.quest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestUpdateManyArgs>(args: SelectSubset<T, QuestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quests and returns the data updated in the database.
     * @param {QuestUpdateManyAndReturnArgs} args - Arguments to update many Quests.
     * @example
     * // Update many Quests
     * const quest = await prisma.quest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Quests and only return the `id`
     * const questWithIdOnly = await prisma.quest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuestUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Quest.
     * @param {QuestUpsertArgs} args - Arguments to update or create a Quest.
     * @example
     * // Update or create a Quest
     * const quest = await prisma.quest.upsert({
     *   create: {
     *     // ... data to create a Quest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quest we want to update
     *   }
     * })
     */
    upsert<T extends QuestUpsertArgs>(args: SelectSubset<T, QuestUpsertArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestCountArgs} args - Arguments to filter Quests to count.
     * @example
     * // Count the number of Quests
     * const count = await prisma.quest.count({
     *   where: {
     *     // ... the filter for the Quests we want to count
     *   }
     * })
    **/
    count<T extends QuestCountArgs>(
      args?: Subset<T, QuestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestAggregateArgs>(args: Subset<T, QuestAggregateArgs>): Prisma.PrismaPromise<GetQuestAggregateType<T>>

    /**
     * Group by Quest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestGroupByArgs['orderBy'] }
        : { orderBy?: QuestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quest model
   */
  readonly fields: QuestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    npc_quests<T extends Quest$npc_questsArgs<ExtArgs> = {}>(args?: Subset<T, Quest$npc_questsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NpcQuestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Quest model
   */
  interface QuestFieldRefs {
    readonly id: FieldRef<"Quest", 'Int'>
    readonly name: FieldRef<"Quest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Quest findUnique
   */
  export type QuestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter, which Quest to fetch.
     */
    where: QuestWhereUniqueInput
  }

  /**
   * Quest findUniqueOrThrow
   */
  export type QuestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter, which Quest to fetch.
     */
    where: QuestWhereUniqueInput
  }

  /**
   * Quest findFirst
   */
  export type QuestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter, which Quest to fetch.
     */
    where?: QuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quests to fetch.
     */
    orderBy?: QuestOrderByWithRelationInput | QuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quests.
     */
    cursor?: QuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quests.
     */
    distinct?: QuestScalarFieldEnum | QuestScalarFieldEnum[]
  }

  /**
   * Quest findFirstOrThrow
   */
  export type QuestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter, which Quest to fetch.
     */
    where?: QuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quests to fetch.
     */
    orderBy?: QuestOrderByWithRelationInput | QuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quests.
     */
    cursor?: QuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quests.
     */
    distinct?: QuestScalarFieldEnum | QuestScalarFieldEnum[]
  }

  /**
   * Quest findMany
   */
  export type QuestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter, which Quests to fetch.
     */
    where?: QuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quests to fetch.
     */
    orderBy?: QuestOrderByWithRelationInput | QuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quests.
     */
    cursor?: QuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quests.
     */
    distinct?: QuestScalarFieldEnum | QuestScalarFieldEnum[]
  }

  /**
   * Quest create
   */
  export type QuestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * The data needed to create a Quest.
     */
    data: XOR<QuestCreateInput, QuestUncheckedCreateInput>
  }

  /**
   * Quest createMany
   */
  export type QuestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quests.
     */
    data: QuestCreateManyInput | QuestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quest createManyAndReturn
   */
  export type QuestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * The data used to create many Quests.
     */
    data: QuestCreateManyInput | QuestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quest update
   */
  export type QuestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * The data needed to update a Quest.
     */
    data: XOR<QuestUpdateInput, QuestUncheckedUpdateInput>
    /**
     * Choose, which Quest to update.
     */
    where: QuestWhereUniqueInput
  }

  /**
   * Quest updateMany
   */
  export type QuestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quests.
     */
    data: XOR<QuestUpdateManyMutationInput, QuestUncheckedUpdateManyInput>
    /**
     * Filter which Quests to update
     */
    where?: QuestWhereInput
    /**
     * Limit how many Quests to update.
     */
    limit?: number
  }

  /**
   * Quest updateManyAndReturn
   */
  export type QuestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * The data used to update Quests.
     */
    data: XOR<QuestUpdateManyMutationInput, QuestUncheckedUpdateManyInput>
    /**
     * Filter which Quests to update
     */
    where?: QuestWhereInput
    /**
     * Limit how many Quests to update.
     */
    limit?: number
  }

  /**
   * Quest upsert
   */
  export type QuestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * The filter to search for the Quest to update in case it exists.
     */
    where: QuestWhereUniqueInput
    /**
     * In case the Quest found by the `where` argument doesn't exist, create a new Quest with this data.
     */
    create: XOR<QuestCreateInput, QuestUncheckedCreateInput>
    /**
     * In case the Quest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestUpdateInput, QuestUncheckedUpdateInput>
  }

  /**
   * Quest delete
   */
  export type QuestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter which Quest to delete.
     */
    where: QuestWhereUniqueInput
  }

  /**
   * Quest deleteMany
   */
  export type QuestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quests to delete
     */
    where?: QuestWhereInput
    /**
     * Limit how many Quests to delete.
     */
    limit?: number
  }

  /**
   * Quest.npc_quests
   */
  export type Quest$npc_questsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NpcQuest
     */
    select?: NpcQuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NpcQuest
     */
    omit?: NpcQuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NpcQuestInclude<ExtArgs> | null
    where?: NpcQuestWhereInput
    orderBy?: NpcQuestOrderByWithRelationInput | NpcQuestOrderByWithRelationInput[]
    cursor?: NpcQuestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NpcQuestScalarFieldEnum | NpcQuestScalarFieldEnum[]
  }

  /**
   * Quest without action
   */
  export type QuestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
  }


  /**
   * Model NpcLocation
   */

  export type AggregateNpcLocation = {
    _count: NpcLocationCountAggregateOutputType | null
    _avg: NpcLocationAvgAggregateOutputType | null
    _sum: NpcLocationSumAggregateOutputType | null
    _min: NpcLocationMinAggregateOutputType | null
    _max: NpcLocationMaxAggregateOutputType | null
  }

  export type NpcLocationAvgAggregateOutputType = {
    id: number | null
    npc_id: number | null
    city_id: number | null
    coord_x: number | null
    coord_y: number | null
    coord_z: number | null
  }

  export type NpcLocationSumAggregateOutputType = {
    id: number | null
    npc_id: number | null
    city_id: number | null
    coord_x: number | null
    coord_y: number | null
    coord_z: number | null
  }

  export type NpcLocationMinAggregateOutputType = {
    id: number | null
    npc_id: number | null
    city_id: number | null
    coord_x: number | null
    coord_y: number | null
    coord_z: number | null
  }

  export type NpcLocationMaxAggregateOutputType = {
    id: number | null
    npc_id: number | null
    city_id: number | null
    coord_x: number | null
    coord_y: number | null
    coord_z: number | null
  }

  export type NpcLocationCountAggregateOutputType = {
    id: number
    npc_id: number
    city_id: number
    coord_x: number
    coord_y: number
    coord_z: number
    _all: number
  }


  export type NpcLocationAvgAggregateInputType = {
    id?: true
    npc_id?: true
    city_id?: true
    coord_x?: true
    coord_y?: true
    coord_z?: true
  }

  export type NpcLocationSumAggregateInputType = {
    id?: true
    npc_id?: true
    city_id?: true
    coord_x?: true
    coord_y?: true
    coord_z?: true
  }

  export type NpcLocationMinAggregateInputType = {
    id?: true
    npc_id?: true
    city_id?: true
    coord_x?: true
    coord_y?: true
    coord_z?: true
  }

  export type NpcLocationMaxAggregateInputType = {
    id?: true
    npc_id?: true
    city_id?: true
    coord_x?: true
    coord_y?: true
    coord_z?: true
  }

  export type NpcLocationCountAggregateInputType = {
    id?: true
    npc_id?: true
    city_id?: true
    coord_x?: true
    coord_y?: true
    coord_z?: true
    _all?: true
  }

  export type NpcLocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NpcLocation to aggregate.
     */
    where?: NpcLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NpcLocations to fetch.
     */
    orderBy?: NpcLocationOrderByWithRelationInput | NpcLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NpcLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NpcLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NpcLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NpcLocations
    **/
    _count?: true | NpcLocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NpcLocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NpcLocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NpcLocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NpcLocationMaxAggregateInputType
  }

  export type GetNpcLocationAggregateType<T extends NpcLocationAggregateArgs> = {
        [P in keyof T & keyof AggregateNpcLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNpcLocation[P]>
      : GetScalarType<T[P], AggregateNpcLocation[P]>
  }




  export type NpcLocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NpcLocationWhereInput
    orderBy?: NpcLocationOrderByWithAggregationInput | NpcLocationOrderByWithAggregationInput[]
    by: NpcLocationScalarFieldEnum[] | NpcLocationScalarFieldEnum
    having?: NpcLocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NpcLocationCountAggregateInputType | true
    _avg?: NpcLocationAvgAggregateInputType
    _sum?: NpcLocationSumAggregateInputType
    _min?: NpcLocationMinAggregateInputType
    _max?: NpcLocationMaxAggregateInputType
  }

  export type NpcLocationGroupByOutputType = {
    id: number
    npc_id: number
    city_id: number
    coord_x: number
    coord_y: number
    coord_z: number
    _count: NpcLocationCountAggregateOutputType | null
    _avg: NpcLocationAvgAggregateOutputType | null
    _sum: NpcLocationSumAggregateOutputType | null
    _min: NpcLocationMinAggregateOutputType | null
    _max: NpcLocationMaxAggregateOutputType | null
  }

  type GetNpcLocationGroupByPayload<T extends NpcLocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NpcLocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NpcLocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NpcLocationGroupByOutputType[P]>
            : GetScalarType<T[P], NpcLocationGroupByOutputType[P]>
        }
      >
    >


  export type NpcLocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    npc_id?: boolean
    city_id?: boolean
    coord_x?: boolean
    coord_y?: boolean
    coord_z?: boolean
    npc?: boolean | NpcDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["npcLocation"]>

  export type NpcLocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    npc_id?: boolean
    city_id?: boolean
    coord_x?: boolean
    coord_y?: boolean
    coord_z?: boolean
    npc?: boolean | NpcDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["npcLocation"]>

  export type NpcLocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    npc_id?: boolean
    city_id?: boolean
    coord_x?: boolean
    coord_y?: boolean
    coord_z?: boolean
    npc?: boolean | NpcDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["npcLocation"]>

  export type NpcLocationSelectScalar = {
    id?: boolean
    npc_id?: boolean
    city_id?: boolean
    coord_x?: boolean
    coord_y?: boolean
    coord_z?: boolean
  }

  export type NpcLocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "npc_id" | "city_id" | "coord_x" | "coord_y" | "coord_z", ExtArgs["result"]["npcLocation"]>
  export type NpcLocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    npc?: boolean | NpcDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
  }
  export type NpcLocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    npc?: boolean | NpcDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
  }
  export type NpcLocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    npc?: boolean | NpcDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
  }

  export type $NpcLocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NpcLocation"
    objects: {
      npc: Prisma.$NpcPayload<ExtArgs>
      city: Prisma.$CityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      npc_id: number
      city_id: number
      coord_x: number
      coord_y: number
      coord_z: number
    }, ExtArgs["result"]["npcLocation"]>
    composites: {}
  }

  type NpcLocationGetPayload<S extends boolean | null | undefined | NpcLocationDefaultArgs> = $Result.GetResult<Prisma.$NpcLocationPayload, S>

  type NpcLocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NpcLocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NpcLocationCountAggregateInputType | true
    }

  export interface NpcLocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NpcLocation'], meta: { name: 'NpcLocation' } }
    /**
     * Find zero or one NpcLocation that matches the filter.
     * @param {NpcLocationFindUniqueArgs} args - Arguments to find a NpcLocation
     * @example
     * // Get one NpcLocation
     * const npcLocation = await prisma.npcLocation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NpcLocationFindUniqueArgs>(args: SelectSubset<T, NpcLocationFindUniqueArgs<ExtArgs>>): Prisma__NpcLocationClient<$Result.GetResult<Prisma.$NpcLocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NpcLocation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NpcLocationFindUniqueOrThrowArgs} args - Arguments to find a NpcLocation
     * @example
     * // Get one NpcLocation
     * const npcLocation = await prisma.npcLocation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NpcLocationFindUniqueOrThrowArgs>(args: SelectSubset<T, NpcLocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NpcLocationClient<$Result.GetResult<Prisma.$NpcLocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NpcLocation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NpcLocationFindFirstArgs} args - Arguments to find a NpcLocation
     * @example
     * // Get one NpcLocation
     * const npcLocation = await prisma.npcLocation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NpcLocationFindFirstArgs>(args?: SelectSubset<T, NpcLocationFindFirstArgs<ExtArgs>>): Prisma__NpcLocationClient<$Result.GetResult<Prisma.$NpcLocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NpcLocation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NpcLocationFindFirstOrThrowArgs} args - Arguments to find a NpcLocation
     * @example
     * // Get one NpcLocation
     * const npcLocation = await prisma.npcLocation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NpcLocationFindFirstOrThrowArgs>(args?: SelectSubset<T, NpcLocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NpcLocationClient<$Result.GetResult<Prisma.$NpcLocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NpcLocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NpcLocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NpcLocations
     * const npcLocations = await prisma.npcLocation.findMany()
     * 
     * // Get first 10 NpcLocations
     * const npcLocations = await prisma.npcLocation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const npcLocationWithIdOnly = await prisma.npcLocation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NpcLocationFindManyArgs>(args?: SelectSubset<T, NpcLocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NpcLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NpcLocation.
     * @param {NpcLocationCreateArgs} args - Arguments to create a NpcLocation.
     * @example
     * // Create one NpcLocation
     * const NpcLocation = await prisma.npcLocation.create({
     *   data: {
     *     // ... data to create a NpcLocation
     *   }
     * })
     * 
     */
    create<T extends NpcLocationCreateArgs>(args: SelectSubset<T, NpcLocationCreateArgs<ExtArgs>>): Prisma__NpcLocationClient<$Result.GetResult<Prisma.$NpcLocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NpcLocations.
     * @param {NpcLocationCreateManyArgs} args - Arguments to create many NpcLocations.
     * @example
     * // Create many NpcLocations
     * const npcLocation = await prisma.npcLocation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NpcLocationCreateManyArgs>(args?: SelectSubset<T, NpcLocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NpcLocations and returns the data saved in the database.
     * @param {NpcLocationCreateManyAndReturnArgs} args - Arguments to create many NpcLocations.
     * @example
     * // Create many NpcLocations
     * const npcLocation = await prisma.npcLocation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NpcLocations and only return the `id`
     * const npcLocationWithIdOnly = await prisma.npcLocation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NpcLocationCreateManyAndReturnArgs>(args?: SelectSubset<T, NpcLocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NpcLocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NpcLocation.
     * @param {NpcLocationDeleteArgs} args - Arguments to delete one NpcLocation.
     * @example
     * // Delete one NpcLocation
     * const NpcLocation = await prisma.npcLocation.delete({
     *   where: {
     *     // ... filter to delete one NpcLocation
     *   }
     * })
     * 
     */
    delete<T extends NpcLocationDeleteArgs>(args: SelectSubset<T, NpcLocationDeleteArgs<ExtArgs>>): Prisma__NpcLocationClient<$Result.GetResult<Prisma.$NpcLocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NpcLocation.
     * @param {NpcLocationUpdateArgs} args - Arguments to update one NpcLocation.
     * @example
     * // Update one NpcLocation
     * const npcLocation = await prisma.npcLocation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NpcLocationUpdateArgs>(args: SelectSubset<T, NpcLocationUpdateArgs<ExtArgs>>): Prisma__NpcLocationClient<$Result.GetResult<Prisma.$NpcLocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NpcLocations.
     * @param {NpcLocationDeleteManyArgs} args - Arguments to filter NpcLocations to delete.
     * @example
     * // Delete a few NpcLocations
     * const { count } = await prisma.npcLocation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NpcLocationDeleteManyArgs>(args?: SelectSubset<T, NpcLocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NpcLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NpcLocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NpcLocations
     * const npcLocation = await prisma.npcLocation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NpcLocationUpdateManyArgs>(args: SelectSubset<T, NpcLocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NpcLocations and returns the data updated in the database.
     * @param {NpcLocationUpdateManyAndReturnArgs} args - Arguments to update many NpcLocations.
     * @example
     * // Update many NpcLocations
     * const npcLocation = await prisma.npcLocation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NpcLocations and only return the `id`
     * const npcLocationWithIdOnly = await prisma.npcLocation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NpcLocationUpdateManyAndReturnArgs>(args: SelectSubset<T, NpcLocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NpcLocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NpcLocation.
     * @param {NpcLocationUpsertArgs} args - Arguments to update or create a NpcLocation.
     * @example
     * // Update or create a NpcLocation
     * const npcLocation = await prisma.npcLocation.upsert({
     *   create: {
     *     // ... data to create a NpcLocation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NpcLocation we want to update
     *   }
     * })
     */
    upsert<T extends NpcLocationUpsertArgs>(args: SelectSubset<T, NpcLocationUpsertArgs<ExtArgs>>): Prisma__NpcLocationClient<$Result.GetResult<Prisma.$NpcLocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NpcLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NpcLocationCountArgs} args - Arguments to filter NpcLocations to count.
     * @example
     * // Count the number of NpcLocations
     * const count = await prisma.npcLocation.count({
     *   where: {
     *     // ... the filter for the NpcLocations we want to count
     *   }
     * })
    **/
    count<T extends NpcLocationCountArgs>(
      args?: Subset<T, NpcLocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NpcLocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NpcLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NpcLocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NpcLocationAggregateArgs>(args: Subset<T, NpcLocationAggregateArgs>): Prisma.PrismaPromise<GetNpcLocationAggregateType<T>>

    /**
     * Group by NpcLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NpcLocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NpcLocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NpcLocationGroupByArgs['orderBy'] }
        : { orderBy?: NpcLocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NpcLocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNpcLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NpcLocation model
   */
  readonly fields: NpcLocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NpcLocation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NpcLocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    npc<T extends NpcDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NpcDefaultArgs<ExtArgs>>): Prisma__NpcClient<$Result.GetResult<Prisma.$NpcPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    city<T extends CityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CityDefaultArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NpcLocation model
   */
  interface NpcLocationFieldRefs {
    readonly id: FieldRef<"NpcLocation", 'Int'>
    readonly npc_id: FieldRef<"NpcLocation", 'Int'>
    readonly city_id: FieldRef<"NpcLocation", 'Int'>
    readonly coord_x: FieldRef<"NpcLocation", 'Int'>
    readonly coord_y: FieldRef<"NpcLocation", 'Int'>
    readonly coord_z: FieldRef<"NpcLocation", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * NpcLocation findUnique
   */
  export type NpcLocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NpcLocation
     */
    select?: NpcLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NpcLocation
     */
    omit?: NpcLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NpcLocationInclude<ExtArgs> | null
    /**
     * Filter, which NpcLocation to fetch.
     */
    where: NpcLocationWhereUniqueInput
  }

  /**
   * NpcLocation findUniqueOrThrow
   */
  export type NpcLocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NpcLocation
     */
    select?: NpcLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NpcLocation
     */
    omit?: NpcLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NpcLocationInclude<ExtArgs> | null
    /**
     * Filter, which NpcLocation to fetch.
     */
    where: NpcLocationWhereUniqueInput
  }

  /**
   * NpcLocation findFirst
   */
  export type NpcLocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NpcLocation
     */
    select?: NpcLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NpcLocation
     */
    omit?: NpcLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NpcLocationInclude<ExtArgs> | null
    /**
     * Filter, which NpcLocation to fetch.
     */
    where?: NpcLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NpcLocations to fetch.
     */
    orderBy?: NpcLocationOrderByWithRelationInput | NpcLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NpcLocations.
     */
    cursor?: NpcLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NpcLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NpcLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NpcLocations.
     */
    distinct?: NpcLocationScalarFieldEnum | NpcLocationScalarFieldEnum[]
  }

  /**
   * NpcLocation findFirstOrThrow
   */
  export type NpcLocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NpcLocation
     */
    select?: NpcLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NpcLocation
     */
    omit?: NpcLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NpcLocationInclude<ExtArgs> | null
    /**
     * Filter, which NpcLocation to fetch.
     */
    where?: NpcLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NpcLocations to fetch.
     */
    orderBy?: NpcLocationOrderByWithRelationInput | NpcLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NpcLocations.
     */
    cursor?: NpcLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NpcLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NpcLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NpcLocations.
     */
    distinct?: NpcLocationScalarFieldEnum | NpcLocationScalarFieldEnum[]
  }

  /**
   * NpcLocation findMany
   */
  export type NpcLocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NpcLocation
     */
    select?: NpcLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NpcLocation
     */
    omit?: NpcLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NpcLocationInclude<ExtArgs> | null
    /**
     * Filter, which NpcLocations to fetch.
     */
    where?: NpcLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NpcLocations to fetch.
     */
    orderBy?: NpcLocationOrderByWithRelationInput | NpcLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NpcLocations.
     */
    cursor?: NpcLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NpcLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NpcLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NpcLocations.
     */
    distinct?: NpcLocationScalarFieldEnum | NpcLocationScalarFieldEnum[]
  }

  /**
   * NpcLocation create
   */
  export type NpcLocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NpcLocation
     */
    select?: NpcLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NpcLocation
     */
    omit?: NpcLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NpcLocationInclude<ExtArgs> | null
    /**
     * The data needed to create a NpcLocation.
     */
    data: XOR<NpcLocationCreateInput, NpcLocationUncheckedCreateInput>
  }

  /**
   * NpcLocation createMany
   */
  export type NpcLocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NpcLocations.
     */
    data: NpcLocationCreateManyInput | NpcLocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NpcLocation createManyAndReturn
   */
  export type NpcLocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NpcLocation
     */
    select?: NpcLocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NpcLocation
     */
    omit?: NpcLocationOmit<ExtArgs> | null
    /**
     * The data used to create many NpcLocations.
     */
    data: NpcLocationCreateManyInput | NpcLocationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NpcLocationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NpcLocation update
   */
  export type NpcLocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NpcLocation
     */
    select?: NpcLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NpcLocation
     */
    omit?: NpcLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NpcLocationInclude<ExtArgs> | null
    /**
     * The data needed to update a NpcLocation.
     */
    data: XOR<NpcLocationUpdateInput, NpcLocationUncheckedUpdateInput>
    /**
     * Choose, which NpcLocation to update.
     */
    where: NpcLocationWhereUniqueInput
  }

  /**
   * NpcLocation updateMany
   */
  export type NpcLocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NpcLocations.
     */
    data: XOR<NpcLocationUpdateManyMutationInput, NpcLocationUncheckedUpdateManyInput>
    /**
     * Filter which NpcLocations to update
     */
    where?: NpcLocationWhereInput
    /**
     * Limit how many NpcLocations to update.
     */
    limit?: number
  }

  /**
   * NpcLocation updateManyAndReturn
   */
  export type NpcLocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NpcLocation
     */
    select?: NpcLocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NpcLocation
     */
    omit?: NpcLocationOmit<ExtArgs> | null
    /**
     * The data used to update NpcLocations.
     */
    data: XOR<NpcLocationUpdateManyMutationInput, NpcLocationUncheckedUpdateManyInput>
    /**
     * Filter which NpcLocations to update
     */
    where?: NpcLocationWhereInput
    /**
     * Limit how many NpcLocations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NpcLocationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NpcLocation upsert
   */
  export type NpcLocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NpcLocation
     */
    select?: NpcLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NpcLocation
     */
    omit?: NpcLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NpcLocationInclude<ExtArgs> | null
    /**
     * The filter to search for the NpcLocation to update in case it exists.
     */
    where: NpcLocationWhereUniqueInput
    /**
     * In case the NpcLocation found by the `where` argument doesn't exist, create a new NpcLocation with this data.
     */
    create: XOR<NpcLocationCreateInput, NpcLocationUncheckedCreateInput>
    /**
     * In case the NpcLocation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NpcLocationUpdateInput, NpcLocationUncheckedUpdateInput>
  }

  /**
   * NpcLocation delete
   */
  export type NpcLocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NpcLocation
     */
    select?: NpcLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NpcLocation
     */
    omit?: NpcLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NpcLocationInclude<ExtArgs> | null
    /**
     * Filter which NpcLocation to delete.
     */
    where: NpcLocationWhereUniqueInput
  }

  /**
   * NpcLocation deleteMany
   */
  export type NpcLocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NpcLocations to delete
     */
    where?: NpcLocationWhereInput
    /**
     * Limit how many NpcLocations to delete.
     */
    limit?: number
  }

  /**
   * NpcLocation without action
   */
  export type NpcLocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NpcLocation
     */
    select?: NpcLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NpcLocation
     */
    omit?: NpcLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NpcLocationInclude<ExtArgs> | null
  }


  /**
   * Model NpcQuest
   */

  export type AggregateNpcQuest = {
    _count: NpcQuestCountAggregateOutputType | null
    _avg: NpcQuestAvgAggregateOutputType | null
    _sum: NpcQuestSumAggregateOutputType | null
    _min: NpcQuestMinAggregateOutputType | null
    _max: NpcQuestMaxAggregateOutputType | null
  }

  export type NpcQuestAvgAggregateOutputType = {
    npc_id: number | null
    quest_id: number | null
  }

  export type NpcQuestSumAggregateOutputType = {
    npc_id: number | null
    quest_id: number | null
  }

  export type NpcQuestMinAggregateOutputType = {
    npc_id: number | null
    quest_id: number | null
  }

  export type NpcQuestMaxAggregateOutputType = {
    npc_id: number | null
    quest_id: number | null
  }

  export type NpcQuestCountAggregateOutputType = {
    npc_id: number
    quest_id: number
    _all: number
  }


  export type NpcQuestAvgAggregateInputType = {
    npc_id?: true
    quest_id?: true
  }

  export type NpcQuestSumAggregateInputType = {
    npc_id?: true
    quest_id?: true
  }

  export type NpcQuestMinAggregateInputType = {
    npc_id?: true
    quest_id?: true
  }

  export type NpcQuestMaxAggregateInputType = {
    npc_id?: true
    quest_id?: true
  }

  export type NpcQuestCountAggregateInputType = {
    npc_id?: true
    quest_id?: true
    _all?: true
  }

  export type NpcQuestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NpcQuest to aggregate.
     */
    where?: NpcQuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NpcQuests to fetch.
     */
    orderBy?: NpcQuestOrderByWithRelationInput | NpcQuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NpcQuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NpcQuests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NpcQuests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NpcQuests
    **/
    _count?: true | NpcQuestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NpcQuestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NpcQuestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NpcQuestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NpcQuestMaxAggregateInputType
  }

  export type GetNpcQuestAggregateType<T extends NpcQuestAggregateArgs> = {
        [P in keyof T & keyof AggregateNpcQuest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNpcQuest[P]>
      : GetScalarType<T[P], AggregateNpcQuest[P]>
  }




  export type NpcQuestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NpcQuestWhereInput
    orderBy?: NpcQuestOrderByWithAggregationInput | NpcQuestOrderByWithAggregationInput[]
    by: NpcQuestScalarFieldEnum[] | NpcQuestScalarFieldEnum
    having?: NpcQuestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NpcQuestCountAggregateInputType | true
    _avg?: NpcQuestAvgAggregateInputType
    _sum?: NpcQuestSumAggregateInputType
    _min?: NpcQuestMinAggregateInputType
    _max?: NpcQuestMaxAggregateInputType
  }

  export type NpcQuestGroupByOutputType = {
    npc_id: number
    quest_id: number
    _count: NpcQuestCountAggregateOutputType | null
    _avg: NpcQuestAvgAggregateOutputType | null
    _sum: NpcQuestSumAggregateOutputType | null
    _min: NpcQuestMinAggregateOutputType | null
    _max: NpcQuestMaxAggregateOutputType | null
  }

  type GetNpcQuestGroupByPayload<T extends NpcQuestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NpcQuestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NpcQuestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NpcQuestGroupByOutputType[P]>
            : GetScalarType<T[P], NpcQuestGroupByOutputType[P]>
        }
      >
    >


  export type NpcQuestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    npc_id?: boolean
    quest_id?: boolean
    npc?: boolean | NpcDefaultArgs<ExtArgs>
    quest?: boolean | QuestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["npcQuest"]>

  export type NpcQuestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    npc_id?: boolean
    quest_id?: boolean
    npc?: boolean | NpcDefaultArgs<ExtArgs>
    quest?: boolean | QuestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["npcQuest"]>

  export type NpcQuestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    npc_id?: boolean
    quest_id?: boolean
    npc?: boolean | NpcDefaultArgs<ExtArgs>
    quest?: boolean | QuestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["npcQuest"]>

  export type NpcQuestSelectScalar = {
    npc_id?: boolean
    quest_id?: boolean
  }

  export type NpcQuestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"npc_id" | "quest_id", ExtArgs["result"]["npcQuest"]>
  export type NpcQuestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    npc?: boolean | NpcDefaultArgs<ExtArgs>
    quest?: boolean | QuestDefaultArgs<ExtArgs>
  }
  export type NpcQuestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    npc?: boolean | NpcDefaultArgs<ExtArgs>
    quest?: boolean | QuestDefaultArgs<ExtArgs>
  }
  export type NpcQuestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    npc?: boolean | NpcDefaultArgs<ExtArgs>
    quest?: boolean | QuestDefaultArgs<ExtArgs>
  }

  export type $NpcQuestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NpcQuest"
    objects: {
      npc: Prisma.$NpcPayload<ExtArgs>
      quest: Prisma.$QuestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      npc_id: number
      quest_id: number
    }, ExtArgs["result"]["npcQuest"]>
    composites: {}
  }

  type NpcQuestGetPayload<S extends boolean | null | undefined | NpcQuestDefaultArgs> = $Result.GetResult<Prisma.$NpcQuestPayload, S>

  type NpcQuestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NpcQuestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NpcQuestCountAggregateInputType | true
    }

  export interface NpcQuestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NpcQuest'], meta: { name: 'NpcQuest' } }
    /**
     * Find zero or one NpcQuest that matches the filter.
     * @param {NpcQuestFindUniqueArgs} args - Arguments to find a NpcQuest
     * @example
     * // Get one NpcQuest
     * const npcQuest = await prisma.npcQuest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NpcQuestFindUniqueArgs>(args: SelectSubset<T, NpcQuestFindUniqueArgs<ExtArgs>>): Prisma__NpcQuestClient<$Result.GetResult<Prisma.$NpcQuestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NpcQuest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NpcQuestFindUniqueOrThrowArgs} args - Arguments to find a NpcQuest
     * @example
     * // Get one NpcQuest
     * const npcQuest = await prisma.npcQuest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NpcQuestFindUniqueOrThrowArgs>(args: SelectSubset<T, NpcQuestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NpcQuestClient<$Result.GetResult<Prisma.$NpcQuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NpcQuest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NpcQuestFindFirstArgs} args - Arguments to find a NpcQuest
     * @example
     * // Get one NpcQuest
     * const npcQuest = await prisma.npcQuest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NpcQuestFindFirstArgs>(args?: SelectSubset<T, NpcQuestFindFirstArgs<ExtArgs>>): Prisma__NpcQuestClient<$Result.GetResult<Prisma.$NpcQuestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NpcQuest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NpcQuestFindFirstOrThrowArgs} args - Arguments to find a NpcQuest
     * @example
     * // Get one NpcQuest
     * const npcQuest = await prisma.npcQuest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NpcQuestFindFirstOrThrowArgs>(args?: SelectSubset<T, NpcQuestFindFirstOrThrowArgs<ExtArgs>>): Prisma__NpcQuestClient<$Result.GetResult<Prisma.$NpcQuestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NpcQuests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NpcQuestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NpcQuests
     * const npcQuests = await prisma.npcQuest.findMany()
     * 
     * // Get first 10 NpcQuests
     * const npcQuests = await prisma.npcQuest.findMany({ take: 10 })
     * 
     * // Only select the `npc_id`
     * const npcQuestWithNpc_idOnly = await prisma.npcQuest.findMany({ select: { npc_id: true } })
     * 
     */
    findMany<T extends NpcQuestFindManyArgs>(args?: SelectSubset<T, NpcQuestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NpcQuestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NpcQuest.
     * @param {NpcQuestCreateArgs} args - Arguments to create a NpcQuest.
     * @example
     * // Create one NpcQuest
     * const NpcQuest = await prisma.npcQuest.create({
     *   data: {
     *     // ... data to create a NpcQuest
     *   }
     * })
     * 
     */
    create<T extends NpcQuestCreateArgs>(args: SelectSubset<T, NpcQuestCreateArgs<ExtArgs>>): Prisma__NpcQuestClient<$Result.GetResult<Prisma.$NpcQuestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NpcQuests.
     * @param {NpcQuestCreateManyArgs} args - Arguments to create many NpcQuests.
     * @example
     * // Create many NpcQuests
     * const npcQuest = await prisma.npcQuest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NpcQuestCreateManyArgs>(args?: SelectSubset<T, NpcQuestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NpcQuests and returns the data saved in the database.
     * @param {NpcQuestCreateManyAndReturnArgs} args - Arguments to create many NpcQuests.
     * @example
     * // Create many NpcQuests
     * const npcQuest = await prisma.npcQuest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NpcQuests and only return the `npc_id`
     * const npcQuestWithNpc_idOnly = await prisma.npcQuest.createManyAndReturn({
     *   select: { npc_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NpcQuestCreateManyAndReturnArgs>(args?: SelectSubset<T, NpcQuestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NpcQuestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NpcQuest.
     * @param {NpcQuestDeleteArgs} args - Arguments to delete one NpcQuest.
     * @example
     * // Delete one NpcQuest
     * const NpcQuest = await prisma.npcQuest.delete({
     *   where: {
     *     // ... filter to delete one NpcQuest
     *   }
     * })
     * 
     */
    delete<T extends NpcQuestDeleteArgs>(args: SelectSubset<T, NpcQuestDeleteArgs<ExtArgs>>): Prisma__NpcQuestClient<$Result.GetResult<Prisma.$NpcQuestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NpcQuest.
     * @param {NpcQuestUpdateArgs} args - Arguments to update one NpcQuest.
     * @example
     * // Update one NpcQuest
     * const npcQuest = await prisma.npcQuest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NpcQuestUpdateArgs>(args: SelectSubset<T, NpcQuestUpdateArgs<ExtArgs>>): Prisma__NpcQuestClient<$Result.GetResult<Prisma.$NpcQuestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NpcQuests.
     * @param {NpcQuestDeleteManyArgs} args - Arguments to filter NpcQuests to delete.
     * @example
     * // Delete a few NpcQuests
     * const { count } = await prisma.npcQuest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NpcQuestDeleteManyArgs>(args?: SelectSubset<T, NpcQuestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NpcQuests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NpcQuestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NpcQuests
     * const npcQuest = await prisma.npcQuest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NpcQuestUpdateManyArgs>(args: SelectSubset<T, NpcQuestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NpcQuests and returns the data updated in the database.
     * @param {NpcQuestUpdateManyAndReturnArgs} args - Arguments to update many NpcQuests.
     * @example
     * // Update many NpcQuests
     * const npcQuest = await prisma.npcQuest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NpcQuests and only return the `npc_id`
     * const npcQuestWithNpc_idOnly = await prisma.npcQuest.updateManyAndReturn({
     *   select: { npc_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NpcQuestUpdateManyAndReturnArgs>(args: SelectSubset<T, NpcQuestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NpcQuestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NpcQuest.
     * @param {NpcQuestUpsertArgs} args - Arguments to update or create a NpcQuest.
     * @example
     * // Update or create a NpcQuest
     * const npcQuest = await prisma.npcQuest.upsert({
     *   create: {
     *     // ... data to create a NpcQuest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NpcQuest we want to update
     *   }
     * })
     */
    upsert<T extends NpcQuestUpsertArgs>(args: SelectSubset<T, NpcQuestUpsertArgs<ExtArgs>>): Prisma__NpcQuestClient<$Result.GetResult<Prisma.$NpcQuestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NpcQuests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NpcQuestCountArgs} args - Arguments to filter NpcQuests to count.
     * @example
     * // Count the number of NpcQuests
     * const count = await prisma.npcQuest.count({
     *   where: {
     *     // ... the filter for the NpcQuests we want to count
     *   }
     * })
    **/
    count<T extends NpcQuestCountArgs>(
      args?: Subset<T, NpcQuestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NpcQuestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NpcQuest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NpcQuestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NpcQuestAggregateArgs>(args: Subset<T, NpcQuestAggregateArgs>): Prisma.PrismaPromise<GetNpcQuestAggregateType<T>>

    /**
     * Group by NpcQuest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NpcQuestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NpcQuestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NpcQuestGroupByArgs['orderBy'] }
        : { orderBy?: NpcQuestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NpcQuestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNpcQuestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NpcQuest model
   */
  readonly fields: NpcQuestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NpcQuest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NpcQuestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    npc<T extends NpcDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NpcDefaultArgs<ExtArgs>>): Prisma__NpcClient<$Result.GetResult<Prisma.$NpcPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quest<T extends QuestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestDefaultArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NpcQuest model
   */
  interface NpcQuestFieldRefs {
    readonly npc_id: FieldRef<"NpcQuest", 'Int'>
    readonly quest_id: FieldRef<"NpcQuest", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * NpcQuest findUnique
   */
  export type NpcQuestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NpcQuest
     */
    select?: NpcQuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NpcQuest
     */
    omit?: NpcQuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NpcQuestInclude<ExtArgs> | null
    /**
     * Filter, which NpcQuest to fetch.
     */
    where: NpcQuestWhereUniqueInput
  }

  /**
   * NpcQuest findUniqueOrThrow
   */
  export type NpcQuestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NpcQuest
     */
    select?: NpcQuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NpcQuest
     */
    omit?: NpcQuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NpcQuestInclude<ExtArgs> | null
    /**
     * Filter, which NpcQuest to fetch.
     */
    where: NpcQuestWhereUniqueInput
  }

  /**
   * NpcQuest findFirst
   */
  export type NpcQuestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NpcQuest
     */
    select?: NpcQuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NpcQuest
     */
    omit?: NpcQuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NpcQuestInclude<ExtArgs> | null
    /**
     * Filter, which NpcQuest to fetch.
     */
    where?: NpcQuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NpcQuests to fetch.
     */
    orderBy?: NpcQuestOrderByWithRelationInput | NpcQuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NpcQuests.
     */
    cursor?: NpcQuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NpcQuests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NpcQuests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NpcQuests.
     */
    distinct?: NpcQuestScalarFieldEnum | NpcQuestScalarFieldEnum[]
  }

  /**
   * NpcQuest findFirstOrThrow
   */
  export type NpcQuestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NpcQuest
     */
    select?: NpcQuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NpcQuest
     */
    omit?: NpcQuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NpcQuestInclude<ExtArgs> | null
    /**
     * Filter, which NpcQuest to fetch.
     */
    where?: NpcQuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NpcQuests to fetch.
     */
    orderBy?: NpcQuestOrderByWithRelationInput | NpcQuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NpcQuests.
     */
    cursor?: NpcQuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NpcQuests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NpcQuests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NpcQuests.
     */
    distinct?: NpcQuestScalarFieldEnum | NpcQuestScalarFieldEnum[]
  }

  /**
   * NpcQuest findMany
   */
  export type NpcQuestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NpcQuest
     */
    select?: NpcQuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NpcQuest
     */
    omit?: NpcQuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NpcQuestInclude<ExtArgs> | null
    /**
     * Filter, which NpcQuests to fetch.
     */
    where?: NpcQuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NpcQuests to fetch.
     */
    orderBy?: NpcQuestOrderByWithRelationInput | NpcQuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NpcQuests.
     */
    cursor?: NpcQuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NpcQuests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NpcQuests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NpcQuests.
     */
    distinct?: NpcQuestScalarFieldEnum | NpcQuestScalarFieldEnum[]
  }

  /**
   * NpcQuest create
   */
  export type NpcQuestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NpcQuest
     */
    select?: NpcQuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NpcQuest
     */
    omit?: NpcQuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NpcQuestInclude<ExtArgs> | null
    /**
     * The data needed to create a NpcQuest.
     */
    data: XOR<NpcQuestCreateInput, NpcQuestUncheckedCreateInput>
  }

  /**
   * NpcQuest createMany
   */
  export type NpcQuestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NpcQuests.
     */
    data: NpcQuestCreateManyInput | NpcQuestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NpcQuest createManyAndReturn
   */
  export type NpcQuestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NpcQuest
     */
    select?: NpcQuestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NpcQuest
     */
    omit?: NpcQuestOmit<ExtArgs> | null
    /**
     * The data used to create many NpcQuests.
     */
    data: NpcQuestCreateManyInput | NpcQuestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NpcQuestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NpcQuest update
   */
  export type NpcQuestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NpcQuest
     */
    select?: NpcQuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NpcQuest
     */
    omit?: NpcQuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NpcQuestInclude<ExtArgs> | null
    /**
     * The data needed to update a NpcQuest.
     */
    data: XOR<NpcQuestUpdateInput, NpcQuestUncheckedUpdateInput>
    /**
     * Choose, which NpcQuest to update.
     */
    where: NpcQuestWhereUniqueInput
  }

  /**
   * NpcQuest updateMany
   */
  export type NpcQuestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NpcQuests.
     */
    data: XOR<NpcQuestUpdateManyMutationInput, NpcQuestUncheckedUpdateManyInput>
    /**
     * Filter which NpcQuests to update
     */
    where?: NpcQuestWhereInput
    /**
     * Limit how many NpcQuests to update.
     */
    limit?: number
  }

  /**
   * NpcQuest updateManyAndReturn
   */
  export type NpcQuestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NpcQuest
     */
    select?: NpcQuestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NpcQuest
     */
    omit?: NpcQuestOmit<ExtArgs> | null
    /**
     * The data used to update NpcQuests.
     */
    data: XOR<NpcQuestUpdateManyMutationInput, NpcQuestUncheckedUpdateManyInput>
    /**
     * Filter which NpcQuests to update
     */
    where?: NpcQuestWhereInput
    /**
     * Limit how many NpcQuests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NpcQuestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NpcQuest upsert
   */
  export type NpcQuestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NpcQuest
     */
    select?: NpcQuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NpcQuest
     */
    omit?: NpcQuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NpcQuestInclude<ExtArgs> | null
    /**
     * The filter to search for the NpcQuest to update in case it exists.
     */
    where: NpcQuestWhereUniqueInput
    /**
     * In case the NpcQuest found by the `where` argument doesn't exist, create a new NpcQuest with this data.
     */
    create: XOR<NpcQuestCreateInput, NpcQuestUncheckedCreateInput>
    /**
     * In case the NpcQuest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NpcQuestUpdateInput, NpcQuestUncheckedUpdateInput>
  }

  /**
   * NpcQuest delete
   */
  export type NpcQuestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NpcQuest
     */
    select?: NpcQuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NpcQuest
     */
    omit?: NpcQuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NpcQuestInclude<ExtArgs> | null
    /**
     * Filter which NpcQuest to delete.
     */
    where: NpcQuestWhereUniqueInput
  }

  /**
   * NpcQuest deleteMany
   */
  export type NpcQuestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NpcQuests to delete
     */
    where?: NpcQuestWhereInput
    /**
     * Limit how many NpcQuests to delete.
     */
    limit?: number
  }

  /**
   * NpcQuest without action
   */
  export type NpcQuestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NpcQuest
     */
    select?: NpcQuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NpcQuest
     */
    omit?: NpcQuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NpcQuestInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    weight: 'weight',
    type: 'type',
    task_deliverable: 'task_deliverable',
    icon_url: 'icon_url'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const NpcScalarFieldEnum: {
    id: 'id',
    name: 'name',
    needs_quest_to_unlock: 'needs_quest_to_unlock'
  };

  export type NpcScalarFieldEnum = (typeof NpcScalarFieldEnum)[keyof typeof NpcScalarFieldEnum]


  export const OfferScalarFieldEnum: {
    id: 'id',
    item_id: 'item_id',
    npc_id: 'npc_id',
    price: 'price'
  };

  export type OfferScalarFieldEnum = (typeof OfferScalarFieldEnum)[keyof typeof OfferScalarFieldEnum]


  export const CityScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CityScalarFieldEnum = (typeof CityScalarFieldEnum)[keyof typeof CityScalarFieldEnum]


  export const QuestScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type QuestScalarFieldEnum = (typeof QuestScalarFieldEnum)[keyof typeof QuestScalarFieldEnum]


  export const NpcLocationScalarFieldEnum: {
    id: 'id',
    npc_id: 'npc_id',
    city_id: 'city_id',
    coord_x: 'coord_x',
    coord_y: 'coord_y',
    coord_z: 'coord_z'
  };

  export type NpcLocationScalarFieldEnum = (typeof NpcLocationScalarFieldEnum)[keyof typeof NpcLocationScalarFieldEnum]


  export const NpcQuestScalarFieldEnum: {
    npc_id: 'npc_id',
    quest_id: 'quest_id'
  };

  export type NpcQuestScalarFieldEnum = (typeof NpcQuestScalarFieldEnum)[keyof typeof NpcQuestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'ItemType'
   */
  export type EnumItemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemType'>
    


  /**
   * Reference to a field of type 'ItemType[]'
   */
  export type ListEnumItemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: IntFilter<"Item"> | number
    name?: StringFilter<"Item"> | string
    weight?: DecimalFilter<"Item"> | Decimal | DecimalJsLike | number | string
    type?: EnumItemTypeFilter<"Item"> | $Enums.ItemType
    task_deliverable?: BoolFilter<"Item"> | boolean
    icon_url?: StringNullableFilter<"Item"> | string | null
    offers?: OfferListRelationFilter
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    weight?: SortOrder
    type?: SortOrder
    task_deliverable?: SortOrder
    icon_url?: SortOrderInput | SortOrder
    offers?: OfferOrderByRelationAggregateInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    weight?: DecimalFilter<"Item"> | Decimal | DecimalJsLike | number | string
    type?: EnumItemTypeFilter<"Item"> | $Enums.ItemType
    task_deliverable?: BoolFilter<"Item"> | boolean
    icon_url?: StringNullableFilter<"Item"> | string | null
    offers?: OfferListRelationFilter
  }, "id" | "name">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    weight?: SortOrder
    type?: SortOrder
    task_deliverable?: SortOrder
    icon_url?: SortOrderInput | SortOrder
    _count?: ItemCountOrderByAggregateInput
    _avg?: ItemAvgOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
    _sum?: ItemSumOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Item"> | number
    name?: StringWithAggregatesFilter<"Item"> | string
    weight?: DecimalWithAggregatesFilter<"Item"> | Decimal | DecimalJsLike | number | string
    type?: EnumItemTypeWithAggregatesFilter<"Item"> | $Enums.ItemType
    task_deliverable?: BoolWithAggregatesFilter<"Item"> | boolean
    icon_url?: StringNullableWithAggregatesFilter<"Item"> | string | null
  }

  export type NpcWhereInput = {
    AND?: NpcWhereInput | NpcWhereInput[]
    OR?: NpcWhereInput[]
    NOT?: NpcWhereInput | NpcWhereInput[]
    id?: IntFilter<"Npc"> | number
    name?: StringFilter<"Npc"> | string
    needs_quest_to_unlock?: BoolFilter<"Npc"> | boolean
    offers?: OfferListRelationFilter
    locations?: NpcLocationListRelationFilter
    npc_quests?: NpcQuestListRelationFilter
  }

  export type NpcOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    needs_quest_to_unlock?: SortOrder
    offers?: OfferOrderByRelationAggregateInput
    locations?: NpcLocationOrderByRelationAggregateInput
    npc_quests?: NpcQuestOrderByRelationAggregateInput
  }

  export type NpcWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NpcWhereInput | NpcWhereInput[]
    OR?: NpcWhereInput[]
    NOT?: NpcWhereInput | NpcWhereInput[]
    name?: StringFilter<"Npc"> | string
    needs_quest_to_unlock?: BoolFilter<"Npc"> | boolean
    offers?: OfferListRelationFilter
    locations?: NpcLocationListRelationFilter
    npc_quests?: NpcQuestListRelationFilter
  }, "id">

  export type NpcOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    needs_quest_to_unlock?: SortOrder
    _count?: NpcCountOrderByAggregateInput
    _avg?: NpcAvgOrderByAggregateInput
    _max?: NpcMaxOrderByAggregateInput
    _min?: NpcMinOrderByAggregateInput
    _sum?: NpcSumOrderByAggregateInput
  }

  export type NpcScalarWhereWithAggregatesInput = {
    AND?: NpcScalarWhereWithAggregatesInput | NpcScalarWhereWithAggregatesInput[]
    OR?: NpcScalarWhereWithAggregatesInput[]
    NOT?: NpcScalarWhereWithAggregatesInput | NpcScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Npc"> | number
    name?: StringWithAggregatesFilter<"Npc"> | string
    needs_quest_to_unlock?: BoolWithAggregatesFilter<"Npc"> | boolean
  }

  export type OfferWhereInput = {
    AND?: OfferWhereInput | OfferWhereInput[]
    OR?: OfferWhereInput[]
    NOT?: OfferWhereInput | OfferWhereInput[]
    id?: IntFilter<"Offer"> | number
    item_id?: IntFilter<"Offer"> | number
    npc_id?: IntFilter<"Offer"> | number
    price?: IntFilter<"Offer"> | number
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
    npc?: XOR<NpcScalarRelationFilter, NpcWhereInput>
  }

  export type OfferOrderByWithRelationInput = {
    id?: SortOrder
    item_id?: SortOrder
    npc_id?: SortOrder
    price?: SortOrder
    item?: ItemOrderByWithRelationInput
    npc?: NpcOrderByWithRelationInput
  }

  export type OfferWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    item_id_npc_id?: OfferItem_idNpc_idCompoundUniqueInput
    AND?: OfferWhereInput | OfferWhereInput[]
    OR?: OfferWhereInput[]
    NOT?: OfferWhereInput | OfferWhereInput[]
    item_id?: IntFilter<"Offer"> | number
    npc_id?: IntFilter<"Offer"> | number
    price?: IntFilter<"Offer"> | number
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
    npc?: XOR<NpcScalarRelationFilter, NpcWhereInput>
  }, "id" | "item_id_npc_id">

  export type OfferOrderByWithAggregationInput = {
    id?: SortOrder
    item_id?: SortOrder
    npc_id?: SortOrder
    price?: SortOrder
    _count?: OfferCountOrderByAggregateInput
    _avg?: OfferAvgOrderByAggregateInput
    _max?: OfferMaxOrderByAggregateInput
    _min?: OfferMinOrderByAggregateInput
    _sum?: OfferSumOrderByAggregateInput
  }

  export type OfferScalarWhereWithAggregatesInput = {
    AND?: OfferScalarWhereWithAggregatesInput | OfferScalarWhereWithAggregatesInput[]
    OR?: OfferScalarWhereWithAggregatesInput[]
    NOT?: OfferScalarWhereWithAggregatesInput | OfferScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Offer"> | number
    item_id?: IntWithAggregatesFilter<"Offer"> | number
    npc_id?: IntWithAggregatesFilter<"Offer"> | number
    price?: IntWithAggregatesFilter<"Offer"> | number
  }

  export type CityWhereInput = {
    AND?: CityWhereInput | CityWhereInput[]
    OR?: CityWhereInput[]
    NOT?: CityWhereInput | CityWhereInput[]
    id?: IntFilter<"City"> | number
    name?: StringFilter<"City"> | string
    locations?: NpcLocationListRelationFilter
  }

  export type CityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    locations?: NpcLocationOrderByRelationAggregateInput
  }

  export type CityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CityWhereInput | CityWhereInput[]
    OR?: CityWhereInput[]
    NOT?: CityWhereInput | CityWhereInput[]
    locations?: NpcLocationListRelationFilter
  }, "id" | "name">

  export type CityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CityCountOrderByAggregateInput
    _avg?: CityAvgOrderByAggregateInput
    _max?: CityMaxOrderByAggregateInput
    _min?: CityMinOrderByAggregateInput
    _sum?: CitySumOrderByAggregateInput
  }

  export type CityScalarWhereWithAggregatesInput = {
    AND?: CityScalarWhereWithAggregatesInput | CityScalarWhereWithAggregatesInput[]
    OR?: CityScalarWhereWithAggregatesInput[]
    NOT?: CityScalarWhereWithAggregatesInput | CityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"City"> | number
    name?: StringWithAggregatesFilter<"City"> | string
  }

  export type QuestWhereInput = {
    AND?: QuestWhereInput | QuestWhereInput[]
    OR?: QuestWhereInput[]
    NOT?: QuestWhereInput | QuestWhereInput[]
    id?: IntFilter<"Quest"> | number
    name?: StringFilter<"Quest"> | string
    npc_quests?: NpcQuestListRelationFilter
  }

  export type QuestOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    npc_quests?: NpcQuestOrderByRelationAggregateInput
  }

  export type QuestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: QuestWhereInput | QuestWhereInput[]
    OR?: QuestWhereInput[]
    NOT?: QuestWhereInput | QuestWhereInput[]
    npc_quests?: NpcQuestListRelationFilter
  }, "id" | "name">

  export type QuestOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: QuestCountOrderByAggregateInput
    _avg?: QuestAvgOrderByAggregateInput
    _max?: QuestMaxOrderByAggregateInput
    _min?: QuestMinOrderByAggregateInput
    _sum?: QuestSumOrderByAggregateInput
  }

  export type QuestScalarWhereWithAggregatesInput = {
    AND?: QuestScalarWhereWithAggregatesInput | QuestScalarWhereWithAggregatesInput[]
    OR?: QuestScalarWhereWithAggregatesInput[]
    NOT?: QuestScalarWhereWithAggregatesInput | QuestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Quest"> | number
    name?: StringWithAggregatesFilter<"Quest"> | string
  }

  export type NpcLocationWhereInput = {
    AND?: NpcLocationWhereInput | NpcLocationWhereInput[]
    OR?: NpcLocationWhereInput[]
    NOT?: NpcLocationWhereInput | NpcLocationWhereInput[]
    id?: IntFilter<"NpcLocation"> | number
    npc_id?: IntFilter<"NpcLocation"> | number
    city_id?: IntFilter<"NpcLocation"> | number
    coord_x?: IntFilter<"NpcLocation"> | number
    coord_y?: IntFilter<"NpcLocation"> | number
    coord_z?: IntFilter<"NpcLocation"> | number
    npc?: XOR<NpcScalarRelationFilter, NpcWhereInput>
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
  }

  export type NpcLocationOrderByWithRelationInput = {
    id?: SortOrder
    npc_id?: SortOrder
    city_id?: SortOrder
    coord_x?: SortOrder
    coord_y?: SortOrder
    coord_z?: SortOrder
    npc?: NpcOrderByWithRelationInput
    city?: CityOrderByWithRelationInput
  }

  export type NpcLocationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NpcLocationWhereInput | NpcLocationWhereInput[]
    OR?: NpcLocationWhereInput[]
    NOT?: NpcLocationWhereInput | NpcLocationWhereInput[]
    npc_id?: IntFilter<"NpcLocation"> | number
    city_id?: IntFilter<"NpcLocation"> | number
    coord_x?: IntFilter<"NpcLocation"> | number
    coord_y?: IntFilter<"NpcLocation"> | number
    coord_z?: IntFilter<"NpcLocation"> | number
    npc?: XOR<NpcScalarRelationFilter, NpcWhereInput>
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
  }, "id">

  export type NpcLocationOrderByWithAggregationInput = {
    id?: SortOrder
    npc_id?: SortOrder
    city_id?: SortOrder
    coord_x?: SortOrder
    coord_y?: SortOrder
    coord_z?: SortOrder
    _count?: NpcLocationCountOrderByAggregateInput
    _avg?: NpcLocationAvgOrderByAggregateInput
    _max?: NpcLocationMaxOrderByAggregateInput
    _min?: NpcLocationMinOrderByAggregateInput
    _sum?: NpcLocationSumOrderByAggregateInput
  }

  export type NpcLocationScalarWhereWithAggregatesInput = {
    AND?: NpcLocationScalarWhereWithAggregatesInput | NpcLocationScalarWhereWithAggregatesInput[]
    OR?: NpcLocationScalarWhereWithAggregatesInput[]
    NOT?: NpcLocationScalarWhereWithAggregatesInput | NpcLocationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NpcLocation"> | number
    npc_id?: IntWithAggregatesFilter<"NpcLocation"> | number
    city_id?: IntWithAggregatesFilter<"NpcLocation"> | number
    coord_x?: IntWithAggregatesFilter<"NpcLocation"> | number
    coord_y?: IntWithAggregatesFilter<"NpcLocation"> | number
    coord_z?: IntWithAggregatesFilter<"NpcLocation"> | number
  }

  export type NpcQuestWhereInput = {
    AND?: NpcQuestWhereInput | NpcQuestWhereInput[]
    OR?: NpcQuestWhereInput[]
    NOT?: NpcQuestWhereInput | NpcQuestWhereInput[]
    npc_id?: IntFilter<"NpcQuest"> | number
    quest_id?: IntFilter<"NpcQuest"> | number
    npc?: XOR<NpcScalarRelationFilter, NpcWhereInput>
    quest?: XOR<QuestScalarRelationFilter, QuestWhereInput>
  }

  export type NpcQuestOrderByWithRelationInput = {
    npc_id?: SortOrder
    quest_id?: SortOrder
    npc?: NpcOrderByWithRelationInput
    quest?: QuestOrderByWithRelationInput
  }

  export type NpcQuestWhereUniqueInput = Prisma.AtLeast<{
    npc_id_quest_id?: NpcQuestNpc_idQuest_idCompoundUniqueInput
    AND?: NpcQuestWhereInput | NpcQuestWhereInput[]
    OR?: NpcQuestWhereInput[]
    NOT?: NpcQuestWhereInput | NpcQuestWhereInput[]
    npc_id?: IntFilter<"NpcQuest"> | number
    quest_id?: IntFilter<"NpcQuest"> | number
    npc?: XOR<NpcScalarRelationFilter, NpcWhereInput>
    quest?: XOR<QuestScalarRelationFilter, QuestWhereInput>
  }, "npc_id_quest_id">

  export type NpcQuestOrderByWithAggregationInput = {
    npc_id?: SortOrder
    quest_id?: SortOrder
    _count?: NpcQuestCountOrderByAggregateInput
    _avg?: NpcQuestAvgOrderByAggregateInput
    _max?: NpcQuestMaxOrderByAggregateInput
    _min?: NpcQuestMinOrderByAggregateInput
    _sum?: NpcQuestSumOrderByAggregateInput
  }

  export type NpcQuestScalarWhereWithAggregatesInput = {
    AND?: NpcQuestScalarWhereWithAggregatesInput | NpcQuestScalarWhereWithAggregatesInput[]
    OR?: NpcQuestScalarWhereWithAggregatesInput[]
    NOT?: NpcQuestScalarWhereWithAggregatesInput | NpcQuestScalarWhereWithAggregatesInput[]
    npc_id?: IntWithAggregatesFilter<"NpcQuest"> | number
    quest_id?: IntWithAggregatesFilter<"NpcQuest"> | number
  }

  export type ItemCreateInput = {
    name: string
    weight: Decimal | DecimalJsLike | number | string
    type: $Enums.ItemType
    task_deliverable?: boolean
    icon_url?: string | null
    offers?: OfferCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateInput = {
    id?: number
    name: string
    weight: Decimal | DecimalJsLike | number | string
    type: $Enums.ItemType
    task_deliverable?: boolean
    icon_url?: string | null
    offers?: OfferUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    task_deliverable?: BoolFieldUpdateOperationsInput | boolean
    icon_url?: NullableStringFieldUpdateOperationsInput | string | null
    offers?: OfferUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    task_deliverable?: BoolFieldUpdateOperationsInput | boolean
    icon_url?: NullableStringFieldUpdateOperationsInput | string | null
    offers?: OfferUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemCreateManyInput = {
    id?: number
    name: string
    weight: Decimal | DecimalJsLike | number | string
    type: $Enums.ItemType
    task_deliverable?: boolean
    icon_url?: string | null
  }

  export type ItemUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    task_deliverable?: BoolFieldUpdateOperationsInput | boolean
    icon_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    task_deliverable?: BoolFieldUpdateOperationsInput | boolean
    icon_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NpcCreateInput = {
    name: string
    needs_quest_to_unlock?: boolean
    offers?: OfferCreateNestedManyWithoutNpcInput
    locations?: NpcLocationCreateNestedManyWithoutNpcInput
    npc_quests?: NpcQuestCreateNestedManyWithoutNpcInput
  }

  export type NpcUncheckedCreateInput = {
    id?: number
    name: string
    needs_quest_to_unlock?: boolean
    offers?: OfferUncheckedCreateNestedManyWithoutNpcInput
    locations?: NpcLocationUncheckedCreateNestedManyWithoutNpcInput
    npc_quests?: NpcQuestUncheckedCreateNestedManyWithoutNpcInput
  }

  export type NpcUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    needs_quest_to_unlock?: BoolFieldUpdateOperationsInput | boolean
    offers?: OfferUpdateManyWithoutNpcNestedInput
    locations?: NpcLocationUpdateManyWithoutNpcNestedInput
    npc_quests?: NpcQuestUpdateManyWithoutNpcNestedInput
  }

  export type NpcUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    needs_quest_to_unlock?: BoolFieldUpdateOperationsInput | boolean
    offers?: OfferUncheckedUpdateManyWithoutNpcNestedInput
    locations?: NpcLocationUncheckedUpdateManyWithoutNpcNestedInput
    npc_quests?: NpcQuestUncheckedUpdateManyWithoutNpcNestedInput
  }

  export type NpcCreateManyInput = {
    id?: number
    name: string
    needs_quest_to_unlock?: boolean
  }

  export type NpcUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    needs_quest_to_unlock?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NpcUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    needs_quest_to_unlock?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OfferCreateInput = {
    price: number
    item: ItemCreateNestedOneWithoutOffersInput
    npc: NpcCreateNestedOneWithoutOffersInput
  }

  export type OfferUncheckedCreateInput = {
    id?: number
    item_id: number
    npc_id: number
    price: number
  }

  export type OfferUpdateInput = {
    price?: IntFieldUpdateOperationsInput | number
    item?: ItemUpdateOneRequiredWithoutOffersNestedInput
    npc?: NpcUpdateOneRequiredWithoutOffersNestedInput
  }

  export type OfferUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    item_id?: IntFieldUpdateOperationsInput | number
    npc_id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type OfferCreateManyInput = {
    id?: number
    item_id: number
    npc_id: number
    price: number
  }

  export type OfferUpdateManyMutationInput = {
    price?: IntFieldUpdateOperationsInput | number
  }

  export type OfferUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    item_id?: IntFieldUpdateOperationsInput | number
    npc_id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type CityCreateInput = {
    name: string
    locations?: NpcLocationCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateInput = {
    id?: number
    name: string
    locations?: NpcLocationUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    locations?: NpcLocationUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    locations?: NpcLocationUncheckedUpdateManyWithoutCityNestedInput
  }

  export type CityCreateManyInput = {
    id?: number
    name: string
  }

  export type CityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type QuestCreateInput = {
    name: string
    npc_quests?: NpcQuestCreateNestedManyWithoutQuestInput
  }

  export type QuestUncheckedCreateInput = {
    id?: number
    name: string
    npc_quests?: NpcQuestUncheckedCreateNestedManyWithoutQuestInput
  }

  export type QuestUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    npc_quests?: NpcQuestUpdateManyWithoutQuestNestedInput
  }

  export type QuestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    npc_quests?: NpcQuestUncheckedUpdateManyWithoutQuestNestedInput
  }

  export type QuestCreateManyInput = {
    id?: number
    name: string
  }

  export type QuestUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type QuestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type NpcLocationCreateInput = {
    coord_x: number
    coord_y: number
    coord_z?: number
    npc: NpcCreateNestedOneWithoutLocationsInput
    city: CityCreateNestedOneWithoutLocationsInput
  }

  export type NpcLocationUncheckedCreateInput = {
    id?: number
    npc_id: number
    city_id: number
    coord_x: number
    coord_y: number
    coord_z?: number
  }

  export type NpcLocationUpdateInput = {
    coord_x?: IntFieldUpdateOperationsInput | number
    coord_y?: IntFieldUpdateOperationsInput | number
    coord_z?: IntFieldUpdateOperationsInput | number
    npc?: NpcUpdateOneRequiredWithoutLocationsNestedInput
    city?: CityUpdateOneRequiredWithoutLocationsNestedInput
  }

  export type NpcLocationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    npc_id?: IntFieldUpdateOperationsInput | number
    city_id?: IntFieldUpdateOperationsInput | number
    coord_x?: IntFieldUpdateOperationsInput | number
    coord_y?: IntFieldUpdateOperationsInput | number
    coord_z?: IntFieldUpdateOperationsInput | number
  }

  export type NpcLocationCreateManyInput = {
    id?: number
    npc_id: number
    city_id: number
    coord_x: number
    coord_y: number
    coord_z?: number
  }

  export type NpcLocationUpdateManyMutationInput = {
    coord_x?: IntFieldUpdateOperationsInput | number
    coord_y?: IntFieldUpdateOperationsInput | number
    coord_z?: IntFieldUpdateOperationsInput | number
  }

  export type NpcLocationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    npc_id?: IntFieldUpdateOperationsInput | number
    city_id?: IntFieldUpdateOperationsInput | number
    coord_x?: IntFieldUpdateOperationsInput | number
    coord_y?: IntFieldUpdateOperationsInput | number
    coord_z?: IntFieldUpdateOperationsInput | number
  }

  export type NpcQuestCreateInput = {
    npc: NpcCreateNestedOneWithoutNpc_questsInput
    quest: QuestCreateNestedOneWithoutNpc_questsInput
  }

  export type NpcQuestUncheckedCreateInput = {
    npc_id: number
    quest_id: number
  }

  export type NpcQuestUpdateInput = {
    npc?: NpcUpdateOneRequiredWithoutNpc_questsNestedInput
    quest?: QuestUpdateOneRequiredWithoutNpc_questsNestedInput
  }

  export type NpcQuestUncheckedUpdateInput = {
    npc_id?: IntFieldUpdateOperationsInput | number
    quest_id?: IntFieldUpdateOperationsInput | number
  }

  export type NpcQuestCreateManyInput = {
    npc_id: number
    quest_id: number
  }

  export type NpcQuestUpdateManyMutationInput = {

  }

  export type NpcQuestUncheckedUpdateManyInput = {
    npc_id?: IntFieldUpdateOperationsInput | number
    quest_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumItemTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemType | EnumItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumItemTypeFilter<$PrismaModel> | $Enums.ItemType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type OfferListRelationFilter = {
    every?: OfferWhereInput
    some?: OfferWhereInput
    none?: OfferWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OfferOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    weight?: SortOrder
    type?: SortOrder
    task_deliverable?: SortOrder
    icon_url?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    weight?: SortOrder
    type?: SortOrder
    task_deliverable?: SortOrder
    icon_url?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    weight?: SortOrder
    type?: SortOrder
    task_deliverable?: SortOrder
    icon_url?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumItemTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemType | EnumItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumItemTypeWithAggregatesFilter<$PrismaModel> | $Enums.ItemType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemTypeFilter<$PrismaModel>
    _max?: NestedEnumItemTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NpcLocationListRelationFilter = {
    every?: NpcLocationWhereInput
    some?: NpcLocationWhereInput
    none?: NpcLocationWhereInput
  }

  export type NpcQuestListRelationFilter = {
    every?: NpcQuestWhereInput
    some?: NpcQuestWhereInput
    none?: NpcQuestWhereInput
  }

  export type NpcLocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NpcQuestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NpcCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    needs_quest_to_unlock?: SortOrder
  }

  export type NpcAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NpcMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    needs_quest_to_unlock?: SortOrder
  }

  export type NpcMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    needs_quest_to_unlock?: SortOrder
  }

  export type NpcSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ItemScalarRelationFilter = {
    is?: ItemWhereInput
    isNot?: ItemWhereInput
  }

  export type NpcScalarRelationFilter = {
    is?: NpcWhereInput
    isNot?: NpcWhereInput
  }

  export type OfferItem_idNpc_idCompoundUniqueInput = {
    item_id: number
    npc_id: number
  }

  export type OfferCountOrderByAggregateInput = {
    id?: SortOrder
    item_id?: SortOrder
    npc_id?: SortOrder
    price?: SortOrder
  }

  export type OfferAvgOrderByAggregateInput = {
    id?: SortOrder
    item_id?: SortOrder
    npc_id?: SortOrder
    price?: SortOrder
  }

  export type OfferMaxOrderByAggregateInput = {
    id?: SortOrder
    item_id?: SortOrder
    npc_id?: SortOrder
    price?: SortOrder
  }

  export type OfferMinOrderByAggregateInput = {
    id?: SortOrder
    item_id?: SortOrder
    npc_id?: SortOrder
    price?: SortOrder
  }

  export type OfferSumOrderByAggregateInput = {
    id?: SortOrder
    item_id?: SortOrder
    npc_id?: SortOrder
    price?: SortOrder
  }

  export type CityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CityAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CitySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type QuestCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type QuestAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type QuestMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type QuestMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type QuestSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CityScalarRelationFilter = {
    is?: CityWhereInput
    isNot?: CityWhereInput
  }

  export type NpcLocationCountOrderByAggregateInput = {
    id?: SortOrder
    npc_id?: SortOrder
    city_id?: SortOrder
    coord_x?: SortOrder
    coord_y?: SortOrder
    coord_z?: SortOrder
  }

  export type NpcLocationAvgOrderByAggregateInput = {
    id?: SortOrder
    npc_id?: SortOrder
    city_id?: SortOrder
    coord_x?: SortOrder
    coord_y?: SortOrder
    coord_z?: SortOrder
  }

  export type NpcLocationMaxOrderByAggregateInput = {
    id?: SortOrder
    npc_id?: SortOrder
    city_id?: SortOrder
    coord_x?: SortOrder
    coord_y?: SortOrder
    coord_z?: SortOrder
  }

  export type NpcLocationMinOrderByAggregateInput = {
    id?: SortOrder
    npc_id?: SortOrder
    city_id?: SortOrder
    coord_x?: SortOrder
    coord_y?: SortOrder
    coord_z?: SortOrder
  }

  export type NpcLocationSumOrderByAggregateInput = {
    id?: SortOrder
    npc_id?: SortOrder
    city_id?: SortOrder
    coord_x?: SortOrder
    coord_y?: SortOrder
    coord_z?: SortOrder
  }

  export type QuestScalarRelationFilter = {
    is?: QuestWhereInput
    isNot?: QuestWhereInput
  }

  export type NpcQuestNpc_idQuest_idCompoundUniqueInput = {
    npc_id: number
    quest_id: number
  }

  export type NpcQuestCountOrderByAggregateInput = {
    npc_id?: SortOrder
    quest_id?: SortOrder
  }

  export type NpcQuestAvgOrderByAggregateInput = {
    npc_id?: SortOrder
    quest_id?: SortOrder
  }

  export type NpcQuestMaxOrderByAggregateInput = {
    npc_id?: SortOrder
    quest_id?: SortOrder
  }

  export type NpcQuestMinOrderByAggregateInput = {
    npc_id?: SortOrder
    quest_id?: SortOrder
  }

  export type NpcQuestSumOrderByAggregateInput = {
    npc_id?: SortOrder
    quest_id?: SortOrder
  }

  export type OfferCreateNestedManyWithoutItemInput = {
    create?: XOR<OfferCreateWithoutItemInput, OfferUncheckedCreateWithoutItemInput> | OfferCreateWithoutItemInput[] | OfferUncheckedCreateWithoutItemInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutItemInput | OfferCreateOrConnectWithoutItemInput[]
    createMany?: OfferCreateManyItemInputEnvelope
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
  }

  export type OfferUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<OfferCreateWithoutItemInput, OfferUncheckedCreateWithoutItemInput> | OfferCreateWithoutItemInput[] | OfferUncheckedCreateWithoutItemInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutItemInput | OfferCreateOrConnectWithoutItemInput[]
    createMany?: OfferCreateManyItemInputEnvelope
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumItemTypeFieldUpdateOperationsInput = {
    set?: $Enums.ItemType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type OfferUpdateManyWithoutItemNestedInput = {
    create?: XOR<OfferCreateWithoutItemInput, OfferUncheckedCreateWithoutItemInput> | OfferCreateWithoutItemInput[] | OfferUncheckedCreateWithoutItemInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutItemInput | OfferCreateOrConnectWithoutItemInput[]
    upsert?: OfferUpsertWithWhereUniqueWithoutItemInput | OfferUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: OfferCreateManyItemInputEnvelope
    set?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    disconnect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    delete?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    update?: OfferUpdateWithWhereUniqueWithoutItemInput | OfferUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: OfferUpdateManyWithWhereWithoutItemInput | OfferUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: OfferScalarWhereInput | OfferScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OfferUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<OfferCreateWithoutItemInput, OfferUncheckedCreateWithoutItemInput> | OfferCreateWithoutItemInput[] | OfferUncheckedCreateWithoutItemInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutItemInput | OfferCreateOrConnectWithoutItemInput[]
    upsert?: OfferUpsertWithWhereUniqueWithoutItemInput | OfferUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: OfferCreateManyItemInputEnvelope
    set?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    disconnect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    delete?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    update?: OfferUpdateWithWhereUniqueWithoutItemInput | OfferUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: OfferUpdateManyWithWhereWithoutItemInput | OfferUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: OfferScalarWhereInput | OfferScalarWhereInput[]
  }

  export type OfferCreateNestedManyWithoutNpcInput = {
    create?: XOR<OfferCreateWithoutNpcInput, OfferUncheckedCreateWithoutNpcInput> | OfferCreateWithoutNpcInput[] | OfferUncheckedCreateWithoutNpcInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutNpcInput | OfferCreateOrConnectWithoutNpcInput[]
    createMany?: OfferCreateManyNpcInputEnvelope
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
  }

  export type NpcLocationCreateNestedManyWithoutNpcInput = {
    create?: XOR<NpcLocationCreateWithoutNpcInput, NpcLocationUncheckedCreateWithoutNpcInput> | NpcLocationCreateWithoutNpcInput[] | NpcLocationUncheckedCreateWithoutNpcInput[]
    connectOrCreate?: NpcLocationCreateOrConnectWithoutNpcInput | NpcLocationCreateOrConnectWithoutNpcInput[]
    createMany?: NpcLocationCreateManyNpcInputEnvelope
    connect?: NpcLocationWhereUniqueInput | NpcLocationWhereUniqueInput[]
  }

  export type NpcQuestCreateNestedManyWithoutNpcInput = {
    create?: XOR<NpcQuestCreateWithoutNpcInput, NpcQuestUncheckedCreateWithoutNpcInput> | NpcQuestCreateWithoutNpcInput[] | NpcQuestUncheckedCreateWithoutNpcInput[]
    connectOrCreate?: NpcQuestCreateOrConnectWithoutNpcInput | NpcQuestCreateOrConnectWithoutNpcInput[]
    createMany?: NpcQuestCreateManyNpcInputEnvelope
    connect?: NpcQuestWhereUniqueInput | NpcQuestWhereUniqueInput[]
  }

  export type OfferUncheckedCreateNestedManyWithoutNpcInput = {
    create?: XOR<OfferCreateWithoutNpcInput, OfferUncheckedCreateWithoutNpcInput> | OfferCreateWithoutNpcInput[] | OfferUncheckedCreateWithoutNpcInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutNpcInput | OfferCreateOrConnectWithoutNpcInput[]
    createMany?: OfferCreateManyNpcInputEnvelope
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
  }

  export type NpcLocationUncheckedCreateNestedManyWithoutNpcInput = {
    create?: XOR<NpcLocationCreateWithoutNpcInput, NpcLocationUncheckedCreateWithoutNpcInput> | NpcLocationCreateWithoutNpcInput[] | NpcLocationUncheckedCreateWithoutNpcInput[]
    connectOrCreate?: NpcLocationCreateOrConnectWithoutNpcInput | NpcLocationCreateOrConnectWithoutNpcInput[]
    createMany?: NpcLocationCreateManyNpcInputEnvelope
    connect?: NpcLocationWhereUniqueInput | NpcLocationWhereUniqueInput[]
  }

  export type NpcQuestUncheckedCreateNestedManyWithoutNpcInput = {
    create?: XOR<NpcQuestCreateWithoutNpcInput, NpcQuestUncheckedCreateWithoutNpcInput> | NpcQuestCreateWithoutNpcInput[] | NpcQuestUncheckedCreateWithoutNpcInput[]
    connectOrCreate?: NpcQuestCreateOrConnectWithoutNpcInput | NpcQuestCreateOrConnectWithoutNpcInput[]
    createMany?: NpcQuestCreateManyNpcInputEnvelope
    connect?: NpcQuestWhereUniqueInput | NpcQuestWhereUniqueInput[]
  }

  export type OfferUpdateManyWithoutNpcNestedInput = {
    create?: XOR<OfferCreateWithoutNpcInput, OfferUncheckedCreateWithoutNpcInput> | OfferCreateWithoutNpcInput[] | OfferUncheckedCreateWithoutNpcInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutNpcInput | OfferCreateOrConnectWithoutNpcInput[]
    upsert?: OfferUpsertWithWhereUniqueWithoutNpcInput | OfferUpsertWithWhereUniqueWithoutNpcInput[]
    createMany?: OfferCreateManyNpcInputEnvelope
    set?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    disconnect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    delete?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    update?: OfferUpdateWithWhereUniqueWithoutNpcInput | OfferUpdateWithWhereUniqueWithoutNpcInput[]
    updateMany?: OfferUpdateManyWithWhereWithoutNpcInput | OfferUpdateManyWithWhereWithoutNpcInput[]
    deleteMany?: OfferScalarWhereInput | OfferScalarWhereInput[]
  }

  export type NpcLocationUpdateManyWithoutNpcNestedInput = {
    create?: XOR<NpcLocationCreateWithoutNpcInput, NpcLocationUncheckedCreateWithoutNpcInput> | NpcLocationCreateWithoutNpcInput[] | NpcLocationUncheckedCreateWithoutNpcInput[]
    connectOrCreate?: NpcLocationCreateOrConnectWithoutNpcInput | NpcLocationCreateOrConnectWithoutNpcInput[]
    upsert?: NpcLocationUpsertWithWhereUniqueWithoutNpcInput | NpcLocationUpsertWithWhereUniqueWithoutNpcInput[]
    createMany?: NpcLocationCreateManyNpcInputEnvelope
    set?: NpcLocationWhereUniqueInput | NpcLocationWhereUniqueInput[]
    disconnect?: NpcLocationWhereUniqueInput | NpcLocationWhereUniqueInput[]
    delete?: NpcLocationWhereUniqueInput | NpcLocationWhereUniqueInput[]
    connect?: NpcLocationWhereUniqueInput | NpcLocationWhereUniqueInput[]
    update?: NpcLocationUpdateWithWhereUniqueWithoutNpcInput | NpcLocationUpdateWithWhereUniqueWithoutNpcInput[]
    updateMany?: NpcLocationUpdateManyWithWhereWithoutNpcInput | NpcLocationUpdateManyWithWhereWithoutNpcInput[]
    deleteMany?: NpcLocationScalarWhereInput | NpcLocationScalarWhereInput[]
  }

  export type NpcQuestUpdateManyWithoutNpcNestedInput = {
    create?: XOR<NpcQuestCreateWithoutNpcInput, NpcQuestUncheckedCreateWithoutNpcInput> | NpcQuestCreateWithoutNpcInput[] | NpcQuestUncheckedCreateWithoutNpcInput[]
    connectOrCreate?: NpcQuestCreateOrConnectWithoutNpcInput | NpcQuestCreateOrConnectWithoutNpcInput[]
    upsert?: NpcQuestUpsertWithWhereUniqueWithoutNpcInput | NpcQuestUpsertWithWhereUniqueWithoutNpcInput[]
    createMany?: NpcQuestCreateManyNpcInputEnvelope
    set?: NpcQuestWhereUniqueInput | NpcQuestWhereUniqueInput[]
    disconnect?: NpcQuestWhereUniqueInput | NpcQuestWhereUniqueInput[]
    delete?: NpcQuestWhereUniqueInput | NpcQuestWhereUniqueInput[]
    connect?: NpcQuestWhereUniqueInput | NpcQuestWhereUniqueInput[]
    update?: NpcQuestUpdateWithWhereUniqueWithoutNpcInput | NpcQuestUpdateWithWhereUniqueWithoutNpcInput[]
    updateMany?: NpcQuestUpdateManyWithWhereWithoutNpcInput | NpcQuestUpdateManyWithWhereWithoutNpcInput[]
    deleteMany?: NpcQuestScalarWhereInput | NpcQuestScalarWhereInput[]
  }

  export type OfferUncheckedUpdateManyWithoutNpcNestedInput = {
    create?: XOR<OfferCreateWithoutNpcInput, OfferUncheckedCreateWithoutNpcInput> | OfferCreateWithoutNpcInput[] | OfferUncheckedCreateWithoutNpcInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutNpcInput | OfferCreateOrConnectWithoutNpcInput[]
    upsert?: OfferUpsertWithWhereUniqueWithoutNpcInput | OfferUpsertWithWhereUniqueWithoutNpcInput[]
    createMany?: OfferCreateManyNpcInputEnvelope
    set?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    disconnect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    delete?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    update?: OfferUpdateWithWhereUniqueWithoutNpcInput | OfferUpdateWithWhereUniqueWithoutNpcInput[]
    updateMany?: OfferUpdateManyWithWhereWithoutNpcInput | OfferUpdateManyWithWhereWithoutNpcInput[]
    deleteMany?: OfferScalarWhereInput | OfferScalarWhereInput[]
  }

  export type NpcLocationUncheckedUpdateManyWithoutNpcNestedInput = {
    create?: XOR<NpcLocationCreateWithoutNpcInput, NpcLocationUncheckedCreateWithoutNpcInput> | NpcLocationCreateWithoutNpcInput[] | NpcLocationUncheckedCreateWithoutNpcInput[]
    connectOrCreate?: NpcLocationCreateOrConnectWithoutNpcInput | NpcLocationCreateOrConnectWithoutNpcInput[]
    upsert?: NpcLocationUpsertWithWhereUniqueWithoutNpcInput | NpcLocationUpsertWithWhereUniqueWithoutNpcInput[]
    createMany?: NpcLocationCreateManyNpcInputEnvelope
    set?: NpcLocationWhereUniqueInput | NpcLocationWhereUniqueInput[]
    disconnect?: NpcLocationWhereUniqueInput | NpcLocationWhereUniqueInput[]
    delete?: NpcLocationWhereUniqueInput | NpcLocationWhereUniqueInput[]
    connect?: NpcLocationWhereUniqueInput | NpcLocationWhereUniqueInput[]
    update?: NpcLocationUpdateWithWhereUniqueWithoutNpcInput | NpcLocationUpdateWithWhereUniqueWithoutNpcInput[]
    updateMany?: NpcLocationUpdateManyWithWhereWithoutNpcInput | NpcLocationUpdateManyWithWhereWithoutNpcInput[]
    deleteMany?: NpcLocationScalarWhereInput | NpcLocationScalarWhereInput[]
  }

  export type NpcQuestUncheckedUpdateManyWithoutNpcNestedInput = {
    create?: XOR<NpcQuestCreateWithoutNpcInput, NpcQuestUncheckedCreateWithoutNpcInput> | NpcQuestCreateWithoutNpcInput[] | NpcQuestUncheckedCreateWithoutNpcInput[]
    connectOrCreate?: NpcQuestCreateOrConnectWithoutNpcInput | NpcQuestCreateOrConnectWithoutNpcInput[]
    upsert?: NpcQuestUpsertWithWhereUniqueWithoutNpcInput | NpcQuestUpsertWithWhereUniqueWithoutNpcInput[]
    createMany?: NpcQuestCreateManyNpcInputEnvelope
    set?: NpcQuestWhereUniqueInput | NpcQuestWhereUniqueInput[]
    disconnect?: NpcQuestWhereUniqueInput | NpcQuestWhereUniqueInput[]
    delete?: NpcQuestWhereUniqueInput | NpcQuestWhereUniqueInput[]
    connect?: NpcQuestWhereUniqueInput | NpcQuestWhereUniqueInput[]
    update?: NpcQuestUpdateWithWhereUniqueWithoutNpcInput | NpcQuestUpdateWithWhereUniqueWithoutNpcInput[]
    updateMany?: NpcQuestUpdateManyWithWhereWithoutNpcInput | NpcQuestUpdateManyWithWhereWithoutNpcInput[]
    deleteMany?: NpcQuestScalarWhereInput | NpcQuestScalarWhereInput[]
  }

  export type ItemCreateNestedOneWithoutOffersInput = {
    create?: XOR<ItemCreateWithoutOffersInput, ItemUncheckedCreateWithoutOffersInput>
    connectOrCreate?: ItemCreateOrConnectWithoutOffersInput
    connect?: ItemWhereUniqueInput
  }

  export type NpcCreateNestedOneWithoutOffersInput = {
    create?: XOR<NpcCreateWithoutOffersInput, NpcUncheckedCreateWithoutOffersInput>
    connectOrCreate?: NpcCreateOrConnectWithoutOffersInput
    connect?: NpcWhereUniqueInput
  }

  export type ItemUpdateOneRequiredWithoutOffersNestedInput = {
    create?: XOR<ItemCreateWithoutOffersInput, ItemUncheckedCreateWithoutOffersInput>
    connectOrCreate?: ItemCreateOrConnectWithoutOffersInput
    upsert?: ItemUpsertWithoutOffersInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutOffersInput, ItemUpdateWithoutOffersInput>, ItemUncheckedUpdateWithoutOffersInput>
  }

  export type NpcUpdateOneRequiredWithoutOffersNestedInput = {
    create?: XOR<NpcCreateWithoutOffersInput, NpcUncheckedCreateWithoutOffersInput>
    connectOrCreate?: NpcCreateOrConnectWithoutOffersInput
    upsert?: NpcUpsertWithoutOffersInput
    connect?: NpcWhereUniqueInput
    update?: XOR<XOR<NpcUpdateToOneWithWhereWithoutOffersInput, NpcUpdateWithoutOffersInput>, NpcUncheckedUpdateWithoutOffersInput>
  }

  export type NpcLocationCreateNestedManyWithoutCityInput = {
    create?: XOR<NpcLocationCreateWithoutCityInput, NpcLocationUncheckedCreateWithoutCityInput> | NpcLocationCreateWithoutCityInput[] | NpcLocationUncheckedCreateWithoutCityInput[]
    connectOrCreate?: NpcLocationCreateOrConnectWithoutCityInput | NpcLocationCreateOrConnectWithoutCityInput[]
    createMany?: NpcLocationCreateManyCityInputEnvelope
    connect?: NpcLocationWhereUniqueInput | NpcLocationWhereUniqueInput[]
  }

  export type NpcLocationUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<NpcLocationCreateWithoutCityInput, NpcLocationUncheckedCreateWithoutCityInput> | NpcLocationCreateWithoutCityInput[] | NpcLocationUncheckedCreateWithoutCityInput[]
    connectOrCreate?: NpcLocationCreateOrConnectWithoutCityInput | NpcLocationCreateOrConnectWithoutCityInput[]
    createMany?: NpcLocationCreateManyCityInputEnvelope
    connect?: NpcLocationWhereUniqueInput | NpcLocationWhereUniqueInput[]
  }

  export type NpcLocationUpdateManyWithoutCityNestedInput = {
    create?: XOR<NpcLocationCreateWithoutCityInput, NpcLocationUncheckedCreateWithoutCityInput> | NpcLocationCreateWithoutCityInput[] | NpcLocationUncheckedCreateWithoutCityInput[]
    connectOrCreate?: NpcLocationCreateOrConnectWithoutCityInput | NpcLocationCreateOrConnectWithoutCityInput[]
    upsert?: NpcLocationUpsertWithWhereUniqueWithoutCityInput | NpcLocationUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: NpcLocationCreateManyCityInputEnvelope
    set?: NpcLocationWhereUniqueInput | NpcLocationWhereUniqueInput[]
    disconnect?: NpcLocationWhereUniqueInput | NpcLocationWhereUniqueInput[]
    delete?: NpcLocationWhereUniqueInput | NpcLocationWhereUniqueInput[]
    connect?: NpcLocationWhereUniqueInput | NpcLocationWhereUniqueInput[]
    update?: NpcLocationUpdateWithWhereUniqueWithoutCityInput | NpcLocationUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: NpcLocationUpdateManyWithWhereWithoutCityInput | NpcLocationUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: NpcLocationScalarWhereInput | NpcLocationScalarWhereInput[]
  }

  export type NpcLocationUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<NpcLocationCreateWithoutCityInput, NpcLocationUncheckedCreateWithoutCityInput> | NpcLocationCreateWithoutCityInput[] | NpcLocationUncheckedCreateWithoutCityInput[]
    connectOrCreate?: NpcLocationCreateOrConnectWithoutCityInput | NpcLocationCreateOrConnectWithoutCityInput[]
    upsert?: NpcLocationUpsertWithWhereUniqueWithoutCityInput | NpcLocationUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: NpcLocationCreateManyCityInputEnvelope
    set?: NpcLocationWhereUniqueInput | NpcLocationWhereUniqueInput[]
    disconnect?: NpcLocationWhereUniqueInput | NpcLocationWhereUniqueInput[]
    delete?: NpcLocationWhereUniqueInput | NpcLocationWhereUniqueInput[]
    connect?: NpcLocationWhereUniqueInput | NpcLocationWhereUniqueInput[]
    update?: NpcLocationUpdateWithWhereUniqueWithoutCityInput | NpcLocationUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: NpcLocationUpdateManyWithWhereWithoutCityInput | NpcLocationUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: NpcLocationScalarWhereInput | NpcLocationScalarWhereInput[]
  }

  export type NpcQuestCreateNestedManyWithoutQuestInput = {
    create?: XOR<NpcQuestCreateWithoutQuestInput, NpcQuestUncheckedCreateWithoutQuestInput> | NpcQuestCreateWithoutQuestInput[] | NpcQuestUncheckedCreateWithoutQuestInput[]
    connectOrCreate?: NpcQuestCreateOrConnectWithoutQuestInput | NpcQuestCreateOrConnectWithoutQuestInput[]
    createMany?: NpcQuestCreateManyQuestInputEnvelope
    connect?: NpcQuestWhereUniqueInput | NpcQuestWhereUniqueInput[]
  }

  export type NpcQuestUncheckedCreateNestedManyWithoutQuestInput = {
    create?: XOR<NpcQuestCreateWithoutQuestInput, NpcQuestUncheckedCreateWithoutQuestInput> | NpcQuestCreateWithoutQuestInput[] | NpcQuestUncheckedCreateWithoutQuestInput[]
    connectOrCreate?: NpcQuestCreateOrConnectWithoutQuestInput | NpcQuestCreateOrConnectWithoutQuestInput[]
    createMany?: NpcQuestCreateManyQuestInputEnvelope
    connect?: NpcQuestWhereUniqueInput | NpcQuestWhereUniqueInput[]
  }

  export type NpcQuestUpdateManyWithoutQuestNestedInput = {
    create?: XOR<NpcQuestCreateWithoutQuestInput, NpcQuestUncheckedCreateWithoutQuestInput> | NpcQuestCreateWithoutQuestInput[] | NpcQuestUncheckedCreateWithoutQuestInput[]
    connectOrCreate?: NpcQuestCreateOrConnectWithoutQuestInput | NpcQuestCreateOrConnectWithoutQuestInput[]
    upsert?: NpcQuestUpsertWithWhereUniqueWithoutQuestInput | NpcQuestUpsertWithWhereUniqueWithoutQuestInput[]
    createMany?: NpcQuestCreateManyQuestInputEnvelope
    set?: NpcQuestWhereUniqueInput | NpcQuestWhereUniqueInput[]
    disconnect?: NpcQuestWhereUniqueInput | NpcQuestWhereUniqueInput[]
    delete?: NpcQuestWhereUniqueInput | NpcQuestWhereUniqueInput[]
    connect?: NpcQuestWhereUniqueInput | NpcQuestWhereUniqueInput[]
    update?: NpcQuestUpdateWithWhereUniqueWithoutQuestInput | NpcQuestUpdateWithWhereUniqueWithoutQuestInput[]
    updateMany?: NpcQuestUpdateManyWithWhereWithoutQuestInput | NpcQuestUpdateManyWithWhereWithoutQuestInput[]
    deleteMany?: NpcQuestScalarWhereInput | NpcQuestScalarWhereInput[]
  }

  export type NpcQuestUncheckedUpdateManyWithoutQuestNestedInput = {
    create?: XOR<NpcQuestCreateWithoutQuestInput, NpcQuestUncheckedCreateWithoutQuestInput> | NpcQuestCreateWithoutQuestInput[] | NpcQuestUncheckedCreateWithoutQuestInput[]
    connectOrCreate?: NpcQuestCreateOrConnectWithoutQuestInput | NpcQuestCreateOrConnectWithoutQuestInput[]
    upsert?: NpcQuestUpsertWithWhereUniqueWithoutQuestInput | NpcQuestUpsertWithWhereUniqueWithoutQuestInput[]
    createMany?: NpcQuestCreateManyQuestInputEnvelope
    set?: NpcQuestWhereUniqueInput | NpcQuestWhereUniqueInput[]
    disconnect?: NpcQuestWhereUniqueInput | NpcQuestWhereUniqueInput[]
    delete?: NpcQuestWhereUniqueInput | NpcQuestWhereUniqueInput[]
    connect?: NpcQuestWhereUniqueInput | NpcQuestWhereUniqueInput[]
    update?: NpcQuestUpdateWithWhereUniqueWithoutQuestInput | NpcQuestUpdateWithWhereUniqueWithoutQuestInput[]
    updateMany?: NpcQuestUpdateManyWithWhereWithoutQuestInput | NpcQuestUpdateManyWithWhereWithoutQuestInput[]
    deleteMany?: NpcQuestScalarWhereInput | NpcQuestScalarWhereInput[]
  }

  export type NpcCreateNestedOneWithoutLocationsInput = {
    create?: XOR<NpcCreateWithoutLocationsInput, NpcUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: NpcCreateOrConnectWithoutLocationsInput
    connect?: NpcWhereUniqueInput
  }

  export type CityCreateNestedOneWithoutLocationsInput = {
    create?: XOR<CityCreateWithoutLocationsInput, CityUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: CityCreateOrConnectWithoutLocationsInput
    connect?: CityWhereUniqueInput
  }

  export type NpcUpdateOneRequiredWithoutLocationsNestedInput = {
    create?: XOR<NpcCreateWithoutLocationsInput, NpcUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: NpcCreateOrConnectWithoutLocationsInput
    upsert?: NpcUpsertWithoutLocationsInput
    connect?: NpcWhereUniqueInput
    update?: XOR<XOR<NpcUpdateToOneWithWhereWithoutLocationsInput, NpcUpdateWithoutLocationsInput>, NpcUncheckedUpdateWithoutLocationsInput>
  }

  export type CityUpdateOneRequiredWithoutLocationsNestedInput = {
    create?: XOR<CityCreateWithoutLocationsInput, CityUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: CityCreateOrConnectWithoutLocationsInput
    upsert?: CityUpsertWithoutLocationsInput
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutLocationsInput, CityUpdateWithoutLocationsInput>, CityUncheckedUpdateWithoutLocationsInput>
  }

  export type NpcCreateNestedOneWithoutNpc_questsInput = {
    create?: XOR<NpcCreateWithoutNpc_questsInput, NpcUncheckedCreateWithoutNpc_questsInput>
    connectOrCreate?: NpcCreateOrConnectWithoutNpc_questsInput
    connect?: NpcWhereUniqueInput
  }

  export type QuestCreateNestedOneWithoutNpc_questsInput = {
    create?: XOR<QuestCreateWithoutNpc_questsInput, QuestUncheckedCreateWithoutNpc_questsInput>
    connectOrCreate?: QuestCreateOrConnectWithoutNpc_questsInput
    connect?: QuestWhereUniqueInput
  }

  export type NpcUpdateOneRequiredWithoutNpc_questsNestedInput = {
    create?: XOR<NpcCreateWithoutNpc_questsInput, NpcUncheckedCreateWithoutNpc_questsInput>
    connectOrCreate?: NpcCreateOrConnectWithoutNpc_questsInput
    upsert?: NpcUpsertWithoutNpc_questsInput
    connect?: NpcWhereUniqueInput
    update?: XOR<XOR<NpcUpdateToOneWithWhereWithoutNpc_questsInput, NpcUpdateWithoutNpc_questsInput>, NpcUncheckedUpdateWithoutNpc_questsInput>
  }

  export type QuestUpdateOneRequiredWithoutNpc_questsNestedInput = {
    create?: XOR<QuestCreateWithoutNpc_questsInput, QuestUncheckedCreateWithoutNpc_questsInput>
    connectOrCreate?: QuestCreateOrConnectWithoutNpc_questsInput
    upsert?: QuestUpsertWithoutNpc_questsInput
    connect?: QuestWhereUniqueInput
    update?: XOR<XOR<QuestUpdateToOneWithWhereWithoutNpc_questsInput, QuestUpdateWithoutNpc_questsInput>, QuestUncheckedUpdateWithoutNpc_questsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumItemTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemType | EnumItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumItemTypeFilter<$PrismaModel> | $Enums.ItemType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumItemTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemType | EnumItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumItemTypeWithAggregatesFilter<$PrismaModel> | $Enums.ItemType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemTypeFilter<$PrismaModel>
    _max?: NestedEnumItemTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type OfferCreateWithoutItemInput = {
    price: number
    npc: NpcCreateNestedOneWithoutOffersInput
  }

  export type OfferUncheckedCreateWithoutItemInput = {
    id?: number
    npc_id: number
    price: number
  }

  export type OfferCreateOrConnectWithoutItemInput = {
    where: OfferWhereUniqueInput
    create: XOR<OfferCreateWithoutItemInput, OfferUncheckedCreateWithoutItemInput>
  }

  export type OfferCreateManyItemInputEnvelope = {
    data: OfferCreateManyItemInput | OfferCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type OfferUpsertWithWhereUniqueWithoutItemInput = {
    where: OfferWhereUniqueInput
    update: XOR<OfferUpdateWithoutItemInput, OfferUncheckedUpdateWithoutItemInput>
    create: XOR<OfferCreateWithoutItemInput, OfferUncheckedCreateWithoutItemInput>
  }

  export type OfferUpdateWithWhereUniqueWithoutItemInput = {
    where: OfferWhereUniqueInput
    data: XOR<OfferUpdateWithoutItemInput, OfferUncheckedUpdateWithoutItemInput>
  }

  export type OfferUpdateManyWithWhereWithoutItemInput = {
    where: OfferScalarWhereInput
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyWithoutItemInput>
  }

  export type OfferScalarWhereInput = {
    AND?: OfferScalarWhereInput | OfferScalarWhereInput[]
    OR?: OfferScalarWhereInput[]
    NOT?: OfferScalarWhereInput | OfferScalarWhereInput[]
    id?: IntFilter<"Offer"> | number
    item_id?: IntFilter<"Offer"> | number
    npc_id?: IntFilter<"Offer"> | number
    price?: IntFilter<"Offer"> | number
  }

  export type OfferCreateWithoutNpcInput = {
    price: number
    item: ItemCreateNestedOneWithoutOffersInput
  }

  export type OfferUncheckedCreateWithoutNpcInput = {
    id?: number
    item_id: number
    price: number
  }

  export type OfferCreateOrConnectWithoutNpcInput = {
    where: OfferWhereUniqueInput
    create: XOR<OfferCreateWithoutNpcInput, OfferUncheckedCreateWithoutNpcInput>
  }

  export type OfferCreateManyNpcInputEnvelope = {
    data: OfferCreateManyNpcInput | OfferCreateManyNpcInput[]
    skipDuplicates?: boolean
  }

  export type NpcLocationCreateWithoutNpcInput = {
    coord_x: number
    coord_y: number
    coord_z?: number
    city: CityCreateNestedOneWithoutLocationsInput
  }

  export type NpcLocationUncheckedCreateWithoutNpcInput = {
    id?: number
    city_id: number
    coord_x: number
    coord_y: number
    coord_z?: number
  }

  export type NpcLocationCreateOrConnectWithoutNpcInput = {
    where: NpcLocationWhereUniqueInput
    create: XOR<NpcLocationCreateWithoutNpcInput, NpcLocationUncheckedCreateWithoutNpcInput>
  }

  export type NpcLocationCreateManyNpcInputEnvelope = {
    data: NpcLocationCreateManyNpcInput | NpcLocationCreateManyNpcInput[]
    skipDuplicates?: boolean
  }

  export type NpcQuestCreateWithoutNpcInput = {
    quest: QuestCreateNestedOneWithoutNpc_questsInput
  }

  export type NpcQuestUncheckedCreateWithoutNpcInput = {
    quest_id: number
  }

  export type NpcQuestCreateOrConnectWithoutNpcInput = {
    where: NpcQuestWhereUniqueInput
    create: XOR<NpcQuestCreateWithoutNpcInput, NpcQuestUncheckedCreateWithoutNpcInput>
  }

  export type NpcQuestCreateManyNpcInputEnvelope = {
    data: NpcQuestCreateManyNpcInput | NpcQuestCreateManyNpcInput[]
    skipDuplicates?: boolean
  }

  export type OfferUpsertWithWhereUniqueWithoutNpcInput = {
    where: OfferWhereUniqueInput
    update: XOR<OfferUpdateWithoutNpcInput, OfferUncheckedUpdateWithoutNpcInput>
    create: XOR<OfferCreateWithoutNpcInput, OfferUncheckedCreateWithoutNpcInput>
  }

  export type OfferUpdateWithWhereUniqueWithoutNpcInput = {
    where: OfferWhereUniqueInput
    data: XOR<OfferUpdateWithoutNpcInput, OfferUncheckedUpdateWithoutNpcInput>
  }

  export type OfferUpdateManyWithWhereWithoutNpcInput = {
    where: OfferScalarWhereInput
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyWithoutNpcInput>
  }

  export type NpcLocationUpsertWithWhereUniqueWithoutNpcInput = {
    where: NpcLocationWhereUniqueInput
    update: XOR<NpcLocationUpdateWithoutNpcInput, NpcLocationUncheckedUpdateWithoutNpcInput>
    create: XOR<NpcLocationCreateWithoutNpcInput, NpcLocationUncheckedCreateWithoutNpcInput>
  }

  export type NpcLocationUpdateWithWhereUniqueWithoutNpcInput = {
    where: NpcLocationWhereUniqueInput
    data: XOR<NpcLocationUpdateWithoutNpcInput, NpcLocationUncheckedUpdateWithoutNpcInput>
  }

  export type NpcLocationUpdateManyWithWhereWithoutNpcInput = {
    where: NpcLocationScalarWhereInput
    data: XOR<NpcLocationUpdateManyMutationInput, NpcLocationUncheckedUpdateManyWithoutNpcInput>
  }

  export type NpcLocationScalarWhereInput = {
    AND?: NpcLocationScalarWhereInput | NpcLocationScalarWhereInput[]
    OR?: NpcLocationScalarWhereInput[]
    NOT?: NpcLocationScalarWhereInput | NpcLocationScalarWhereInput[]
    id?: IntFilter<"NpcLocation"> | number
    npc_id?: IntFilter<"NpcLocation"> | number
    city_id?: IntFilter<"NpcLocation"> | number
    coord_x?: IntFilter<"NpcLocation"> | number
    coord_y?: IntFilter<"NpcLocation"> | number
    coord_z?: IntFilter<"NpcLocation"> | number
  }

  export type NpcQuestUpsertWithWhereUniqueWithoutNpcInput = {
    where: NpcQuestWhereUniqueInput
    update: XOR<NpcQuestUpdateWithoutNpcInput, NpcQuestUncheckedUpdateWithoutNpcInput>
    create: XOR<NpcQuestCreateWithoutNpcInput, NpcQuestUncheckedCreateWithoutNpcInput>
  }

  export type NpcQuestUpdateWithWhereUniqueWithoutNpcInput = {
    where: NpcQuestWhereUniqueInput
    data: XOR<NpcQuestUpdateWithoutNpcInput, NpcQuestUncheckedUpdateWithoutNpcInput>
  }

  export type NpcQuestUpdateManyWithWhereWithoutNpcInput = {
    where: NpcQuestScalarWhereInput
    data: XOR<NpcQuestUpdateManyMutationInput, NpcQuestUncheckedUpdateManyWithoutNpcInput>
  }

  export type NpcQuestScalarWhereInput = {
    AND?: NpcQuestScalarWhereInput | NpcQuestScalarWhereInput[]
    OR?: NpcQuestScalarWhereInput[]
    NOT?: NpcQuestScalarWhereInput | NpcQuestScalarWhereInput[]
    npc_id?: IntFilter<"NpcQuest"> | number
    quest_id?: IntFilter<"NpcQuest"> | number
  }

  export type ItemCreateWithoutOffersInput = {
    name: string
    weight: Decimal | DecimalJsLike | number | string
    type: $Enums.ItemType
    task_deliverable?: boolean
    icon_url?: string | null
  }

  export type ItemUncheckedCreateWithoutOffersInput = {
    id?: number
    name: string
    weight: Decimal | DecimalJsLike | number | string
    type: $Enums.ItemType
    task_deliverable?: boolean
    icon_url?: string | null
  }

  export type ItemCreateOrConnectWithoutOffersInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutOffersInput, ItemUncheckedCreateWithoutOffersInput>
  }

  export type NpcCreateWithoutOffersInput = {
    name: string
    needs_quest_to_unlock?: boolean
    locations?: NpcLocationCreateNestedManyWithoutNpcInput
    npc_quests?: NpcQuestCreateNestedManyWithoutNpcInput
  }

  export type NpcUncheckedCreateWithoutOffersInput = {
    id?: number
    name: string
    needs_quest_to_unlock?: boolean
    locations?: NpcLocationUncheckedCreateNestedManyWithoutNpcInput
    npc_quests?: NpcQuestUncheckedCreateNestedManyWithoutNpcInput
  }

  export type NpcCreateOrConnectWithoutOffersInput = {
    where: NpcWhereUniqueInput
    create: XOR<NpcCreateWithoutOffersInput, NpcUncheckedCreateWithoutOffersInput>
  }

  export type ItemUpsertWithoutOffersInput = {
    update: XOR<ItemUpdateWithoutOffersInput, ItemUncheckedUpdateWithoutOffersInput>
    create: XOR<ItemCreateWithoutOffersInput, ItemUncheckedCreateWithoutOffersInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutOffersInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutOffersInput, ItemUncheckedUpdateWithoutOffersInput>
  }

  export type ItemUpdateWithoutOffersInput = {
    name?: StringFieldUpdateOperationsInput | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    task_deliverable?: BoolFieldUpdateOperationsInput | boolean
    icon_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemUncheckedUpdateWithoutOffersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    task_deliverable?: BoolFieldUpdateOperationsInput | boolean
    icon_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NpcUpsertWithoutOffersInput = {
    update: XOR<NpcUpdateWithoutOffersInput, NpcUncheckedUpdateWithoutOffersInput>
    create: XOR<NpcCreateWithoutOffersInput, NpcUncheckedCreateWithoutOffersInput>
    where?: NpcWhereInput
  }

  export type NpcUpdateToOneWithWhereWithoutOffersInput = {
    where?: NpcWhereInput
    data: XOR<NpcUpdateWithoutOffersInput, NpcUncheckedUpdateWithoutOffersInput>
  }

  export type NpcUpdateWithoutOffersInput = {
    name?: StringFieldUpdateOperationsInput | string
    needs_quest_to_unlock?: BoolFieldUpdateOperationsInput | boolean
    locations?: NpcLocationUpdateManyWithoutNpcNestedInput
    npc_quests?: NpcQuestUpdateManyWithoutNpcNestedInput
  }

  export type NpcUncheckedUpdateWithoutOffersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    needs_quest_to_unlock?: BoolFieldUpdateOperationsInput | boolean
    locations?: NpcLocationUncheckedUpdateManyWithoutNpcNestedInput
    npc_quests?: NpcQuestUncheckedUpdateManyWithoutNpcNestedInput
  }

  export type NpcLocationCreateWithoutCityInput = {
    coord_x: number
    coord_y: number
    coord_z?: number
    npc: NpcCreateNestedOneWithoutLocationsInput
  }

  export type NpcLocationUncheckedCreateWithoutCityInput = {
    id?: number
    npc_id: number
    coord_x: number
    coord_y: number
    coord_z?: number
  }

  export type NpcLocationCreateOrConnectWithoutCityInput = {
    where: NpcLocationWhereUniqueInput
    create: XOR<NpcLocationCreateWithoutCityInput, NpcLocationUncheckedCreateWithoutCityInput>
  }

  export type NpcLocationCreateManyCityInputEnvelope = {
    data: NpcLocationCreateManyCityInput | NpcLocationCreateManyCityInput[]
    skipDuplicates?: boolean
  }

  export type NpcLocationUpsertWithWhereUniqueWithoutCityInput = {
    where: NpcLocationWhereUniqueInput
    update: XOR<NpcLocationUpdateWithoutCityInput, NpcLocationUncheckedUpdateWithoutCityInput>
    create: XOR<NpcLocationCreateWithoutCityInput, NpcLocationUncheckedCreateWithoutCityInput>
  }

  export type NpcLocationUpdateWithWhereUniqueWithoutCityInput = {
    where: NpcLocationWhereUniqueInput
    data: XOR<NpcLocationUpdateWithoutCityInput, NpcLocationUncheckedUpdateWithoutCityInput>
  }

  export type NpcLocationUpdateManyWithWhereWithoutCityInput = {
    where: NpcLocationScalarWhereInput
    data: XOR<NpcLocationUpdateManyMutationInput, NpcLocationUncheckedUpdateManyWithoutCityInput>
  }

  export type NpcQuestCreateWithoutQuestInput = {
    npc: NpcCreateNestedOneWithoutNpc_questsInput
  }

  export type NpcQuestUncheckedCreateWithoutQuestInput = {
    npc_id: number
  }

  export type NpcQuestCreateOrConnectWithoutQuestInput = {
    where: NpcQuestWhereUniqueInput
    create: XOR<NpcQuestCreateWithoutQuestInput, NpcQuestUncheckedCreateWithoutQuestInput>
  }

  export type NpcQuestCreateManyQuestInputEnvelope = {
    data: NpcQuestCreateManyQuestInput | NpcQuestCreateManyQuestInput[]
    skipDuplicates?: boolean
  }

  export type NpcQuestUpsertWithWhereUniqueWithoutQuestInput = {
    where: NpcQuestWhereUniqueInput
    update: XOR<NpcQuestUpdateWithoutQuestInput, NpcQuestUncheckedUpdateWithoutQuestInput>
    create: XOR<NpcQuestCreateWithoutQuestInput, NpcQuestUncheckedCreateWithoutQuestInput>
  }

  export type NpcQuestUpdateWithWhereUniqueWithoutQuestInput = {
    where: NpcQuestWhereUniqueInput
    data: XOR<NpcQuestUpdateWithoutQuestInput, NpcQuestUncheckedUpdateWithoutQuestInput>
  }

  export type NpcQuestUpdateManyWithWhereWithoutQuestInput = {
    where: NpcQuestScalarWhereInput
    data: XOR<NpcQuestUpdateManyMutationInput, NpcQuestUncheckedUpdateManyWithoutQuestInput>
  }

  export type NpcCreateWithoutLocationsInput = {
    name: string
    needs_quest_to_unlock?: boolean
    offers?: OfferCreateNestedManyWithoutNpcInput
    npc_quests?: NpcQuestCreateNestedManyWithoutNpcInput
  }

  export type NpcUncheckedCreateWithoutLocationsInput = {
    id?: number
    name: string
    needs_quest_to_unlock?: boolean
    offers?: OfferUncheckedCreateNestedManyWithoutNpcInput
    npc_quests?: NpcQuestUncheckedCreateNestedManyWithoutNpcInput
  }

  export type NpcCreateOrConnectWithoutLocationsInput = {
    where: NpcWhereUniqueInput
    create: XOR<NpcCreateWithoutLocationsInput, NpcUncheckedCreateWithoutLocationsInput>
  }

  export type CityCreateWithoutLocationsInput = {
    name: string
  }

  export type CityUncheckedCreateWithoutLocationsInput = {
    id?: number
    name: string
  }

  export type CityCreateOrConnectWithoutLocationsInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutLocationsInput, CityUncheckedCreateWithoutLocationsInput>
  }

  export type NpcUpsertWithoutLocationsInput = {
    update: XOR<NpcUpdateWithoutLocationsInput, NpcUncheckedUpdateWithoutLocationsInput>
    create: XOR<NpcCreateWithoutLocationsInput, NpcUncheckedCreateWithoutLocationsInput>
    where?: NpcWhereInput
  }

  export type NpcUpdateToOneWithWhereWithoutLocationsInput = {
    where?: NpcWhereInput
    data: XOR<NpcUpdateWithoutLocationsInput, NpcUncheckedUpdateWithoutLocationsInput>
  }

  export type NpcUpdateWithoutLocationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    needs_quest_to_unlock?: BoolFieldUpdateOperationsInput | boolean
    offers?: OfferUpdateManyWithoutNpcNestedInput
    npc_quests?: NpcQuestUpdateManyWithoutNpcNestedInput
  }

  export type NpcUncheckedUpdateWithoutLocationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    needs_quest_to_unlock?: BoolFieldUpdateOperationsInput | boolean
    offers?: OfferUncheckedUpdateManyWithoutNpcNestedInput
    npc_quests?: NpcQuestUncheckedUpdateManyWithoutNpcNestedInput
  }

  export type CityUpsertWithoutLocationsInput = {
    update: XOR<CityUpdateWithoutLocationsInput, CityUncheckedUpdateWithoutLocationsInput>
    create: XOR<CityCreateWithoutLocationsInput, CityUncheckedCreateWithoutLocationsInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutLocationsInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutLocationsInput, CityUncheckedUpdateWithoutLocationsInput>
  }

  export type CityUpdateWithoutLocationsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CityUncheckedUpdateWithoutLocationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type NpcCreateWithoutNpc_questsInput = {
    name: string
    needs_quest_to_unlock?: boolean
    offers?: OfferCreateNestedManyWithoutNpcInput
    locations?: NpcLocationCreateNestedManyWithoutNpcInput
  }

  export type NpcUncheckedCreateWithoutNpc_questsInput = {
    id?: number
    name: string
    needs_quest_to_unlock?: boolean
    offers?: OfferUncheckedCreateNestedManyWithoutNpcInput
    locations?: NpcLocationUncheckedCreateNestedManyWithoutNpcInput
  }

  export type NpcCreateOrConnectWithoutNpc_questsInput = {
    where: NpcWhereUniqueInput
    create: XOR<NpcCreateWithoutNpc_questsInput, NpcUncheckedCreateWithoutNpc_questsInput>
  }

  export type QuestCreateWithoutNpc_questsInput = {
    name: string
  }

  export type QuestUncheckedCreateWithoutNpc_questsInput = {
    id?: number
    name: string
  }

  export type QuestCreateOrConnectWithoutNpc_questsInput = {
    where: QuestWhereUniqueInput
    create: XOR<QuestCreateWithoutNpc_questsInput, QuestUncheckedCreateWithoutNpc_questsInput>
  }

  export type NpcUpsertWithoutNpc_questsInput = {
    update: XOR<NpcUpdateWithoutNpc_questsInput, NpcUncheckedUpdateWithoutNpc_questsInput>
    create: XOR<NpcCreateWithoutNpc_questsInput, NpcUncheckedCreateWithoutNpc_questsInput>
    where?: NpcWhereInput
  }

  export type NpcUpdateToOneWithWhereWithoutNpc_questsInput = {
    where?: NpcWhereInput
    data: XOR<NpcUpdateWithoutNpc_questsInput, NpcUncheckedUpdateWithoutNpc_questsInput>
  }

  export type NpcUpdateWithoutNpc_questsInput = {
    name?: StringFieldUpdateOperationsInput | string
    needs_quest_to_unlock?: BoolFieldUpdateOperationsInput | boolean
    offers?: OfferUpdateManyWithoutNpcNestedInput
    locations?: NpcLocationUpdateManyWithoutNpcNestedInput
  }

  export type NpcUncheckedUpdateWithoutNpc_questsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    needs_quest_to_unlock?: BoolFieldUpdateOperationsInput | boolean
    offers?: OfferUncheckedUpdateManyWithoutNpcNestedInput
    locations?: NpcLocationUncheckedUpdateManyWithoutNpcNestedInput
  }

  export type QuestUpsertWithoutNpc_questsInput = {
    update: XOR<QuestUpdateWithoutNpc_questsInput, QuestUncheckedUpdateWithoutNpc_questsInput>
    create: XOR<QuestCreateWithoutNpc_questsInput, QuestUncheckedCreateWithoutNpc_questsInput>
    where?: QuestWhereInput
  }

  export type QuestUpdateToOneWithWhereWithoutNpc_questsInput = {
    where?: QuestWhereInput
    data: XOR<QuestUpdateWithoutNpc_questsInput, QuestUncheckedUpdateWithoutNpc_questsInput>
  }

  export type QuestUpdateWithoutNpc_questsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type QuestUncheckedUpdateWithoutNpc_questsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OfferCreateManyItemInput = {
    id?: number
    npc_id: number
    price: number
  }

  export type OfferUpdateWithoutItemInput = {
    price?: IntFieldUpdateOperationsInput | number
    npc?: NpcUpdateOneRequiredWithoutOffersNestedInput
  }

  export type OfferUncheckedUpdateWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    npc_id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type OfferUncheckedUpdateManyWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    npc_id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type OfferCreateManyNpcInput = {
    id?: number
    item_id: number
    price: number
  }

  export type NpcLocationCreateManyNpcInput = {
    id?: number
    city_id: number
    coord_x: number
    coord_y: number
    coord_z?: number
  }

  export type NpcQuestCreateManyNpcInput = {
    quest_id: number
  }

  export type OfferUpdateWithoutNpcInput = {
    price?: IntFieldUpdateOperationsInput | number
    item?: ItemUpdateOneRequiredWithoutOffersNestedInput
  }

  export type OfferUncheckedUpdateWithoutNpcInput = {
    id?: IntFieldUpdateOperationsInput | number
    item_id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type OfferUncheckedUpdateManyWithoutNpcInput = {
    id?: IntFieldUpdateOperationsInput | number
    item_id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type NpcLocationUpdateWithoutNpcInput = {
    coord_x?: IntFieldUpdateOperationsInput | number
    coord_y?: IntFieldUpdateOperationsInput | number
    coord_z?: IntFieldUpdateOperationsInput | number
    city?: CityUpdateOneRequiredWithoutLocationsNestedInput
  }

  export type NpcLocationUncheckedUpdateWithoutNpcInput = {
    id?: IntFieldUpdateOperationsInput | number
    city_id?: IntFieldUpdateOperationsInput | number
    coord_x?: IntFieldUpdateOperationsInput | number
    coord_y?: IntFieldUpdateOperationsInput | number
    coord_z?: IntFieldUpdateOperationsInput | number
  }

  export type NpcLocationUncheckedUpdateManyWithoutNpcInput = {
    id?: IntFieldUpdateOperationsInput | number
    city_id?: IntFieldUpdateOperationsInput | number
    coord_x?: IntFieldUpdateOperationsInput | number
    coord_y?: IntFieldUpdateOperationsInput | number
    coord_z?: IntFieldUpdateOperationsInput | number
  }

  export type NpcQuestUpdateWithoutNpcInput = {
    quest?: QuestUpdateOneRequiredWithoutNpc_questsNestedInput
  }

  export type NpcQuestUncheckedUpdateWithoutNpcInput = {
    quest_id?: IntFieldUpdateOperationsInput | number
  }

  export type NpcQuestUncheckedUpdateManyWithoutNpcInput = {
    quest_id?: IntFieldUpdateOperationsInput | number
  }

  export type NpcLocationCreateManyCityInput = {
    id?: number
    npc_id: number
    coord_x: number
    coord_y: number
    coord_z?: number
  }

  export type NpcLocationUpdateWithoutCityInput = {
    coord_x?: IntFieldUpdateOperationsInput | number
    coord_y?: IntFieldUpdateOperationsInput | number
    coord_z?: IntFieldUpdateOperationsInput | number
    npc?: NpcUpdateOneRequiredWithoutLocationsNestedInput
  }

  export type NpcLocationUncheckedUpdateWithoutCityInput = {
    id?: IntFieldUpdateOperationsInput | number
    npc_id?: IntFieldUpdateOperationsInput | number
    coord_x?: IntFieldUpdateOperationsInput | number
    coord_y?: IntFieldUpdateOperationsInput | number
    coord_z?: IntFieldUpdateOperationsInput | number
  }

  export type NpcLocationUncheckedUpdateManyWithoutCityInput = {
    id?: IntFieldUpdateOperationsInput | number
    npc_id?: IntFieldUpdateOperationsInput | number
    coord_x?: IntFieldUpdateOperationsInput | number
    coord_y?: IntFieldUpdateOperationsInput | number
    coord_z?: IntFieldUpdateOperationsInput | number
  }

  export type NpcQuestCreateManyQuestInput = {
    npc_id: number
  }

  export type NpcQuestUpdateWithoutQuestInput = {
    npc?: NpcUpdateOneRequiredWithoutNpc_questsNestedInput
  }

  export type NpcQuestUncheckedUpdateWithoutQuestInput = {
    npc_id?: IntFieldUpdateOperationsInput | number
  }

  export type NpcQuestUncheckedUpdateManyWithoutQuestInput = {
    npc_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}