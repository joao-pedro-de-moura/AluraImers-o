import config from "../config.json"
import styled from "styled-components"
import { CSSReset } from "../src/components/CSSReset"
import Menu from "../src/components/Menu"
import { StyledTimeline } from "../src/components/Timeline"
import { useState } from "react"


function HomePage() {
   const [valorDaBusca, setValorDaBusca] = useState("")
    return (    
<>     
       <CSSReset/>
       
    <div >

        <Menu valorDaBusca={valorDaBusca} setValorDaBusca={setValorDaBusca}/>
        <Banner/>
        <Header setValorDaBusca = {setValorDaBusca} />
        <TimeLine searchValue ={valorDaBusca} playlist={config.playlist} />
    </div>
        </>
    )
}

const BannerStyle = styled.div` 
.banner{
    width: 100%;
    height: 230px;
}
` 
function Banner(){
return(
    <BannerStyle>
        <img className ="banner" src={config.banner} />
    </BannerStyle>
    
)
}

const StyledHeader = styled.div`
    .img1{
            width: 80px;
            border-radius: 50%;
            height: 80px;
    }
    .user-info{
      
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px
    }
   

  `;
 
 
function Header() {
    return (
        <StyledHeader>   
            <section className="user-info">
              
                <img className ="img1" src={`https://github.com/${config.github}.png`} />
                
                <div>
                    <h2>
                        {config.nome}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                    </div>
               
            </section>

        </StyledHeader>
    )
}
function TimeLine({searchValue, ...props}) {
    console.log("dentro do componente", props.playlist)
    const playlistName = Object.keys(props.playlist)
    return (
        <StyledTimeline>{playlistName.map(function (playlistName) {
            const videos = props.playlist[playlistName]
            console.log(videos)
            return (
                <section key ={playlistName}>
                    <h2>
                        {playlistName}
                    </h2>
                    <div>
                        {  videos.filter((video)=> {
                            const titleNormalizer = video.title.toLowerCase()
                            const searchValueNormalizer = searchValue.toLowerCase()
                            return titleNormalizer.includes(searchValueNormalizer)
                            
                        }).map((video) => {
                    return (
                       
                        <a key = {video.url} href = {video.url}>
                            <img src={video.thumb} />
                            <span>
                                {video.title}
                            </span>
                            
                        </a>
                     
                     
                       
                    )
                    
                }
                )}
                    </div>
                </section>
              
            )
        })}</StyledTimeline>
    )
}

export default HomePage