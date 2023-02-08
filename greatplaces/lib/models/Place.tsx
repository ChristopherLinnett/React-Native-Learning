class Place {
  id: string;
  title: string;
  imageUri: string;
  address: string;
  location: Coordinate;
  constructor(
    title: string,
    imageUri: string,
    address: string,
    location: Coordinate,
  ) {
    this.id = new Date().toString() + Math.random().toString();
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location;
  }
}

class Coordinate {
  latitude: number;
  longitude: number;
  constructor(latitude: number, longitude: number) {
    this.latitude = latitude;
    this.longitude = longitude;
  }
}
export default Place;
