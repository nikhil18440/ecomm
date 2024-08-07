import axios from 'axios'
import ClientComp from './clientComponant'
import Navbar from '../../componants/navbar/Navbar'
import Footer from '../../componants/footer/Footer'


export default async function ServerComp(props) {

    const prodId = props.searchParams.id

    async function getData() {
        try {
          const res = await axios.get(`${process.env.API_ENDPOINT}/product/${prodId}`)
          return res.data
        } catch (error) {
          console.log(error)
        }
    }
    

    const data = await getData()
    var dataStr
    if(data){
      dataStr = JSON.stringify(data)
    }else{
      dataStr = null
    }

    


    

  return (
    
    <>
    <ClientComp data={dataStr}/>
    </>

  )
}
