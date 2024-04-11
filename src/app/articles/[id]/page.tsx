export default async function getPostByID({params}: {params: {id:string}}){
  const response = await fetch(`https://api.core.ac.uk/v3/works/${params.id}`,{
  method:"GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ZRx4NKmhEzXuYGQ0ya9O3LV8CSjgTJD1`,
    "Accept": "application/json"
  }
  });
  const res = await response.json();
  return(
  <h2>{JSON.stringify(res.fullText)}</h2>
  )
}
