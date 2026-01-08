import { describe, it, expect } from 'vitest'

describe('test', () => { 
  it('hello test', () => { 
    expect(__DEV__).toEqual(true)
  })
})