import AsyncStorage from '@react-native-async-storage/async-storage';

export const getData = async (key,assign,loading) => {
    loading(true);
    try {
        
      const jsonValue = await AsyncStorage.getItem(key);    
      (jsonValue)?  
      await assign(JSON.parse(jsonValue))
      :
      await assign([]);
     
     
    } catch(e) {
      alert(e);
    }
    finally{
        loading(false);
    }
  }

export const storeData = async (key,assign,loading,value,previous) => {
    loading(true);
    let mynew=[...previous,value];
   
    try {
      const jsonValue = JSON.stringify(mynew)
      await AsyncStorage.setItem(key,jsonValue)
      await getData(key,assign,loading);
    } catch (e) {
     alert(e);
    }
    finally{
        loading(false);
    }
  }



export const DeleteFromData = async (key,assign,loading,value,previous) => {
    loading(true);
    
    let filteredArray = previous.filter(item => item !== value)
   
   
    try {
      const jsonValue = JSON.stringify(filteredArray)
      await AsyncStorage.setItem(key,jsonValue)
      await getData(key,assign,loading);
    } catch (e) {
     alert(e);
    }
    finally{
        loading(false);
    }
  }


  
