import { useState, useEffect } from 'react'
import Axios from 'axios'

export function Repositorios() {
    const [reposFromApi, setReposFromApi] = useState([])
    const baseURL = 'https://api.github.com/users/gracelima/repos'

    useEffect(() => {
        async function getData() {
            const response = await Axios.get(baseURL)
            setReposFromApi(response.data)

        }

        

        
        getData()
    }, [])

    console.log(reposFromApi)
    return (
        <div class="repos-list">
            {
                
                
                reposFromApi.map(item => {
                    return (
                        <div key={item.id} >
                            
                            <p onClick="{`baseUrl}"class='repos-name'>{item.name}</p>
                        </div>
                    )
                })

            }
        </div>
    )
}

