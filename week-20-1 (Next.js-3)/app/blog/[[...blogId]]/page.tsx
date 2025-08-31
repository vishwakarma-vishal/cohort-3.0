import axios from "axios";

export default async function Blog({ params }: {params : {
    blogId: string[]
}}) {
    const blogId = (await params).blogId;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${blogId}`);
    
    return (
        <div>
            <div>blog will appears here.</div>
            <p>Title - {response.data.title}</p>
            <p>Body - {response.data.body}</p>
            {JSON.stringify(blogId)}
        </div>
    );
}