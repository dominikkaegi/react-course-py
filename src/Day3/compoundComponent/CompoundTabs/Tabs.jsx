import React, { createContext, useState, useContext, Children } from "react";

const TabsContext = createContext();

export function Tabs({ children }) {
  return <div className="tabs">{children}</div>;
}

const TabContext = createContext();

export function TabList({ children }) {
  return <div className="tab-list">{children}</div>;
}

export function Tab({ children }) {
  return <div className="tab tab-active">{children}</div>;
}

export function TabPanels({ children }) {
  return <div className="tab-panels">{children}</div>;
}

export function TabPanel({ children }) {
  return children;
}

// Why we need React.Children.map()
// The React docs say children are an opaque data structure.
// Props children can be anything, a arrray, object, function et.c
