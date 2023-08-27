import { User } from "../types"

export default async function getUser() {
    
    const query = `{
                    me {
                        email
                        profile {
                            avatar
                        }
                        id
                        name
                        }
                     }`
    
    const user = await fetchGraphQL(query)
    
    if (!user) {
        return {}
  }
  
    const { me }:{me:User} = user.data
    return  me

}

async function fetchGraphQL(operationsDoc:string) {
  const result = await fetch('/graphql', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: operationsDoc,
    }),
  });

  return await result.json();
}