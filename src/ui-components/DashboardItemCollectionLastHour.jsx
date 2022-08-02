/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  createDataStorePredicate,
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { SortDirection } from "@aws-amplify/datastore";
import { TeamUpdate } from "../models";
import DashboardItem from "./DashboardItem";
import { Collection } from "@aws-amplify/ui-react";
export default function DashboardItemCollectionLastHour(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsFilterObj = { field: "time", operand: "11:00", operator: "eq" };
  const itemsFilter = createDataStorePredicate(itemsFilterObj);
  const itemsPagination = { sort: (s) => s.rank(SortDirection.ASCENDING) };
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: TeamUpdate,
    criteria: itemsFilter,
    pagination: itemsPagination,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="list"
      direction="column"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "DashboardItemCollectionLastHour")}
    >
      {(item, index) => (
        <DashboardItem
          teamUpdate={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></DashboardItem>
      )}
    </Collection>
  );
}
