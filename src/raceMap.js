import * as React from 'react';
import { Amplify } from "aws-amplify";
import { MapView } from "@aws-amplify/ui-react";
import { useState } from 'react';
import "@aws-amplify/ui-react/styles.css";
import { Marker, Popup } from 'react-map-gl';

Amplify.configure({
  Auth: {
    identityPoolId: "us-east-1:d5407eaa-1598-4c99-91ac-33467c455865",
    region: "us-east-1",
  },
  geo: {
    AmazonLocationService: {
      maps: {
        items: {
          "raceMap": {
            style: "Default style"
          },
        },
        default: "raceMap",
      },
      region: "us-east-1",
    },
  }
});


export default function BasicMap() {
  return <MapView 
  initialViewState={{
    latitude: -55.971181, 
    longitude: -67.274381,
    zoom: 14,
  }}
  >
  </MapView>;
}