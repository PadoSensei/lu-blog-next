//@ts-nocheck
import config from '../config';

const fetchMessage = async () => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}` 
    }
  }
  const request = await fetch(`${config.api}/api/message/`, reqOptions)
  const response = await request.json();
  

  console.log(response.data.attributes.message)

  return response
}

const Home = async () => {
  const message = await fetchMessage();
  console.log('data',message.data.attributes.message)
  return (
    <div>{message.data.attributes.message}</div>
  )
}

export default Home;