import React from 'react'
import Nav from './Nav'

const Student = () => {
    return (
        <>
            <Nav />
            <div className='add__students'>
                <h1>Student Details</h1>
                <button className='student_add_button'>Add New Students</button>
            </div>
            <div className='table_data'>
                <table align="center" border="2" width="90%">
                    <tr height="60px">
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Batch</th>
                        <th>Change</th>
                    </tr>

                    <tr height="40px">
                        <td>Vijay</td>
                        <td>22</td>
                        <td>MERN</td>
                        <td>January</td>
                        <td><a href='/'>Edit</a></td>
                    </tr>
                    <tr height="40px">
                        <td>Vijay</td>
                        <td>22</td>
                        <td>MERN</td>
                        <td>January</td>
                        <td><a href='/'>Edit</a></td>
                    </tr>
                    <tr height="40px">
                        <td>Vijay</td>
                        <td>22</td>
                        <td>MERN</td>
                        <td>January</td>
                        <td><a href='/'>Edit</a></td>
                    </tr>
                    <tr height="40px">
                        <td>Vijay</td>
                        <td>22</td>
                        <td>MERN</td>
                        <td>January</td>
                        <td><a href='/'>Edit</a></td>
                    </tr>
                    <tr height="40px">
                        <td>Vijay</td>
                        <td>22</td>
                        <td>MERN</td>
                        <td>January</td>
                        <td><a href='/'>Edit</a></td>
                    </tr>
                    <tr height="40px">
                        <td>Vijay</td>
                        <td>22</td>
                        <td>MERN</td>
                        <td>January</td>
                        <td><a href='/'>Edit</a></td>
                    </tr>
                    <tr height="40px">
                        <td>Vijay</td>
                        <td>22</td>
                        <td>MERN</td>
                        <td>January</td>
                        <td><a href='/'>Edit</a></td>
                    </tr>
                    <tr height="40px">
                        <td>Vijay</td>
                        <td>22</td>
                        <td>MERN</td>
                        <td>January</td>
                        <td><a href='/'>Edit</a></td>
                    </tr>
                    <tr height="40px">
                        <td>Vijay</td>
                        <td>22</td>
                        <td>MERN</td>
                        <td>January</td>
                        <td><a href='/'>Edit</a></td>
                    </tr>
                    <tr height="40px">
                        <td>Vijay</td>
                        <td>22</td>
                        <td>MERN</td>
                        <td>January</td>
                        <td><a href='/'>Edit</a></td>
                    </tr>

                </table>
            </div>
        </>
    )
}

export default Student;
