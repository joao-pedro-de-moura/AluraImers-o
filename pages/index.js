import config from "../config.json"
import styled from "styled-components"
import { CSSReset } from "../src/components/CSSReset"
import Menu from "../src/components/Menu"
import { StyledTimeline } from "../src/components/Timeline"

function HomePage() {
   
    return (    
<>     
       <CSSReset/>
       
    <div >

        <Menu/>
        <Header />
        <TimeLine playlist={config.playlist} />
    </div>
        </>
    )
}


const StyledHeader = styled.div`
    img{
            width: 80px;
            border-radius: 50%;
            height: 80px;
    }
    .user-info{
        margin-top: 50px;
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

                {/* <img src="config"/> */}
                <img src={`https://github.com/${config.github}.png`} />
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
function TimeLine(props) {
    console.log("dentro do componente", props.playlist)
    const playlistName = Object.keys(props.playlist)
    return (
        <StyledTimeline>{playlistName.map(function (playlistName) {
            const videos = props.playlist[playlistName]
            console.log(videos)
            return (
                <section>
                    <h2>
                        {playlistName}
                    </h2>
                    <div>
                        {  videos.map((video) => {
                    return (
                        <a href = {video.url}>
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