import React from 'react'
import "./verse.css"
import _, { map } from 'underscore';
const Verse = ({ verses, selectedVerse }) => {
    const items = _.sortBy(verses.edges, function (obj) { return +obj.node.verse })

    return (
        <>
            {
                items.map((node, i) =>
                    <p key={i} className={ ((selectedVerse - 1 ) === i ) ? "border border border-primary selected_verse" : ""} id = { 'verse-' + i }>
                        <span>{node.node.verse}.</span>
                        {node.node.text}
                    </p>
                )
            }
        </>
    )

}

export default Verse