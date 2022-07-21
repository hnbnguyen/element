/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { SortDirection } from "@aws-amplify/datastore";
import { TeamUpdate } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { Collection } from "@aws-amplify/ui-react";
export default function TeamUpdateCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsPagination = { sort: (s) => s.rank(SortDirection.ASCENDING) };
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: TeamUpdate,
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
      {...getOverrideProps(overrides, "TeamUpdateCollection")}
    >
      {(item, index) => (
        <TeamUpdate
          teamUpdate={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></TeamUpdate>
      )}
    </Collection>
  );
}
