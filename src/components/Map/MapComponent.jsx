import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';



class MapComponent extends Component {
    state = {};
    constructor(props) {
        super(props);
        this.googleMap = React.createRef();
    }
    render() {
        
        const location = this.props.location;
        return (
            <div>
                {location.lat || location.lon ? (
                    <Map
                        ref={this.googleMap}
                        google={this.props.google}
                        zoom={16}
                        centerAroundCurrentLocation={true}
                        initialCenter={{ lat: location.lat, lng: location.lon }}
                        center={{ lat: location.lat, lng: location.lon }}
                    >
                        <Marker
                            position={{ lat: location.lat, lng: location.lon }}
                        />
                    </Map>
                ) : (
                    <div></div>
                )}
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAMzECMqrdFbAIC352zg7s0BncIbTQXBVg',
})(MapComponent);
