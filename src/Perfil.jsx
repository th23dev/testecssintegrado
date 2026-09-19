import { useState } from "react"

function Perfil({ img, nome, newImg }) {
    if (!img) img = "https://st5.depositphotos.com/5183619/67992/v/450/depositphotos_679927214-stock-illustration-default-avatar-profile-placeholder-abstract.jpg"
    if (!newImg) newImg = img

    const [src, setSrc] = useState(img)


    return (
        <>
        <style>{`
        #foto_perfil {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            transition: 1s;
        }
        `}</style>
            <div>
                <img src={src} alt={nome} id="foto_perfil"
                    onMouseEnter={() => setSrc(newImg)}
                    onMouseOut={() => setSrc(img)
                    } />
                <h3>{nome}</h3>
            </div>
        </>
    )
}

export default Perfil