import React, { useState ,PureComponent} from 'react';
import ReactMapGL , {Marker} from 'react-map-gl';
import PolylineOverlay from './ployline'
import { Icon } from 'semantic-ui-react';
const data = {
  "confirmedCases": [
          {
  "city": "Aarburg",
  "count": 1,
  "population": 6484,
  "lon": 7.901413000000002,
  "lat": 47.319634
          },
          {
  "city": "Arosa",
  "count": 1,
  "population": 2162,
  "lon": 9.676206,
  "lat": 46.777926
          },
          {
  "city": "Adliswil",
  "count": 1,
  "population": 16144,
  "lon": 8.528684,
  "lat": 47.311896
          },
          {
  "city": "Sankt Margrethen",
  "count": 1,
  "population": 4995,
  "lon": 9.629598,
  "lat": 47.442304
          }
      ],
  "highProbableCases": [
          {
  "city": "Aarburg",
  "count": 2,
  "population": 6484,
  "lon": 7.901413000000002,
  "lat": 47.319634
          },
          {
  "city": "Arosa",
  "count": 1,
  "population": 2162,
  "lon": 9.676206,
  "lat": 46.777926
          }
      ],
  "recoveredCases": [
          {
  "city": "Arosa",
  "count": 1,
  "population": 2162,
  "lon": 9.676206,
  "lat": 46.777926
          }
      ],
  "deceasedCases": [
          {
  "city": "Aarburg",
  "count": 3,
  "population": 6484,
  "lon": 7.901413000005,
  "lat": 47.319614
          },
          {
  "city": "Arosa",
  "count": 2,
  "population": 2162,
  "lon": 9.676206,
  "lat": 46.777926
          },
          {
  "city": "Adliswil",
  "count": 1,
  "population": 16144,
  "lon": 8.528684,
  "lat": 47.311896
          },
          {
  "city": "Sankt Margrethen",
  "count": 1,
  "population": 4995,
  "lon": 9.629598,
  "lat": 47.442304
          }
      ]
  }
export class Map extends React.Component {

  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 46.8181877,
      longitude: 8.2275124,
      zoom: 8
    }
  };

  render() {
    const {confirmedCases,highProbableCases,deceasedCases} = data
        const confirmedMarker = confirmedCases.map((item,i) => {
          return (<Marker latitude={item.lat} longitude={item.lon} offsetLeft={-20} offsetTop={-10}>
          <Icon name='circle' style={{color:'red'}}/> 
          <h5>{item.count}</h5>
            </Marker>)
        });
        const highProbableMarker = highProbableCases.map((item,i) => {
          return (<Marker latitude={item.lat} longitude={item.lon} offsetLeft={-20} offsetTop={-10}>
          <Icon name='circle' style={{color:'orange'}}/> 
          <h5>{item.count}</h5>
            </Marker>)
        });
        
        const deceasedMarker = deceasedCases.map((item,i) => {
          return (<Marker latitude={item.lat} longitude={item.lon} offsetLeft={-20} offsetTop={-10}>
          <Icon name='circle' style={{color:'blue'}}/> 
          <h5>{item.count}</h5>
            </Marker>)
        });
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken={'pk.eyJ1IjoibW9oYW1lZGl4IiwiYSI6ImNrOGFxeXcyYTA1MWgzbW11YjRkZGo3NG4ifQ.tOEwHyE2XAibeYsI2kBFNQ'}
        onViewportChange={(viewport) => this.setState({viewport})}
      >
        {confirmedMarker}
        {deceasedMarker}
        {highProbableMarker}
      </ReactMapGL>

    );
  }
}
/*
export function Map() {
  const [viewport, setViewport] = useState({
    width: 800,
    height: 500,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });
  const data =[
    {name:'America',longitude:'12.5',latitude:'-69.96666666'},
    {name:'Kabul',longitude:'33',latitude:'65'},
    {name:'America',longitude:'12.5',latitude:'-69.96666666'}
  ] 
  
  return (
     <ReactMapGL {...viewport}    
     mapboxApiAccessToken={'pk.eyJ1IjoibW9oYW1lZGl4IiwiYSI6ImNrOGFxeXcyYTA1MWgzbW11YjRkZGo3NG4ifQ.tOEwHyE2XAibeYsI2kBFNQ'}
     onViewportChange={setViewport}>
     <Marker latitude={37.78} longitude={-122.41} offsetLeft={-20} offsetTop={-10}>
     <Icon name='circle' style={{color:'red'}}/>
     </Marker>
     <Marker latitude={37.32} longitude={-123.69} offsetLeft={-20} offsetTop={-10}>
     hey<Icon name='circle'/>
     </Marker>
    />
    <PolylineOverlay  points={[
    [-21.81884765625, 64.1297836764257],
    [-19.79736328125, 64.1585310519412]]}/>

   </ReactMapGL>
  );
}*/