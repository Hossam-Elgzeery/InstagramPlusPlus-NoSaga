const datediff=(date)=>{
   
    const date1 = new Date(date);
   
    const date2 = new Date();
   
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 
   
    return (diffDays)? `${diffDays}d ` :'today'
}



export default datediff;