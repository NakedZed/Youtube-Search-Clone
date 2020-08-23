import axios from 'axios';
//Generated key from YOUTUBE API ACCESS KEY
export const KEY = 'AIzaSyD5KBsxR3lFyl068mg-xGty0Mo9XlKfXeU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
});
