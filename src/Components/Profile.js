import React from 'react';
import axios from 'axios';
import {API_URL} from '../config/config.js';



const Profile = async () => {
    try {
        const data  = await axios.get(`${API_URL}/api/employees/myprofile`);
      return data;
    } catch (error) {
        console.error(error);
    }
    
}

export default Profile;