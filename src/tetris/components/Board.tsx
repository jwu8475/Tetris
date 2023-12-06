import { CurrentPiece } from './CurrentPiece.tsx'
import { BoardState } from './BoardState.tsx'

export const Board = () => {
    return (
        <CurrentPiece />
        <BoardState />
    )
}