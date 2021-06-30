
 //const reddit_top_of_sub_data = function reddit_top_of_sub_data(sub, limet, time_filter){
  


 module.exports = {reddit_top_of_sub_data: (sub, limet, time_filter) => {
  const axios = require('axios');
  return new Promise(function(resolve, reject){
    axios.get('https://www.reddit.com/r/'+ sub + '/.json?limit=' + limet + '&time_filter=' + time_filter)
    .then(response => {
      console.log(response.data)
      var result = response.data;
      resolve(result.data.children);

    })
      .catch(error => {
        this.setState({});
        console.log(error);
        reject(error)
    });

  })



  
}}

//reddit_top_of_sub_data('ProRevenge', 10, "day")

