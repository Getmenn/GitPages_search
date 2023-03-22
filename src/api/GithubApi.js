import { main } from "./Api";

export const GithubApi = {
    
    getPages: async (subject) => { 
        try {
            const response = await main.get(`repositories?q=${subject}`);
            return response.data
        }
        catch (error){            
            alert('Error');
            //return null
        }
    }
   
}