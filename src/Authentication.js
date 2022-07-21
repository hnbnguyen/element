import  {withAuthenticator} from "@aws-amplify/ui-react";
import {DashboardItemCollection, UserHeader, LandingFooter, DashboardHeader} from './ui-components';

function Authentication(){
    return(
        <div>
            <UserHeader />
            <DashboardHeader />
            <DashboardItemCollection />
            <LandingFooter />
        </div>
    );
}

export default withAuthenticator(Authentication);