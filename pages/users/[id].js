import React from 'react';
import { useRouter } from 'next/router';

const UserDetail = ({ user }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{ textAlign: 'center', fontSize: '25px', marginTop: '10px'}}>Detail Pengguna</h1>
            <br></br>
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Nama:</strong> {user.name}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Telepon:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p><strong>Alamat:</strong> {user.address.street}, {user.address.city}</p>
            <p><strong>Perusahaan:</strong> {user.company.name}, {user.company.catchPhrase}</p>

            
        </div>
            <h1 style={{fontSize: '15px', marginTop: '50px'}}>2. Detail Pengguna </h1>
        </div>
        
    );
};

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    const paths = users.map((user) => ({
        params: { id: user.id.toString() },
    }));

    return {
        paths,
        fallback: true,
    };
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await res.json();

    return {
        props: {
            user,
        },
    };
}

export default UserDetail;
