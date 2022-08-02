import {DashboardItemCollection, UserHeader, LandingFooter, DashboardHeader} from './ui-components';
import { withAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import "maplibre-gl/dist/maplibre-gl.css";
import BasicMap from './raceMap';

function Authentication(){
    return(
        <div>
            <UserHeader />
            <DashboardHeader />
            <DashboardItemCollection />
            <BasicMap />
            <LandingFooter />
        </div>
    );
}

export default withAuthenticator(Authentication);