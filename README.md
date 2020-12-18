# Guarding against deactivation with eager URL update strategy

This is a reproduction of the issue outlined [here](https://github.com/angular/angular/issues/40194)

Guarding a route with canDeactivate and configuring the router to use eager URL update strategy causes the guard to not fire after the first time if it returns false and the user attempts to navigate to the same URL again.

Serve the app with `ng serve`. The steps to take to reproduce the issue are included in the app.
