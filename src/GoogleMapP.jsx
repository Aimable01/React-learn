import { APIProvider, Map } from "@vis.gl/react-google-maps";

const NewMap = () => {
  const KEY = "AIzaSyDU62aVm_meOcrEaDlJfp0AffuTa3sYKJE";
  return (
    <APIProvider apiKey={KEY}>
      <h1>This is the new map</h1>
      <Map
        style={{ width: "100vw", height: "100vh" }}
        defaultCenter={{ lat: 22.54992, lng: 0 }}
        defaultZoom={3}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      />
    </APIProvider>
  );
};
export default NewMap;
