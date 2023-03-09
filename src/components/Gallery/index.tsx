import { useState } from "react"
import { Button } from "../Button"
import { movies } from "./data"
export function Gallery() {

    const [index, setIndex] = useState(0)

    let movie = movies[index]

    function pFrente() {
        if (index < movies.length - 1) {
            setIndex(index + 1)
        }
        else if (index == movies.length - 1) {
            setIndex(0)
        }

    }
    function pTraz() {
        if (index > 0) {
            setIndex(index - 1)
        }
        else if (index == 0) {
            setIndex(movies.length - 1)
        }
    }
    return (
        <>
            <section className="gallery">
                <img src={movie.images.poster} />
            </section>

            <Button onClick={pFrente} text="Próximo" type="primary" />
            <Button onClick={pTraz} text="Anterior" type="default" />
        </>
    )
}