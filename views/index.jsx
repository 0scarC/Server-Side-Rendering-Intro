const React = require(`react`)
const Default = require(`./layouts/Default`)

function Index({breads, title}) {
    return (
        <Default title={title}>
            <h2>Index Page</h2>
            {/*JSX Comment*/}
            {/*<p>I have {breads[0].name} bread!</p>*/}
            <ul>
                {
                    breads.map(function(bread, index) {
                        return (<li key={index}>
                            <a href={`/breads/${index}`}>
                                {bread.name}
                            </a>
                        </li>)
                    })
                }
            </ul>
        </Default>
    )
}

module.exports = Index