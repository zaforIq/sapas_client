'use client'

import { useState } from "react";
import { useForm } from "react-hook-form";

const Questions = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const [showMessage, setShowMessage] = useState("");

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("question", data.questionFile[0]);
        formData.append("title", data.title);
    

        fetch("http://localhost:3001/api/community/question", {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.message) {
                    setShowMessage(data.message);
                } else {
                    setShowMessage("Failed to upload question.");
                }
            })
            .catch((error) => {
                console.error(error);
                setShowMessage("An error occurred while uploading the question.");
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>{showMessage}</h2>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input {...register("title", { required: true })} type="text" />
                    {errors.title && <p>Title is required</p>}
                </div>
                <div>
                    <label htmlFor="questionFile">Question File:</label>
                    <input {...register("questionFile", { required: true })} type="file" />
                    {errors.questionFile && <p>Question file is required</p>}
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Questions;