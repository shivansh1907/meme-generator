import {useState,useEffect} from "react"
export  default function Main1(){


    const [meme,setmeme]=useState({

        imageurl:"http://i.imgflip.com/1bij.jpg",
        toptxt:"ONE DOES NOT SIMPLY",
        bottomtxt:" WALK INTO MORDOR"


    })

    const [allmemes,setallmemes]=useState([])

    
    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data => setallmemes(data.data.memes))

    },[])

    function handlechange(event){
        const {value,name}=event.currentTarget
        setmeme(prevmeme=>({
            ...prevmeme,
           [name]:value //This is dynamic property access. The name (which is a string) will be used as the key, and value will be assigned as the corresponding value in the updated state
        }))

    }


        function handleclick(){

            const randomnumber=Math.floor(Math.random()*allmemes.length)
            const newmemeurl= allmemes[randomnumber].url
            setmeme(prevmeme=>({
                ...prevmeme,
                imageurl:newmemeurl

            }));
        }


        //practice 
        // React .useEffect(()=>{
        //     fetch(ncnejcn);
        //     .then(result=>result.json())
        //     .then(data=>setstarwarsdata(data))
        // },[count])

        


    
    return(
        

        


        <>

        


        <main>

            <div className="form">
                <label htmlFor="toptxt"> Top Text
                    <input type="text" 
                     placeholder="one does not simply"
                     name="toptxt"
                     id="toptxt"
                     onChange={handlechange}/>
                </label>

                <label htmlFor="bottomtxt"> Bottom Text
                    <input type="text"
                    placeholder="walk into Mordor"
                    name="bottomtxt"
                    id="bottomtxt" 
                    onChange={handlechange}/>
                </label> 
                <button  onClick={handleclick} >Get a new meme image  </button>
            </div>

            <div className="meme">
                <img src={meme.imageurl} />
                <span className="top">{meme.toptxt}</span>
                <span className="bottom">{meme.bottomtxt}</span>
            </div>

        </main>
        </>
    )
}