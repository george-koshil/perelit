"use client"

import React, { FC, PropsWithChildren, ReactElement, createContext } from 'react';
import RootStore from './RootStore';

interface IProviderProps {
  store: RootStore;
  children: React.ReactNode
}

const StoreContext = createContext({});


export const StoreProvider: FC<IProviderProps> = (props: PropsWithChildren<IProviderProps>): ReactElement => {
  const { children, store } = props;
  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  );
};


export const useStore = (): RootStore => {
  return React.useContext(StoreContext) as RootStore;
};
