import storage from "./config";
import { ref, getDownloadURL, listAll } from "firebase/storage";

export async function getUrls(folder) {
  try {
    // Create a child reference to the folder we want to access
    const pathReference = ref(storage, folder);

    // Items are references to the element in firebase
    const { items } = await listAll(pathReference);

    // Create an array with the requests of all urls
    const urlRequestsArray = items.map((itemReference) =>
      getDownloadURL(itemReference)
    );

    // Launch all requests concurrently using Promise.all to increase performance
    const urlArray = await Promise.all(urlRequestsArray);

    console.log(urlArray);
  } catch (error) {
    console.log("There was an error while loading the images.");
  }
}
