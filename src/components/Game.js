import React from 'react'

//elements
import Navigation from './elements/Navigation'
import GameInfoBar from './elements/GameInfoBar'
import GameCarousel from './elements/GameCarousel'
import GameScreenShots from './elements/GameScreenShots'
import Spinner from './elements/Spinner'

//hook
import { useGameFetch } from './hooks/useGameFetch'

const Game = ({ gameSlug }) => {

    const [game, clip, preview, background, screenshots, loading, error] = useGameFetch(gameSlug)
    const $video = document.querySelector('.video')

    if (error) return <div>Something went wrong ...</div>
    if (loading) return <Spinner />

    return (
        <>
            <Navigation name={game.name} />
            <GameCarousel video={clip} preview={preview} background={background} screenshots={screenshots} gameSlug={gameSlug} />
            <GameInfoBar rating={game.rating} released={game.released} />
        </>
    )

}

export default Game