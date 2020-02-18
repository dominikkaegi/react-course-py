import React from "react";

import { Tabs, TabList, Tab, TabPanels, TabPanel } from "./Tabs";
import "../style.css";

export default function Page() {
  return (
    <div style={{ maxWidth: "300px" }}>
      <Tabs>
        <TabList>
          <Tab>Login</Tab>
          <Tab>Logout</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <h1>Login Panel</h1>
          </TabPanel>
          <TabPanel>
            <h1>Logout Panel</h1>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
