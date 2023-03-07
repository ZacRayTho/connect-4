import Tile from "./Tile"

export default function Board() {

    const board = [];
    function populate() {
        for (let i = 0; i < 42; i++) {
            board.push(i);
        }
    }
    populate()

    return (
        <div className="row">

            {board.map((items,index) => 
                <Tile  />
            )}
            
        </div>
    )
}