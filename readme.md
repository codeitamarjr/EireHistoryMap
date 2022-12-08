# Éire Historical Map

This project is based on [React Native](https://reactnative.dev/docs/environment-setup) using React Navigation](https://reactnavigation.org/docs/drawer-navigator),[Vector Icons](https://github.com/oblador/react-native-vector-icons),[React Native Maps](https://github.com/react-native-maps/react-native-maps), to build an app that shows the historical maps of Ireland.

The markers are clickable and show the name of the marker, along with the location.
This dataset is from [Macmorris](https://macmorris.maynoothuniversity.ie/). MACMORRIS sets out to recover the vibrancy and complexity of Ireland’s transformative years between Henry VIII’s assumption of the kingship of Ireland in 1541 and the Treaty of Limerick in 1691. The project is a collaboration between the Department of History at Maynooth University and the Department of History at the University of Limerick.

## Student

Itamar Junior - 23952 at [Dorset College Dublin](https://www.dorsetcollege.ie/)

## Requirements

The objective of this project is to develop a mobile app to showcase map places of literary importance in Ireland and surrounding areas, related to poets, patrons, and publishers in Ireland who lived in the 16th and 17th centuries. The requirements are as follows and all requirements carry equal weightage:

### Display markers on the map

- [x] Load places and place types JSON data1
- [x] Display marker for all places using GPS coordinates
- [x] Use different colors, one for each place type
- [x] When the marker is tapped, the place name should be displayed on a pop-up info window

### Show extended information

- [x] When the pop-up info window is tapped, show in full screen all details of the place (id, name, Gaelic name, type, GPS coordinates)
- [x] Show the image of the place loaded from the internet2
- [x] [Bonus] Show relevant images using any free web service, or search engine
- [x] Show a back button, when pressed, go back to map view

### Allow filtering by Place Type

- [x] Show dropdown for selecting Place Type, default value should be all
- [x] When a specific Place Type is selected, show only the places with this Place Type on the map

### Allow custom marker

- [x] Long Press anywhere on the map to show a draggable marker
- [x] Show the distance3 to the nearest place (from the downloaded data), and on the drag marker, update this info
- [x] Draw a semi-transparent blue circle around this marker with a radius of 10 km and show the number of places within this radius
- [ ] [Bonus] Create a slider to control the above radius in km (1-1000, default 10) and on change, update the circle on the map and update the number of places within the radius info shown accordingly

## Special Thanks

Special thank you to Adrian Twarog for his help with Youtube videos:

- https://www.youtube.com/watch?v=gJX8plp4_sc That helped me to understand how to use React Navigation.
- https://www.youtube.com/watch?v=4qq0GQPkfjI&t=1010s That helped me to understand how to use React Native Maps.
