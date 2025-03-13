


const endpoint = {
  plants: "https://plants-info-db.vercel.app/plants",
  plantAttributes: "https://plants-info-db.vercel.app/plants/attributes",
  plantCompatibility: "https://plants-info-db.vercel.app/plants/compatibility",
};



  export const getPlants = async (setPlants) => {
    try {
      const response = await fetch(endpoint.plants);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      setPlants(json);
      //setLoading(false);
      //console.log(json);
    } catch (e) {
      console.log(e)
      //setError(e);
      //setLoading(false);
    }
  };

  export const getAttributes = async (setPlantAttributes) => {
    try {
      const response = await fetch(endpoint.plantAttributes);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      setPlantAttributes(json);
      //setLoading(false);
      console.log(json);
    } catch (e) {
      console.log(e)
      //setError(e);
      //setLoading(false);
    }
  };

  export const getCompatibility = async (setPlantCompatibility) => {
    try {
      const response = await fetch(endpoint.plantCompatibility);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      setPlantCompatibility(json);
      //setLoading(false);
      //console.log(json);
    } catch (e) {
      console.log(e);
     // setError(e);
     // setLoading(false);
    }
  };


