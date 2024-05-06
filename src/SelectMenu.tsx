import {FC, useState} from 'react'
import {Lang, Scent} from "./data/types.ts";
import {ScentSelect} from "./ScentSelect.tsx";

export const ContainerCandles: FC<
    {
        language: Lang
    }> = (props) => {
    const [selected, setSelected] = useState<(Scent | undefined)[]>()
    const count = 6;

    const handleScentChange = (index: number) => (scent?: Scent) => {
        const newSelected: (Scent | undefined)[] = selected ? [...selected] : Array.from({length: count})
        newSelected[index] = scent
        setSelected(newSelected)
    }

    return (
        <menu>
            {Array.from({length: count}).map((_, index) => (
                <ScentSelect
                    key={index}
                    index={index}
                    language={props.language}
                    scent={selected?.[index]}
                    setScent={handleScentChange(index)}
                />
            ))}
        </menu>
    )
}