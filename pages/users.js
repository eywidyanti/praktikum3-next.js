import React from 'react';
import Link from 'next/link';

const Users = ({ user }) => {
    return (
        <div>
            <h1 style={{ textAlign: 'center', fontSize: '25px'}}>Daftar Pengguna</h1>
            <br></br>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                <thead>
                <tr style={{ background: '#0070f3', color: '#fff' }}>
                    <th style={{ padding: '10px', border: '1px solid #ddd' }}>Nama</th>
                    <th style={{ padding: '10px', border: '1px solid #ddd' }}>Email</th>
                    <th style={{ padding: '10px', border: '1px solid #ddd' }}>Phone</th>
                    <th style={{ padding: '10px', border: '1px solid #ddd' }}>Address</th>
                    <th style={{ padding: '10px', border: '1px solid #ddd' }}>Detail</th>
                </tr>
                </thead>
                <tbody>
                    {user.map((post) => (
                        <tr key={post.id} style={{ textAlign: 'center', background: '#f9f9f9' }}>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>{post.name}</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>{post.email}</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>{post.phone}</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>{post.address.city}</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                            <Link href={`/users/${post.id}`} style={{ color: '#0070f3', textDecoration: 'none' }}>
                                Lihat Detail
                            </Link>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            <h1 style={{fontSize: '15px', marginTop: '50px'}}>1. Daftar Pengguna SSG</h1>
        </div>
    );
};

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const user = await res.json();
    
    return {
        props: {
            user,
        },
    };
    
}

export default Users;