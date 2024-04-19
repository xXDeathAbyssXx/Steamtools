import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageParentData = EnsureDefined<LayoutData>;
type LayoutRouteId = RouteId | "/" | "/about" | "/comicas" | "/comicas/agua-para-el-bosque1" | "/comicas/deisy-la-ardilla-valiente1" | "/comicas/festival-de-las-charcas1" | "/comicas/festival-de-las-charcas2" | "/comicas/ita-la-latita1" | "/comicas/la-mariposa-samira1" | "/comicas/la-mariposa-samira2" | "/comicas/pipe-y-la-luna1" | "/comicas/pipe-y-la-luna2" | "/comicas/pipe-y-la-luna3" | "/comics" | "/comics/cangrejos-al-rescate" | "/comics/cangrejos-al-rescate1" | "/comics/el-arbol-barrigon" | "/comics/el-arbol-barrigon1" | "/comics/el-sueno-de-un-barco-llamado-miguel" | "/comics/el-sueno-de-un-barco-llamado-miguel1" | "/comics/el-sueno-de-un-barco-llamado-miguel2" | "/comics/el-sueno-de-un-barco-llamado-miguel3" | "/comics/la-laguna-encantada" | "/comics/la-laguna-encantada1" | "/comics/la-laguna-encantada2" | "/comics/la-mariposa-samira" | "/comics/la-mariposa-samira1" | "/comics/leo-el-tiburon-gato" | "/comics/leo-el-tiburon-gato1" | "/comics/leo-el-tiburon-gato2" | "/comics/leo-el-tiburon-gato3" | "/comics/leo-el-tiburon-gato4" | "/comics/yeyo-el-guarumo" | "/comics/yeyo-el-guarumo1" | "/comics/yeyo-el-guarumo2" | "/contactenos" | "/cuentacuentos" | "/mision-vision" | "/objetivos" | "/quienes-somos" | "/resultados" | null
type LayoutParams = RouteParams & {  }
type LayoutParentData = EnsureDefined<{}>;

export type PageServerData = null;
export type PageLoad<OutputData extends OutputDataShape<PageParentData> = OutputDataShape<PageParentData>> = Kit.Load<RouteParams, PageServerData, PageParentData, OutputData, RouteId>;
export type PageLoadEvent = Parameters<PageLoad>[0];
export type PageData = Expand<Omit<PageParentData, keyof PageParentData & EnsureDefined<PageServerData>> & OptionalUnion<EnsureDefined<PageParentData & EnsureDefined<PageServerData>>>>;
export type LayoutServerData = null;
export type LayoutData = Expand<LayoutParentData>;