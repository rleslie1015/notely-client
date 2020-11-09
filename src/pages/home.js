import React from 'react';
import { useQuery, gql } from '@apollo/client';

// allows us to render Markdown
import ReactMarkdown from 'react-markdown';

// create the query string
const GET_NOTES = gql`
    query NoteFeed($cursor: String){
        noteFeed(cursor: $cursor) {
            cursor
            hasNextPage
            notes {
                id
                createdAt
                content
                favoriteCount
                author {
                    username
                    id
                    avatar
                }
            }
        }
    }
`

const Home = () => {
    // pass query to useGraphql hook
    const { data, loading, error, fetchMore } = useQuery(GET_NOTES);

    if (loading) return <p>loading...</p>;

    if (error) return <p>Error!</p>;

    return ( 
        <div>
            {console.log(data)}
            {data.noteFeed.notes.map(note => (
                <article key={note.id}>
                    <img
                        src={note.author.avatar}
                        alt={`$note.author.usernam} avatar`}
                        height="50px"
                    />{' '}
                    {note.author.username} {note.createdAt} {note.favoriteCount}{' '}
                    <ReactMarkdown source={note.content} />
                </article>
            ))}
        </div>
     );
}
 
export default Home;