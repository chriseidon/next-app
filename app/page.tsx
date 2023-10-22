"use client";



export default function Home() {

  return (
    <>
      <h1>Hello World</h1>
      <button onClick={async () => {
        const _ = (await import('lodash')).default
        const users = [
          { name: 'b' },
          { name: 'c' },
          { name: 'a'}
        ];

        const sorted = _.orderBy(users, ['name']);
        console.log(sorted);
        
      }}>show</button>
    </>
  )
}


