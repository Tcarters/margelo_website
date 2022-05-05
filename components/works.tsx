import React from "react";
import { TileBackground, TileContent, Tile, TileContent, TileWrapper } from './tile';

const Works = () => ( 
<TileWrapper numOfPages = {3}>
    <TileBackground></TileBackground>
    <TileContent>
        <Tile page={0} renderContent={( { progress}) => (
                <span> Foo { progress } </span>
            )}> 
        </Tile>
    </TileContent>
    <TileContent>Bar</TileContent>

 </TileWrapper>
 )

export default Works