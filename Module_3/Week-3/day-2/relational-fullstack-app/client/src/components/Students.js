import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Students() {
    const [students, setStudents] = useState(null);

    async function getStudents() {
        try {
            const res = await axios.get('http://localhost:8080/students');
            setStudents(res.data);
        } catch(e) {
            console.error(e, e.message);
        }
    }

    useEffect(() => {
        getStudents();
    }, [])

    const [form, setForm] = useState(null);

    function handleChange(e) {
        const { name, value } = e.target;
        setForm({...form, [name]: value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        createStudent();
    }

    async function createStudent() {
        try {
            const res = await axios.post('http://localhost:8080/students', form);
            setStudents([...students, res.data]);
        } catch(e) {
            console.error(e, e.message);
        }
    }
    const [selectedStudent, setSelectedStudent] = useState(null);

    function selectStudent(student) {
        setSelectedStudent(student);
    }

    function handleEditChange(e) {
        const { name, value } = e.target;
        setSelectedStudent({...selectedStudent, [name]: value});
    } 

    async function handleEditSubmit(e) {
        e.preventDefault();
        try {
            const res = await axios.patch('http://localhost:8080/students', selectedStudent);
        } catch (e) {
            console.error(e, e.message);
        }
    }

    async function deleteStudent(studentId) {
        try {
            const res = await axios.delete('http://localhost:8080/students/' + studentId);
            console.log(res.data);
            getStudents();
        } catch(e) {
            console.error(e, e.message);
        }
    }

    return(
        <div>
            <div>
                <h2>Enroll a new student below:</h2>
                <form className="enroll-student-form" onChange={(e) => handleChange(e) }>
                    <label>
                        First Name:
                        <input type="text" name="firstName" />
                    </label>
                    <label>
                        Last Name:
                        <input type="text" name="lastName" />
                    </label>
                    <label>
                        Age:
                        <input type="text" name="age" />
                    </label>
                    <label>
                        Grade:
                        <input type="text" name="grade" />
                    </label>
                    <label>
                        School Name:
                        <input type="text" name="schoolName" />
                    </label>

                    <input type="submit" value="Enroll student" className="button success" />

                </form>
            </div>
        </div>
    )
}