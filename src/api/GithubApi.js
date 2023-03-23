import { main } from "./Api";

export const GithubApi = {
    
    getPages: async (subject) => { 
        try {
            const response = await main.get(`repositories?q=${subject}`);
            return response.data
        }
        catch (error) {
            console.error(error);
            throw new Error('Error fetching repositories');
            
        }
    },
    getPagesFromNumber: async (subject, page = 1, perPage = 6) => { 
        try {
            console.log(subject, page, perPage);
            const response = await main.get(`repositories?q=${subject}&page=${page}&per_page=${perPage}`);
            return response.data
        }
        catch (error) {
            console.error(error);
            throw new Error('Error fetching repositories');
        }
    }
    
   
}