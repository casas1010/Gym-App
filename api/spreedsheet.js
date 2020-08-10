import axios from 'axios';

// export default axios.create({
//   baseURL: 'https://spreadsheets.google.com/feeds/cells/1kJiM6a-an4HvjnKFYnBXg-KpkCw_tUW36dGOEM59qhQ/1/public/values?alt=json',
// });


export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer l2cmhf2ezRl6ZkcHWNYKoDpiaro1zlqUjwkA7nVxnWzryiTwFDk35PJiucoLhjjFY9ECD8GTBGaHBg5yv5YDLiszKQx8EMvm30ply0UWoHQOnYFjLozpYnZOx-UsXXYx'
  }
});
