# Event Calendar Fullstack App
The idea of the app is to display all the events added by users in the calendar. Logged-in users can add new and remove existing events from a control panel. Users can also change own profile information and password with the control panel.

This app has the frontend built with React + Redux and runs Node.js + Express in the backend. Data is stored into a MySQL-database.

### Features

All users:
  - [x] View events on the calendar
  - [x] View events on a list view
    - [x] Filter events
  - [x] View detailed page of a specific event
  - [x] Remember the last viewed calendar month
  - [x] Export an event as an .ics
  - [x] Subscribe the calendar with URL  

Users with account:
  - [x] Log in/out
  - [x] Add events
    - [x] Date and time pickers
  - [x] Update own events
  - [x] Remove own events
  - [x] Update profile
    - [x] Name, username, password
    - [x] Profile colors
      - [x] Color picker

Misc:
  - [x] Notifications when actions succeed/fail

