async function fetchData() {
    try {
        const response = await fetch('https://apis.scrimba.com/jsonplaceholder/posts');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
try{
    const data = await fetchData();
    console.log(data);
} catch (error) {
    console.error('Error:', error);
}finally{
    console.log("Execution completed.");
}//get for getting data from the api and post for sending data to the api
// POST for posting or sending data to the api
// PUT for updating existing data on the api
// DELETE for deleting data from the api