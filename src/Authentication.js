import {DashboardItemCollection, UserHeader, LandingFooter, DashboardHeader, Visualizer, TableHeader} from './ui-components';
import { withAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import "maplibre-gl/dist/maplibre-gl.css";
import BasicMap from './raceMap';

function Authentication(){
    return(
        <div>
            <UserHeader />
            <DashboardHeader />
            <Visualizer />
            <TableHeader />
            <DashboardItemCollection />
            <BasicMap />
            <LandingFooter />
        </div>
    );
}

export default withAuthenticator(Authentication);