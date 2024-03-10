import { FormEvent, useContext, useEffect, useState } from "react";
import "./Pages.scss";
import { FormDataTypes } from "../types/types";
import { useNavigate } from "react-router-dom";
import { CoursesContext } from "../context/CoursesContext";

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<FormDataTypes>({ name: '', lastname: '', email: '' });
    
    const context = useContext(CoursesContext);

    if (!context) return <div>Error: Courses context is not available</div>;
    
    const { updateUserData, currentUserData } = context;
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        navigate("/dashboard");
        updateUserData(formData)
        console.log(formData, "formData")
    }

    console.log("currentUserData", currentUserData)
    

    return (
        <div className="c-login">
            <form className="c-form" onSubmit={handleSubmit}>
                <div className="c-inputs">
                    <input
                        className="user-input"
                        type="text"
                        name="name"
                        placeholder="Enter your name..."
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    <input
                        className="user-input"
                        type="text"
                        name="lastname"
                        placeholder="Enter your surname..."
                        value={formData.lastname}
                        onChange={handleInputChange}
                    />
                    <input
                        className="user-input"
                        type="email"
                        name="email"
                        placeholder="Enter your email..."
                        value={formData.email}
                        onChange={handleInputChange}
                    />                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;