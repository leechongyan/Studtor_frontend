import React, { createContext, ReactChild, useContext } from 'react'

import Fuse from 'fuse.js'

interface SearchContextProps {
  searchData: Array<string>
  children: ReactChild
}

interface HookValues {
  searchFor: (searchedTerm: string) => Array<string>
}

const SearchContext = createContext<HookValues | undefined>(undefined)

export const useSearch = (): HookValues => {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error(`useSearch must be used within a SearchProvider`)
  }
  return context
}

// Given a  ground truths, this will perform string matching using the ground truth.
// This provides access for nested components to a single source of truth.
export const SearchProvider = ({
  children,
  searchData,
}: SearchContextProps): JSX.Element => {
  const searcher = new Fuse(searchData)
  return (
    <SearchContext.Provider
      value={{
        searchFor: (searchTerm) =>
          searcher.search(searchTerm).map(({ item }) => item),
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}
