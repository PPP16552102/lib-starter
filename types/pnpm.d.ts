declare namespace Pnpm {
  type Catalog = Record<string, string>[]

  export interface WorkSpaceConfig { 
    packages?: string[]
    catalog?: Pnpm.Catalog
    catalogs?: Record<string, Pnpm.Catalog>
    catalogMode?: 'manual' | 'strict' | 'prefer'
  } 
}