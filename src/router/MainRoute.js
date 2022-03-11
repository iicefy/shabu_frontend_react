import { memo } from "react";
import { Switch, Route } from "react-router-dom";
import router from 'router/router';

export default memo(function MainRoute() {
    return (
        <Switch>
            {
                router.map((route) => {
                    return (
                        <Route
                            key={route.name}
                            path={route.path}
                            exact
                        >
                            {route.component}
                        </Route>
                    )
                })
            }
        </Switch>
    )
})