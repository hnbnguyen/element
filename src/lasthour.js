import {DashboardItemCollection, UserHeader, LandingFooter, DashboardHeader, DashboardItemCollectionLastHour, DashboardHeaderLastHour} from './ui-components';
import { withAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import "maplibre-gl/dist/maplibre-gl.css";
import BasicMap from './raceMap';

function Lasthour(){
    return(
        <div>
            <UserHeader />
            <DashboardHeaderLastHour />
            <DashboardItemCollectionLastHour />
            <BasicMap />
            <LandingFooter />
        </div>
    );
}

export default withAuthenticator(Lasthour);