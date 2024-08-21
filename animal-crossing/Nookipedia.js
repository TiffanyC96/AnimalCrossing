import axios from "axios";
import { format } from 'date-fns';

const BASE_URL = 'https://api.nookipedia.com';
const API_KEY = '0a48efb6-cbe0-4dc8-b6d4-f8cef6dfe48b';

const NookipediaService = axios.create({
    baseURL: BASE_URL,
    headers: {
        'X-API-Key': API_KEY,
        'Accept-Version': '1.0.0',
    }
});

export const getVillagers = async () => {
    try {
        const response = await NookipediaService.get('/villagers');
        return response.data;
    } catch (error) {
        console.error('Error fetching Villagers: ', error);
        throw error;
    }
}


export const getFish = async () => {
    try {
        const response = await NookipediaService.get('/nh/fish');
        return response.data;
    } catch (error) {
        console.error('Error fetching Fish: ', error);
        throw error;
    }
}

export const getOneFish = async (fish) => {
    try {
        const response = await NookipediaService.get(`/nh/fish/${fish}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching ${fish}`, error);
        throw error;
    }
}

export const getBugs = async () => {
    try {
        const response = await NookipediaService.get('/nh/bugs');
        return response.data;
    } catch (error) {
        console.error('Error fetching fish: ', error);
        throw error;
    }
}

export const getOneBug = async (bug) => {
    try {
        const response = await NookipediaService.get(`/nh/bugs/${bug}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching ${bug}`, error);
        throw error;
    }
}

export const getSeaCreatures = async () => {
    try {
        const response = await NookipediaService.get('/nh/sea');
        return response.data;
    } catch (error) {
        console.error(`Error fetching Sea Creatures: `, error);
        throw error;
    }
}

export const getOneSeaCreature = async (sea) => {
    try {
        const response = await NookipediaService.get(`/nh/sea/${sea}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching ${sea}`, error);
        throw error;
    }
}

export const getCurrentMonthEvents = async () => {
    try {
        const now = new Date();
        const currentYear = format(now, 'yyyy');
        const currentMonth = format(now, 'MMMM');

        const response = await NookipediaService.get('/nh/events', {
            params: {
                year: currentYear,
                month: currentMonth,
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Error fetching events in ${currentMonth}`, error);
        throw error;
    }
}

export const getAllArt = async () => {
    try {
        const response = await NookipediaService.get('/nh/art');
        return response.data;
    } catch (error) {
        console.error('Error fetching all Art:', error);
        throw error;
    }
}

export const getOneArt = async (art) => {
    try {
        const response = await NookipediaService.get(`/nh/art/${art}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching ${art}`, error);
        throw error;
    }
}

export const getAllFurniture = async () => {
    try {
        const response = await NookipediaService.get('/nh/furniture');
        return response.data;
    } catch (error) {
        console.error('Error fetching Furniture: ', error);
        throw error;
    }
}

export const getOneFurniture = async(furniture)=>{
    try{
        const response = await NookipediaService.get(`/nh/furniture/${furniture}`);
        return response.data;
    } catch (error){
        console.error(`Error fetching ${furniture}`, error);
        throw error;
    }
}

export const getClothing = async()=>{
    try{
        const response = await NookipediaService.get('/nh/clothing');
        return response.data;
    } catch (error){
        console.error('Error fetching Clothing: ', error);
        throw error;
    }
}

export const getOneClothing = async(clothes)=>{
    try{
        const response = await NookipediaService.get(`/nh/clothing/${clothes}`);
        return response.data;
    }catch (error){
        console.error(`Error fetching ${clothes}`, error);
        throw error;
    }
}

export const getInterior = async()=>{
    try{
        const response = await NookipediaService.get('/nh/interior');
        return response.data;
    } catch(error){
        console.error('Error fetching Interior Items: ', error);
        throw error;
    }
}

export const getOneInterior = async(interior)=>{
    try{
        const response = await NookipediaService.get(`/nh/interior/${interior}`);
        return response.data;
    } catch (error){
        console.error(`Error fetching ${interior}`, error);
        throw error;
    }
}

export const getAllDIYs = async()=>{
    try{
        const response = await NookipediaService.get('/nh/recipes');
        return response.data;
    } catch (error){
        console.error('Error fetching DIYs', error);
        throw error;
    }
}

export const getOneDIY = async(diy)=>{
    try{
        const response = await NookipediaService.get(`/nh/recipes/${diy}`);
        return response.data;
    } catch (error){
        console.error(`Error fetching ${diy}`, error);
        throw error;
    }
}

export const getFossils = async()=>{
    try{
        const response = await NookipediaService.get('/nh/fossils/individuals');
        return response.data;
    } catch (error){
        console.error('Error fetching Fossils: ', error);
        throw error
    }
}

export const getOneFossil = async(fossil)=>{
    try{
        const response = await NookipediaService.get(`/nh/fossils/individuals/${fossil}`);
        return response.data;
    } catch (error){
        console.error(`Error fetching ${fossil}`, error);
        throw error;
    }
}

export const getGyroids = async()=>{
    try{
        const response = await NookipediaService.get('/nh/gyroids');
        return response.data;
    } catch (error){
        console.error('Error fetching gyroids: ', error);
        throw error;
    }
}

export const getOneGyroid = async(gyroid)=>{
    try{
        const response = await NookipediaService.get(`/nh/gyroids/${gyroid}`);
        return response.data;
    } catch (error){
        console.error(`Error fetching ${gyroid}`, error);
        throw error;
    }
}

export const getCurrentCritters = async (hemisphere = 'north') => {
    try {
      const currentMonth = new Date().getMonth() + 1; // Get current month (0-based index, so add 1)
      const currentHour = new Date().getHours(); // Get the current hour in 24-hour format
  
      const endpoints = ['/nh/bugs', '/nh/fish', '/nh/sea'];
  
      // Fetch data for bugs, fish, and sea creatures in parallel
      const [bugResponse, fishResponse, seaResponse] = await Promise.all(
        endpoints.map(endpoint =>
          NookipediaService.get(endpoint, {
            params: {
              month: currentMonth, // Use the actual month instead of 'current'
            },
          })
        )
      );
  
      // Extract critters based on hemisphere
      const extractCritters = (response) => {
        const data = response?.data;
        if (!data || !data[hemisphere]) return [];
        return data[hemisphere];
      };
  
      const bugs = extractCritters(bugResponse);
      const fish = extractCritters(fishResponse);
      const seaCreatures = extractCritters(seaResponse);
  
      // Combine all critters into one array
      const allCritters = [...bugs, ...fish, ...seaCreatures];
  
      // Filter critters based on current time
      const catchableCritters = allCritters.filter(critter => {
        const time = critter?.time;
        console.log("Time: ", time)
        if (!time) {
          return false;
        }
  
        if (time === 'All day') {
          return true;
        }
  
        // Handle time range conversion and checking
        const [startTime, endTime] = time?.split(' – ').map(t => convertTo24Hour(t));
        const startHour = parseInt(startTime?.split(':')[0], 10);
        const endHour = parseInt(endTime?.split(':')[0], 10);
  
        if (startHour <= endHour) {
          // If the time range doesn't cross midnight
          return currentHour >= startHour && currentHour < endHour;
        } else {
          // If the time range crosses midnight (e.g., "8 PM – 4 AM")
          return currentHour >= startHour || currentHour < endHour;
        }
      });
  
      console.log("Catchable Critters:", catchableCritters); // Debugging
  
      return catchableCritters;
    } catch (error) {
      console.error('Error fetching current critters:', error);
      throw error;
    }
  };
  
  // Utility function to convert 12-hour time to 24-hour format
  function convertTo24Hour(time) {
    let [hour, modifier] = time.split(' ');
    let [hours, minutes] = hour.split(':').map(Number);
  
    if (modifier === 'PM' && hours !== 12) {
      hours += 12;
    } else if (modifier === 'AM' && hours === 12) {
      hours = 0;
    }
  
    return `${hours.toString().padStart(2, '0')}:${minutes || '00'}`;
  }
  
  
  
