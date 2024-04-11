export default async function getID(id: any){
    const response = await fetch (`https://api.core.ac.uk/v3/works/${id}`)
    if(!response.ok){
        throw new Error('Failed to fetch article')
    }
    return response.json()
}