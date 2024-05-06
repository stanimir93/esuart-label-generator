import {FC, useState} from 'react'
import {Lang, Scent} from "./data/types.ts";
import {SelectMenu} from "./SelectMenu.tsx";

export const ContainerCandles: FC<{ language: Lang }> = (props) => {
    const [selected, setSelected] = useState<(Scent | undefined)[]>([])

    return (
        <div className={'flex gap-10'}>
            <SelectMenu count={6} language={props.language} selected={selected} setSelected={setSelected}/>
            <div className={'flex-1 flex justify-center items-center'}>

            <div className={'printable'}>
            </div>
            </div>
        </div>
    )
}