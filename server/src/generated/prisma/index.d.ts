
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model colors
 * 
 */
export type colors = $Result.DefaultSelection<Prisma.$colorsPayload>
/**
 * Model notes
 * 
 */
export type notes = $Result.DefaultSelection<Prisma.$notesPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Colors
 * const colors = await prisma.colors.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Colors
   * const colors = await prisma.colors.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.colors`: Exposes CRUD operations for the **colors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Colors
    * const colors = await prisma.colors.findMany()
    * ```
    */
  get colors(): Prisma.colorsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notes`: Exposes CRUD operations for the **notes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notes
    * const notes = await prisma.notes.findMany()
    * ```
    */
  get notes(): Prisma.notesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    colors: 'colors',
    notes: 'notes',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "colors" | "notes" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      colors: {
        payload: Prisma.$colorsPayload<ExtArgs>
        fields: Prisma.colorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.colorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.colorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colorsPayload>
          }
          findFirst: {
            args: Prisma.colorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.colorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colorsPayload>
          }
          findMany: {
            args: Prisma.colorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colorsPayload>[]
          }
          create: {
            args: Prisma.colorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colorsPayload>
          }
          createMany: {
            args: Prisma.colorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.colorsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colorsPayload>[]
          }
          delete: {
            args: Prisma.colorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colorsPayload>
          }
          update: {
            args: Prisma.colorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colorsPayload>
          }
          deleteMany: {
            args: Prisma.colorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.colorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.colorsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colorsPayload>[]
          }
          upsert: {
            args: Prisma.colorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colorsPayload>
          }
          aggregate: {
            args: Prisma.ColorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateColors>
          }
          groupBy: {
            args: Prisma.colorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ColorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.colorsCountArgs<ExtArgs>
            result: $Utils.Optional<ColorsCountAggregateOutputType> | number
          }
        }
      }
      notes: {
        payload: Prisma.$notesPayload<ExtArgs>
        fields: Prisma.notesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>
          }
          findFirst: {
            args: Prisma.notesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>
          }
          findMany: {
            args: Prisma.notesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>[]
          }
          create: {
            args: Prisma.notesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>
          }
          createMany: {
            args: Prisma.notesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.notesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>[]
          }
          delete: {
            args: Prisma.notesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>
          }
          update: {
            args: Prisma.notesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>
          }
          deleteMany: {
            args: Prisma.notesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.notesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>[]
          }
          upsert: {
            args: Prisma.notesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>
          }
          aggregate: {
            args: Prisma.NotesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotes>
          }
          groupBy: {
            args: Prisma.notesGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotesGroupByOutputType>[]
          }
          count: {
            args: Prisma.notesCountArgs<ExtArgs>
            result: $Utils.Optional<NotesCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    colors?: colorsOmit
    notes?: notesOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type ColorsCountOutputType
   */

  export type ColorsCountOutputType = {
    notes: number
  }

  export type ColorsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notes?: boolean | ColorsCountOutputTypeCountNotesArgs
  }

  // Custom InputTypes
  /**
   * ColorsCountOutputType without action
   */
  export type ColorsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorsCountOutputType
     */
    select?: ColorsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ColorsCountOutputType without action
   */
  export type ColorsCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notesWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    notes: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notes?: boolean | UsersCountOutputTypeCountNotesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model colors
   */

  export type AggregateColors = {
    _count: ColorsCountAggregateOutputType | null
    _avg: ColorsAvgAggregateOutputType | null
    _sum: ColorsSumAggregateOutputType | null
    _min: ColorsMinAggregateOutputType | null
    _max: ColorsMaxAggregateOutputType | null
  }

  export type ColorsAvgAggregateOutputType = {
    color_id: number | null
  }

  export type ColorsSumAggregateOutputType = {
    color_id: number | null
  }

  export type ColorsMinAggregateOutputType = {
    color_id: number | null
    hex_code: string | null
    value: string | null
  }

  export type ColorsMaxAggregateOutputType = {
    color_id: number | null
    hex_code: string | null
    value: string | null
  }

  export type ColorsCountAggregateOutputType = {
    color_id: number
    hex_code: number
    value: number
    _all: number
  }


  export type ColorsAvgAggregateInputType = {
    color_id?: true
  }

  export type ColorsSumAggregateInputType = {
    color_id?: true
  }

  export type ColorsMinAggregateInputType = {
    color_id?: true
    hex_code?: true
    value?: true
  }

  export type ColorsMaxAggregateInputType = {
    color_id?: true
    hex_code?: true
    value?: true
  }

  export type ColorsCountAggregateInputType = {
    color_id?: true
    hex_code?: true
    value?: true
    _all?: true
  }

  export type ColorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which colors to aggregate.
     */
    where?: colorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of colors to fetch.
     */
    orderBy?: colorsOrderByWithRelationInput | colorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: colorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` colors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` colors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned colors
    **/
    _count?: true | ColorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ColorsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ColorsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ColorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ColorsMaxAggregateInputType
  }

  export type GetColorsAggregateType<T extends ColorsAggregateArgs> = {
        [P in keyof T & keyof AggregateColors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateColors[P]>
      : GetScalarType<T[P], AggregateColors[P]>
  }




  export type colorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: colorsWhereInput
    orderBy?: colorsOrderByWithAggregationInput | colorsOrderByWithAggregationInput[]
    by: ColorsScalarFieldEnum[] | ColorsScalarFieldEnum
    having?: colorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ColorsCountAggregateInputType | true
    _avg?: ColorsAvgAggregateInputType
    _sum?: ColorsSumAggregateInputType
    _min?: ColorsMinAggregateInputType
    _max?: ColorsMaxAggregateInputType
  }

  export type ColorsGroupByOutputType = {
    color_id: number
    hex_code: string
    value: string
    _count: ColorsCountAggregateOutputType | null
    _avg: ColorsAvgAggregateOutputType | null
    _sum: ColorsSumAggregateOutputType | null
    _min: ColorsMinAggregateOutputType | null
    _max: ColorsMaxAggregateOutputType | null
  }

  type GetColorsGroupByPayload<T extends colorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ColorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ColorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ColorsGroupByOutputType[P]>
            : GetScalarType<T[P], ColorsGroupByOutputType[P]>
        }
      >
    >


  export type colorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    color_id?: boolean
    hex_code?: boolean
    value?: boolean
    notes?: boolean | colors$notesArgs<ExtArgs>
    _count?: boolean | ColorsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["colors"]>

  export type colorsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    color_id?: boolean
    hex_code?: boolean
    value?: boolean
  }, ExtArgs["result"]["colors"]>

  export type colorsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    color_id?: boolean
    hex_code?: boolean
    value?: boolean
  }, ExtArgs["result"]["colors"]>

  export type colorsSelectScalar = {
    color_id?: boolean
    hex_code?: boolean
    value?: boolean
  }

  export type colorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"color_id" | "hex_code" | "value", ExtArgs["result"]["colors"]>
  export type colorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notes?: boolean | colors$notesArgs<ExtArgs>
    _count?: boolean | ColorsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type colorsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type colorsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $colorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "colors"
    objects: {
      notes: Prisma.$notesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      color_id: number
      hex_code: string
      value: string
    }, ExtArgs["result"]["colors"]>
    composites: {}
  }

  type colorsGetPayload<S extends boolean | null | undefined | colorsDefaultArgs> = $Result.GetResult<Prisma.$colorsPayload, S>

  type colorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<colorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ColorsCountAggregateInputType | true
    }

  export interface colorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['colors'], meta: { name: 'colors' } }
    /**
     * Find zero or one Colors that matches the filter.
     * @param {colorsFindUniqueArgs} args - Arguments to find a Colors
     * @example
     * // Get one Colors
     * const colors = await prisma.colors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends colorsFindUniqueArgs>(args: SelectSubset<T, colorsFindUniqueArgs<ExtArgs>>): Prisma__colorsClient<$Result.GetResult<Prisma.$colorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Colors that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {colorsFindUniqueOrThrowArgs} args - Arguments to find a Colors
     * @example
     * // Get one Colors
     * const colors = await prisma.colors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends colorsFindUniqueOrThrowArgs>(args: SelectSubset<T, colorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__colorsClient<$Result.GetResult<Prisma.$colorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Colors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {colorsFindFirstArgs} args - Arguments to find a Colors
     * @example
     * // Get one Colors
     * const colors = await prisma.colors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends colorsFindFirstArgs>(args?: SelectSubset<T, colorsFindFirstArgs<ExtArgs>>): Prisma__colorsClient<$Result.GetResult<Prisma.$colorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Colors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {colorsFindFirstOrThrowArgs} args - Arguments to find a Colors
     * @example
     * // Get one Colors
     * const colors = await prisma.colors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends colorsFindFirstOrThrowArgs>(args?: SelectSubset<T, colorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__colorsClient<$Result.GetResult<Prisma.$colorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Colors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {colorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Colors
     * const colors = await prisma.colors.findMany()
     * 
     * // Get first 10 Colors
     * const colors = await prisma.colors.findMany({ take: 10 })
     * 
     * // Only select the `color_id`
     * const colorsWithColor_idOnly = await prisma.colors.findMany({ select: { color_id: true } })
     * 
     */
    findMany<T extends colorsFindManyArgs>(args?: SelectSubset<T, colorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$colorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Colors.
     * @param {colorsCreateArgs} args - Arguments to create a Colors.
     * @example
     * // Create one Colors
     * const Colors = await prisma.colors.create({
     *   data: {
     *     // ... data to create a Colors
     *   }
     * })
     * 
     */
    create<T extends colorsCreateArgs>(args: SelectSubset<T, colorsCreateArgs<ExtArgs>>): Prisma__colorsClient<$Result.GetResult<Prisma.$colorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Colors.
     * @param {colorsCreateManyArgs} args - Arguments to create many Colors.
     * @example
     * // Create many Colors
     * const colors = await prisma.colors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends colorsCreateManyArgs>(args?: SelectSubset<T, colorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Colors and returns the data saved in the database.
     * @param {colorsCreateManyAndReturnArgs} args - Arguments to create many Colors.
     * @example
     * // Create many Colors
     * const colors = await prisma.colors.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Colors and only return the `color_id`
     * const colorsWithColor_idOnly = await prisma.colors.createManyAndReturn({
     *   select: { color_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends colorsCreateManyAndReturnArgs>(args?: SelectSubset<T, colorsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$colorsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Colors.
     * @param {colorsDeleteArgs} args - Arguments to delete one Colors.
     * @example
     * // Delete one Colors
     * const Colors = await prisma.colors.delete({
     *   where: {
     *     // ... filter to delete one Colors
     *   }
     * })
     * 
     */
    delete<T extends colorsDeleteArgs>(args: SelectSubset<T, colorsDeleteArgs<ExtArgs>>): Prisma__colorsClient<$Result.GetResult<Prisma.$colorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Colors.
     * @param {colorsUpdateArgs} args - Arguments to update one Colors.
     * @example
     * // Update one Colors
     * const colors = await prisma.colors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends colorsUpdateArgs>(args: SelectSubset<T, colorsUpdateArgs<ExtArgs>>): Prisma__colorsClient<$Result.GetResult<Prisma.$colorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Colors.
     * @param {colorsDeleteManyArgs} args - Arguments to filter Colors to delete.
     * @example
     * // Delete a few Colors
     * const { count } = await prisma.colors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends colorsDeleteManyArgs>(args?: SelectSubset<T, colorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {colorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Colors
     * const colors = await prisma.colors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends colorsUpdateManyArgs>(args: SelectSubset<T, colorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colors and returns the data updated in the database.
     * @param {colorsUpdateManyAndReturnArgs} args - Arguments to update many Colors.
     * @example
     * // Update many Colors
     * const colors = await prisma.colors.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Colors and only return the `color_id`
     * const colorsWithColor_idOnly = await prisma.colors.updateManyAndReturn({
     *   select: { color_id: true },
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
    updateManyAndReturn<T extends colorsUpdateManyAndReturnArgs>(args: SelectSubset<T, colorsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$colorsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Colors.
     * @param {colorsUpsertArgs} args - Arguments to update or create a Colors.
     * @example
     * // Update or create a Colors
     * const colors = await prisma.colors.upsert({
     *   create: {
     *     // ... data to create a Colors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Colors we want to update
     *   }
     * })
     */
    upsert<T extends colorsUpsertArgs>(args: SelectSubset<T, colorsUpsertArgs<ExtArgs>>): Prisma__colorsClient<$Result.GetResult<Prisma.$colorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Colors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {colorsCountArgs} args - Arguments to filter Colors to count.
     * @example
     * // Count the number of Colors
     * const count = await prisma.colors.count({
     *   where: {
     *     // ... the filter for the Colors we want to count
     *   }
     * })
    **/
    count<T extends colorsCountArgs>(
      args?: Subset<T, colorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ColorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Colors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ColorsAggregateArgs>(args: Subset<T, ColorsAggregateArgs>): Prisma.PrismaPromise<GetColorsAggregateType<T>>

    /**
     * Group by Colors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {colorsGroupByArgs} args - Group by arguments.
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
      T extends colorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: colorsGroupByArgs['orderBy'] }
        : { orderBy?: colorsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, colorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetColorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the colors model
   */
  readonly fields: colorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for colors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__colorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notes<T extends colors$notesArgs<ExtArgs> = {}>(args?: Subset<T, colors$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the colors model
   */
  interface colorsFieldRefs {
    readonly color_id: FieldRef<"colors", 'Int'>
    readonly hex_code: FieldRef<"colors", 'String'>
    readonly value: FieldRef<"colors", 'String'>
  }
    

  // Custom InputTypes
  /**
   * colors findUnique
   */
  export type colorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colors
     */
    select?: colorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the colors
     */
    omit?: colorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: colorsInclude<ExtArgs> | null
    /**
     * Filter, which colors to fetch.
     */
    where: colorsWhereUniqueInput
  }

  /**
   * colors findUniqueOrThrow
   */
  export type colorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colors
     */
    select?: colorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the colors
     */
    omit?: colorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: colorsInclude<ExtArgs> | null
    /**
     * Filter, which colors to fetch.
     */
    where: colorsWhereUniqueInput
  }

  /**
   * colors findFirst
   */
  export type colorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colors
     */
    select?: colorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the colors
     */
    omit?: colorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: colorsInclude<ExtArgs> | null
    /**
     * Filter, which colors to fetch.
     */
    where?: colorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of colors to fetch.
     */
    orderBy?: colorsOrderByWithRelationInput | colorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for colors.
     */
    cursor?: colorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` colors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` colors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of colors.
     */
    distinct?: ColorsScalarFieldEnum | ColorsScalarFieldEnum[]
  }

  /**
   * colors findFirstOrThrow
   */
  export type colorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colors
     */
    select?: colorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the colors
     */
    omit?: colorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: colorsInclude<ExtArgs> | null
    /**
     * Filter, which colors to fetch.
     */
    where?: colorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of colors to fetch.
     */
    orderBy?: colorsOrderByWithRelationInput | colorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for colors.
     */
    cursor?: colorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` colors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` colors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of colors.
     */
    distinct?: ColorsScalarFieldEnum | ColorsScalarFieldEnum[]
  }

  /**
   * colors findMany
   */
  export type colorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colors
     */
    select?: colorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the colors
     */
    omit?: colorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: colorsInclude<ExtArgs> | null
    /**
     * Filter, which colors to fetch.
     */
    where?: colorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of colors to fetch.
     */
    orderBy?: colorsOrderByWithRelationInput | colorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing colors.
     */
    cursor?: colorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` colors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` colors.
     */
    skip?: number
    distinct?: ColorsScalarFieldEnum | ColorsScalarFieldEnum[]
  }

  /**
   * colors create
   */
  export type colorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colors
     */
    select?: colorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the colors
     */
    omit?: colorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: colorsInclude<ExtArgs> | null
    /**
     * The data needed to create a colors.
     */
    data: XOR<colorsCreateInput, colorsUncheckedCreateInput>
  }

  /**
   * colors createMany
   */
  export type colorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many colors.
     */
    data: colorsCreateManyInput | colorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * colors createManyAndReturn
   */
  export type colorsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colors
     */
    select?: colorsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the colors
     */
    omit?: colorsOmit<ExtArgs> | null
    /**
     * The data used to create many colors.
     */
    data: colorsCreateManyInput | colorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * colors update
   */
  export type colorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colors
     */
    select?: colorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the colors
     */
    omit?: colorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: colorsInclude<ExtArgs> | null
    /**
     * The data needed to update a colors.
     */
    data: XOR<colorsUpdateInput, colorsUncheckedUpdateInput>
    /**
     * Choose, which colors to update.
     */
    where: colorsWhereUniqueInput
  }

  /**
   * colors updateMany
   */
  export type colorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update colors.
     */
    data: XOR<colorsUpdateManyMutationInput, colorsUncheckedUpdateManyInput>
    /**
     * Filter which colors to update
     */
    where?: colorsWhereInput
    /**
     * Limit how many colors to update.
     */
    limit?: number
  }

  /**
   * colors updateManyAndReturn
   */
  export type colorsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colors
     */
    select?: colorsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the colors
     */
    omit?: colorsOmit<ExtArgs> | null
    /**
     * The data used to update colors.
     */
    data: XOR<colorsUpdateManyMutationInput, colorsUncheckedUpdateManyInput>
    /**
     * Filter which colors to update
     */
    where?: colorsWhereInput
    /**
     * Limit how many colors to update.
     */
    limit?: number
  }

  /**
   * colors upsert
   */
  export type colorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colors
     */
    select?: colorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the colors
     */
    omit?: colorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: colorsInclude<ExtArgs> | null
    /**
     * The filter to search for the colors to update in case it exists.
     */
    where: colorsWhereUniqueInput
    /**
     * In case the colors found by the `where` argument doesn't exist, create a new colors with this data.
     */
    create: XOR<colorsCreateInput, colorsUncheckedCreateInput>
    /**
     * In case the colors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<colorsUpdateInput, colorsUncheckedUpdateInput>
  }

  /**
   * colors delete
   */
  export type colorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colors
     */
    select?: colorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the colors
     */
    omit?: colorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: colorsInclude<ExtArgs> | null
    /**
     * Filter which colors to delete.
     */
    where: colorsWhereUniqueInput
  }

  /**
   * colors deleteMany
   */
  export type colorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which colors to delete
     */
    where?: colorsWhereInput
    /**
     * Limit how many colors to delete.
     */
    limit?: number
  }

  /**
   * colors.notes
   */
  export type colors$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
    where?: notesWhereInput
    orderBy?: notesOrderByWithRelationInput | notesOrderByWithRelationInput[]
    cursor?: notesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * colors without action
   */
  export type colorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colors
     */
    select?: colorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the colors
     */
    omit?: colorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: colorsInclude<ExtArgs> | null
  }


  /**
   * Model notes
   */

  export type AggregateNotes = {
    _count: NotesCountAggregateOutputType | null
    _avg: NotesAvgAggregateOutputType | null
    _sum: NotesSumAggregateOutputType | null
    _min: NotesMinAggregateOutputType | null
    _max: NotesMaxAggregateOutputType | null
  }

  export type NotesAvgAggregateOutputType = {
    note_id: number | null
    color_id: number | null
    position_x: number | null
    position_y: number | null
    z_index: number | null
  }

  export type NotesSumAggregateOutputType = {
    note_id: number | null
    color_id: number | null
    position_x: number | null
    position_y: number | null
    z_index: number | null
  }

  export type NotesMinAggregateOutputType = {
    note_id: number | null
    user_id: string | null
    title: string | null
    content: string | null
    creation_date: Date | null
    update_date: Date | null
    color_id: number | null
    on_board: boolean | null
    position_x: number | null
    position_y: number | null
    z_index: number | null
  }

  export type NotesMaxAggregateOutputType = {
    note_id: number | null
    user_id: string | null
    title: string | null
    content: string | null
    creation_date: Date | null
    update_date: Date | null
    color_id: number | null
    on_board: boolean | null
    position_x: number | null
    position_y: number | null
    z_index: number | null
  }

  export type NotesCountAggregateOutputType = {
    note_id: number
    user_id: number
    title: number
    content: number
    creation_date: number
    update_date: number
    color_id: number
    on_board: number
    position_x: number
    position_y: number
    z_index: number
    _all: number
  }


  export type NotesAvgAggregateInputType = {
    note_id?: true
    color_id?: true
    position_x?: true
    position_y?: true
    z_index?: true
  }

  export type NotesSumAggregateInputType = {
    note_id?: true
    color_id?: true
    position_x?: true
    position_y?: true
    z_index?: true
  }

  export type NotesMinAggregateInputType = {
    note_id?: true
    user_id?: true
    title?: true
    content?: true
    creation_date?: true
    update_date?: true
    color_id?: true
    on_board?: true
    position_x?: true
    position_y?: true
    z_index?: true
  }

  export type NotesMaxAggregateInputType = {
    note_id?: true
    user_id?: true
    title?: true
    content?: true
    creation_date?: true
    update_date?: true
    color_id?: true
    on_board?: true
    position_x?: true
    position_y?: true
    z_index?: true
  }

  export type NotesCountAggregateInputType = {
    note_id?: true
    user_id?: true
    title?: true
    content?: true
    creation_date?: true
    update_date?: true
    color_id?: true
    on_board?: true
    position_x?: true
    position_y?: true
    z_index?: true
    _all?: true
  }

  export type NotesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notes to aggregate.
     */
    where?: notesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notes to fetch.
     */
    orderBy?: notesOrderByWithRelationInput | notesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notes
    **/
    _count?: true | NotesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotesMaxAggregateInputType
  }

  export type GetNotesAggregateType<T extends NotesAggregateArgs> = {
        [P in keyof T & keyof AggregateNotes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotes[P]>
      : GetScalarType<T[P], AggregateNotes[P]>
  }




  export type notesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notesWhereInput
    orderBy?: notesOrderByWithAggregationInput | notesOrderByWithAggregationInput[]
    by: NotesScalarFieldEnum[] | NotesScalarFieldEnum
    having?: notesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotesCountAggregateInputType | true
    _avg?: NotesAvgAggregateInputType
    _sum?: NotesSumAggregateInputType
    _min?: NotesMinAggregateInputType
    _max?: NotesMaxAggregateInputType
  }

  export type NotesGroupByOutputType = {
    note_id: number
    user_id: string
    title: string | null
    content: string | null
    creation_date: Date
    update_date: Date
    color_id: number
    on_board: boolean
    position_x: number | null
    position_y: number | null
    z_index: number | null
    _count: NotesCountAggregateOutputType | null
    _avg: NotesAvgAggregateOutputType | null
    _sum: NotesSumAggregateOutputType | null
    _min: NotesMinAggregateOutputType | null
    _max: NotesMaxAggregateOutputType | null
  }

  type GetNotesGroupByPayload<T extends notesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotesGroupByOutputType[P]>
            : GetScalarType<T[P], NotesGroupByOutputType[P]>
        }
      >
    >


  export type notesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    note_id?: boolean
    user_id?: boolean
    title?: boolean
    content?: boolean
    creation_date?: boolean
    update_date?: boolean
    color_id?: boolean
    on_board?: boolean
    position_x?: boolean
    position_y?: boolean
    z_index?: boolean
    colors?: boolean | colorsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notes"]>

  export type notesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    note_id?: boolean
    user_id?: boolean
    title?: boolean
    content?: boolean
    creation_date?: boolean
    update_date?: boolean
    color_id?: boolean
    on_board?: boolean
    position_x?: boolean
    position_y?: boolean
    z_index?: boolean
    colors?: boolean | colorsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notes"]>

  export type notesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    note_id?: boolean
    user_id?: boolean
    title?: boolean
    content?: boolean
    creation_date?: boolean
    update_date?: boolean
    color_id?: boolean
    on_board?: boolean
    position_x?: boolean
    position_y?: boolean
    z_index?: boolean
    colors?: boolean | colorsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notes"]>

  export type notesSelectScalar = {
    note_id?: boolean
    user_id?: boolean
    title?: boolean
    content?: boolean
    creation_date?: boolean
    update_date?: boolean
    color_id?: boolean
    on_board?: boolean
    position_x?: boolean
    position_y?: boolean
    z_index?: boolean
  }

  export type notesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"note_id" | "user_id" | "title" | "content" | "creation_date" | "update_date" | "color_id" | "on_board" | "position_x" | "position_y" | "z_index", ExtArgs["result"]["notes"]>
  export type notesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    colors?: boolean | colorsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type notesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    colors?: boolean | colorsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type notesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    colors?: boolean | colorsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $notesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notes"
    objects: {
      colors: Prisma.$colorsPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      note_id: number
      user_id: string
      title: string | null
      content: string | null
      creation_date: Date
      update_date: Date
      color_id: number
      on_board: boolean
      position_x: number | null
      position_y: number | null
      z_index: number | null
    }, ExtArgs["result"]["notes"]>
    composites: {}
  }

  type notesGetPayload<S extends boolean | null | undefined | notesDefaultArgs> = $Result.GetResult<Prisma.$notesPayload, S>

  type notesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotesCountAggregateInputType | true
    }

  export interface notesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notes'], meta: { name: 'notes' } }
    /**
     * Find zero or one Notes that matches the filter.
     * @param {notesFindUniqueArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notesFindUniqueArgs>(args: SelectSubset<T, notesFindUniqueArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notesFindUniqueOrThrowArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notesFindUniqueOrThrowArgs>(args: SelectSubset<T, notesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notesFindFirstArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notesFindFirstArgs>(args?: SelectSubset<T, notesFindFirstArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notesFindFirstOrThrowArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notesFindFirstOrThrowArgs>(args?: SelectSubset<T, notesFindFirstOrThrowArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notes
     * const notes = await prisma.notes.findMany()
     * 
     * // Get first 10 Notes
     * const notes = await prisma.notes.findMany({ take: 10 })
     * 
     * // Only select the `note_id`
     * const notesWithNote_idOnly = await prisma.notes.findMany({ select: { note_id: true } })
     * 
     */
    findMany<T extends notesFindManyArgs>(args?: SelectSubset<T, notesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notes.
     * @param {notesCreateArgs} args - Arguments to create a Notes.
     * @example
     * // Create one Notes
     * const Notes = await prisma.notes.create({
     *   data: {
     *     // ... data to create a Notes
     *   }
     * })
     * 
     */
    create<T extends notesCreateArgs>(args: SelectSubset<T, notesCreateArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notes.
     * @param {notesCreateManyArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const notes = await prisma.notes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notesCreateManyArgs>(args?: SelectSubset<T, notesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notes and returns the data saved in the database.
     * @param {notesCreateManyAndReturnArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const notes = await prisma.notes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notes and only return the `note_id`
     * const notesWithNote_idOnly = await prisma.notes.createManyAndReturn({
     *   select: { note_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends notesCreateManyAndReturnArgs>(args?: SelectSubset<T, notesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notes.
     * @param {notesDeleteArgs} args - Arguments to delete one Notes.
     * @example
     * // Delete one Notes
     * const Notes = await prisma.notes.delete({
     *   where: {
     *     // ... filter to delete one Notes
     *   }
     * })
     * 
     */
    delete<T extends notesDeleteArgs>(args: SelectSubset<T, notesDeleteArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notes.
     * @param {notesUpdateArgs} args - Arguments to update one Notes.
     * @example
     * // Update one Notes
     * const notes = await prisma.notes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notesUpdateArgs>(args: SelectSubset<T, notesUpdateArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notes.
     * @param {notesDeleteManyArgs} args - Arguments to filter Notes to delete.
     * @example
     * // Delete a few Notes
     * const { count } = await prisma.notes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notesDeleteManyArgs>(args?: SelectSubset<T, notesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notes
     * const notes = await prisma.notes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notesUpdateManyArgs>(args: SelectSubset<T, notesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes and returns the data updated in the database.
     * @param {notesUpdateManyAndReturnArgs} args - Arguments to update many Notes.
     * @example
     * // Update many Notes
     * const notes = await prisma.notes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notes and only return the `note_id`
     * const notesWithNote_idOnly = await prisma.notes.updateManyAndReturn({
     *   select: { note_id: true },
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
    updateManyAndReturn<T extends notesUpdateManyAndReturnArgs>(args: SelectSubset<T, notesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notes.
     * @param {notesUpsertArgs} args - Arguments to update or create a Notes.
     * @example
     * // Update or create a Notes
     * const notes = await prisma.notes.upsert({
     *   create: {
     *     // ... data to create a Notes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notes we want to update
     *   }
     * })
     */
    upsert<T extends notesUpsertArgs>(args: SelectSubset<T, notesUpsertArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notesCountArgs} args - Arguments to filter Notes to count.
     * @example
     * // Count the number of Notes
     * const count = await prisma.notes.count({
     *   where: {
     *     // ... the filter for the Notes we want to count
     *   }
     * })
    **/
    count<T extends notesCountArgs>(
      args?: Subset<T, notesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotesAggregateArgs>(args: Subset<T, NotesAggregateArgs>): Prisma.PrismaPromise<GetNotesAggregateType<T>>

    /**
     * Group by Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notesGroupByArgs} args - Group by arguments.
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
      T extends notesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notesGroupByArgs['orderBy'] }
        : { orderBy?: notesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, notesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notes model
   */
  readonly fields: notesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    colors<T extends colorsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, colorsDefaultArgs<ExtArgs>>): Prisma__colorsClient<$Result.GetResult<Prisma.$colorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the notes model
   */
  interface notesFieldRefs {
    readonly note_id: FieldRef<"notes", 'Int'>
    readonly user_id: FieldRef<"notes", 'String'>
    readonly title: FieldRef<"notes", 'String'>
    readonly content: FieldRef<"notes", 'String'>
    readonly creation_date: FieldRef<"notes", 'DateTime'>
    readonly update_date: FieldRef<"notes", 'DateTime'>
    readonly color_id: FieldRef<"notes", 'Int'>
    readonly on_board: FieldRef<"notes", 'Boolean'>
    readonly position_x: FieldRef<"notes", 'Int'>
    readonly position_y: FieldRef<"notes", 'Int'>
    readonly z_index: FieldRef<"notes", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * notes findUnique
   */
  export type notesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
    /**
     * Filter, which notes to fetch.
     */
    where: notesWhereUniqueInput
  }

  /**
   * notes findUniqueOrThrow
   */
  export type notesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
    /**
     * Filter, which notes to fetch.
     */
    where: notesWhereUniqueInput
  }

  /**
   * notes findFirst
   */
  export type notesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
    /**
     * Filter, which notes to fetch.
     */
    where?: notesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notes to fetch.
     */
    orderBy?: notesOrderByWithRelationInput | notesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notes.
     */
    cursor?: notesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notes.
     */
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * notes findFirstOrThrow
   */
  export type notesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
    /**
     * Filter, which notes to fetch.
     */
    where?: notesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notes to fetch.
     */
    orderBy?: notesOrderByWithRelationInput | notesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notes.
     */
    cursor?: notesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notes.
     */
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * notes findMany
   */
  export type notesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
    /**
     * Filter, which notes to fetch.
     */
    where?: notesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notes to fetch.
     */
    orderBy?: notesOrderByWithRelationInput | notesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notes.
     */
    cursor?: notesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notes.
     */
    skip?: number
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * notes create
   */
  export type notesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
    /**
     * The data needed to create a notes.
     */
    data: XOR<notesCreateInput, notesUncheckedCreateInput>
  }

  /**
   * notes createMany
   */
  export type notesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notes.
     */
    data: notesCreateManyInput | notesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notes createManyAndReturn
   */
  export type notesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * The data used to create many notes.
     */
    data: notesCreateManyInput | notesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * notes update
   */
  export type notesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
    /**
     * The data needed to update a notes.
     */
    data: XOR<notesUpdateInput, notesUncheckedUpdateInput>
    /**
     * Choose, which notes to update.
     */
    where: notesWhereUniqueInput
  }

  /**
   * notes updateMany
   */
  export type notesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notes.
     */
    data: XOR<notesUpdateManyMutationInput, notesUncheckedUpdateManyInput>
    /**
     * Filter which notes to update
     */
    where?: notesWhereInput
    /**
     * Limit how many notes to update.
     */
    limit?: number
  }

  /**
   * notes updateManyAndReturn
   */
  export type notesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * The data used to update notes.
     */
    data: XOR<notesUpdateManyMutationInput, notesUncheckedUpdateManyInput>
    /**
     * Filter which notes to update
     */
    where?: notesWhereInput
    /**
     * Limit how many notes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * notes upsert
   */
  export type notesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
    /**
     * The filter to search for the notes to update in case it exists.
     */
    where: notesWhereUniqueInput
    /**
     * In case the notes found by the `where` argument doesn't exist, create a new notes with this data.
     */
    create: XOR<notesCreateInput, notesUncheckedCreateInput>
    /**
     * In case the notes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notesUpdateInput, notesUncheckedUpdateInput>
  }

  /**
   * notes delete
   */
  export type notesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
    /**
     * Filter which notes to delete.
     */
    where: notesWhereUniqueInput
  }

  /**
   * notes deleteMany
   */
  export type notesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notes to delete
     */
    where?: notesWhereInput
    /**
     * Limit how many notes to delete.
     */
    limit?: number
  }

  /**
   * notes without action
   */
  export type notesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: string | null
    username: string | null
    email: string | null
    password: string | null
    creation_date: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: string | null
    username: string | null
    email: string | null
    password: string | null
    creation_date: Date | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    username: number
    email: number
    password: number
    creation_date: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    user_id?: true
    username?: true
    email?: true
    password?: true
    creation_date?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    username?: true
    email?: true
    password?: true
    creation_date?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    username?: true
    email?: true
    password?: true
    creation_date?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_id: string
    username: string
    email: string
    password: string
    creation_date: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    creation_date?: boolean
    notes?: boolean | users$notesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    creation_date?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    creation_date?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    user_id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    creation_date?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "username" | "email" | "password" | "creation_date", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notes?: boolean | users$notesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      notes: Prisma.$notesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      username: string
      email: string
      password: string
      creation_date: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.updateManyAndReturn({
     *   select: { user_id: true },
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notes<T extends users$notesArgs<ExtArgs> = {}>(args?: Subset<T, users$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly user_id: FieldRef<"users", 'String'>
    readonly username: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly creation_date: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.notes
   */
  export type users$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notesInclude<ExtArgs> | null
    where?: notesWhereInput
    orderBy?: notesOrderByWithRelationInput | notesOrderByWithRelationInput[]
    cursor?: notesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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


  export const ColorsScalarFieldEnum: {
    color_id: 'color_id',
    hex_code: 'hex_code',
    value: 'value'
  };

  export type ColorsScalarFieldEnum = (typeof ColorsScalarFieldEnum)[keyof typeof ColorsScalarFieldEnum]


  export const NotesScalarFieldEnum: {
    note_id: 'note_id',
    user_id: 'user_id',
    title: 'title',
    content: 'content',
    creation_date: 'creation_date',
    update_date: 'update_date',
    color_id: 'color_id',
    on_board: 'on_board',
    position_x: 'position_x',
    position_y: 'position_y',
    z_index: 'z_index'
  };

  export type NotesScalarFieldEnum = (typeof NotesScalarFieldEnum)[keyof typeof NotesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    username: 'username',
    email: 'email',
    password: 'password',
    creation_date: 'creation_date'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type colorsWhereInput = {
    AND?: colorsWhereInput | colorsWhereInput[]
    OR?: colorsWhereInput[]
    NOT?: colorsWhereInput | colorsWhereInput[]
    color_id?: IntFilter<"colors"> | number
    hex_code?: StringFilter<"colors"> | string
    value?: StringFilter<"colors"> | string
    notes?: NotesListRelationFilter
  }

  export type colorsOrderByWithRelationInput = {
    color_id?: SortOrder
    hex_code?: SortOrder
    value?: SortOrder
    notes?: notesOrderByRelationAggregateInput
  }

  export type colorsWhereUniqueInput = Prisma.AtLeast<{
    color_id?: number
    AND?: colorsWhereInput | colorsWhereInput[]
    OR?: colorsWhereInput[]
    NOT?: colorsWhereInput | colorsWhereInput[]
    hex_code?: StringFilter<"colors"> | string
    value?: StringFilter<"colors"> | string
    notes?: NotesListRelationFilter
  }, "color_id">

  export type colorsOrderByWithAggregationInput = {
    color_id?: SortOrder
    hex_code?: SortOrder
    value?: SortOrder
    _count?: colorsCountOrderByAggregateInput
    _avg?: colorsAvgOrderByAggregateInput
    _max?: colorsMaxOrderByAggregateInput
    _min?: colorsMinOrderByAggregateInput
    _sum?: colorsSumOrderByAggregateInput
  }

  export type colorsScalarWhereWithAggregatesInput = {
    AND?: colorsScalarWhereWithAggregatesInput | colorsScalarWhereWithAggregatesInput[]
    OR?: colorsScalarWhereWithAggregatesInput[]
    NOT?: colorsScalarWhereWithAggregatesInput | colorsScalarWhereWithAggregatesInput[]
    color_id?: IntWithAggregatesFilter<"colors"> | number
    hex_code?: StringWithAggregatesFilter<"colors"> | string
    value?: StringWithAggregatesFilter<"colors"> | string
  }

  export type notesWhereInput = {
    AND?: notesWhereInput | notesWhereInput[]
    OR?: notesWhereInput[]
    NOT?: notesWhereInput | notesWhereInput[]
    note_id?: IntFilter<"notes"> | number
    user_id?: UuidFilter<"notes"> | string
    title?: StringNullableFilter<"notes"> | string | null
    content?: StringNullableFilter<"notes"> | string | null
    creation_date?: DateTimeFilter<"notes"> | Date | string
    update_date?: DateTimeFilter<"notes"> | Date | string
    color_id?: IntFilter<"notes"> | number
    on_board?: BoolFilter<"notes"> | boolean
    position_x?: IntNullableFilter<"notes"> | number | null
    position_y?: IntNullableFilter<"notes"> | number | null
    z_index?: IntNullableFilter<"notes"> | number | null
    colors?: XOR<ColorsScalarRelationFilter, colorsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type notesOrderByWithRelationInput = {
    note_id?: SortOrder
    user_id?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    creation_date?: SortOrder
    update_date?: SortOrder
    color_id?: SortOrder
    on_board?: SortOrder
    position_x?: SortOrderInput | SortOrder
    position_y?: SortOrderInput | SortOrder
    z_index?: SortOrderInput | SortOrder
    colors?: colorsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type notesWhereUniqueInput = Prisma.AtLeast<{
    note_id?: number
    AND?: notesWhereInput | notesWhereInput[]
    OR?: notesWhereInput[]
    NOT?: notesWhereInput | notesWhereInput[]
    user_id?: UuidFilter<"notes"> | string
    title?: StringNullableFilter<"notes"> | string | null
    content?: StringNullableFilter<"notes"> | string | null
    creation_date?: DateTimeFilter<"notes"> | Date | string
    update_date?: DateTimeFilter<"notes"> | Date | string
    color_id?: IntFilter<"notes"> | number
    on_board?: BoolFilter<"notes"> | boolean
    position_x?: IntNullableFilter<"notes"> | number | null
    position_y?: IntNullableFilter<"notes"> | number | null
    z_index?: IntNullableFilter<"notes"> | number | null
    colors?: XOR<ColorsScalarRelationFilter, colorsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "note_id">

  export type notesOrderByWithAggregationInput = {
    note_id?: SortOrder
    user_id?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    creation_date?: SortOrder
    update_date?: SortOrder
    color_id?: SortOrder
    on_board?: SortOrder
    position_x?: SortOrderInput | SortOrder
    position_y?: SortOrderInput | SortOrder
    z_index?: SortOrderInput | SortOrder
    _count?: notesCountOrderByAggregateInput
    _avg?: notesAvgOrderByAggregateInput
    _max?: notesMaxOrderByAggregateInput
    _min?: notesMinOrderByAggregateInput
    _sum?: notesSumOrderByAggregateInput
  }

  export type notesScalarWhereWithAggregatesInput = {
    AND?: notesScalarWhereWithAggregatesInput | notesScalarWhereWithAggregatesInput[]
    OR?: notesScalarWhereWithAggregatesInput[]
    NOT?: notesScalarWhereWithAggregatesInput | notesScalarWhereWithAggregatesInput[]
    note_id?: IntWithAggregatesFilter<"notes"> | number
    user_id?: UuidWithAggregatesFilter<"notes"> | string
    title?: StringNullableWithAggregatesFilter<"notes"> | string | null
    content?: StringNullableWithAggregatesFilter<"notes"> | string | null
    creation_date?: DateTimeWithAggregatesFilter<"notes"> | Date | string
    update_date?: DateTimeWithAggregatesFilter<"notes"> | Date | string
    color_id?: IntWithAggregatesFilter<"notes"> | number
    on_board?: BoolWithAggregatesFilter<"notes"> | boolean
    position_x?: IntNullableWithAggregatesFilter<"notes"> | number | null
    position_y?: IntNullableWithAggregatesFilter<"notes"> | number | null
    z_index?: IntNullableWithAggregatesFilter<"notes"> | number | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    user_id?: UuidFilter<"users"> | string
    username?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    creation_date?: DateTimeFilter<"users"> | Date | string
    notes?: NotesListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    user_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    creation_date?: SortOrder
    notes?: notesOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    username?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    creation_date?: DateTimeFilter<"users"> | Date | string
    notes?: NotesListRelationFilter
  }, "user_id">

  export type usersOrderByWithAggregationInput = {
    user_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    creation_date?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    user_id?: UuidWithAggregatesFilter<"users"> | string
    username?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    creation_date?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type colorsCreateInput = {
    hex_code: string
    value: string
    notes?: notesCreateNestedManyWithoutColorsInput
  }

  export type colorsUncheckedCreateInput = {
    color_id?: number
    hex_code: string
    value: string
    notes?: notesUncheckedCreateNestedManyWithoutColorsInput
  }

  export type colorsUpdateInput = {
    hex_code?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    notes?: notesUpdateManyWithoutColorsNestedInput
  }

  export type colorsUncheckedUpdateInput = {
    color_id?: IntFieldUpdateOperationsInput | number
    hex_code?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    notes?: notesUncheckedUpdateManyWithoutColorsNestedInput
  }

  export type colorsCreateManyInput = {
    color_id?: number
    hex_code: string
    value: string
  }

  export type colorsUpdateManyMutationInput = {
    hex_code?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type colorsUncheckedUpdateManyInput = {
    color_id?: IntFieldUpdateOperationsInput | number
    hex_code?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type notesCreateInput = {
    title?: string | null
    content?: string | null
    creation_date?: Date | string
    update_date?: Date | string
    on_board?: boolean
    position_x?: number | null
    position_y?: number | null
    z_index?: number | null
    colors: colorsCreateNestedOneWithoutNotesInput
    users: usersCreateNestedOneWithoutNotesInput
  }

  export type notesUncheckedCreateInput = {
    note_id?: number
    user_id: string
    title?: string | null
    content?: string | null
    creation_date?: Date | string
    update_date?: Date | string
    color_id: number
    on_board?: boolean
    position_x?: number | null
    position_y?: number | null
    z_index?: number | null
  }

  export type notesUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
    on_board?: BoolFieldUpdateOperationsInput | boolean
    position_x?: NullableIntFieldUpdateOperationsInput | number | null
    position_y?: NullableIntFieldUpdateOperationsInput | number | null
    z_index?: NullableIntFieldUpdateOperationsInput | number | null
    colors?: colorsUpdateOneRequiredWithoutNotesNestedInput
    users?: usersUpdateOneRequiredWithoutNotesNestedInput
  }

  export type notesUncheckedUpdateInput = {
    note_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
    color_id?: IntFieldUpdateOperationsInput | number
    on_board?: BoolFieldUpdateOperationsInput | boolean
    position_x?: NullableIntFieldUpdateOperationsInput | number | null
    position_y?: NullableIntFieldUpdateOperationsInput | number | null
    z_index?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type notesCreateManyInput = {
    note_id?: number
    user_id: string
    title?: string | null
    content?: string | null
    creation_date?: Date | string
    update_date?: Date | string
    color_id: number
    on_board?: boolean
    position_x?: number | null
    position_y?: number | null
    z_index?: number | null
  }

  export type notesUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
    on_board?: BoolFieldUpdateOperationsInput | boolean
    position_x?: NullableIntFieldUpdateOperationsInput | number | null
    position_y?: NullableIntFieldUpdateOperationsInput | number | null
    z_index?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type notesUncheckedUpdateManyInput = {
    note_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
    color_id?: IntFieldUpdateOperationsInput | number
    on_board?: BoolFieldUpdateOperationsInput | boolean
    position_x?: NullableIntFieldUpdateOperationsInput | number | null
    position_y?: NullableIntFieldUpdateOperationsInput | number | null
    z_index?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usersCreateInput = {
    user_id: string
    username: string
    email: string
    password: string
    creation_date?: Date | string
    notes?: notesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    user_id: string
    username: string
    email: string
    password: string
    creation_date?: Date | string
    notes?: notesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: notesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: notesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    user_id: string
    username: string
    email: string
    password: string
    creation_date?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type NotesListRelationFilter = {
    every?: notesWhereInput
    some?: notesWhereInput
    none?: notesWhereInput
  }

  export type notesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type colorsCountOrderByAggregateInput = {
    color_id?: SortOrder
    hex_code?: SortOrder
    value?: SortOrder
  }

  export type colorsAvgOrderByAggregateInput = {
    color_id?: SortOrder
  }

  export type colorsMaxOrderByAggregateInput = {
    color_id?: SortOrder
    hex_code?: SortOrder
    value?: SortOrder
  }

  export type colorsMinOrderByAggregateInput = {
    color_id?: SortOrder
    hex_code?: SortOrder
    value?: SortOrder
  }

  export type colorsSumOrderByAggregateInput = {
    color_id?: SortOrder
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

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ColorsScalarRelationFilter = {
    is?: colorsWhereInput
    isNot?: colorsWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type notesCountOrderByAggregateInput = {
    note_id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    creation_date?: SortOrder
    update_date?: SortOrder
    color_id?: SortOrder
    on_board?: SortOrder
    position_x?: SortOrder
    position_y?: SortOrder
    z_index?: SortOrder
  }

  export type notesAvgOrderByAggregateInput = {
    note_id?: SortOrder
    color_id?: SortOrder
    position_x?: SortOrder
    position_y?: SortOrder
    z_index?: SortOrder
  }

  export type notesMaxOrderByAggregateInput = {
    note_id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    creation_date?: SortOrder
    update_date?: SortOrder
    color_id?: SortOrder
    on_board?: SortOrder
    position_x?: SortOrder
    position_y?: SortOrder
    z_index?: SortOrder
  }

  export type notesMinOrderByAggregateInput = {
    note_id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    creation_date?: SortOrder
    update_date?: SortOrder
    color_id?: SortOrder
    on_board?: SortOrder
    position_x?: SortOrder
    position_y?: SortOrder
    z_index?: SortOrder
  }

  export type notesSumOrderByAggregateInput = {
    note_id?: SortOrder
    color_id?: SortOrder
    position_x?: SortOrder
    position_y?: SortOrder
    z_index?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type usersCountOrderByAggregateInput = {
    user_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    creation_date?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    creation_date?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    user_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    creation_date?: SortOrder
  }

  export type notesCreateNestedManyWithoutColorsInput = {
    create?: XOR<notesCreateWithoutColorsInput, notesUncheckedCreateWithoutColorsInput> | notesCreateWithoutColorsInput[] | notesUncheckedCreateWithoutColorsInput[]
    connectOrCreate?: notesCreateOrConnectWithoutColorsInput | notesCreateOrConnectWithoutColorsInput[]
    createMany?: notesCreateManyColorsInputEnvelope
    connect?: notesWhereUniqueInput | notesWhereUniqueInput[]
  }

  export type notesUncheckedCreateNestedManyWithoutColorsInput = {
    create?: XOR<notesCreateWithoutColorsInput, notesUncheckedCreateWithoutColorsInput> | notesCreateWithoutColorsInput[] | notesUncheckedCreateWithoutColorsInput[]
    connectOrCreate?: notesCreateOrConnectWithoutColorsInput | notesCreateOrConnectWithoutColorsInput[]
    createMany?: notesCreateManyColorsInputEnvelope
    connect?: notesWhereUniqueInput | notesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type notesUpdateManyWithoutColorsNestedInput = {
    create?: XOR<notesCreateWithoutColorsInput, notesUncheckedCreateWithoutColorsInput> | notesCreateWithoutColorsInput[] | notesUncheckedCreateWithoutColorsInput[]
    connectOrCreate?: notesCreateOrConnectWithoutColorsInput | notesCreateOrConnectWithoutColorsInput[]
    upsert?: notesUpsertWithWhereUniqueWithoutColorsInput | notesUpsertWithWhereUniqueWithoutColorsInput[]
    createMany?: notesCreateManyColorsInputEnvelope
    set?: notesWhereUniqueInput | notesWhereUniqueInput[]
    disconnect?: notesWhereUniqueInput | notesWhereUniqueInput[]
    delete?: notesWhereUniqueInput | notesWhereUniqueInput[]
    connect?: notesWhereUniqueInput | notesWhereUniqueInput[]
    update?: notesUpdateWithWhereUniqueWithoutColorsInput | notesUpdateWithWhereUniqueWithoutColorsInput[]
    updateMany?: notesUpdateManyWithWhereWithoutColorsInput | notesUpdateManyWithWhereWithoutColorsInput[]
    deleteMany?: notesScalarWhereInput | notesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type notesUncheckedUpdateManyWithoutColorsNestedInput = {
    create?: XOR<notesCreateWithoutColorsInput, notesUncheckedCreateWithoutColorsInput> | notesCreateWithoutColorsInput[] | notesUncheckedCreateWithoutColorsInput[]
    connectOrCreate?: notesCreateOrConnectWithoutColorsInput | notesCreateOrConnectWithoutColorsInput[]
    upsert?: notesUpsertWithWhereUniqueWithoutColorsInput | notesUpsertWithWhereUniqueWithoutColorsInput[]
    createMany?: notesCreateManyColorsInputEnvelope
    set?: notesWhereUniqueInput | notesWhereUniqueInput[]
    disconnect?: notesWhereUniqueInput | notesWhereUniqueInput[]
    delete?: notesWhereUniqueInput | notesWhereUniqueInput[]
    connect?: notesWhereUniqueInput | notesWhereUniqueInput[]
    update?: notesUpdateWithWhereUniqueWithoutColorsInput | notesUpdateWithWhereUniqueWithoutColorsInput[]
    updateMany?: notesUpdateManyWithWhereWithoutColorsInput | notesUpdateManyWithWhereWithoutColorsInput[]
    deleteMany?: notesScalarWhereInput | notesScalarWhereInput[]
  }

  export type colorsCreateNestedOneWithoutNotesInput = {
    create?: XOR<colorsCreateWithoutNotesInput, colorsUncheckedCreateWithoutNotesInput>
    connectOrCreate?: colorsCreateOrConnectWithoutNotesInput
    connect?: colorsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutNotesInput = {
    create?: XOR<usersCreateWithoutNotesInput, usersUncheckedCreateWithoutNotesInput>
    connectOrCreate?: usersCreateOrConnectWithoutNotesInput
    connect?: usersWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type colorsUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<colorsCreateWithoutNotesInput, colorsUncheckedCreateWithoutNotesInput>
    connectOrCreate?: colorsCreateOrConnectWithoutNotesInput
    upsert?: colorsUpsertWithoutNotesInput
    connect?: colorsWhereUniqueInput
    update?: XOR<XOR<colorsUpdateToOneWithWhereWithoutNotesInput, colorsUpdateWithoutNotesInput>, colorsUncheckedUpdateWithoutNotesInput>
  }

  export type usersUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<usersCreateWithoutNotesInput, usersUncheckedCreateWithoutNotesInput>
    connectOrCreate?: usersCreateOrConnectWithoutNotesInput
    upsert?: usersUpsertWithoutNotesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutNotesInput, usersUpdateWithoutNotesInput>, usersUncheckedUpdateWithoutNotesInput>
  }

  export type notesCreateNestedManyWithoutUsersInput = {
    create?: XOR<notesCreateWithoutUsersInput, notesUncheckedCreateWithoutUsersInput> | notesCreateWithoutUsersInput[] | notesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: notesCreateOrConnectWithoutUsersInput | notesCreateOrConnectWithoutUsersInput[]
    createMany?: notesCreateManyUsersInputEnvelope
    connect?: notesWhereUniqueInput | notesWhereUniqueInput[]
  }

  export type notesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<notesCreateWithoutUsersInput, notesUncheckedCreateWithoutUsersInput> | notesCreateWithoutUsersInput[] | notesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: notesCreateOrConnectWithoutUsersInput | notesCreateOrConnectWithoutUsersInput[]
    createMany?: notesCreateManyUsersInputEnvelope
    connect?: notesWhereUniqueInput | notesWhereUniqueInput[]
  }

  export type notesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<notesCreateWithoutUsersInput, notesUncheckedCreateWithoutUsersInput> | notesCreateWithoutUsersInput[] | notesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: notesCreateOrConnectWithoutUsersInput | notesCreateOrConnectWithoutUsersInput[]
    upsert?: notesUpsertWithWhereUniqueWithoutUsersInput | notesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: notesCreateManyUsersInputEnvelope
    set?: notesWhereUniqueInput | notesWhereUniqueInput[]
    disconnect?: notesWhereUniqueInput | notesWhereUniqueInput[]
    delete?: notesWhereUniqueInput | notesWhereUniqueInput[]
    connect?: notesWhereUniqueInput | notesWhereUniqueInput[]
    update?: notesUpdateWithWhereUniqueWithoutUsersInput | notesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: notesUpdateManyWithWhereWithoutUsersInput | notesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: notesScalarWhereInput | notesScalarWhereInput[]
  }

  export type notesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<notesCreateWithoutUsersInput, notesUncheckedCreateWithoutUsersInput> | notesCreateWithoutUsersInput[] | notesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: notesCreateOrConnectWithoutUsersInput | notesCreateOrConnectWithoutUsersInput[]
    upsert?: notesUpsertWithWhereUniqueWithoutUsersInput | notesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: notesCreateManyUsersInputEnvelope
    set?: notesWhereUniqueInput | notesWhereUniqueInput[]
    disconnect?: notesWhereUniqueInput | notesWhereUniqueInput[]
    delete?: notesWhereUniqueInput | notesWhereUniqueInput[]
    connect?: notesWhereUniqueInput | notesWhereUniqueInput[]
    update?: notesUpdateWithWhereUniqueWithoutUsersInput | notesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: notesUpdateManyWithWhereWithoutUsersInput | notesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: notesScalarWhereInput | notesScalarWhereInput[]
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

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type notesCreateWithoutColorsInput = {
    title?: string | null
    content?: string | null
    creation_date?: Date | string
    update_date?: Date | string
    on_board?: boolean
    position_x?: number | null
    position_y?: number | null
    z_index?: number | null
    users: usersCreateNestedOneWithoutNotesInput
  }

  export type notesUncheckedCreateWithoutColorsInput = {
    note_id?: number
    user_id: string
    title?: string | null
    content?: string | null
    creation_date?: Date | string
    update_date?: Date | string
    on_board?: boolean
    position_x?: number | null
    position_y?: number | null
    z_index?: number | null
  }

  export type notesCreateOrConnectWithoutColorsInput = {
    where: notesWhereUniqueInput
    create: XOR<notesCreateWithoutColorsInput, notesUncheckedCreateWithoutColorsInput>
  }

  export type notesCreateManyColorsInputEnvelope = {
    data: notesCreateManyColorsInput | notesCreateManyColorsInput[]
    skipDuplicates?: boolean
  }

  export type notesUpsertWithWhereUniqueWithoutColorsInput = {
    where: notesWhereUniqueInput
    update: XOR<notesUpdateWithoutColorsInput, notesUncheckedUpdateWithoutColorsInput>
    create: XOR<notesCreateWithoutColorsInput, notesUncheckedCreateWithoutColorsInput>
  }

  export type notesUpdateWithWhereUniqueWithoutColorsInput = {
    where: notesWhereUniqueInput
    data: XOR<notesUpdateWithoutColorsInput, notesUncheckedUpdateWithoutColorsInput>
  }

  export type notesUpdateManyWithWhereWithoutColorsInput = {
    where: notesScalarWhereInput
    data: XOR<notesUpdateManyMutationInput, notesUncheckedUpdateManyWithoutColorsInput>
  }

  export type notesScalarWhereInput = {
    AND?: notesScalarWhereInput | notesScalarWhereInput[]
    OR?: notesScalarWhereInput[]
    NOT?: notesScalarWhereInput | notesScalarWhereInput[]
    note_id?: IntFilter<"notes"> | number
    user_id?: UuidFilter<"notes"> | string
    title?: StringNullableFilter<"notes"> | string | null
    content?: StringNullableFilter<"notes"> | string | null
    creation_date?: DateTimeFilter<"notes"> | Date | string
    update_date?: DateTimeFilter<"notes"> | Date | string
    color_id?: IntFilter<"notes"> | number
    on_board?: BoolFilter<"notes"> | boolean
    position_x?: IntNullableFilter<"notes"> | number | null
    position_y?: IntNullableFilter<"notes"> | number | null
    z_index?: IntNullableFilter<"notes"> | number | null
  }

  export type colorsCreateWithoutNotesInput = {
    hex_code: string
    value: string
  }

  export type colorsUncheckedCreateWithoutNotesInput = {
    color_id?: number
    hex_code: string
    value: string
  }

  export type colorsCreateOrConnectWithoutNotesInput = {
    where: colorsWhereUniqueInput
    create: XOR<colorsCreateWithoutNotesInput, colorsUncheckedCreateWithoutNotesInput>
  }

  export type usersCreateWithoutNotesInput = {
    user_id: string
    username: string
    email: string
    password: string
    creation_date?: Date | string
  }

  export type usersUncheckedCreateWithoutNotesInput = {
    user_id: string
    username: string
    email: string
    password: string
    creation_date?: Date | string
  }

  export type usersCreateOrConnectWithoutNotesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutNotesInput, usersUncheckedCreateWithoutNotesInput>
  }

  export type colorsUpsertWithoutNotesInput = {
    update: XOR<colorsUpdateWithoutNotesInput, colorsUncheckedUpdateWithoutNotesInput>
    create: XOR<colorsCreateWithoutNotesInput, colorsUncheckedCreateWithoutNotesInput>
    where?: colorsWhereInput
  }

  export type colorsUpdateToOneWithWhereWithoutNotesInput = {
    where?: colorsWhereInput
    data: XOR<colorsUpdateWithoutNotesInput, colorsUncheckedUpdateWithoutNotesInput>
  }

  export type colorsUpdateWithoutNotesInput = {
    hex_code?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type colorsUncheckedUpdateWithoutNotesInput = {
    color_id?: IntFieldUpdateOperationsInput | number
    hex_code?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type usersUpsertWithoutNotesInput = {
    update: XOR<usersUpdateWithoutNotesInput, usersUncheckedUpdateWithoutNotesInput>
    create: XOR<usersCreateWithoutNotesInput, usersUncheckedCreateWithoutNotesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutNotesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutNotesInput, usersUncheckedUpdateWithoutNotesInput>
  }

  export type usersUpdateWithoutNotesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateWithoutNotesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notesCreateWithoutUsersInput = {
    title?: string | null
    content?: string | null
    creation_date?: Date | string
    update_date?: Date | string
    on_board?: boolean
    position_x?: number | null
    position_y?: number | null
    z_index?: number | null
    colors: colorsCreateNestedOneWithoutNotesInput
  }

  export type notesUncheckedCreateWithoutUsersInput = {
    note_id?: number
    title?: string | null
    content?: string | null
    creation_date?: Date | string
    update_date?: Date | string
    color_id: number
    on_board?: boolean
    position_x?: number | null
    position_y?: number | null
    z_index?: number | null
  }

  export type notesCreateOrConnectWithoutUsersInput = {
    where: notesWhereUniqueInput
    create: XOR<notesCreateWithoutUsersInput, notesUncheckedCreateWithoutUsersInput>
  }

  export type notesCreateManyUsersInputEnvelope = {
    data: notesCreateManyUsersInput | notesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type notesUpsertWithWhereUniqueWithoutUsersInput = {
    where: notesWhereUniqueInput
    update: XOR<notesUpdateWithoutUsersInput, notesUncheckedUpdateWithoutUsersInput>
    create: XOR<notesCreateWithoutUsersInput, notesUncheckedCreateWithoutUsersInput>
  }

  export type notesUpdateWithWhereUniqueWithoutUsersInput = {
    where: notesWhereUniqueInput
    data: XOR<notesUpdateWithoutUsersInput, notesUncheckedUpdateWithoutUsersInput>
  }

  export type notesUpdateManyWithWhereWithoutUsersInput = {
    where: notesScalarWhereInput
    data: XOR<notesUpdateManyMutationInput, notesUncheckedUpdateManyWithoutUsersInput>
  }

  export type notesCreateManyColorsInput = {
    note_id?: number
    user_id: string
    title?: string | null
    content?: string | null
    creation_date?: Date | string
    update_date?: Date | string
    on_board?: boolean
    position_x?: number | null
    position_y?: number | null
    z_index?: number | null
  }

  export type notesUpdateWithoutColorsInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
    on_board?: BoolFieldUpdateOperationsInput | boolean
    position_x?: NullableIntFieldUpdateOperationsInput | number | null
    position_y?: NullableIntFieldUpdateOperationsInput | number | null
    z_index?: NullableIntFieldUpdateOperationsInput | number | null
    users?: usersUpdateOneRequiredWithoutNotesNestedInput
  }

  export type notesUncheckedUpdateWithoutColorsInput = {
    note_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
    on_board?: BoolFieldUpdateOperationsInput | boolean
    position_x?: NullableIntFieldUpdateOperationsInput | number | null
    position_y?: NullableIntFieldUpdateOperationsInput | number | null
    z_index?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type notesUncheckedUpdateManyWithoutColorsInput = {
    note_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
    on_board?: BoolFieldUpdateOperationsInput | boolean
    position_x?: NullableIntFieldUpdateOperationsInput | number | null
    position_y?: NullableIntFieldUpdateOperationsInput | number | null
    z_index?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type notesCreateManyUsersInput = {
    note_id?: number
    title?: string | null
    content?: string | null
    creation_date?: Date | string
    update_date?: Date | string
    color_id: number
    on_board?: boolean
    position_x?: number | null
    position_y?: number | null
    z_index?: number | null
  }

  export type notesUpdateWithoutUsersInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
    on_board?: BoolFieldUpdateOperationsInput | boolean
    position_x?: NullableIntFieldUpdateOperationsInput | number | null
    position_y?: NullableIntFieldUpdateOperationsInput | number | null
    z_index?: NullableIntFieldUpdateOperationsInput | number | null
    colors?: colorsUpdateOneRequiredWithoutNotesNestedInput
  }

  export type notesUncheckedUpdateWithoutUsersInput = {
    note_id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
    color_id?: IntFieldUpdateOperationsInput | number
    on_board?: BoolFieldUpdateOperationsInput | boolean
    position_x?: NullableIntFieldUpdateOperationsInput | number | null
    position_y?: NullableIntFieldUpdateOperationsInput | number | null
    z_index?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type notesUncheckedUpdateManyWithoutUsersInput = {
    note_id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
    color_id?: IntFieldUpdateOperationsInput | number
    on_board?: BoolFieldUpdateOperationsInput | boolean
    position_x?: NullableIntFieldUpdateOperationsInput | number | null
    position_y?: NullableIntFieldUpdateOperationsInput | number | null
    z_index?: NullableIntFieldUpdateOperationsInput | number | null
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